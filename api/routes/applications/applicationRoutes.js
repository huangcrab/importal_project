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

//@route     GET api/applications/:app_id
//@desc      get users application by id
//@access    PRIVATE
router.get("/:app_id", auth, async (req, res, next) => {
  try {
    const errs = {};
    const { id } = req.user;
    const application = await applicationService.findApplicationById(
      req.params.app_id
    );
    if (application) {
      if (id !== application.user) {
        res.status(401).json({
          message: "You are not authoraized to view this application"
        });
      }
      res.json({ data: applications });
    } else {
      res.status(404).json({ message: "Application Not Found" });
    }
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
    const applicationFields = req.body;
    const applications = await applicationService.findApplicationsByUserId(
      req.user.id
    );
    // if (applications.length === 0) {
    //   errs.noprofile = "There is no applications for this user";
    //   return res.status(404).json(errs);
    // }
    console.log(applications.map(application => application._id));
    console.log(applicationFields.id);
    if (
      applications
        .map(application => application._id.toString())
        .indexOf(applicationFields.id) !== -1
    ) {
      console.log("tet");
      //FOUND - UPDATE
      const updatedApplication = await applicationService.updateApplication(
        applicationFields.id,
        applicationFields
      );
      res.json({ data: updatedApplication });
    } else {
      delete applicationFields.id;
      applicationFields.user = req.user.id;
      const newApplication = await applicationService.createApplication(
        applicationFields
      );
      res.json({ data: newApplication });
    }
  } catch (e) {
    next(e);
  }
});

exports.router = router;
