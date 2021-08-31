import { useGetKeyLetters, useGetCoefficients, useGetIncreases } from "../api";
import { SelectField } from "../ui";

export function SelectIncrease({ name, ...props }) {
  const { data } = useGetIncreases();
  const options =
    data?.map((item) => ({
      ...item,
      label: item.label,
      value: item._id,
    })) || [];

  return <SelectField options={options} name={name} {...props} />;
}

export function SelectKeyLetter({ name, ...props }) {
  const { data } = useGetKeyLetters();
  const options =
    data
      ?.map((item) => ({ ...item, label: item.label, value: item._id }))
      .sort((a, b) => a.label.localeCompare(b.label)) || [];

  return <SelectField options={options} name={name} {...props} />;
}

export function SelectCoeff({ name, ...props }) {
  const { data: coefficients } = useGetCoefficients();
  const options =
    coefficients
      ?.map((item) => ({
        ...item,
        label: item._id,
        value: item.value,
      }))
      .sort((a, b) => Number(a.value) - Number(b.label)) || [];

  return <SelectField options={options} name={name} {...props} />;
}
