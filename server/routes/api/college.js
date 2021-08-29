const express = require("express");
const router = express.Router();

var db = require("./databaseConn");
router.post("/test", async (req, res) => {
  try {
    const Cat = db.model("Cat", { name: String });

    const kitty = new Cat({ name: "Zildjian" });
    kitty.save().then(() => console.log("meow"));
  } catch (error) {}
});

module.exports = router;
