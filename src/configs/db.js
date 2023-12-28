const mongoose = require("mongoose");

let DATABASE = "mongodb://127.0.0.1/clone"

function connects() {
  return mongoose.connect(DATABASE)
    .then(() => {
      console.log("Database Connected successfully ")
    })
    .catch((error) => {
      console.log("Database Some Error ")
    });
}

module.exports = connects;