const express = require('express');

const router = express.Router();

const Product = require("../../database/schemas/product.schema")

// POST /products  (o prefixo vem no app.use em index.js)
router.post('/create', async (req, res) => {
  try{
    const doc = await Product.create(req.body);
    res.status(201).json(doc);
  } catch (err){
    console.log(err)
  }
});

module.exports = router;