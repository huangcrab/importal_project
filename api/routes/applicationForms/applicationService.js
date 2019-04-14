"use strict";

const { model: ApplicationForm } = require("./applicationFormModel");

exports.findApplicationForms = async () => {
  try {
    return await ApplicationForm.find();
  } catch (e) {
    throw e;
  }
};

exports.findApplicationFormById = async id => {
  try {
    return await ApplicationForm.findById({ id });
  } catch (e) {
    throw e;
  }
};

module.exports.updateApplicationForm = async (id, fields) => {
  try {
    return await ApplicationForm.findByIdAndUpdate(
      { id },
      { $set: fields },
      { new: true }
    );
  } catch (e) {
    throw e;
  }
};

module.exports.createApplicationForm = async fields => {
  try {
    return await new ApplicationForm(fields).save();
  } catch (e) {
    throw e;
  }
};
