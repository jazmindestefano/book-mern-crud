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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fetchAddBook = async (data) => {
  try {
    await axios.post("http://localhost:5000/books/", data);
  } catch (e) {
    console.error(e);
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

  console.log({ data });

  const handleSubmit = () => {
    fetchAddBook(data).then((res) => navigate("/books"));
  };

  return (
    <Box paddingX={10} paddingY={5}>
      <FormControl fullWidth>
        <Stack mb={3}>
          <FormLabel>Enter Book Name</FormLabel>
          <TextField
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Author Name</FormLabel>
          <TextField
            onChange={(e) => setData({ ...data, author: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Book Price</FormLabel>
          <TextField
            type="number"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>Enter Book Availability</FormLabel>
          <Checkbox
            onChange={(e) => setData({ ...data, available: e.target.checked })}
          />
        </Stack>
        <Stack mb={5}>
          <FormLabel>Enter Book Description</FormLabel>
          <TextField
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
