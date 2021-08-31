import { Formik, Form } from "formik";
import { Flex, Box, TextField, Text } from "../ui";
import { Button, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { fetchAPI } from "src/utils/fetchAPI";
import { useGetKeyLetters } from "../api";

export function KeyLetter() {
  const { data: keyLetters = [], mutate } = useGetKeyLetters();

  const addKeyLetter = async (values: any, { resetForm }) => {
    const careToAdd = { _id: values.label, ...values };
    mutate((as) => [careToAdd, ...as], false);
    await fetchAPI("/infi/add/key-letter", {
      method: "POST",
      body: JSON.stringify(careToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeKeyLetter = async (a: any) => {
    mutate(keyLetters?.filter((act) => act._id !== a._id));
    await fetchAPI("/infi/remove/key-letter", {
      method: "POST",
      body: JSON.stringify({ _id: a._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <FormKeyLetter initialValues={{}} onSubmit={addKeyLetter} />
      <Divider />
      <ListKeyLetter
        keyLetters={keyLetters?.sort((a, b) =>
          a?.label?.localeCompare(b.label)
        )}
        onDelete={removeKeyLetter}
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

function ListKeyLetter({ keyLetters, onDelete }) {
  return (
    <Flex flexDirection="column" mt={2}>
      {keyLetters?.map((keyLetter) => (
        <Flex
          key={keyLetter._id}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>{keyLetter.label}</Text>
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
                {keyLetter.unitPrice}€
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
                (DOM) {keyLetter.unitPriceDom}€
              </Flex>
            </Flex>
          </Flex>

          <IconButton aria-label="delete" onClick={() => onDelete(keyLetter)}>
            <DeleteIcon />
          </IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
