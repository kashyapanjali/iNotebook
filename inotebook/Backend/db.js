const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/iNoteBook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    // , {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // });
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = connectToMongo;
