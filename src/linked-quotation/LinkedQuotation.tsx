import { Button, Divider } from "@material-ui/core";
import { Flex } from "../ui";
import { Formik, Form, FieldArray } from "formik";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import {
  SelectCoeff,
  SelectIncrease,
  SelectKeyLetter,
} from "src/quotation/SelectFields";
import { Box } from "rebass";
import { SelectField } from "./SelectField";
import { Quotation, useGetLinkedActs, LinkedActType } from "src/api";
import { fetchAPI } from "src/utils/fetchAPI";
import { sum } from "lodash";

type FormLinkedQuotation = Omit<LinkedActType, "_id">;

function generateId(acts: Quotation[]) {
  return acts
    ?.map((a) => a._id)
    .sort((a, b) => a.localeCompare(b))
    .join("_");
}

export function LinkedQuotation() {
  const { data: linkedQuotation = [], mutate } = useGetLinkedActs();

  const addLinkedAct = async (values: FormLinkedQuotation, { resetForm }) => {
    const linkedAddToAdd = {
      ...values,
      _id: generateId(values.linkedQuotations),
    };
    console.log({ linkedAddToAdd });
    mutate((as) => [linkedAddToAdd, ...as], false);
    await fetchAPI("/infi/add/linked-quotation", {
      method: "POST",
      body: JSON.stringify(linkedAddToAdd),
    });
    await mutate();
    resetForm();
  };

  const removeLinkedAct = async (linkedAct: LinkedActType) => {
    mutate(linkedQuotation?.filter((act) => act._id !== linkedAct._id));
    await fetchAPI("/infi/remove/linked-quotation", {
      method: "POST",
      body: JSON.stringify({ _id: linkedAct._id }),
    });
    await mutate();
  };

  return (
    <Flex flexDirection="column">
      <Formik
        initialValues={
          { linkedQuotations: [], quotations: [] } as FormLinkedQuotation
        }
        onSubmit={addLinkedAct}
      >
        {({ values }) => (
          <Form>
            <SelectField
              name="linkedQuotations"
              isSearchable
              isClearable
              isMulti
            />
            <Flex flexDirection="column" justifyContent="space-between">
              <FieldArray name="quotations">
                {() => (
                  <div>
                    {values.quotations?.map((_, index: number) => (
                      <Flex flexDirection="column" key={index} py={2}>
                        <Flex>
                          <SelectKeyLetter
                            name={`quotations.${index}.keyLetter`}
                            placeholder="Lettre Cle"
                          />
                          <Box px={1} />
                          <SelectCoeff
                            name={`quotations.${index}.coefficient`}
                            placeholder="Coeff"
                          />
                          <Box px={1} />
                          <SelectIncrease
                            name={`quotations.${index}.increase`}
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

      <ListLinkedAct data={linkedQuotation} onDelete={removeLinkedAct} />
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
                {item.linkedQuotations?.map((a) => (
                  <Flex
                    key={a.value}
                    sx={{ backgroundColor: "#a8a7a7" }}
                    px={1}
                    borderRadius={5}
                    mt={1}
                    mr={1}
                    fontSize={13}
                    fontWeight="bold"
                  >
                    {a.label}
                  </Flex>
                ))}
              </Flex>

              <Flex mt={1}>
                <Flex>
                  {item.linkedQuotations
                    ?.map((a) => `${a.keyLetter.label} ${a.coefficient.label}`)
                    .join(" + ")}
                </Flex>
                <Flex ml={2} sx={{ textDecoration: "line-through" }}>
                  {getPrice(item.linkedQuotations)}€
                </Flex>

                <Flex mx={2}>{" => "}</Flex>

                <Flex color="blue">
                  {item.quotations
                    ?.map((a) =>
                      a.keyLetter?.label
                        ? `${a.keyLetter?.label} ${a.coefficient?.label}`
                        : ""
                    )
                    ?.filter(Boolean)
                    .join(" + ")}
                </Flex>
                <Flex ml={2} color="red">
                  {getPrice(item.quotations)}€
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

function getPrice(quotations: Quotation[]) {
  return sum(
    quotations?.map((c) => c.keyLetter?.unitPrice + c.coefficient?.value)
  );
}
