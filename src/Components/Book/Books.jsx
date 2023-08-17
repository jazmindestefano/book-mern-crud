import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../../Common/BasicTable";

const fetchBooks = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/books/");
    return data;
  } catch (error) {
    return [];
  }
};

const columns = ["Name", "Description", "Author", "Price", "Available"];

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then((res) => setBooks(res))
      .catch((e) => console.log("BOOKS ERROR: ", e));
  }, []);

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
