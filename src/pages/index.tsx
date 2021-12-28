import type { NextPage } from "next";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Footer from "../components/organisms/footer";
import styles from "./index.module.scss";
import Title from "../components/molecules/title";
import Theme from "./theme";
import Menu from "../components/organisms/menu";
import Manga from "../components/templates/manga"

const Home: NextPage = () => {
  return (
    <Theme>
      <Title />
      <section className={styles.main}>
        <section className={styles.sideBarTopBar}>
          <Menu />
        </section>
      </section>
      <Manga />

      <Footer />
    </Theme>
  );
};

export default Home;
