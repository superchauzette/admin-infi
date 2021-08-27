import { Formik, Form } from "formik";
import { Flex, Box, TextField, Text } from "../ui";
import { Button, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { fetchAPI } from "src/utils/fetchAPI";
import { useGetActs, Act } from "../api";
import { SelectKeyLetter, SelectCoeff, SelectIncrease } from "./SelectFields";
import { generateId } from "../utils/generateId";

export function Acts() {
  const { data: acts = [], mutate } = useGetActs();

  const addCareNomenclature = async (values: any) => {
    const careToAdd = {
      _id: generateId({ ids: acts?.map((a) => a._id) }),
      coeff: values.coeff?.value,
      increase: values.increase?.value,
      keyLetter: values.keyLetter?.value,
      title: values.title,
    };
    mutate((as) => [careToAdd, ...as], false);
    await fetchAPI("/infi/add/carenomenclature", {
      method: "POST",
      body: JSON.stringify(careToAdd),
    });
    await mutate();
  };

  const removeCareNomenclature = async (a: Act) => {
    mutate(acts?.filter((act) => act._id !== a._id));
    await fetchAPI("/infi/remove/carenomenclature", {
      method: "POST",
      body: JSON.stringify({ _id: a._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <FormActs
        initialValues={{ title: "", keyLetter: "", coeff: "" }}
        onSubmit={addCareNomenclature}
      />
      <Divider />
      <ListActs acts={acts} onDelete={removeCareNomenclature} />
    </Flex>
  );
}

function FormActs({ initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Flex flexDirection="column">
          <TextField label="Nom du soin" name="title" width="400px" />
          <Flex
            flex={1}
            justifyContent="space-between"
            mt={3}
            mb={3}
            alignItems="flex-end"
          >
            <SelectKeyLetter name="keyLetter" />
            <SelectCoeff name="coeff" />
            <SelectIncrease name="increase" />
            <Box>
              <Button variant="contained" color="primary" type="submit">
                ajouter
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Form>
    </Formik>
  );
}

function ListActs({ acts, onDelete }) {
  return (
    <Flex flexDirection="column" mt={2}>
      {acts?.map((act) => (
        <Flex
          key={act.title}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>{act.title}</Text>
            <div>
              <Flex
                sx={{ borderRadius: 10, backgroundColor: "#2c7ae0" }}
                px={2}
                ml={2}
                alignItems="center"
                py="2px"
                color="white"
                fontWeight="bold"
              >
                {act.keyLetter} {act.coeff}
              </Flex>
            </div>
          </Flex>

          <IconButton aria-label="delete" onClick={() => onDelete(act)}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
