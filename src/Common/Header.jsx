import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"end"}
      alignItems={"center"}
      spacing={5}
      bgcolor={"black"}
      p={3}
      position={"sticky"}
    >
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: "bold",
            background: "white",
            ":hover": { background: "black", color: "white" },
          }}
        >
          Home
        </Button>
      </Link>
      <Link to="/books">
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: "bold",
            background: "white",
            ":hover": { background: "black", color: "white" },
          }}
        >
          Animes
        </Button>
      </Link>
      <Link to="/add">
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: "bold",
            background: "white",
            ":hover": { background: "black", color: "white" },
          }}
        >
          Add anime
        </Button>
      </Link>
    </Stack>
  );
}
