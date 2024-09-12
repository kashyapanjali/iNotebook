const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 3000;

//to check new request
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  //http://localhost:3000
});
