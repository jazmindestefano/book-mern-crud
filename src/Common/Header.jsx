import React, { useState } from "react";
import { Stack, Tab, Tabs } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { NavLink } from "react-router-dom";

export function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={50}
      bgcolor={"darksalmon"}
      p={2}
      position={"sticky"}
    >
      <CollectionsBookmarkIcon />
      <Tabs
        indicatorColor="secondary"
        textColor="inherit"
        value={value}
        onChange={handleChange}
      >
        <Tab LinkComponent={NavLink} to="/" label="Home" />s
        <Tab LinkComponent={NavLink} to="/books" label="Books" />
        <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
      </Tabs>
    </Stack>
  );
}
