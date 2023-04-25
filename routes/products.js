const express = require("express");
const productIndexTamplate = require("../views/MainPages/index");
const productOveriewTamplate = require('../views/MainPages/productview');
const productRepo = require("../repositories/product");

const router = express.Router();

router.get("/", async (req, res) => {

  const products = await productRepo.getAll();
  
  res.send(productIndexTamplate({ products }));
});

router.get('/product', (req, res) =>{
  res.send('Product!')
})

router.get("/product/:id/overviwe",  async (req, res) => {
  const product = await productRepo.getOne(req.params.id);
  
  if (!product) {
    return res.render('productview');
  }
  console.log(product);
  res.send('Product');
});


module.exports = router;
