const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmploymentScehma = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: "profiles"
  },
  title: String,
  company: String,
  location: String,
  from: Date,
  to: Date,
  current: Boolean
});

exports.model = mongoose.model("employments", EmploymentScehma);
