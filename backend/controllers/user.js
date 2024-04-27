import createError from "../error.js";
import Users from "../models/Users.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only update your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json("USer has beeen deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete  your account"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
};
