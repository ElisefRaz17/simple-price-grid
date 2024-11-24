import React from "react";
import styles from "./content.module.css";
import Community from "./Community";
import Subscription from "./Subscription";
import Mission from "./Mission";

function Content() {
  return (
    <div className={styles.container}>
      <Community />
      <div className={styles.subcontent}>
        <Subscription />
        <Mission />
      </div>
    </div>
  );
}

export default Content;
