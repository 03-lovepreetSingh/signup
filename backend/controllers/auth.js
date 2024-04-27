import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Users from "../models/Users.js";
import cerateError from "../error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User is Created");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) return next(cerateError(404, "User not found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(cerateError(400, "Wrong Credentials"));
    const { password, ...others } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
