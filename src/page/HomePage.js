import { Container } from "@mui/material";
import React from "react";
import Sliders from "../components/Sliders";
import TrandingProducts from "../components/TrandingProducts";
import CategoriesName from "../components/CategoriesName";
import MostViewProduct from "../components/MostViewProduct";
import CategoriesProducts from "../components/CategoriesProducts";
import BaradsName from "../components/BaradsName";

const HomePage = () => {
  return (
    <>
      <Sliders />
      <Container>
        <TrandingProducts />
        <CategoriesName />
        <MostViewProduct />
        <CategoriesProducts />
        <BaradsName />
      </Container>
    </>
  );
};

export default HomePage;
