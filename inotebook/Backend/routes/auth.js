const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using POST "api/auth/createuser". No login requires
router.post(
  "/createuser",
  [
    // Validation checks
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  //if there are errors, return Bad reuqest and the errors async-await use of promise chain
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Try to create a new user
      let user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });

      // Return the newly created user
      res.json(user);
    } catch (error) {
      // Handle duplicate email error
      if (error.code === 11000) {
        return res.status(400).json({
          error: "A user with this email already exists.",
        });
      }
      // Handle other errors
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
