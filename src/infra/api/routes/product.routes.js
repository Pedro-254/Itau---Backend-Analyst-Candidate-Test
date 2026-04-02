const express = require('express');

const router = express.Router();

const Product = require("../../database/schemas/product.schema")

// POST /products  
router.post('/create', async (req, res) => {
  try{
    const doc = await Product.create(req.body);
    res.status(201).json(doc);
  } catch (err){
    console.log(err)
  }
});

// GET /products  
router.get('/', async (req, res) => {
  const ownerID = req.query.ownerID
  try{
    if (!ownerID) {
      return res.status(400).json({message: 'ownerID é obrigatório'})
    }

    const docs = await Product.find({ownerID})
    res.status(200).json(docs)

  } catch (err){
    console.log(err)
  }
});

module.exports = router;