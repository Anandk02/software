const express = require("express");
const multer = require("multer");
const productRepo = require("../../repositories/product");
const { handleErrors, requireAuth } = require("./middlewares");
const { checkTitle, checkPrice } = require("./validators");
const productsNewTamplate = require("../../views/admin/products/new");
const productIndexTamplate = require("../../views/admin/products/index");
const productEditTamplate = require("../../views/admin/products/edit");

const router = express.Router();
var upload = multer({
  dest: "uploads/",
  storage: multer.memoryStorage(),
});

router.get("/admin/product", requireAuth, async (req, res) => {
  const products = await productRepo.getAll();
  res.send(productIndexTamplate({ products }));
});

router.get("/admin/product/new", requireAuth, (req, res) => {
  res.send(productsNewTamplate({}));
});

router.post(
  "/admin/product/new",
  requireAuth,
  upload.single("image"),
  [checkTitle, checkPrice],
  handleErrors(productsNewTamplate),
  async (req, res) => {
    const images = req.file.buffer.toString("base64");
    const { title, price } = req.body;
    await productRepo.create({ title, price, images });
    res.redirect("/admin/product");
  }
);

router.get("/admin/product/:id/edit", requireAuth, async (req, res) => {
  const product = await productRepo.getOne(req.params.id);

  if (!product) {
    return res.send("Product Not Found");
  }
  res.send(productEditTamplate({ product }));
});

router.post("/admin/product/:id/edit", requireAuth,
upload.single("image"),
[checkTitle, checkPrice],
handleErrors(productEditTamplate, async (req) =>{

  const product = productRepo.getOne(req.params.id);
  return {product}


}), async (req, res) => {

  const changes = req.body;

  if(req.file){
    changes.image = req.file.buffer.toString('base64');
  }

    try{
      await productRepo.update(req.params.id, changes)
    }catch(err){
      console.log(err)
      return res.send('Could not find Item');
    }
    res.redirect('/admin/product');
});


router.post('/admin/product/:id/delete', requireAuth, async(req , res) => {

  await productRepo.delete(req.params.id);
  res.redirect('/admin/product')

})



module.exports = router;
