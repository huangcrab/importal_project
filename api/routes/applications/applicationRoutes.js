"use strict";

const express = require("express");
const router = express.Router();

const applicationService = require("./applicationService");
const roleCheck = require("../../middleware/roleCheck");
const auth = require("../../middleware/auth");

//@route     GET api/applications/
//@desc      get current users applications
//@access    PRIVATE
router.get("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const applications = await applicationService.findApplicationsByUserId(
      req.user.id
    );

    if (applications.length === 0) {
      errs.noprofile = "There is no applications for this user";
      return res.status(404).json(errs);
    }
    res.json({ data: applications });
  } catch (e) {
    next(e);
  }
});

//@route     GET api/profiles/all
//@desc      get all profiles
//@access    PRIVATE AGENT ADMIN
router.get(
  "/all",
  auth,
  roleCheck(["agent", "admin"]),
  async (req, res, next) => {
    try {
      const profiles = await profileService.findAllProfiles();
      if (!profiles) {
        errs.noprofile = "There are no profiles";
        return res.status(404).json(errs);
      }
      res.json(profiles);
    } catch (e) {
      next(e);
    }
  }
);

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
