import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box paddingX={10} paddingY={5}>
      <Typography variant="h4">Welcome to your book's store</Typography>
      <Typography variant="h6">
        Here you can store the books you read
      </Typography>
    </Box>
  );
}

export default Home;
