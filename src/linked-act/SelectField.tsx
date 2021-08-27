import Select from "react-select";
import { useField, useFormikContext } from "formik";
import { useGetActs } from "../api";

export function SelectField({ name, ...props }) {
  const [field, _, helpers] = useField({ name });
  const { setFieldValue, values } = useFormikContext<any>();

  const { data: acts } = useGetActs();

  return (
    <Select
      value={field.value}
      onChange={(o) => {
        helpers.setValue(o);
        if (o.length > values.cotations.length) {
          setFieldValue("cotations", [
            ...values.cotations,
            { keyLetter: "", coeff: "" },
          ]);
        } else {
          values.cotations.pop();
          setFieldValue("cotations", values.cotations);
        }
      }}
      options={acts?.map((a) => ({
        label: `${a.title} (${a.keyLetter} ${a.coeff} ${a.increase || ""})`,
        value: a.title,
        ...a,
      }))}
      {...props}
    />
  );
}
