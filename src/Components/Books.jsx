import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Common/BasicTable";

const API_URL = process.env.PROD_BACKEND_API || process.env.LOCAL_BACKEND;

const fetchBooks = async () => {
  try {
    const { data } = await axios.get(
      "https://book-mern-crud-backend.onrender.com/books/"
    );
    return data;
  } catch (error) {
    return [];
  }
};
const columns = [
  "Name",
  "Description",
  "Author",
  "Price",
  "Available",
  "Actions",
];

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchBooks()
      .then((res) => setBooks(res))
      .catch((e) => console.log("BOOKS ERROR: ", e));
    setLoading(false);
  }, []);

  if (loading) return <p>loading..</p>;
  return (
    <Box paddingX={10} paddingY={5}>
      <Typography variant="h4" fontSize={25} fontWeight={600} gutterBottom>
        Books
      </Typography>
      <BasicTable rows={books?.books} columns={columns} />
    </Box>
  );
}

export default Books;
