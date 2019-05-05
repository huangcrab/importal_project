const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data, role = "") {
  let errs = {};

  data.nickname = isEmpty(data.nickname) ? "" : data.nickname;
  data.email = !isEmpty(data.email) ? data.email : "";
  if (role !== "agent") {
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  }

  if (Validator.isEmpty(data.email)) {
    errs.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errs.email = "Email is invalid";
  }

  if (role !== "agent") {
    if (!Validator.isLength(data.nickname, { min: 2, max: 30 })) {
      errs.nickname = "Name must be between 2 and 30 characters";
    }

    if (Validator.isEmpty(data.nickname)) {
      errs.nickname = "Name field is required";
    }
    if (Validator.isEmpty(data.password)) {
      errs.password = "Password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6 })) {
      errs.password = "Password much be at least 6 characters";
    }

    if (Validator.isEmpty(data.password2)) {
      errs.password2 = "Confirm Password field is required";
    }

    if (!Validator.equals(data.password, data.password2)) {
      errs.password2 = "Passwords must match";
    }
  }

  return {
    errs,
    isValid: isEmpty(errs)
  };
};
