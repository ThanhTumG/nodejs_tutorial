const User = require("../models/User");

const register = async (req, res) => {
  res.send("Register");
};

const login = async (req, res) => {
  res.send("login");
};

module.exports = { register, login };
