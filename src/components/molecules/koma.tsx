/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useContext, useCallback } from "react";
import stls from "./koma.module.scss";
import Fukidashi from "./fukidashi";
import Serif from "./serif";
import Chara from "./chara";

type Props = {
  imageNum: number;
};

export default function Koma({ imageNum }: Props) {
  return (
    <div className={stls.root}>
      <svg
        className={stls.koma}
        xmlns="http://www.w3.org/2000/svg"
        width="789.1"
        height="525.5"
        viewBox="0 0 789.1 525.1"
      >
        <Chara imageNum={imageNum} />
      </svg>
      <div className={stls.fukidashi}>
        <svg
          className={stls.balloon}
          xmlns="http://www.w3.org/2000/svg"
          width="789.1"
          height="525.5"
          viewBox="0 0 789.1 525.1"
        >
          <Fukidashi imageNum={imageNum} />
        </svg>
        <Serif imageNum={1} />
      </div>
    </div>
  );
}
