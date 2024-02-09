// // Code to connect to MongoDB and perform CRUD operations

const { EventEmitter } = require("events");
const mongoose = require("mongoose");
const path = require("path");

module.exports = class MongoStorage extends EventEmitter {
  constructor(plan) {
    super();
    this.plan = plan; 
    this.model = require(path.join(__dirname, `../models/${plan}.model`));
    this.connect();
  }

  connect() {
    const connectionUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    mongoose
      .connect(connectionUrl)
      .then(() =>
        console.log(`Connected to ${this.plan} collection in MongoDB`)
      )
      .catch((err) => console.log(`Error connecting to MongoDB ${err}`));
  }

  find() {
    return this.model.find({});
  }

  retrieve(id) {
    return this.model.findOne({ id: Number(id) });
  }
  
  create(plan) {
    const newPlan = new this.model(plan);
    newPlan.save();
  }


  delete(id) {
    return this.model.findOneAndDelete({ id })
      .then(deletedPlan => {
        if (!deletedPlan) {
          throw new Error("Plan not found");
        }
        return deletedPlan;
      });
  }
  

  update(id, plan) {
    return this.model.updateOne({ id }, plan);
  }
  
};
