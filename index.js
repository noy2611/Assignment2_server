require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const  MongoStorage  = require("./db/MongoStorage");
const logger = require("morgan");
const port = process.env.PORT || 3000;

// Create an instance of the Express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(logger("dev"))

const { planRouter } = require('./router/plan.router');

app.use('/plan', planRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
