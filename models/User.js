import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { Timestamp: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
