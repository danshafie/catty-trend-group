import React from "react";
import styles from "../styles/Loading.module.scss";

//loading spinner/balls

export default function Loading() {
  return (
    <div className={styles.loadingBg}>
      <div className={styles.threeBallsLoading}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
