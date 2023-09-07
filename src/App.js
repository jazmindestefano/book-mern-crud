import React from "react";
import { Header } from "./Common/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import Books from "./Components/Books";
import BookDetail from "./Components/BookDetail";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack bgcolor={"#fd9753"} px={10} height={"100vh"} direction={"column"}>
      <Stack my={2}>
        <img
          src="/images/svg-akatsuki.png"
          alt="Akatsuki"
          width="80px"
          height="50px"
        />
      </Stack>
      <Stack>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/add/:id" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/books/:id" element={<BookDetail />} exact />
          </Routes>
        </main>
      </Stack>
    </Stack>
  );
}

export default App;
