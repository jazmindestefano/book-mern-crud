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
      pr={10}
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
          Books
        </Button>
      </Link>
      <Link to="/anime">
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
      <Link to="/anime/add">
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
      <Link to="/books/add">
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: "bold",
            background: "white",
            ":hover": { background: "black", color: "white" },
          }}
        >
          Add book
        </Button>
      </Link>
    </Stack>
  );
}
