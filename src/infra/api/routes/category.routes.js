const express = require("express");

const router = express.Router();

// Repositories
const CategoryRepositoryMongo = require("../../database/repository/category.repository")
const categoryRepositoryMongo = new CategoryRepositoryMongo()

// Use Cases
const CreateCategoryUseCase = require("../../../application/category/createCategory")
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryMongo)

const FindCategoryUseCase = require("../../../application/category/findCategory")
const findCategoryUseCase = new FindCategoryUseCase(categoryRepositoryMongo)

const UpdateCategoryUseCase = require("../../../application/category/updateCategory")
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepositoryMongo)

const DeleteCategoryUseCase = require("../../../application/category/deleteCategory")
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepositoryMongo)

router.get('/', async (req,res) => {
    try{

        const result = await findCategoryUseCase.execute(req.query)
        res.status(200).json(result)
    
    } catch (err){
    console.log(err)
    }
})

router.post('/create', async (req,res) => {
    try {
        const body = req.body
        const result = await createCategoryUseCase.execute(body)
        
        return res.status(201).json(result)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

router.put('/update', async (req,res) => {
    try {
        const body = req.body
        const result = await updateCategoryUseCase.execute(body)
        
        return res.status(201).json(result)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

router.delete('/delete', async (req,res) => {
    try {
        const body = req.body
        const result = await deleteCategoryUseCase.execute(body)
        
        return res.status(201).json(result)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

module.exports = router;