import React from "react";
import { Typography, Button, ButtonGroup } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Cover = () => {
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          color: "#010101",
          maxHeight: "fit-content",
          height: 300,
          backgroundImage:
            "url(https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 190,
            bottom: 0,
            right: 0,
            left: 100,
            backgroundColor: "#fffdfdfe",
            width: 150,
            height: 150,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 10px 5px 0px rgba(50, 50, 50, 0.225);",
          }}
        >
          <img
            style={{ width: 140, height: 140, borderRadius: 9 }}
            src="https://images.pexels.com/photos/1143536/pexels-photo-1143536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile"
          />
        </Box>
        <Typography
          variant="h1"
          color="initial"
          sx={{
            position: "absolute",
            top: 210,
            bottom: 0,
            right: 0,
            left: 290,
            fontSize: 32,
            color: "#fffdfdfe",
          }}
        >
          Profile Name
        </Typography>
        <Typography
          variant="h3"
          color="initial"
          sx={{
            position: "absolute",
            top: 250,
            bottom: 0,
            right: 0,
            left: 290,
            fontSize: 20,
            color: "#fffffffb",
          }}
        >
          Currently Job
        </Typography>
      </Paper>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fffffffb",
          height: 60,
          display: "flex",
          alignItems: "center",
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          boxShadow: "0px 10px 5px 0px rgba(50, 50, 50, 0.107)",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ background: "#50039d87", marginLeft: 36 }}
        >
          Feed
        </Button>
        <Button
          variant="text"
          color="inherit"
          sx={{ background: "none", marginLeft: 2 }}
        >
          About
        </Button>
        <Button
          variant="text"
          color="inherit"
          sx={{ background: "none", marginLeft: 2 }}
        >
          Photos
        </Button>
        <Button
          variant="text"
          color="inherit"
          sx={{ background: "none", marginLeft: 2 }}
        >
          Friends
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ background: "#50039d87", marginLeft: "auto", marginRight: 2 }}
        >
          Edit
        </Button>
      </Box>
    </>
  );
};

export default Cover;
