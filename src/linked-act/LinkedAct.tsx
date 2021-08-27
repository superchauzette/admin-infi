import { Button, Divider } from "@material-ui/core";
import { Flex } from "../ui";
import { Formik, Form, FieldArray } from "formik";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import {
  SelectCoeff,
  SelectIncrease,
  SelectKeyLetter,
} from "src/acts/SelectFields";
import { Box } from "rebass";
import { SelectField } from "./SelectField";
import { Act, useGetLinkedActs } from "src/api";
import { generateId } from "src/utils/generateId";
import { fetchAPI } from "src/utils/fetchAPI";

type Option = {
  label: string;
  value: string;
};

type LinkedActType = {
  _id: string;
  acts: (Option & Act)[];
  cotations: { keyLetter: Option; coeff: Option; increase: Option }[];
};

export function LinkedAct() {
  const { data: linkedActs = [], mutate } = useGetLinkedActs();

  const addLinkedAct = async (values, { resetForm }) => {
    const linkedAddToAdd = {
      ...values,
      _id: generateId({ ids: linkedActs?.map((a) => a._id) }),
    };
    mutate((as) => [linkedAddToAdd, ...as], false);
    await fetchAPI("/infi/add/linked-acts", {
      method: "POST",
      body: JSON.stringify(linkedAddToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeLinkedAct = async (linkedAct: LinkedActType) => {
    mutate(linkedActs?.filter((act) => act._id !== linkedAct._id));
    await fetchAPI("/infi/remove/linked-acts", {
      method: "POST",
      body: JSON.stringify({ _id: linkedAct._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <Formik
        initialValues={{ acts: [], cotations: [] }}
        onSubmit={addLinkedAct}
      >
        {({ values }) => (
          <Form>
            <SelectField name="acts" isSearchable isClearable isMulti />
            <Flex flexDirection="column" justifyContent="space-between">
              <FieldArray name="cotations">
                {() => (
                  <div>
                    {values.cotations?.map((_, index) => (
                      <Flex flexDirection="column" key={index} py={2}>
                        <Flex>
                          <SelectKeyLetter
                            name={`cotations.${index}.keyLetter`}
                            placeholder="Lettre Cle"
                          />
                          <Box px={1} />
                          <SelectCoeff
                            name={`cotations.${index}.coeff`}
                            placeholder="Coeff"
                          />
                          <Box px={1} />
                          <SelectIncrease
                            name={`cotations.${index}.increase`}
                            placeholder="Majoration"
                          />
                        </Flex>
                      </Flex>
                    ))}
                  </div>
                )}
              </FieldArray>
              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  ajouter
                </Button>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>

      <Box
        width="100%"
        sx={{ borderBottom: "1px solid rgba(0,0,0, 0.5)" }}
        mt={3}
      />

      <ListLinkedAct data={linkedActs} onDelete={removeLinkedAct} />
    </Flex>
  );
}

function ListLinkedAct({
  data,
  onDelete,
}: {
  data: LinkedActType[];
  onDelete: (linkedAct: LinkedActType) => void;
}) {
  return (
    <Flex flexDirection="column" mt={2}>
      {data?.map((item, index) => (
        <>
          <Flex
            key={index}
            alignItems="center"
            justifyContent="space-between"
            mb={1}
            sx={{ borderBottom: " 1px solid black" }}
          >
            <Flex flexDirection="column">
              <Flex>
                {item.acts?.map((a) => (
                  <Flex
                    key={a.value}
                    sx={{ backgroundColor: "#a8a7a7" }}
                    px={1}
                    borderRadius={5}
                    mt={1}
                    mr={1}
                    fontSize={13}
                  >
                    {a.label}
                  </Flex>
                ))}
              </Flex>

              <Flex mt={1}>
                <Flex>
                  {item.acts
                    ?.map((a) => `${a.keyLetter} ${a.coeff}`)
                    .join(" + ")}
                </Flex>
                <Flex mx={2}>{" => "}</Flex>
                <Flex color="blue">
                  {item.cotations
                    ?.map((a) =>
                      a.keyLetter?.label
                        ? `${a.keyLetter?.label} ${a.coeff?.label}`
                        : ""
                    )
                    ?.filter(Boolean)
                    .join(" + ")}
                </Flex>
              </Flex>
            </Flex>

            <IconButton aria-label="delete" onClick={() => onDelete(item)}>
              <DeleteIcon />
            </IconButton>
          </Flex>
          <Divider />
        </>
      ))}
    </Flex>
  );
}
