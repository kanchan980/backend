require("dotenv").config();

const express = require("express");

const cors = require("cors");

require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const productRoutes =
require("./routes/productRoutes");

const userRoutes =
require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running on Port ${PORT}`
  );
});