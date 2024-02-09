const request = require('supertest');
const { app } = require('../index');
const palnRepository = require('../repositories/planRepository');

const {BadRequestError,NotFoundEroor,ServerError} = require('../errors/errors');
jest.mock('../repositories/planRepository');


// Get all plans






// // Get all plans
// describe('GET /api/plans', () => {
//     test('should return 200 OK', async () => {
//         palnRepository.getAllPlans.mockResolvedValue([]);
//         const response = await request(app).get('/api/plans');
//         expect(response.statusCode).toBe(200);
//     });
//     test('should return 500 Internal Server Error', async () => {
//         palnRepository.getAllPlans.mockRejectedValue(new ServerError());
//         const response = await request(app).get('/api/plans');
//         expect(response.statusCode).toBe(500);
//     });
// });
// // Get plan by id
// describe('GET /api/plans/:id', () => {
//     test('should return 200 OK', async () => {
//         palnRepository.getPlanById.mockResolvedValue({});
//         const response = await request(app).get('/api/plans/1');
//         expect(response.statusCode).toBe(200);
//     });
//     test('should return 404 Not Found', async () => {
//         palnRepository.getPlanById.mockResolvedValue(null);
//         const response = await request(app).get('/api/plans/1');
//         expect(response.statusCode).toBe(404);
//     });
//     test('should return 500 Internal Server Error', async () => {
//         palnRepository.getPlanById.mockRejectedValue(new ServerError());
//         const response = await request(app).get('/api/plans/1');
//         expect(response.statusCode).toBe(500);
//     });
// }
// );  
// // Create a new plan
// describe('POST /api/plans', () => {
//     test('should return 201 Created', async () => {
//         palnRepository.createPlan.mockResolvedValue({});
//         const response = await request(app).post('/api/plans').send({});
//         expect(response.statusCode).toBe(201);
//     });
//     test('should return 400 Bad Request', async () => {
//         palnRepository.createPlan.mockRejectedValue(new BadRequestError());
//         const response = await request(app).post('/api/plans').send({});
//         expect(response.statusCode).toBe(400);
//     });
//     test('should return 500 Internal Server Error', async () => {
//         palnRepository.createPlan.mockRejectedValue(new ServerError());
//         const response = await request(app).post('/api/plans').send({});
//         expect(response.statusCode).toBe(500);
//     });
// });
// // Update a plan

// describe('PUT /api/plans/:id', () => {  
//     test('should return 200 OK', async () => {
//         palnRepository.updatePlan.mockResolvedValue({});
//         const response = await request(app).put('/api/plans/1').send({});
//         expect(response.statusCode).toBe(200);
//     });
//     test('should return 400 Bad Request', async () => {
//         palnRepository.updatePlan.mockRejectedValue(new BadRequestError());
//         const response = await request(app).put('/api/plans/1').send({});
//         expect(response.statusCode).toBe(400);
//     });
//     test('should return 404 Not Found', async () => {
//         palnRepository.updatePlan.mockRejectedValue(new NotFoundEroor());
//         const response = await request(app).put('/api/plans/1').send({});
//         expect(response.statusCode).toBe(404);
//     });
//     test('should return 500 Internal Server Error', async () => {
//         palnRepository.updatePlan.mockRejectedValue(new ServerError());
//         const response = await request(app).put('/api/plans/1').send({});
//         expect(response.statusCode).toBe(500);
//     });
// }
// );
// // Delete a plan
// describe('DELETE /api/plans/:id', () => {
//     test('should return 200 OK', async () => {
//         palnRepository.deletePlan.mockResolvedValue({});
//         const response = await request(app).delete('/api/plans/1');
//         expect(response.statusCode).toBe(200);
//     });
//     test('should return 404 Not Found', async () => {
//         palnRepository.deletePlan.mockRejectedValue(new NotFoundEroor());
//         const response = await request(app).delete('/api/plans/1');
//         expect(response.statusCode).toBe(404);
//     });
//     test('should return 500 Internal Server Error', async () => {
//         palnRepository.deletePlan.mockRejectedValue(new ServerError());
//         const response = await request(app).delete('/api/plans/1');
//         expect(response.statusCode).toBe(500);
//     });
// }
// );

// Path: db/planRepository.js