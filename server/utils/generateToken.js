import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  const expirationDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });

  return expirationDate;
};

export default generateToken;
