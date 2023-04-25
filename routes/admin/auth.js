const express = require("express");
const userRepo = require("../../repositories/user");
const signUptamplete = require("../../views/admin/auth/signup");
const signIntamplete = require("../../views/admin/auth/signin");
const { sendWelcomeEmail } = require("../../mail/welcomeMail");
const { handleErrors, requireAuth } = require("./middlewares");
const {
  requriedName,
  requireEmail,
  requirePassword,
  confirmPassword,
  checkUserEmail,
  checkUserPassword,
} = require("./validators");

const router = express.Router();

router.get("/accounts/signup", (req, res) => {
  res.send(signUptamplete({ req }));
});

router.post(
  "/accounts/signup",
  [requriedName, requireEmail, requirePassword, confirmPassword],

  handleErrors(signUptamplete),

  async (req, res) => {
    const { name, email, Password, cnfPassword } = req.body;

    // Creteing a user in our
    const user = await userRepo.create({
      name: name,
      email: email,
      Password: Password,
    });
    sendWelcomeEmail(user.email, user.name);
    //Session
    req.session.userId = user.id;
    res.redirect("/admin/product");
  }
);

router.get("/accounts/login", (req, res) => {
  res.send(signIntamplete({}));
});

router.post(
  "/accounts/login",
  [checkUserEmail, checkUserPassword],
  handleErrors(signIntamplete),
  async (req, res, next) => {
    const { email } = req.body;

    const user = await userRepo.getOneBy({ email });

    req.session.userId = user.id;
    res.redirect("/admin/product");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

module.exports = router;
