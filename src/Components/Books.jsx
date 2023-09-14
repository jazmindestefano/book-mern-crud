import { Button, Stack, TableCell, TableRow, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../Common/BasicTable";
import InternalLayout from "../Common/InternalLayout";
import { Link } from "react-router-dom";

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

const deleteBooks = async (id) => {
  try {
    await axios.delete(
      `https://book-mern-crud-backend.onrender.com/books/${id}`
    );
  } catch (e) {
    console.error("DELETE BOOK ERROR", e);
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

const TableData = ({ data }) => {
  return (
    <>
      {data &&
        data.map((data) => (
          <TableRow>
            <TableCell align="left">
              <Link
                to={`https://book-mern-crud-frontend.onrender.com/books/${data._id}`}
              >
                {data.name}
              </Link>
            </TableCell>
            <TableCell align="left">{data.description}</TableCell>
            <TableCell align="left">{data.author}</TableCell>
            <TableCell align="left">{data.price}</TableCell>
            <TableCell align="left">
              {data.available ? "Available" : "Not available"}
            </TableCell>
            <TableCell align="left">
              <Stack width={"100%"} spacing={2} direction={"row"}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteBooks(data._id)}
                >
                  Delete
                </Button>
                <Button variant="contained" color="info">
                  <Link
                    to={`https://book-mern-crud-frontend.onrender.com/add/${data._id}`}
                  >
                    Edit
                  </Link>
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};

function Books() {
  const [books, setBooks] = useState([]);

  // TODO: Add delete functionality to table books

  useEffect(() => {
    fetchBooks()
      .then((res) => setBooks(res))
      .catch((e) => console.log("BOOKS ERROR: ", e));
  }, []);

  if (!books) return <p>loading..</p>;
  return (
    <InternalLayout>
      <Typography variant="h4" fontSize={25} fontWeight={600} gutterBottom>
        Books
      </Typography>
      <BasicTable rows={<TableData data={books?.books} />} columns={columns} />
    </InternalLayout>
  );
}

export default Books;
