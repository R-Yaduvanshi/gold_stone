const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const { connection } = require("./config/db");
const { Users } = require("./UserModel/User.model");

app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 7000;
app.use(cors());

app.get("/fetch_user", async (req, res) => {
  try {
    // Fetching user data from the API
    const response = await axios.get("https://gorest.co.in/public-api/users", {
      headers: {
        Authorization:
          "Bearer 13430981da954bb1b059c15ae76c6d22f8c65e23a4cc8b3ea345e56541d80e1d",
      },
    });

    // Storing the user data in the database
    const users = response.data.data;
    // console.log(response.data.data);
    await Users.insertMany(users);

    res.json("Fetching user success");
  } catch (error) {
    console.error("Error in fetching and storing the user data:", error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
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
