import { Stack, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Stack direction={"column"}>
      <Stack direction={"column"} px={10} bgcolor={"black"}>
        <Typography variant="h2" fontWeight={600} color={"white"}>
          Welcome to your anime store
        </Typography>
        <Typography variant="h5" fontWeight={500} color={"white"}>
          Here you can track all your favorite animes
        </Typography>
        <Stack width={"100%"} alignItems={"end"}>
          <img
            src="/images/naruto-3-removebg-preview.png"
            alt="Akatsuki"
            height={"auto"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
