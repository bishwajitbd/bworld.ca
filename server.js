const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const services = require('./allData/services');
const projects = require('./allData/projectListData');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/send', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: 'bworldcanada',
    pass: 'ManasKumarBarua1990@#Bishakha'
  }
});

var mailOptions = {
  from: data.email,
  to: 'bworldcanada@gmail.com, bishwajitbd@gmail.com',
  subject: 'Client response',
  html: `<p>${data.fullname}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

var mailResponse = {
  from:'bworldcanada@gmail.com',
  to:  data.email,
  subject: 'Thank you',
  html: `<p>Hello ${data.fullname}, Thank you for contact us. We will contact you in a short time.</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    smtpTransport.sendMail(mailResponse,
    (error, response) => {
      if(error) {
        res.send(error)
      }else {
        res.send('Success')
      }
});
    res.send('Success')
  }
  smtpTransport.close();
});

})

//get services list
app.get('/services', (req, res)=>{
  res.send(services.services);
});

//get project list
app.get('/projects', (req, res)=>{
  res.send(projects.projects);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};

