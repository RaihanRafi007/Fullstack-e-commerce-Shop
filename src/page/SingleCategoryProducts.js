import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../components/common/AllProducts";
import { domain } from "../env";

const SingleCategoryProducts = () => {
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getproducts = async () => {
      await axios({
        url: `${domain}/api/singlecategories/${id}/`,
        method: "GET",
      })
        .then((response) => {
          // console.log(response.data);
          setCategory(response.data[0]);
        })
        .catch((error) => {
          // console.log("ERROR", error);
        });
    };
    getproducts();
  }, [id]);

  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">{category?.title}</Typography>
        <Typography variant="p">{category?.details}</Typography>
        <img
          style={{ width: "100%", padding: "10px" }}
          alt={category?.title}
          src={category?.image}
        />
        <AllProducts products={category?.products} showall={true} />
      </Grid>
    </Container>
  );
};

export default SingleCategoryProducts;
