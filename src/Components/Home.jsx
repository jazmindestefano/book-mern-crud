import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box paddingX={10} paddingY={5} bgcolor={"#419d66"} height={"100vh"}>
      <Typography variant="h2" fontWeight={600} color={"white"}>
        Welcome to your book's store
      </Typography>
      <Typography variant="h5" fontWeight={500} color={"white"}>
        Here you can store the books you read
      </Typography>
      <Stack height={"77%"} justifyContent={"end"} alignItems={"end"}>
        <img
          src="/images/naruto-3-removebg-preview.png"
          alt="Akatsuki"
          width="650px"
          height="1000px"
        />
      </Stack>
    </Box>
  );
}

export default Home;
