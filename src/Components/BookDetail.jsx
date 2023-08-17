import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchBook = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/books/${id}`);
    return data;
  } catch (error) {
    return {};
  }
};

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBook(id)
      .then((res) => setBook(res.book))
      .catch((e) => console.log("BOOK ERROR: ", e));
  }, []);

  return (
    <Box paddingX={10} paddingY={5}>
      <h1>Book Detail</h1>
      <h2>{book.name}</h2>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <p>{book.available}</p>
      <p>{book.author}</p>
    </Box>
  );
}

export default BookDetail;
