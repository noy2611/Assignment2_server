// Description: It has all the methods for the plan model.
const PlanRepository = require("../repository/plan.repository");
const planRepository = new PlanRepository();

exports.planController = {
  async getAllPlans(req, res) {
    try {
      const plans = await planRepository.find();
      res.status(200).json({
        status: 200,
        message: "Success",
        data: plans,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  async getPlanById(req, res) {
    try {
      const { id } = req.params;
      console.log("Requested Plan ID:", id);

      const plan = await planRepository.retrieve(id);
      console.log("Retrieved Plan:", plan);

      if (!plan) {
        res.status(404).json({
          status: 404,
          message: "Plan not found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Success",
          data: plan,
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  async createPlan(req, res) {
    try {
      const { body: Plan } = req;
      const createdPlan = await planRepository.create(Plan);

      res.status(201).json({
        status: 201,
        message: "Plan created",
        data: createdPlan,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  async updatePlan(req, res) {
    try {
      const {
        body: Plan,
        params: { id },
      } = req;
      const updatedPlan = await planRepository.update(id, Plan);

      if (!updatedPlan) {
        res.status(404).json({
          status: 404,
          message: "Plan not found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Plan updated",
          data: updatedPlan,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  async deletePlan(req, res) {
    try {
      const { id } = req.params;
      const deletedPlan = await planRepository.delete(id);

      if (!deletedPlan) {
        res.status(404).json({
          status: 404,
          message: "Plan not found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Plan deleted",
          data: deletedPlan,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};
