import { Box } from "./Box";

export function Card(props) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: 3,
        borderRadius: 10,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
      {...props}
    />
  );
}
