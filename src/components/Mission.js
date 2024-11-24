import React from 'react'
import styles from "./mission.module.css"

function Mission() {
  return (
    <div className={styles.container}>
        <span className={styles.title}>Why Us</span>
        <p className={styles.description}>Tutorials by industry experts<br></br>Peer & expert code review<br></br>Coding exercises<br></br>Access to our GitHub repos Community forum Flashcard decks<br></br>New videos every week</p>
    </div>
  )
}

export default Mission