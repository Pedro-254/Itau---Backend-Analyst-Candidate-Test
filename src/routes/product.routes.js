const express = require('express');

const router = express.Router();

// POST /products  (o prefixo vem no app.use em index.js)
router.post('/', (req, res) => {
  // lógica do create product
  console.log("teste")
});

module.exports = router;