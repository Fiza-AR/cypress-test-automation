/// <reference types="cypress" />

describe("Login Tests on The Internet Herokuapp", () => {
  beforeEach(() => {
    // Visit the Login Page before each test
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("should successfully login with valid credentials", () => {
    cy.get("#username").type("tomsmith"); // Enter valid username
    cy.get("#password").type("SuperSecretPassword!"); // Enter valid password
    cy.get(".radius").click(); // Click login button

    // Assert success message
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  it("should show an error for an invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("wrongpassword"); // Incorrect password
    cy.get(".radius").click();

    // Assert error message
    cy.get("#flash").should("contain", "Your password is invalid!");
  });

  it("should show an error for an invalid username", () => {
    cy.get("#username").type("wronguser"); // Incorrect username
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".radius").click();

    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("should log out successfully", () => {
    // First, log in successfully
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".radius").click();

    // Click logout button
    cy.get(".button.secondary.radius").click();

    // Assert successful logout
    cy.get("#flash").should("contain", "You logged out of the secure area!");
  });
});
