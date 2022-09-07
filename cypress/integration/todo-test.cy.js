const uri = "http://34.74.127.60:8080/t/?http://34.74.127.60:8080/todos";
const newItemTitle = "Create video for conference";

describe("TODO list", () => {
  it("opens todo list", () => {
    cy.visit(uri);

    cy.get("#header h1").then((head) => {
      const headerText = Cypress.$(head).text();
      expect(headerText).to.be.eq("todos");
    });
  });

  it("has no todo items", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("adds todo item", () => {
    cy.get("#new-todo").type(newItemTitle).type("{enter}");
  });

  it("checks if added item exists", () => {
    cy.get("#todo-list li").should("have.length", 1);
    cy.get("li.completed").should("have.length", 0);
  });

  it("toggle todo list item", () => {
    cy.get(".toggle").first().click();
    cy.get("li.completed").should("have.length", 1);
  });

  it("delete todo item", () => {
    cy.get(".destroy").first().invoke('show').click();
    cy.get("#todo-list li").should("have.length", 0);
  });
});
