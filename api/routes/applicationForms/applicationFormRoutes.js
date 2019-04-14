"use strict";

const express = require("express");
const router = express.Router();

const applicationFormService = require("./applicationFormService");
const roleCheck = require("../../middleware/roleCheck");
const auth = require("../../middleware/auth");

//@route     GET api/applicationForms/all
//@desc      get all applicationForms
//@access    PRIVATE
router.get("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const forms = await applicationFormService.findApplicationForms();

    if (forms.length === 0) {
      errs.noforms = "There is no froms available";
      return res.status(404).json(errs);
    }
    res.json({ data: forms });
  } catch (e) {
    next(e);
  }
});

//@route     GET api/applicationForms/:form_id
//@desc      get applicationForm by id
//@access    PRIVATE
router.get("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const forms = await applicationFormService.findApplicationFormById(
      req.form.id
    );

    if (forms.length === 0) {
      errs.noforms = "There is no froms available";
      return res.status(404).json(errs);
    }
    res.json({ data: forms });
  } catch (e) {
    next(e);
  }
});

//@route     POST api/applications/
//@desc      create/update applications
//@access    PRIVATE
router.post("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const applicationFields = {};
    applicationFields.user = req.user.id;

    const profile = await profileService.findProfileById(req.user.id);
    if (profile) {
      const updatedProfile = profileService.updateProfile(id, profileFields);
      res.json(updatedProfile);
    } else {
      const newProfile = await profileService.createProfile(profileFields);
      res.json(newProfile);
    }
  } catch (e) {
    next(e);
  }
});

exports.router = router;
