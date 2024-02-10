// Description: Test for evacuationPlan.js
const app = require("../index");
const request = require("supertest");
const PlanRepository = require("../repository/plan.repository");
const { NotFoundError, BadRequestError } = require("../errors/error");

jest.mock("../repository/plan.repository");

describe("GET /plan", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 OK - all plan", async () => {
    const mockPlan = [
      {
        id: 1,
        name: "Plan TEST",
        location: "Location TEST",
        details: "Details TEST",
      },
      {
        id: 2,
        name: "Plan TEST",
        location: "Location TEST",
        details: "Details TEST",
      },
    ];

    PlanRepository.prototype.find.mockResolvedValue(mockPlan);

    const response = await request(app).get("/plan");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Success",
      data: mockPlan,
    });
  });
});

describe("GET /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 Not Found - plan not found", async () => {
    PlanRepository.prototype.retrieve.mockResolvedValue(null);

    const response = await request(app).get("/plan/1");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Not Found Plan with ID 1 not found",
    });
    expect(() => {
      throw new NotFoundError("Not Found Plan with ID 1 not found");
    }).toThrow(NotFoundError);
  });
});

describe("POST /plan", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 201 Created - create plan", async () => {
    const mockPlan = {
      id: 1,
      name: "Plan TEST",
      location: "Location TEST",
      details: "Details TEST",
    };

    PlanRepository.prototype.create.mockResolvedValue(mockPlan);

    const response = await request(app).post("/plan").send(mockPlan);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      status: 201,
      message: "Plan created",
      data: mockPlan,
    });
  });
});

describe("PUT /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 OK - update plan", async () => {
    const mockPlan = {
      id: 1,
      name: "Plan TEST",
      location: "Location TEST",
      details: "Details TEST",
    };

    PlanRepository.prototype.update.mockResolvedValue(mockPlan);

    const response = await request(app).put("/plan/1").send(mockPlan);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Plan updated",
      data: mockPlan,
    });
  });
});

describe("DELETE /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 OK - delete plan", async () => {
    const mockPlan = {
      id: 1,
      name: "Plan TEST",
      location: "Location TEST",
      details: "Details TEST",
    };

    PlanRepository.prototype.delete.mockResolvedValue(mockPlan);

    const response = await request(app).delete("/plan/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 200,
      message: "Plan deleted",
      data: mockPlan,
    });
  });
});

describe("GET /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 Not Found - plan not found", async () => {
    PlanRepository.prototype.retrieve.mockResolvedValue(null);

    const response = await request(app).get("/plan/1");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Not Found Plan with ID 1 not found",
    });
    expect(() => {
      throw new NotFoundError("Not Found Plan with ID 1 not found");
    }).toThrow(NotFoundError);
  });
});

describe("PUT /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 Bad Request - plan data is missing", async () => {
    PlanRepository.prototype.update.mockResolvedValue(null);
    const response = await request(app).put("/plan/1").send({});
    expect(response.statusCode).toBe(400); 
    expect(response.body).toEqual({
      status: 400,
      message: "Bad Request Updated plan data is missing",
    });
    expect(() => {
      throw new BadRequestError("Bad Request Updated plan data is missing");
    }).toThrow(BadRequestError);
  });
});

describe("DELETE /plan/:id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 404 Not Found - plan not found", async () => {
    PlanRepository.prototype.delete.mockResolvedValue(null);

    const response = await request(app).delete("/plan/1");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: "Not Found Plan with ID 1 not found",
    });
    expect(() => {
      throw new NotFoundError("Not Found Plan with ID 1 not found");
    }).toThrow(NotFoundError);
  });
});
