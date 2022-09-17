import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleBrandName = ({ item }) => {
  const navigate = useNavigate();
  const ShowSingleBrand = () => {
    navigate(`/brand-${item?.title}-${item?.id}`);
  };

  return (
    <CardActionArea onClick={ShowSingleBrand}>
      <Card
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#6275A3",
          backgroundImage: `url(${item?.logo})`,
          backgroundSize: "100% 100%",
          padding: "5px",
          color: "white",
          position: "relative",
        }}
      >
        <Box
          style={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            display: "grid",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Typography variant="h4">{item?.title}</Typography>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default SingleBrandName;
