const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./Routes/bookRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/books", bookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and Running on Port",
        process.env.PORT
      );
    });
  })
  .catch((err) => console.log(err));
