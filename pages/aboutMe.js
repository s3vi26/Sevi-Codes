// Summary about myself. Photo w/ header
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
    
  return (
    <div className={styles.box}>
      <div>
        <img className={styles.photo} src="/resumePhoto.jpg" />
      </div>
      <div>
        <p className={styles.text}>
          Welcome to my website! My name is Sevi and I am an accomplished software engineer with 3 years in the business. 
          I have a driven analytical mind with the patience to solve tough problems. 
          My adaptiveness to unfamiliar technologies brings a cutting edge to engineering teams. 
          When I am not coding or learning new technologies, then you can find me playing a FPS/MOBA/MMO game or playing volleyball
          at the beach.
        </p>
      </div>
    </div>
  )
};