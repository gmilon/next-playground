/// <reference types="cypress" />

context("News", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the page properly", () => {
    cy.contains("Top news in France");
  });

  it("Should show all the article rendered by the API", () => {
    cy.get(
      ":nth-child(1) > .MuiListItemText-root > .MuiTypography-root"
    ).should("be.visible");
  });

  it("Should show the details of the articles", () => {
    cy.get(
      ":nth-child(1) > .MuiListItemText-root > .MuiTypography-root"
    ).click();
    cy.get(".MuiCardMedia-root").should("be.visible");
  });
});
