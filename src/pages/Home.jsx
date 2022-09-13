import React from "react";
import Container from "@mui/material/Container";
import Cover from "../components/Cover";
import Post from "../components/Post";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#e5e5e59e",
        height: "100%",
        maxHeight: "fit-content",
        paddingTop: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Cover />
      <Post
        url={
          "https://images.pexels.com/photos/4177640/pexels-photo-4177640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Post
        url={
          "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Post
        url={
          "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
    </Container>
  );
};

export default Home;
