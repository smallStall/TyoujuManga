/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useContext } from "react";
import stls from "./serif.module.scss";
import { delay } from "../../libs/accesories";
import { SerifContext } from "../../pages/theme";

type Props = {
  imageNum: number;
};

export default function Serif({ imageNum }: Props) {
  const { serifs, setSerifs } = useContext(SerifContext);
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <pre
        onClick={() => {
          setVisible(true);
          console.log('wooo')
          delay(() => ref.current?.focus(), 100);
        }}
        className={stls.serif}
      >
        {serifs[0]}
      </pre>
      <textarea
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        ref={ref}
        className={stls.input}
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          if (event != null) {
            setSerifs([event.target.value]);
          }
        }}
        onBlur={() => setVisible(false)}
      />
    </>
  );
}
