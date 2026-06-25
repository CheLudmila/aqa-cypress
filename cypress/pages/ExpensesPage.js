class ExpensesPage {
  openExpenses() {
    cy.contains("Fuel expenses").click();
    cy.contains("Add an expense").should("be.visible");
  }

  addExpense(liters, totalCost, mileage) {
    cy.contains("Add an expense")
      .should("be.visible")
      .click();

    cy.get("#addExpenseLiters").should("be.visible").type(liters);
    cy.get("#addExpenseTotalCost").type(totalCost);
    cy.get("#addExpenseMileage").type(mileage);

    cy.contains("Add").click();
  }

  verifyExpenseAdded(totalCost) {
    cy.contains(totalCost).should("be.visible");
  }
}

export default new ExpensesPage();