import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import InternalLayout from "../../Common/InternalLayout";

const AnimeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    seasons: "",
    chaptersSeen: "",
    review: "",
    favoriteCharacter: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier otra acción
    console.log(formData);
  };
  return (
    <InternalLayout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <FormControl onSubmit={handleSubmit} fullWidth sx={{ gap: "30px" }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Seasons"
                name="seasons"
                type="number"
                value={formData.seasons}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Chapters Seen"
                name="chaptersSeen"
                type="number"
                value={formData.chaptersSeen}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Review"
                name="review"
                value={formData.review}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Favorite Character"
                name="favoriteCharacter"
                value={formData.favoriteCharacter}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6} position={"relative"}>
          <Box position={"absolute"} top={45} left={-300}>
            <img
              src="/images/itachi-3.png"
              alt="itachi"
              width={300}
              height={500}
            />
          </Box>
          <Box position={"absolute"} top={170} right={100}>
            <img
              src="/images/itachi-4.png"
              alt="itachi"
              width={450}
              height={600}
            />
          </Box>
        </Grid>
      </Grid>
    </InternalLayout>
  );
};

export default AnimeForm;