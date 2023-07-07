require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();
app.get('/', (req, res) => {
  res.json({ msg: 'welcom to app' });
});

app.listen(process.env.PORT, () => {
  console.log('listen on', process.env.PORT);
});

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.use('/api/article', articleRoutes);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log('listen on port', processs.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
