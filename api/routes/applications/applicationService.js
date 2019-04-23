"use strict";

const { model: Application } = require("./applicationModel");

exports.findApplicationsByUserId = async id => {
  try {
    return await Application.find({ user: id });
  } catch (e) {
    throw e;
  }
};

exports.findApplicationById = async id => {
  try {
    return await Application.findById({ id });
  } catch (e) {
    throw e;
  }
};

module.exports.updateApplication = async (id, fields) => {
  try {
    return await Application.findOneAndUpdate(
      { _id: id },
      { $set: fields },
      { new: true }
    );
  } catch (e) {
    throw e;
  }
};

module.exports.createApplication = async fields => {
  try {
    return await new Application(fields).save();
  } catch (e) {
    throw e;
  }
};
