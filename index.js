const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/product", productRoutes);

app.get("/check", function (req, res) {
  res.send("Hello u get answer from server by FATHAN");
});

mongoose
  .connect(process.env.DB_MONGGO)
  .then(() => {
    console.log("Connected to databases");
    app.listen(process.env.DB_HOST, () => {
      console.log("Server Running !!!");
    });
  })
  .catch(() => console.log("fail to database"));
