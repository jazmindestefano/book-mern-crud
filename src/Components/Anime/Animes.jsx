import { Button, Stack, TableCell, TableRow, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicTable from "../../Common/BasicTable";
import InternalLayout from "../../Common/InternalLayout";
import { Link } from "react-router-dom";

const fetchAnimes = async () => {
  try {
    const { data } = await axios.get(
      `https://book-mern-crud-backend.onrender.com/anime/`
    );
    return data;
  } catch (error) {
    return [];
  }
};

const deleteAnime = async (id) => {
  try {
    await axios.delete(
      `https://book-mern-crud-backend.onrender.com/anime/${id}`
    );
  } catch (e) {
    console.error("DELETE ANIME ERROR", e);
  }
};

const columns = [
  "name",
  "Seasons",
  "Chapters Seen",
  "Review",
  "Favorite Character",
  "Actions",
];

const TableData = ({ data }) => {
  console.log({ data });
  return (
    <>
      {data &&
        data.map((data) => (
          <TableRow>
            <TableCell align="left">
              <Link
                to={`https://book-mern-crud-frontend.onrender.com//books/${data?._id}`}
              >
                {data?.name}
              </Link>
            </TableCell>
            <TableCell align="left">{data?.seasons}</TableCell>
            <TableCell align="left">{data?.chapters_seen}</TableCell>
            <TableCell align="left">{data?.review}</TableCell>
            <TableCell align="left">{data?.favorite_character}</TableCell>
            <TableCell align="left">
              <Stack width={"100%"} spacing={2} direction={"row"}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    deleteAnime(data._id);
                  }}
                >
                  Delete
                </Button>
                <Button variant="contained" color="info">
                  <Link
                    to={`https://book-mern-crud-frontend.onrender.com/add/${data?._id}`}
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

function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetchAnimes()
      .then((res) => setAnimes(res))
      .catch((e) => console.log("ANIMES ERROR: ", e));
  }, []);

  if (!animes) return <p>loading..</p>;
  return (
    <InternalLayout>
      <Typography variant="h4" fontSize={25} fontWeight={600} gutterBottom>
        Animes
      </Typography>
      <BasicTable rows={<TableData data={animes?.anime} />} columns={columns} />
    </InternalLayout>
  );
}

export default Animes;
