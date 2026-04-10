const express = require("express");

const router = express.Router();

const CategoryRepositoryMongo = require("../../database/repository/category.repository")
const categoryRepositoryMongo = new CategoryRepositoryMongo()

const CreateCategoryUseCase = require("../../../application/category/createCategory")

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryMongo)

router.post('/create', async (req,res) => {
    try {
        const body = req.body
        const result = await createCategoryUseCase.execute(body)
        
        return res.status(201).json(result)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router;