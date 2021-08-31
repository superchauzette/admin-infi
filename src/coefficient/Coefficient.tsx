import { Formik, Form } from "formik";
import { Flex, Box, TextField, Text } from "../ui";
import { Button, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { fetchAPI } from "src/utils/fetchAPI";
import { Coefficient as CoefficientType, useGetCoefficients } from "../api";

export function Coefficient() {
  const { data: coefficients = [], mutate } = useGetCoefficients();

  const addCoefficient = async (values: CoefficientType, { resetForm }) => {
    const careToAdd = {
      _id: String(values.value),
      value: Number(values.value),
    };
    mutate((as) => [careToAdd, ...as], false);
    await fetchAPI("/infi/add/coefficient", {
      method: "POST",
      body: JSON.stringify(careToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeCoefficient = async (a: CoefficientType) => {
    mutate(coefficients?.filter((act) => act._id !== a._id));
    await fetchAPI("/infi/remove/coefficient", {
      method: "POST",
      body: JSON.stringify({ _id: a._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <FormKeyLetter initialValues={{}} onSubmit={addCoefficient} />
      <Divider />
      <ListCoefficient
        coefficients={coefficients?.sort(
          (a, b) => Number(a.value) - Number(b.value)
        )}
        onDelete={removeCoefficient}
      />
    </Flex>
  );
}

function FormKeyLetter({ initialValues, onSubmit }) {
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
            <TextField name="value" placeholder="valeur du coefficient" />
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

function ListCoefficient({ coefficients, onDelete }) {
  return (
    <Flex flexDirection="column" mt={2}>
      {coefficients?.map((coefficient) => (
        <Flex
          key={coefficient._id}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>{coefficient.value}</Text>
          </Flex>
          <IconButton aria-label="delete" onClick={() => onDelete(coefficient)}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
