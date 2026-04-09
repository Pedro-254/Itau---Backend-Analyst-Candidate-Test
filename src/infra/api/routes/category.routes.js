const express = require("express");

const router = express.Router();

const CategoryRepositoryMongo = require("../../database/repository/category.repository")
const categoryRepositoryMongo = new CategoryRepositoryMongo()

const CreateCategoryUseCase = require("../../../application/category/createCategory")

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryMongo)

router.post('/create', async (req,res) => {
    try {
        const body = req.body
        const result = createCategoryUseCase.execute(body)
        
        return res.status(201).json(result)

    } catch (error) {
        
    }
})

module.exports = router;