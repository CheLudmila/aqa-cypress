import GaragePage from "../../pages/GaragePage";

describe("Add car", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should add new car", () => {
    GaragePage.addCar("Audi", "TT", "100");

    GaragePage.verifyCarAdded("TT");
  });
});