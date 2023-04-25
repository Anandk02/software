const { validationResult } = require("express-validator");

module.exports = {
  handleErrors(tamplateFunc, callBack) {
    return async (req, res, next) => {
      const errors = validationResult(req);

      let data = {};
      if (callBack) {
        data = await callBack(req);
      }

      if (!errors.isEmpty()) {
        return res.send(tamplateFunc({ errors , ...data}));
      }
      next();
    };
  },

  requireAuth(req, res, next) {
    if (!req.session.userId) {
      res.redirect("/accounts/login");
    }
    next();
  },
};
