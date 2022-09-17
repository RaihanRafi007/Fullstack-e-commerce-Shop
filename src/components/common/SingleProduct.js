import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

  const ProductDetails = () => {
    navigate(`/p-${product?.title}-${product?.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={ProductDetails}>
        <CardMedia component="img" height="250" image={product?.image} />
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography align="center" variant="h6">
            {product?.title}
          </Typography>
          <Typography align="center">
            {product?.oldprice && (
              <Box
                component="span"
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  textDecoration: "line-through",
                  color: "red",
                  padding: "5px",
                }}
              >
                {product?.oldprice}TK
              </Box>
            )}
            <Box
              component="span"
              style={{
                fontWeight: "bold",
                fontSize: "large",
                padding: "5px",
              }}
            >
              {product?.price}TK
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          endIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="large"
          color="primary"
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
