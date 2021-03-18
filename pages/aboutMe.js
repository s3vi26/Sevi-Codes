// Summary about myself. Photo w/ header
import styles from '../styles/AboutMe.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    border: `1px solid ${indigo[500]}`,
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={styles.box}>
      <div className={classes.root}>
        <Avatar alt="Sevi" src="/resumePhoto.jpg" className={classes.large}/>
        <div>
          <h2>Nicole Sevillano (Sevi)</h2>
          <div className={classes.root}>
            <a href="https://github.com/s3vi26/">
              <Avatar alt="Github" src="/github.png" />
            </a>
            <a href="https://twitter.com/s3vi26">
              <Avatar alt="Twitter" src="/twitter.png" />
            </a>
            <a href="https://www.instagram.com/sevi.codes/">
              <Avatar alt="Instagram" src="/instagram.png" />
            </a>
            {/* link to download pdf resume */}
          </div>
        </div>
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