import GaragePage from "../../pages/GaragePage";

describe("Add car with API validation", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should add new car and validate via API", () => {
    cy.intercept("POST", "**/api/cars").as("createCar");

    GaragePage.addCar("Audi", "TT", "100");

    GaragePage.verifyCarAdded("TT");

    cy.wait("@createCar").then(({ response }) => {
      expect(response.statusCode).to.eq(201);

      const carId = response.body.data.id;

      expect(carId).to.exist;

      cy.wrap(carId).as("carId");

      cy.request("GET", "/api/cars").then((carsResponse) => {
        expect(carsResponse.status).to.eq(200);

        const createdCar = carsResponse.body.data.find(
          (car) => car.id === carId
        );

        expect(createdCar).to.exist;

        expect(createdCar.brand).to.eq("Audi");
        expect(createdCar.model).to.eq("TT");
        expect(createdCar.initialMileage).to.eq(100);
      });
    });
  });
});