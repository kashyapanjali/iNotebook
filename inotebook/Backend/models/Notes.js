const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  Descrption: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    default: "General",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
