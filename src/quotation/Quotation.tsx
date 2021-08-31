import { Formik, Form } from "formik";
import { Flex, Box, TextField, Text } from "../ui";
import { Button, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { fetchAPI } from "src/utils/fetchAPI";
import { useGetQuotation, Quotation as QuotationType } from "../api";
import { SelectKeyLetter, SelectCoeff, SelectIncrease } from "./SelectFields";
import { v4 as uuidv4 } from "uuid";

export function Quotation() {
  const { data: quotations = [], mutate } = useGetQuotation();

  const addCareNomenclature = async (values: any, { resetForm }) => {
    const _id = uuidv4();
    const careToAdd = { _id, increase: {}, ...values };
    mutate((as) => [careToAdd, ...as], false);
    await fetchAPI("/infi/add/quotation", {
      method: "POST",
      body: JSON.stringify(careToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeCareNomenclature = async (a: QuotationType) => {
    mutate(quotations?.filter((act) => act._id !== a._id));
    await fetchAPI("/infi/remove/quotation", {
      method: "POST",
      body: JSON.stringify({ _id: a._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <FormActs initialValues={{}} onSubmit={addCareNomenclature} />
      <Divider />
      <ListActs quotations={quotations} onDelete={removeCareNomenclature} />
    </Flex>
  );
}

function FormActs({ initialValues, onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Flex flexDirection="column">
          <TextField label="Nom du soin" name="name" width="400px" />
          <Flex
            flex={1}
            justifyContent="space-between"
            mt={3}
            mb={3}
            alignItems="flex-end"
          >
            <SelectKeyLetter name="keyLetter" />
            <SelectCoeff name="coefficient" />
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

function ListActs({ quotations, onDelete }) {
  return (
    <Flex flexDirection="column" mt={2}>
      {quotations?.map((quotation) => (
        <Flex
          key={quotation._id}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>{quotation.name}</Text>
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
                {quotation.keyLetter?.label} {quotation.coefficient?.value}
              </Flex>
            </div>
          </Flex>

          <IconButton aria-label="delete" onClick={() => onDelete(quotation)}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
