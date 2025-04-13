const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchemas");

const User = mongoose.model("class", userSchema);

module.exports = User;