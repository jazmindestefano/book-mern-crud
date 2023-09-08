import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import Books from "./Components/Books";
import BookDetail from "./Components/BookDetail";
import Layout from "./Common/Layout";
import AnimeForm from "./Components/Anime/AnimeForm";

function App() {
  return (
    <Layout>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/add/:id" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/add-anime" element={<AnimeForm />} exact />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
