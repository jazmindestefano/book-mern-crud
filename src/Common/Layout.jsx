import { Stack } from "@mui/material";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <Stack bgcolor={"#fd9753"} height={"100vh"}>
      <Stack my={2} px={4}>
        <img
          src="/images/svg-akatsuki.png"
          alt="Akatsuki"
          width="80px"
          height="50px"
        />
      </Stack>
      <Header />
      {children}
    </Stack>
  );
};

export default Layout;
