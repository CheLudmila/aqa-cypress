import GaragePage from "../../pages/GaragePage";

describe("Create expense via API", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should create expense for created car", () => {
    cy.intercept("POST", "**/api/cars").as("createCar");

    GaragePage.addCar("BMW", "X5", "100");

    cy.wait("@createCar").then(({ response }) => {
      expect(response.statusCode).to.eq(201);

      const carId = response.body.data.id;

      cy.createExpense(carId).then((expenseResponse) => {
        expect(expenseResponse.status).to.eq(200);

        expect(expenseResponse.body.data.carId).to.eq(carId);

        expect(expenseResponse.body.data.liters).to.eq(20);

        expect(expenseResponse.body.data.totalCost).to.eq(1000);
      });
    });
  });
});
