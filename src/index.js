const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/DesafioItau';

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


//Rotas
const productRoutes = require("./infra/api/routes/product.routes");
app.use('/products', productRoutes);