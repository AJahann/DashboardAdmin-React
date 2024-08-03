describe("The Login Page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    cy.get('input[name="email"]')
      .focus()
      .clear()
      .type("as6kan.developer@gmail.com");
    cy.get('input[name="password"]')
      .focus()
      .clear()
      .type("dashboard.ashkan.66");

    cy.get("button").click();

    cy.url().should("include", "/app");
  });
});
