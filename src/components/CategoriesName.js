import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { domain } from "../env";
import Headline from "./common/Headline";
import SingleCategory from "./common/SingleCategory";

function CategoriesName() {
  const [categorynames, setCategorynames] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      await axios({
        url: `${domain}/api/categories/`,
        method: "GET",
      })
        .then((response) => {
          // console.log(response.data);
          setCategorynames(response.data);
        })
        .catch((error) => {
          // console.log("CategorY Name ", error);
        });
    };
    getCategories();
  }, []);

  return (
    <Grid container spacing={3}>
      <Headline title="All" subtitle="Categories" />
      {categorynames?.map((item, i) => (
        <Grid key={i} item xs={6} sm={3} md={2} lg={2}>
          <SingleCategory item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoriesName;
