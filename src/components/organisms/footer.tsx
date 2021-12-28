import React from "react";
import { Typography } from "@mui/material";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div
      className={
        styles.root
      }
    >
      <Typography className={styles.credit}>
        Copyright smallStall
      </Typography>
    </div>
  );
};

export default Footer;
