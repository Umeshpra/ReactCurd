const TenderModel = require("../models/Tender");


class TenderController {
  static tenderInsert = async (req, res) => {
    console.log(req.body);
    try {
      const result = new TenderModel(req.body);
      const savetender = await result.save();
      res.status(201).json({
        status: "success",
        message: "Tender registration successfully",
        savetender,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error registering tender" });
    }
  };
  static tenderDisplay = async (req, res) => {
    console.log(req.body);
    try {
      const data = await TenderModel.find();
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "no tender display" });
    }
  };
  static tenderView = async (req, res) => {
    // console.log(req.body);
    try {
      const data = await TenderModel.findById(req.params.id);
      res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "tender display" });
    }
  };
  static tenderUpdate = async (req, res) => {
    console.log(req.body);
    try {
      const data = await TenderModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!data) {
        return res.status(404).json({ message: "Tender not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to update tender", error: error.message });
    }
  };
  static tenderDelete = async (req, res) => {
    console.log(req.body);
    try {
      const data = await TenderModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ messege: "tender deleted successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to delete tender", error: error.message });
    }
  };
}

module.exports = TenderController;
