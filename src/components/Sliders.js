import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { domain } from "../env";
import SliderItem from "./common/SliderItem";

const Sliders = () => {
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    const getSlider = async () => {
      await axios({
        url: `${domain}/api/sliders/`,
        method: "GET",
      }).then((response) => {
        setSlides(response.data);
        // console.log("Sliders===", response.data);
      });
    };
    getSlider();
  }, []);
  return (
    <Carousel interval="5000" stopAutoPlayOnHover="true">
      {slides?.map((item) => (
        <SliderItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default Sliders;
