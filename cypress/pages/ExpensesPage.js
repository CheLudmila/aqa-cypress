class ExpensesPage {
  openExpenses() {
    cy.contains("Fuel expenses").click();
  }

  addExpense(liters, totalCost, mileage) {
    cy.contains("Add an expense").click();

    cy.get("#addExpenseLiters").type(liters);
    cy.get("#addExpenseTotalCost").type(totalCost);
    cy.get("#addExpenseMileage").type(mileage);

    cy.contains("Add").click();
  }

  verifyExpenseAdded(totalCost) {
    cy.contains(totalCost).should("be.visible");
  }
}

export default new ExpensesPage();