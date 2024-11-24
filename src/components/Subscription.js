import React from "react";
import styles from "./subscription.module.css";

function Subscription() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Monthly Subscription</span>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "40px 20px",
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft:30
          // padding:30
        }}
      >
        <span className={styles.amountcontainer}>
          <p className={styles.amount}>$29</p>
          <p className={styles.amountsub}>per month</p>
        </span>
        <p className={styles.text}>Full access for less than $1 a day</p>
      </div>
      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <button className={styles.signbutton}>Sign Up</button>
      </div>
    </div>
  );
}

export default Subscription;
