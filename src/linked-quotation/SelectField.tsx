import Select from "react-select";
import { useField, useFormikContext } from "formik";
import { useGetQuotation } from "../api";

export function SelectField({ name, ...props }) {
  const [field, _, helpers] = useField({ name });
  const { setFieldValue, values } = useFormikContext<any>();

  const { data: quotations } = useGetQuotation();

  console.log({ quotations });

  return (
    <Select
      value={field.value}
      onChange={(o) => {
        helpers.setValue(o);
        if (o?.length > values.quotations?.length) {
          setFieldValue("quotations", [
            ...values.quotations,
            { keyLetter: "", coeff: "" },
          ]);
        } else {
          values.quotations.pop();
          setFieldValue("quotations", values.quotations);
        }
      }}
      options={quotations?.map((a) => ({
        label: `${a.name} (${a.keyLetter?.label} ${a.coefficient?.label})`,
        value: a._id,
        ...a,
      }))}
      {...props}
    />
  );
}
