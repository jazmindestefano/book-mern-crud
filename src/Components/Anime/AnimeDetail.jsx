import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchAnime = async (id) => {
  try {
    const { data } = await axios.get(
      `https://book-mern-crud-backend.onrender.com/anime/${id}`
    );
    return data;
  } catch (error) {
    return {};
  }
};

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});

  useEffect(() => {
    fetchAnime(id)
      .then((res) => setAnime(res.anime))
      .catch((e) => console.log("ANIME ERROR: ", e));
  }, [id]);

  return (
    <Box paddingX={10} paddingY={5}>
      <h1>Anime Detail</h1>
      <h2>{anime.name}</h2>
      <p>{anime.seasons}</p>
      <p>{anime.chapters_seen}</p>
      <p>{anime.review}</p>
      <p>{anime.favorite_character}</p>
    </Box>
  );
}

export default AnimeDetail;
