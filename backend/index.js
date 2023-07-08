require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/article');

// express app
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mssg: 'berhasil' });
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/article', articleRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connect to db & listen on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
