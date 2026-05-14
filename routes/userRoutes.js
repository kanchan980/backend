const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUsersPagination,
  getSingleUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/", createUser);

router.get("/", getUsersPagination);

router.get("/all", getAllUsers);

router.get("/:id", getSingleUser);

router.delete("/:id", deleteUser);

module.exports = router;