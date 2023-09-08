import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Common/BasicTable";
import InternalLayout from "../Common/InternalLayout";

const fetchBooks = async () => {
  try {
    const { data } = await axios.get(
      `https://book-mern-crud-backend.onrender.com/books/`
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
    <InternalLayout>
      <Typography variant="h4" fontSize={25} fontWeight={600} gutterBottom>
        Books
      </Typography>
      <BasicTable rows={books?.books} columns={columns} />
    </InternalLayout>
  );
}

export default Books;
