import {Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
            minWidth: "300px",
            minHeight: "300px"
          }}
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "red" }}
          variant="radient"
        >
          <Typography variant="h3">CLICK TO VISIT MY BOOK LIBRARY</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;