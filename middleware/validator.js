const sendRes = require("./sendRes");

module.exports = {
  validateRegister: (req, res, next) => {
    const { passOne, passTwo, username, gender, age } = req.body;

    console.log(gender);

    if (username.length > 20 || username.length < 4)
      return sendRes(res, "Bad username", true);
    if (passOne !== passTwo) return sendRes(res, "Bad password", true);
    // if (gender !== "vyras" || gender !== "moteris")
    //   return sendRes(res, "Bad gender", true);
    if (age < 18 || age > 66) return sendRes(res, "Bad age", true);

    next();
  },
  validateSometihing: (req, res, next) => {
    // blalblalbla
    next();
  },
};
