// Server-side code
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Registermodel = require('./models/register.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/hacking');
const port = 3000;

app.post('/detail', (req, res) => {
  Registermodel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});