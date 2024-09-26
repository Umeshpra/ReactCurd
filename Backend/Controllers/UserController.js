const UserModel = require("../models/User");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController {
  static userInsert = async (req, res) => {
    console.log(req.body);
    try {
      const data = new UserModel(req.body);
      const saveuser = await data.save();
      res.status(201).json({
        status: "success",
        messege: "user registration successfully",
        saveuser,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        messege: "registration failed",
      });
    }
  };
  static getalluser = async (req, res) => {
    try {
      const user = await UserModel.find();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({
        status: "error",
        messege: "no users found",
      });
    }
  };
  static userView = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({
        status: "error",
        messege: "no users found",
      });
    }
  };
  static userUpdate = async (req, res) => {
    console.log(req.body);
    try {
      const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "failed to update user", error: error.message });
    }
  };
  static userDelete = async (req, res) => {
    try {
      const data = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "failed to delete user", error: error.message });
    }
  };
}

module.exports = UserController;
