import React from "react";
import styles from "./Banner.module.scss";

function Banner(props) {
  const mainBanner =
    props.data.results[Math.floor(Math.random() * props.data.results.length)];

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(34, 88, 122, 0.2)), url(${
          "https://image.tmdb.org/t/p/original" + mainBanner.backdrop_path
        })`,
      }}
    >
      {props.children}
      <div style={{ height: "130px" }}></div>

      <div className="container">
        <h1 className="mb-10">{mainBanner.original_title}</h1>
        <button className={styles.btnBanner + " mx-5 mb-10"} href="#">
          Play
        </button>
        <button className={styles.btnBanner} href="#">
          MyList
        </button>
        <p className={styles.bannerOverview}>{mainBanner.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
