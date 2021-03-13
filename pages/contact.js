// Form to send me email + social links
import { useState } from 'react';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default function Contact() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const submit = (event) => {
    try {
      event.preventDefault();
      console.log(`the data: ${name} ${title} ${email} ${phone} ${link} ${description}`);
      // api w/ axios to send form data
      const res = axios({
        method: 'POST',
        url:`${process.env.REACT_APP_API_DOMAIN}/sendEmail`,
        header: {
          'x-api-key': `${process.env.REACT_APP_API_KEY}`
        },
        body: JSON.stringify({
          name,
          title,
          email,
          phone,
          link,
          description
        })
      });
      console.log(res);
      if (res.status = 200) {
        // when response.status 200 then pop dialog w/ ok button to close dialog
        // https://material-ui.com/components/dialogs/
        console.log('dialog pop!');
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form>
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
          fullWidth
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
          fullWidth
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