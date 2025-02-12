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

    it("should show an error when both username and password are empty", () => {
        cy.get(".radius").click(); // Click login button without entering anything
    
        // Assert error message appears
        cy.get("#flash").should("contain", "Your username is invalid!");
      });
    
      it("should show an error when only username is entered", () => {
        cy.get("#username").type("tomsmith"); // Enter only username
        cy.get(".radius").click(); // Click login button
    
        // Assert error message appears
        cy.get("#flash").should("contain", "Your password is invalid!");
      });
    
      it("should show an error when only password is entered", () => {
        cy.get("#password").type("SuperSecretPassword!"); // Enter only password
        cy.get(".radius").click(); // Click login button
    
        // Assert error message appears
        cy.get("#flash").should("contain", "Your username is invalid!");
      });

      it("should show an error when username is uppercase", () => {
        cy.get("#username").type("TOMSMITH"); // Uppercase username
        cy.get("#password").type("SuperSecretPassword!"); // Correct password
        cy.get(".radius").click(); // Click login button
    
        cy.get("#flash").should("contain", "Your username is invalid!");
      });
    
      it("should show an error when password is uppercase", () => {
        cy.get("#username").type("tomsmith"); // Correct username
        cy.get("#password").type("SUPERSECRETPASSWORD!"); // Uppercase password
        cy.get(".radius").click(); // Click login button
    
        cy.get("#flash").should("contain", "Your password is invalid!");
      });
    
      it("should show an error when both username and password are uppercase", () => {
        cy.get("#username").type("TOMSMITH"); // Uppercase username
        cy.get("#password").type("SUPERSECRETPASSWORD!"); // Uppercase password
        cy.get(".radius").click(); // Click login button
    
        cy.get("#flash").should("contain", "Your username is invalid!");
      });
    
      it("should show an error when username has mixed casing", () => {
        cy.get("#username").type("TomSmith"); // Mixed-case username
        cy.get("#password").type("SuperSecretPassword!"); // Correct password
        cy.get(".radius").click(); // Click login button
    
        cy.get("#flash").should("contain", "Your username is invalid!");
      });
    
      it("should show an error when password has mixed casing", () => {
        cy.get("#username").type("tomsmith"); // Correct username
        cy.get("#password").type("SuperSecretPassword"); // Mixed-case password (missing `!`)
        cy.get(".radius").click(); // Click login button
    
        cy.get("#flash").should("contain", "Your password is invalid!");
      });    


  });
  