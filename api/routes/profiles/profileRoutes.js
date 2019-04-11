"use strict";

const express = require("express");
const router = express.Router();

const profileService = require("./profileService");
const roleCheck = require("../../middleware/roleCheck");
const auth = require("../../middleware/auth");

//@route     GET api/profile/
//@desc      get current users profile
//@access    PRIVATE
router.get("/", auth, async (req, res) => {
  const errs = {};
  const profile = await profileService.findProfileById(req.user.id);

  if (!profile) {
    errs.noprofile = "There is no profile for this user";
    return res.status(404).json(errs);
  }
  res.json(profile);
});

//@route     GET api/profiles/
//@desc      get all profiles
//@access    PRIVATE AGENT ADMIN
router.get("/all", auth, roleCheck(["agent", "admin"]), async (req, res) => {
  try {
    const profiles = await profileService.findAllProfiles();
    if (!profiles) {
      errs.noprofile = "There are no profiles";
      return res.status(404).json(errs);
    }
    res.json(profiles);
  } catch (e) {
    console.log(e);
    throw e;
  }
});

//@route     POST api/profile/
//@desc      create/update current users profile
//@access    PRIVATE
router.post("/", auth, async (req, res) => {
  const errs = {};
  const profileFields = {};
  profileFields.user = req.user.id;

  profileFields.gender = req.user.gender;
  profileFields.birthday = req.user.birthday;
  profileFields.birthCity = req.user.birthCity;
  profileFields.birthCountry = req.user.birthCountry;
  profileFields.citizenship = req.user.citizenship;
  profileFields.language = req.user.language;
  profileFields.maritalStatus = req.user.maritalStatus;

  const profile = await profileService.findProfileById(req.user.id);
  if (profile) {
    const updatedProfile = profileService.updateProfile(id, profileFields);
    res.json(updatedProfile);
  } else {
    const newProfile = await profileService.createProfile(profileFields);
    res.json(newProfile);
  }
});

exports.router = router;
