const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const productRouter = require("./routes/admin/product");
const products = require("./routes/products");
const cartRouter = require('./routes/carts');


const port = 3000;
const app = express();

// MiddleWare
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cookieSession({
    keys: ["hkjdshfks876874hsdj"],
  })
);

// Route
app.use(authRouter);
app.use(products);
app.use(productRouter);
app.use(cartRouter);

// Server Runnning
app.listen(port, () => {
  console.log(`Server is Runing Port on : 3000`);
});
