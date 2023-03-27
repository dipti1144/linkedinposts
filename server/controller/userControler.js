const { hashpassword, comparePassword } = require("../helper/authHelper");
const User = require("../model/userModel");
const JWT = require("jsonwebtoken");


const signupUser = async (req, res) => {
  try {
    const { name, email, password, gender, city, age, is_married } = req.body;

    const exitUser = await User.findOne({ email });
    if (exitUser) {
      return res.status(200).send({ msg: "Already Register please login" });
    }

    const hashedPassword = await hashpassword(password);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      gender,
      city,
      age,
      is_married,
    }).save();

    res.status(200).send({ msg: "user Register successfully", user });
  } catch (error) {
    res.status(401).send({ msg: "error in registration" });
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return req.status(401).status({ msg: "Invalid email or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return req.status(404).send({ msg: "Email is not registered" });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return req.status(404).send({ msg: "Invalid password" });
    }

    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res
      .status(200)
      .send({
        msg: "user Login",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          city: user.city,
          is_married: user.is_married,
        },
        token,
      });
  } catch (error) {
    res.status(404).send({"msg":"error in login"})
  }
};

module.exports = {
  signupUser,
  loginuser,
};
