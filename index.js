const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const productRouter = require("./routes/admin/product");
const products = require("./routes/products");

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

// Server Runnning
app.listen(3000, () => {
  console.log("Server is Runing Port : 3000");
});
