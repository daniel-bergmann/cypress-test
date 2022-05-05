/// <reference types="cypress" />

describe("Heading to the tattoo shop", () => {
  beforeEach(() => {
    // As the user I start by clicking the hairdressing field and i enter this place on the site
    cy.visit("/companies/other");
  });

  it("booking a slot at the tattoo shop", () => {
    cy.contains("Kringlan 7").should("be.visible");
    cy.contains("Kringlan 7").click();
    // Company site
    cy.contains("Book appointment").click();
    // Services to pick
    cy.contains("Andlit").click();
    cy.contains("Kinn").should("be.visible");
    cy.contains("Kinn").click();
    cy.contains("Proceed").should("be.visible");
    cy.contains("Proceed").click();
    // Choosing the artist
    cy.contains("Guðbrandur").should("be.visible");
    cy.contains("Guðbrandur Mikael").click();
    // finding the appropriate day and hour
    cy.get(`[aria-label="May 10, 2022"]`).click();
    cy.contains("12:45").click();
    // Filling in the form
    cy.get("input[placeholder='Enter full name']").type("Daníel Bergmann");
    cy.get("input[type='tel']").type("6616917");
    cy.contains("Confirm").click();
    // Booking finalized
    cy.contains("Booking confirmed").should("be.visible");
    // Closing the modal to start the cancellation test
    cy.get("div.p-y.cursor-pointer").click();
    cy.contains("Cancel appointment").click();
    cy.contains("Enter mobile phone number").should("be.visible");
    cy.get("input[type='tel']").type("6616917");
    cy.contains("Proceed").click();
    cy.contains("Enter confirmation code").should("be.visible");
    cy.contains("Proceed").click();
    // This is where the system stops working, unable to get sms with confirmation code
    cy.get("input[placeholder='Six digits confirmation code']").type("581234");
    // This message appears behind the modal
    cy.contains("Select the appointment to cancel").should("be.visible");
  });
});
