import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const fetchAddBook = async (data) => {
  try {
    await axios.post(
      "https://book-mern-crud-backend.onrender.com/books/",
      data
    );
  } catch (e) {
    console.error(e);
  }
};

const fetchEditBook = async (data) => {
  try {
    await axios.put(
      `https://book-mern-crud-backend.onrender.com/books/${data._id}`,
      data
    );
  } catch (e) {
    console.error(e);
  }
};

const fetchBook = async (id) => {
  try {
    const { data } = await axios.get(
      `https://book-mern-crud-backend.onrender.com/books/${id}`
    );
    return data;
  } catch (error) {
    return {};
  }
};

function AddBook() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    author: "",
    price: 0,
    available: false,
    description: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchBook(id)
        .then((res) => setData(res.book))
        .then(() => setIsEdit(true))
        .catch((e) => console.log("BOOK ERROR: ", e));
    }
  }, [id]);

  const handleSubmit = () => {
    if (isEdit) {
      fetchEditBook(data).then(() => navigate("/books"));
    } else {
      fetchAddBook(data).then(() => navigate("/books"));
    }
  };

  return (
    <Box paddingX={10} paddingY={5}>
      <FormControl fullWidth>
        <Stack mb={3}>
          <FormLabel>Enter Book Name</FormLabel>
          <TextField
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Author Name</FormLabel>
          <TextField
            value={data?.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Book Price</FormLabel>
          <TextField
            type="number"
            value={data?.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Book Availability</FormLabel>
          <Checkbox
            checked={data?.available}
            onChange={(e) => setData({ ...data, available: e.target.checked })}
          />
        </Stack>
        <Stack mb={5}>
          <FormLabel>Enter Book Description</FormLabel>
          <TextField
            value={data?.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </Stack>
      </FormControl>
      <Button onClick={handleSubmit} color="primary" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default AddBook;
