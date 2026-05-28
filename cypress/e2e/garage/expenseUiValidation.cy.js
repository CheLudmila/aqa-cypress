import GaragePage from "../../pages/GaragePage";

describe("Expense UI validation", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should display created expense in UI", () => {
    cy.intercept("POST", "**/api/cars").as("createCar");

    GaragePage.addCar("Audi", "TT", "100");

    cy.wait("@createCar").then(({ response }) => {
      const carId = response.body.data.id;

      cy.createExpense(carId).then(() => {
        cy.contains("Fuel expenses").click();

        cy.contains("Audi TT").should("be.visible");

        cy.contains("1000").should("be.visible");

        cy.contains("20L").should("be.visible");
      });
    });
  });
});


