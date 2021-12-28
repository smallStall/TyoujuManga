import React, { useState, useEffect } from "react";
import stls from "./manga.module.scss";
import Koma from "../molecules/koma";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "../../libs/accesories";

export default function Manga() {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    setMobile(isMobile());
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Carousel
      className={stls.root}
      responsive={responsive}
      infinite={true}
      partialVisible={mobile}
      centerMode={!mobile}
    >
      {arr.map((i) => (
        <Koma imageNum={i} key={i} />
      ))}
    </Carousel>
  );
}
