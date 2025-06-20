const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  res.send("Login");
};

const dashboard = async (req, res) => {
  const token = Math.floor(Math.random() * 1000);
  res.status(200).json({ msg: token });
};

module.exports = {
  login,
  dashboard,
};
