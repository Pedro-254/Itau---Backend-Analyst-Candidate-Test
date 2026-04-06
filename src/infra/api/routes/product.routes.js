const express = require('express');

const router = express.Router();

const Product = require("../../database/schemas/product.schema")

const CreateProductUseCase = require("../../../application/product/createProduct")
const FindProductUseCase = require("../../../application/product/findProducts")
const ProductRepositoryMongo = require("../../database/repository/product.repository")

const productRepository = new ProductRepositoryMongo();
const createProductUseCase = new CreateProductUseCase(productRepository);
const fincdProductUseCase = new FindProductUseCase();


// POST /products  
router.post('/create', async (req, res) => {
  try {
    const result = await createProductUseCase.execute(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// GET /products  
router.get('/', async (req, res) => {
  const {ownerID, page, limit} = req.query;
  try{
    const result = await
    res.status(200).json(docs)

  } catch (err){
    console.log(err)
  }
});

module.exports = router;