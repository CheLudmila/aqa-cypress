describe("Smoke", () => {
  it("should open QAuto homepage", () => {
    cy.visit(Cypress.env("BASE_URL"), {
      auth: {
        username: Cypress.env("HTTP_USERNAME"),
        password: Cypress.env("HTTP_PASSWORD"),
      },
    });

    cy.contains("Sign In").should("be.visible");
  });
});