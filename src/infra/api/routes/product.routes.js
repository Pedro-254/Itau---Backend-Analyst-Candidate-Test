const express = require('express');

const router = express.Router();

const Product = require("../../database/schemas/product.schema")

const ProductRepositoryMongo = require("../../database/repository/product.repository")
const productRepository = new ProductRepositoryMongo();

const CategoryRepositoryMongo = require("../../database/repository/category.repository")
const categoryRepository = new CategoryRepositoryMongo();



const CreateProductUseCase = require("../../../application/product/createProduct")
const FindProductUseCase = require("../../../application/product/findProducts")
const ChangeProductCategory = require("../../../application/product/changeProductCategory")

const createProductUseCase = new CreateProductUseCase(productRepository, categoryRepository);
const findProductUseCase = new FindProductUseCase(productRepository);
const changeProductCategory = new ChangeProductCategory(productRepository);


// POST /products  
router.post('/create', async (req, res) => {
  try {
    const result = await createProductUseCase.execute(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// POST /products  
router.post('/update', async (req, res) => {
  try {
    const result = await createProductUseCase.execute(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// GET /products  
router.get('/', async (req, res) => {
  try{
    const result = await findProductUseCase.execute(req.query)
    res.status(200).json(result)

  } catch (err){
    console.log(err)
  }
});

module.exports = router;