class GaragePage {
  openAddCarModal() {
    cy.contains("button", "Add car")
      .should("be.visible")
      .click({ force: true });
  }

  addCar(brand, model, mileage) {
  this.openAddCarModal();

  cy.get("#addCarBrand").select(brand);
  cy.get("#addCarModel").select(model);
  cy.get("#addCarMileage").clear().type(mileage);

  cy.get(".modal-content")
    .contains("button", "Add")
    .click();

  // Чекаємо, поки модальне вікно закриється
  cy.get("ngb-modal-window").should("not.exist");

  // І перевіряємо, що кнопка Add car знову доступна
  cy.contains("button", "Add car").should("be.visible");
}

  verifyCarAdded(carName) {
    cy.contains(carName).should("be.visible");
  }
}

export default new GaragePage();