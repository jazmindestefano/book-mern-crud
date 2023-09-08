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
        <Stack top={15} right={"30%"} position={"absolute"}>
          <img src="/images/naruto-3-removebg-preview.png" alt="Akatsuki" />
        </Stack>
        <Stack left={400} top={80} position={"absolute"}>
          <img src="/images/uzumaki-naruto.png" alt="naruto" />
        </Stack>
        <Stack top={100} right={0} position={"absolute"}>
          <img src="/images/naruto-equipo.png" alt="naruto" />
        </Stack>
        <Stack top={370} position={"absolute"}>
          <img
            src="/images/naruto-h.png"
            alt="naruto"
            height={"300px"}
            width={"300px"}
          />
        </Stack>
      </Stack>
    </InternalLayout>
  );
}

export default Home;
