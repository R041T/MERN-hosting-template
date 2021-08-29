const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();
const path = require("path");
const port = process.env.PORT;

app.use(cors());
var db = require("./routes/api/databaseConn");
var college = require("./routes/api/college");
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/", college);

const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://oneshot-task.herokuapp.com/",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
