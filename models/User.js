const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: String,
});

// loading the model. if it already exist then load it otherwise create it.
mongoose.model("users", UserSchema);
