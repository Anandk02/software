const express = require("express");
const productIndexTamplate = require("../views/MainPages/index");
const productOveriewTamplate = require("../views/MainPages/productview");
const showabout = require("../views/about/about");
const productShow = require("../views/MainPages/product");
const checkoutshow = require('../views/carts/checkout');
const contactUS = require('../views/about/contact');
const productRepo = require("../repositories/product");
const Invoices = require("../views/invoices/shiping");

const router = express.Router();

// GET INDEX PAGE LIVE WITH PRODUCT LISTING
router.get("/", async (req, res) => {
  const products = await productRepo.getAll();
  res.send(productIndexTamplate({ products }));
});

router.get("/shop", async (req, res) => {
  const products = await productRepo.getAll();
  res.send(productShow({ products }));
});

// SHOW SINGLE PRODUCT OVERVIEW
// router.get("/product/:id/overviwe", async (req, res) => {
//   const product = await productRepo.getOne(req.params.id);

//   if (!product) {
//     return res.send("No product with this Url");
//   }
//   console.log(product);
//   res.send("Product avilable with this");
// });


// CHECKOUT PAGE SHOw

router.get("/checkout", (req, res) => {
  res.send(checkoutshow({ }));
});

// CONATCT US PAGE
router.get("/contact", (req, res) => {
  res.send(contactUS({ }));
});

// ABOUT US

router.get("/about-us", (req, res) => {
  res.send(showabout({ }));
});

// INVOICES
router.get("/invoice", (req, res) => {
  res.send(Invoices({ req }));
});

module.exports = router;
