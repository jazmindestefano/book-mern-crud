import { Stack } from "@mui/material";

const InternalLayout = ({ children }) => {
  return (
    <Stack bgcolor={"black"} px={10} height={"670px"}>
      {children}
    </Stack>
  );
};

export default InternalLayout;
