// Description: It has all the methods for the plan model.
const PlanRepository = require("../repository/plan.repository");
const planRepository = new PlanRepository();
const {
  ServerError,
  BadRequestError,
  NotFoundError,
} = require("../errors/error");

exports.planController = {
  async getAllPlans(req, res) {
    try {
      const plans = await planRepository.find();

      if (!plans || plans.length === 0) {
        throw new NotFoundError("No plans found");
      }

      res.status(200).json({
        status: 200,
        message: "Success",
        data: plans,
      });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      if (error instanceof ServerError) {
        res.status(500).json({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        res.status(error.status || 500).json({
          status: error.status || 500,
          message: error.message,
        });
      }
    }
  },

  async getPlanById(req, res) {
    try {
      const { id } = req.params;
      console.log("Requested Plan ID:", id);

      const plan = await planRepository.retrieve(id);
      console.log("Retrieved Plan:", plan);

      if (!plan) {
        throw new NotFoundError(`Plan with ID ${id} not found`);
      } else {
        res.status(200).json({
          status: 200,
          message: "Success",
          data: plan,
        });
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.status(error.status || 500).json({
        status: error.status || 500,
        message: error.message,
      });
    }
  },

  async createPlan(req, res) {
    try {
      const { body: plan } = req;

      if (!plan.name || !plan.location || !plan.details) {
        throw new BadRequestError("Plan data is incomplete");
      }

      const createdPlan = await planRepository.create(plan);
      res.status(201).json({
        status: 201,
        message: "Plan created",
        data: createdPlan,
      });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      if (error instanceof BadRequestError) {
        res.status(400).json({
          status: 400,
          message: error.message,
        });
      } else {
        res.status(error.status || 500).json({
          status: error.status || 500,
          message: error.message,
        });
      }
    }
  },

  async updatePlan(req, res) {
    try {
      const {
        body: updatedPlan,
        params: { id },
      } = req;

      if (!updatedPlan || Object.keys(updatedPlan).length === 0) {
        throw new BadRequestError("Updated plan data is missing");
      }

      const result = await planRepository.update(id, updatedPlan);

      if (!result) {
        throw new NotFoundError(`Plan with ID ${id} not found`);
      }

      res.status(200).json({
        status: 200,
        message: "Plan updated",
        data: result,
      });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      if (error instanceof NotFoundError) {
        res.status(404).json({
          status: 404,
          message: error.message,
        });
      } else if (error instanceof BadRequestError) {
        res.status(400).json({
          status: 400,
          message: error.message,
        });
      } else {
        res.status(error.status || 500).json({
          status: error.status || 500,
          message: error.message,
        });
      }
    }
  },

  async deletePlan(req, res) {
    try {
      const { id } = req.params;

      const deletedPlan = await planRepository.delete(id);

      if (!deletedPlan) {
        throw new NotFoundError(`Plan with ID ${id} not found`);
      }

      res.status(200).json({
        status: 200,
        message: "Plan deleted",
        data: deletedPlan,
      });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      if (error instanceof NotFoundError) {
        res.status(404).json({
          status: 404,
          message: error.message,
        });
      } else {
        res.status(error.status || 500).json({
          status: error.status || 500,
          message: error.message,
        });
      }
    }
  },
};
