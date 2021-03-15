// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  try {
    const response = await axios({
      method: 'POST',
      baseURL: `${process.env.API_DOMAIN}`,
      url:'/sendEmail',
      headers: {
        'x-api-key': `${process.env.API_KEY}`
      },
      body: JSON.stringify({
        ...req.body,
      })
    })    
    console.log(response);
    if (response.data) {
      res.statusCode = 200;
      res.send(response.data);
    }
    res.send('Email Sent!')
  } catch (e) {
    
  }
  
}
  