import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../env";
import Headline from "../components/common/Headline";
import SingleBrandName from "../components/common/SingleBrandName";

const BaradsName = () => {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const getbrands = async () => {
      await axios({
        url: `${domain}/api/brandsname/`,
        method: "GET",
      }).then((response) => {
        setBrands(response.data);
        // console.log("BaradsName=====", response.data);
      });
    };
    getbrands();
  }, []);
  return (
    <Grid container spacing={3}>
      <Headline title="All" subtitle="Brands" />
      {brands?.map((item) => (
        <Grid xs={6} sm={3} md={2} lg={2} item>
          <SingleBrandName key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BaradsName;
