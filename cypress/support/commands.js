Cypress.Commands.add("login", () => {
  cy.visit("/", {
    auth: {
      username: "guest",
      password: "welcome2qauto",
    },
  });

  cy.contains("Sign In").click();

  cy.get("#signinEmail").type(Cypress.env("userEmail"));

  cy.get("#signinPassword").type(
    Cypress.env("userPassword"),
    { log: false }
  );

  cy.contains("Login").click();

  cy.url().should("include", "/panel/garage");
});

Cypress.Commands.add("createExpense", (carId) => {
  return cy.request({
    method: "POST",
    url: "/api/expenses",
    body: {
      carId,
      reportedAt: "2026-05-28",
      mileage: 120,
      liters: 20,
      totalCost: 1000,
      forceMileage: false,
    },
  });
});