/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useContext } from "react";
import stls from "./fukidashi.module.scss";

type Props = {
  imageNum: number;
};

export default function Fukidashi({ imageNum }: Props) {
  return (
    <>
      <path d="M787.466 174.712c-8.824 15.23-14.86 33.3-29.89 43.74-7.544 5.562-15.5 10.56-23.35 15.64-7.558 3.495-16.3 4.15-23.01 9.488-6.748 3.809-14.22 6.492-22.04 6.61-8.237 1.008-16 5.483-24.46 3.815-8.571.278-17.19-1.5-25.69.495-5.541 1.039-13.82 2.482-15.64 8.31 7.088 1.666 15.04.275 22.46.893 18.14.158 36.28-3.342 53.28-9.59 18.11-7.3 36.41-14.72 53.02-25.11 13.59-8.815 25.06-21.38 31.03-36.57.27-5.937 10.19-13.24 4.323-17.72zM477.266.112c-11.71 9.47-21.51 21.06-31.2 32.52-7.657 9.523-14.42 19.99-17.9 31.79-6.728 10.46-7.421 23.23-9.925 35.1-3.852 24.97-.701 51.58 11.65 73.88 4.147 7.436 8.159 15.52 15.03 20.81.52-5.124-7.03-11.57-9.461-17.4-7.65-14.62-12.28-30.76-15.01-46.99-1.952-15.99 2.206-31.93 5.83-47.38 4.227-15.18 9.62-30.35 19.29-42.98 10.51-14.59 23.63-27.24 38.09-37.91-2.03-1.048-4.23-1.04-6.39-1.431zm-16.2 208.5c9.585 9.256 18.62 20.11 31.65 24.18 8.26 3.582 16.61 7.082 24.34 11.79-10.28-2.002-20.54-4.845-29.34-10.92-13.51-5.97-23.25-17.55-33.23-28.19-2.25-1.182-7.073-8.194-1.542-4.13 2.845 2.249 5.485 4.78 8.109 7.278zm57.62 39.84c7.88-.44 14.95 1.734 21.63 6.133 8.476 2.25 9.499 12.69 6.287 19.76-1.476 3.219-3.394 9.952-7.824 8.957 1.918-3.618 8.333-11.44 7.05-18.36.215-8.26-9.563-8.225-14.61-11.81-4.117-1.721-8.333-3.19-12.53-4.68zm73.34 8.177c-.914 7.527-8.776 12.1-14.73 15.57-5.725 2.59-11.3 3.817-16.15 6.103-2.991-.452-12.99 2.723-7.456 5.24 6.442-.07 11.39-3.04 17.57-4.38 6.05-.84 11.09-4.081 15.3-6.111 1.323-3.086 5.353-1.408 7.164-3.726 8.772 1.182.404-12.69-1.697-12.7zm-42.04 28.22c-2.443-2.661-8.84 4.763-5.95-2.274 2.007-1.56 9.668-1.593 5.95 2.274z" />
      <path d="M542.266 281.912c1.958 6.033-8.923 3.745-4.945.673 2.022 1.608 3.2.388 4.945-.673z" />
    </>
  );
}