const { check } = require("express-validator");
const userRepo = require("../../repositories/user");

module.exports = {
  requriedName: check("name")
    .not()
    .isEmpty()
    .withMessage("Pleae Enter your Full Name")
    .isLength({ min: 5, max: 20 })
    .withMessage("Your Name Should be 5 characters or more!"),

  requireEmail: check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Must Be a valid Email")
    .custom(async (email) => {
      const existingUser = await userRepo.getOneBy({ email });
      if (existingUser) {
        throw new Error("Email Already in Use");
      }
    }),
  requirePassword: check("Password")
    .trim()
    .isLength({ min: 8, max: 20 })
    .not()
    .withMessage("Use 8 characters or more for your password"),

  confirmPassword: check("cnfPassword")
    .trim()
    .isLength({ min: 8, max: 20 })
    .not()
    .withMessage("Use 8 characters or more for your password")
    .custom((cnfPassword, { req }) => {
      if (cnfPassword !== req.body.Password) {
        throw new Error("Those passwords didn’t match. Try again.");
      }
    }),
  checkUserEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Enter a valid Email")
    .custom(async (email) => {
      const user = await userRepo.getOneBy({ email });
      if (!user) {
        throw new Error("No Account Exist With This Email");
      }
    }),
  checkUserPassword: check("Password")
    .trim()
    .custom(async (Password, { req }) => {
      const user = await userRepo.getOneBy({ email: req.body.email });

      if (!user) {
        throw new Error("Invalid Email or Password ");
      }
      const validPassword = await userRepo.comparePassword(
        user.Password,
        Password
      );

      if (!validPassword) {
        throw new Error("Invalid Email or Password ");
      }
    }),

  checkPrice: check("price")
    .trim()
    .toInt()
    .isFloat({min: 1, })
    .withMessage("Must Be Price greater than ₹ 1 "),
  checkTitle: check("title")
    .trim()
    .isString()
    .isLength({min:5, max:40 })
    .withMessage('Must be Between 5 and More Characters!'),
};
