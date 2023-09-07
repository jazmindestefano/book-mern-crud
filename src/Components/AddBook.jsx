import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InternalLayout from "../Common/InternalLayout";

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
    <InternalLayout>
      <FormControl fullWidth>
        <Stack mb={3}>
          <FormLabel>
            <Typography color={"white"}>Enter Book Name</Typography>
          </FormLabel>
          <TextField
            variant="filled"
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              background: "white",
            }}
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>
            <Typography color={"white"}>Enter Author Name</Typography>
          </FormLabel>
          <TextField
            variant="filled"
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              background: "white",
            }}
            value={data?.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>
            <Typography color={"white"}>Enter Book Price</Typography>
          </FormLabel>
          <TextField
            variant="filled"
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              background: "white",
            }}
            type="number"
            value={data?.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </Stack>
        <Stack mb={3}>
          <FormLabel>
            <Typography color={"white"}>Enter Book Availability</Typography>
          </FormLabel>
          <Select
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              background: "white",
            }}
            value={data?.available}
            onChange={(e) => setData({ ...data, available: e.target.value })}
          >
            <option value={true}>true</option>
            <option value={false}>false</option>
          </Select>
        </Stack>
        <Stack mb={5}>
          <FormLabel>
            <Typography color={"white"}>Enter Book Description</Typography>
          </FormLabel>

          <TextField
            sx={{
              border: "1px solid white",
              borderRadius: "5px",
              background: "white",
            }}
            value={data?.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </Stack>
      </FormControl>
      <Button onClick={handleSubmit} color="primary" variant="contained">
        Submit
      </Button>
    </InternalLayout>
  );
}

export default AddBook;
