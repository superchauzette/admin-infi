import { Flex, Text } from "rebass";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { fetchAPI } from "../utils/fetchAPI";
import { Card } from "../ui/Card";
import { saveInLocalStorage } from "../utils/localStorage";
import { useHistory } from "react-router-dom";
import { TextField } from "../ui/TextField";

type Value = { email: string; password: string };

async function doLogin({ email, password }: Value) {
  const res = await fetchAPI(`/infi/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export function Login() {
  const history = useHistory();

  return (
    <Flex flex={1} height="100vh" justifyContent="center" alignItems="center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          const data = await doLogin(values);
          console.log({ data });
          saveInLocalStorage(data);
          history.push("/");
        }}
      >
        <Form>
          <Card width={456}>
            <Flex flexDirection="column" width="100%">
              <Text mb={1} textAlign="center" fontWeight="bold">
                Admin Cofidoc
              </Text>
              <TextField label="Email" name="email" />
              <Flex my={1} />
              <TextField label="Mot de passe" name="password" />
              <Flex flex={1} justifyContent="center" mt={3}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Form>
      </Formik>
    </Flex>
  );
}
