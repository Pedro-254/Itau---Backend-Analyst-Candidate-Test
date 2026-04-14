const express = require('express');

const router = express.Router();

// Schemas
const Product = require("../../database/schemas/product.schema")

// Repositories
const ProductRepositoryMongo = require("../../database/repository/product.repository")
const productRepository = new ProductRepositoryMongo();

const CategoryRepositoryMongo = require("../../database/repository/category.repository")
const categoryRepository = new CategoryRepositoryMongo();


// Use Cases
const CreateProductUseCase = require("../../../application/product/createProduct")
const createProductUseCase = new CreateProductUseCase(productRepository, categoryRepository);

const FindProductUseCase = require("../../../application/product/findProducts")
const findProductUseCase = new FindProductUseCase(productRepository);

const UpdateProductUseCase = require("../../../application/product/updateProduct")
const updateProductUseCase = new UpdateProductUseCase(productRepository,categoryRepository);

const DeleteProductUseCase = require("../../../application/product/deleteProduct")
const deleteProductUseCase = new DeleteProductUseCase(productRepository);

router.post('/create', async (req, res) => {
  try {
    const result = await createProductUseCase.execute(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.put('/update', async (req, res) => {
  try {
    const result = await updateProductUseCase.execute(req.body);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try{
    const result = await findProductUseCase.execute(req.query)
    res.status(200).json(result)

  } catch (err){
    console.log(err)
  }
});

router.delete('/delete', async (req,res) => {
  try {
      const body = req.body
      const result = await deleteProductUseCase.execute(body)
      
      return res.status(201).json(result)

  } catch (error) {
      return res.status(400).json({ message: error.message })
  }
})

module.exports = router;