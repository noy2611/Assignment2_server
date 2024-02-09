// Description: Router for plan.
const { Router } = require('express');
const { planController } = require('../controller/plan.controller');

const planRouter = new Router();

// Get all plans
planRouter.get('/', planController.getAllPlans);

// Get plan by id
planRouter.get('/:id', planController.getPlanById);

// Create a new plan
planRouter.post('/', planController.createPlan);

// Update a plan
planRouter.put('/:id', planController.updatePlan);

// Delete a plan
planRouter.delete('/:id', planController.deletePlan);

module.exports = { planRouter };

