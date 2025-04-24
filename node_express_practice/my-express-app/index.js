// index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use('/api', productRoutes);

mongoose.connect('mongodb+srv://krishna:1234@cluster0.ezandgv.mongodb.net/Node-APIs?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('connection error', error));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
