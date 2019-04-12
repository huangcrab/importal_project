"use strict";

const { model: Employment } = require("./employmentModel");

exports.findProfileById = async id => {
  try {
    return await Profile.findOne({ user: id }).populate("user", [
      "name",
      "avatar"
    ]);
  } catch (e) {
    throw e;
  }
};

exports.findE = async () => {
  try {
    return await Profile.find().populate("user", ["name", "avatar"]);
  } catch (e) {
    throw e;
  }
};

module.exports.removeEmployment = async id => {
  try {
    return await Employment.findOneAndDelete({ _id: id });
  } catch (e) {
    throw e;
  }
};

module.exports.create = async fields => {
  try {
    return await new Employment(fields).save();
  } catch (e) {
    throw e;
  }
};
