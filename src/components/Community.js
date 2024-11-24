import React from 'react'
import styles from "./community.module.css";

function Community() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Join our community</h2>
        <span className={styles.content}>
            <p className={styles.subheader}>30-day, hassle-free money back guarantee</p>
            <p className={styles.description}>Gain access to our full library of tutorials along with expert code reviews.<br></br>Perfect for any developers who are serious about honing their skills.</p></span>

    </div>
  )
}

export default Community