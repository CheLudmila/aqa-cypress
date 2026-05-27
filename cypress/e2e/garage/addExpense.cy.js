import GaragePage from "../../pages/GaragePage";
import ExpensesPage from "../../pages/ExpensesPage";

describe("Add fuel expense", () => {
  beforeEach(() => {
    cy.login();

    GaragePage.addCar("BMW", "X5", "100");
  });

  it("should add fuel expense", () => {
    ExpensesPage.openExpenses();

    ExpensesPage.addExpense("20", "1000", "120");

    ExpensesPage.verifyExpenseAdded("1000");
  });
});