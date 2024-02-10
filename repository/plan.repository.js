// Description: Repository for plan.
const MongoStorage = require("../db/MongoStorage");

module.exports = class PlanRepository {
  constructor() {
    if (
      process.env.DB_HOST &&
      process.env.DB_USERNAME &&
      process.env.DB_PASSWORD
    ) {
      this.storage = new MongoStorage("plan");
    }
  }

  async find() {
    return this.storage.find();
  }
  async retrieve(id) {
    return this.storage.retrieve(id);
  }
  async create(plan) {
    return this.storage.create(plan);
  }
  async update(id, plan) {
    return this.storage.update(id, plan);
  }
  async delete(id) {
    const result = await this.storage.delete(id);
    return result ? result : null;
  }
};
