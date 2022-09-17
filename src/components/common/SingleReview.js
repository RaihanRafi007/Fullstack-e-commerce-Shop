import { Avatar, Card, CardHeader } from "@mui/material";
import React from "react";

const SingleReview = ({ item }) => {
  return (
    <Card>
      <h1>{item?.title}</h1>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "blue" }}>
            {item?.customer?.username?.[0]}
          </Avatar>
        }
        title={item?.title}
        subheader={item?.customer?.username}
      />
    </Card>
  );
};

export default SingleReview;
