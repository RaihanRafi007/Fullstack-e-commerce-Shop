import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";
// import DoubleArrowSharpIcon from "@material-ui/icons/DoubleArrowSharp";
// import { useHistory } from "react-router-dom";

const AllProducts = ({
  products,
  showall = false,
  categorytitle,
  categoryid,
}) => {
  const navigate = useNavigate();
  const showcategoryproducts = () => {
    navigate(`category-${categorytitle}-${categoryid}`);
  };

  return (
    <Grid
      style={{
        marginTop: "15px",
      }}
      container
      spacing={2}
    >
      {products?.map((item, i) => (
        <>
          {showall ? (
            <Grid key={i} item md={2} sm={4}>
              <SingleProduct product={item} />
            </Grid>
          ) : (
            <>
              {i <= 10 && (
                <Grid key={i} item md={2} sm={4}>
                  <SingleProduct product={item} />
                </Grid>
              )}
            </>
          )}
        </>
      ))}
      {products?.length > 11 && !showall && (
        <Grid
          item
          md={2}
          sm={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={showcategoryproducts}>
            <Typography>See More</Typography>
            {/* <DoubleArrowSharpIcon /> */}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default AllProducts;
