import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    validate: {
      validator: function (v) {
        // Custom validator function to check if the phone number has 10 digits
        return /^[0-9]{10}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number! Must be 10 digits.`,
    },
    required: true,
  },
  img: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
