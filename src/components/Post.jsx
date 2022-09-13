import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";

const Post = ({ url }) => {
  return (
    <Card
      sx={{
        maxWidth: 550,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="profile">R</Avatar>}
        title="Profile Name"
        subheader="12 Sep 2022 at 11:16pm"
      />
      <CardContent>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo
          quaerat, molestias rem veritatis, doloremque amet obcaecati, quae
          debitis eius nisi nostrum optio?.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={url}
        alt="picuture"
        sx={{ margin: 2, width: "94%" }}
      />
      <AvatarGroup total={24} sx={{ margin: 2 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jp" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jp" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jp" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jp" />
      </AvatarGroup>
      <CardHeader
        avatar={<Avatar aria-label="profile">K</Avatar>}
        title="Profile Name"
        subheader="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo
          quaerat, molestias rem veritatis"
      />
      <CardHeader
        avatar={<Avatar aria-label="profile">K</Avatar>}
        title="Profile Name"
        subheader="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo
          quaerat, molestias rem veritatis"
      />
      <textarea
        cols="52"
        rows="5"
        style={{
          marginLeft: "20px",
          border: "1px solid #8988885d",
          color: "grey",
          width: "91%",
        }}
      >
        Add Comment
      </textarea>
      <Button variant="contained" sx={{ background: "#50039d87", margin: 2 }}>
        Post Comment
      </Button>
    </Card>
  );
};

export default Post;
