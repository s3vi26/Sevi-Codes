// Form to send me email + social links
import { useState } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 450,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fullInputs: {
    width: 425
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [emailError, setEmailError] = useState(false);

  const submit = async (event) => {
    try {
      event.preventDefault();
      console.log(`the data: ${name} ${title} ${email} ${phone} ${link} ${description}`);
      // api w/ axios to send form data
      const res = await axios({
        method: 'POST',
        url:'api/sendEmail',
        data: {
          name,
          title,
          email,
          phone,
          link,
          description
        },
      });
      console.log(res);
      if (res.statusCode = 200) {
        // when response.statusCode 200 then pop dialog w/ ok button to close dialog
        // https://material-ui.com/components/dialogs/
        console.log('dialog pop!');
      }
    } catch(e) {
      console.log(e);
    }
  }

  const validateEmail = (str) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(str) === false) {
      console.log('regex does not match');
      setEmailError(true);
    } else if (regex.test(str) === true) {
      console.log('regex match is true');
      setEmailError(false);
    }
  }

  return (
    <div>
      <h2>Contact Me</h2>
      <p>Feel free to send me job opportunities or inquires about my projects/work!</p>
      <form className={classes.form}>
        <TextField 
          id="Name" 
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          id="Title" 
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          id="Email" 
          label="Email"
          value={email}
          error={emailError}
          onBlur={validateEmail}
          helperText={emailError ? "Enter a valid email address" : ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          id="Phone" 
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="Link"
          label="Where to apply"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link"
          multiline
          className={classes.fullInputs}
        />
        <TextField
          id="Description"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Anything about a job opportunity or brief explanation for contacting me"
          multiline
          rows={4}
          variant="outlined"
          className={classes.fullInputs}
        />
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<SendIcon />}
          onClick={submit}
        >
          Send
        </Button>
      </form>
    </div>
  )
};