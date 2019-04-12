"use strict";

const express = require("express");
const router = express.Router();

const profileService = require("./profileService");
const roleCheck = require("../../middleware/roleCheck");
const auth = require("../../middleware/auth");

//@route     GET api/profiles/
//@desc      get current users profile
//@access    PRIVATE
router.get("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const profile = await profileService.findProfileById(req.user.id);

    if (!profile) {
      errs.noprofile = "There is no profile for this user";
      return res.status(404).json(errs);
    }
    res.json(profile);
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

//@route     POST api/profiles/
//@desc      create/update current users profile
//@access    PRIVATE
router.post("/", auth, async (req, res, next) => {
  try {
    const errs = {};
    const profileFields = {};
    profileFields.user = req.user.id;

    profileFields.gender = req.body.gender;
    profileFields.birthday = req.body.birthday;
    profileFields.birthCity = req.body.birthCity;
    profileFields.birthCountry = req.body.birthCountry;
    profileFields.citizenship = req.body.citizenship;
    profileFields.language = req.body.language;
    profileFields.maritalStatus = req.body.maritalStatus;

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
