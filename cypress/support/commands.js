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