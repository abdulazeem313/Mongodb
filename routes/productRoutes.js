const express = require('express')
const {getAllProducts,createProducts}=require('../controllers/productController')
const router = express.Router()

router.get('/', getAllProducts)
router.post('/', createProducts)

module.exports = router

