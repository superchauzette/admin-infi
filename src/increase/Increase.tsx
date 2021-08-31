import { Formik, Form } from "formik";
import { Flex, Box, TextField, Text } from "../ui";
import { Button, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { fetchAPI } from "src/utils/fetchAPI";
import { useGetIncreases, Increase as IncreaseType } from "../api";

export function Increase() {
  const { data: increases = [], mutate } = useGetIncreases();

  const addIncrease = async (values: IncreaseType, { resetForm }) => {
    const careToAdd = { _id: values.label, ...values };
    mutate((as) => [careToAdd, ...as], false);
    await fetchAPI("/infi/add/increase", {
      method: "POST",
      body: JSON.stringify(careToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeIncrease = async (a: any) => {
    mutate(increases?.filter((act) => act._id !== a._id));
    await fetchAPI("/infi/remove/increase", {
      method: "POST",
      body: JSON.stringify({ _id: a._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <FormIncrease initialValues={{}} onSubmit={addIncrease} />
      <Divider />
      <ListIncrease
        increases={increases?.sort((a, b) => a?.label?.localeCompare(b.label))}
        onDelete={removeIncrease}
      />
    </Flex>
  );
}

function FormIncrease({ initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Flex flexDirection="column">
          <Flex
            flex={1}
            justifyContent="space-between"
            mt={3}
            mb={3}
            alignItems="flex-end"
          >
            <TextField name="label" placeholder="label" />
            <TextField
              name="unitPrice"
              type="number"
              placeholder="prix unitaire"
            />
            <TextField
              name="unitPriceDom"
              type="number"
              placeholder="prix Dom Tom"
            />
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

function ListIncrease({ increases, onDelete }) {
  return (
    <Flex flexDirection="column" mt={2}>
      {increases?.map((increase) => (
        <Flex
          key={increase._id}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>{increase.label}</Text>
            <Flex>
              <Flex
                sx={{ borderRadius: 10, backgroundColor: "#2c7ae0" }}
                px={2}
                ml={2}
                alignItems="center"
                py="2px"
                color="white"
                fontWeight="bold"
              >
                {increase.unitPrice}€
              </Flex>

              <Flex
                sx={{ borderRadius: 10, backgroundColor: "#e08c2c" }}
                px={2}
                ml={2}
                alignItems="center"
                py="2px"
                color="white"
                fontWeight="bold"
              >
                (DOM) {increase.unitPriceDom}€
              </Flex>
            </Flex>
          </Flex>

          <IconButton aria-label="delete" onClick={() => onDelete(increase)}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
