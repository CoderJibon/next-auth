"use server";
import mongoDBConnection from "@/config/mongoDBConnection.js";
import User from "@/models/User.js";
import bcrypt from "bcrypt";
// user created
export const createUser = async (formData) => {
  //database connection
  await mongoDBConnection();
  //register user
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  //create user
  await User.create({ name, email, password: bcrypt.hashSync(password, 10) });
};
// user login
export const loginUser = async (formData) => {
  //database connection
  await mongoDBConnection();
  //login user form data
  const email = formData.get("email");
  const password = formData.get("password");
  //login user
  console.log(email, password);
};
