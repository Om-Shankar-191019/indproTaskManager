import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exist.");
    }

    if (password !== confirmPassword) {
      throw new Error("Password and Confirm Password does not match");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    let tokenExpirationDate;
    if (newUser) {
      tokenExpirationDate = generateToken(newUser._id, res);
    }
    res.status(201).json({
      _id: newUser._id,
      username,
      email,
      tokenExpirationDate,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { usernameOrMail, password } = req.body;

    let user;

    user = await User.findOne({ email: usernameOrMail });
    if (!user) {
      user = await User.findOne({ username: usernameOrMail });
    }

    if (!user) {
      throw new Error("User does not exist");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid Credentials");
    }

    const tokenExpirationDate = generateToken(user._id, res);
    // const token = req.cookies.jwt;
    // console.log("token auth : ", token);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      tokenExpirationDate,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
