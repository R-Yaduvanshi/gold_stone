const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");

app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 7000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello From Gold STone ");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connecting to DB Successfull");
  } catch (err) {
    console.log(err);
    console.log("Connecting to DB Unsuccessfull");
  }
  console.log(`Server running on port Number ${PORT}`);
});
