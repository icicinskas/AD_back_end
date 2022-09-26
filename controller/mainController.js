const sendRes = require("../middleware/sendRes");
const userDb = require("../shcemas/userProfileSchema");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const { username, passOne, city, gender, age, image, id } = req.body;

    const password = await bcrypt.hash(passOne, 10);

    const user = new userDb({
      username,
      password,
      city,
      gender,
      age,
      image,
      id,
    });

    await user.save();

    res.send({ success: true });
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    const user = await userDb.findOne({ username });

    if (user) {
      const compare = await bcrypt.compare(password, user.password);

      if (compare) {
        let newUser = {
          username: user.username,
          city: user.city,
          gender: user.gender,
          age: user.age,
          image: user.image,
          id: user.id,
        };
        return sendRes(res, "all good", false, newUser);
      }

      // if (compare) return sendRes(res, "all good", false, user);

      return sendRes(res, "Password do not match", true, null);
    }

    return sendRes(res, "User not found", true, null);
  },

  autologin: async (req, res) => {
    console.log({ query: req.query });
    if (req.query) {
      const { username } = req.query;
      const user = await userDb.findOne({ username });

      return sendRes(res, "login is ok", false, { user });
    }

    sendRes(res, "no user session", true, null);
  },

  addImage: async (req, res) => {
    const { username, newImage } = req.body;
    console.log(username, newImage);
    const user = await userDb.findOneAndUpdate(
      { username: username },
      { $addToSet: { image: newImage } },
      { new: true }
    );

    sendRes(res, "It is saved", false, user);
  },

  users: async (req, res) => {
    console.log("ok");
    const users = await userDb.find({ "image.1": { $exists: true } });
    console.log(users);
    return sendRes(res, "all good", false, users);
  },
};
