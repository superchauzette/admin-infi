import { useField } from "formik";
import { Box } from ".";
import Select from "react-select";

export function SelectField({ name, ...props }) {
  const [field, _, helpers] = useField({ name });

  return (
    <Box minWidth="250px">
      <Select
        value={field.value}
        onChange={(o) => helpers.setValue(o)}
        {...props}
      />
    </Box>
  );
}
