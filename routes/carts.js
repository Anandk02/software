const express = require("express");
const cartRepo = require("../repositories/carts");
const productRepo = require("../repositories/product");
const cartShowTamplate = require("../views/carts/show");
const router = express.Router();

// Recive  a post request for add a item
router.post("/cart/products", async (req, res) => {
  // Figure out the cart
  let cart;
  if (!req.session.cartId) {
    // We don't have a cart we need to crtate One

    // and store the cart id on the req.session.cartId properrty

    cart = await cartRepo.create({ item: [] });
    req.session.cartId = cart.id;
  } else {
    // We have a cart! lets get it form Repository
    cart = await cartRepo.getOne(req.session.cartId);
  }

  const existingItem = cart.item.find((item) => item.id === req.body.productId);

  if (existingItem) {
    // Incerment quantity and save item cart
    existingItem.quantity++;
  } else {
    // add new product id to item array
    cart.item.push({ id: req.body.productId, quantity: 1 });
  }

  await cartRepo.update(cart.id, {
    item: cart.item,
  });

  console.log(req.body.productId);
  res.send("Product Added into cart");
});

// Recive a get request for shoe item in cart

router.get("/cart", async (req, res) => {
  if (!req.session.cartId) {
    return res.redirect("/");
  }

  const cart = await cartRepo.getOne(req.session.cartId);

  for (let items of cart.item) {
    const product = await productRepo.getOne(items.id);
    items.product = product;
  }
  res.send(cartShowTamplate({ items: cart.item }));
});

// Recive a post request for delete item in to cart
router.post('/cart/products/delete', async (req, res) => {

  const {itemId} = req.body;
  const cart = await cartRepo.getOne(req.session.cartId);

  const items = cart.item.filter(item => item.id !== itemId);

  await cartRepo.update(req.session.cartId, { items });

  res.redirect('/cart');

})

module.exports = router;
