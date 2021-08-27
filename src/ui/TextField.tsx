import { TextField as Input } from "@material-ui/core";
import { useField } from "formik";

export function TextField({ ...props }: any) {
  const [field] = useField(props);

  return <Input {...field} {...props} />;
}
