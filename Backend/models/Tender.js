const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    buffer_time: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const TenderModel = mongoose.model("tenders", TenderSchema);
module.exports = TenderModel;
