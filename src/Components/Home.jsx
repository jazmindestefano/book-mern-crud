import { Stack, Typography } from "@mui/material";
import React from "react";
import InternalLayout from "../Common/InternalLayout";

function Home() {
  return (
    <InternalLayout>
      <Stack position={"relative"}>
        <Typography variant="h2" fontWeight={600} color={"white"}>
          Welcome to your anime store
        </Typography>
        <Typography variant="h5" fontWeight={500} color={"white"}>
          Here you can track all your favorite animes
        </Typography>
        <Stack width={"100%"} alignItems={"end"} top={15} position={"absolute"}>
          <img src="/images/naruto-3-removebg-preview.png" alt="Akatsuki" />
        </Stack>
      </Stack>
    </InternalLayout>
  );
}

export default Home;
