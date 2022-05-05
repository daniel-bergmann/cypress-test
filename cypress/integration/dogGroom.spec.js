/// <reference types="cypress" />

describe("Taking my dog to the groomer in the Dog Salon", () => {
  beforeEach(() => {
    // As the user I start by clicking the hairdressing field and i enter this place on the site
    cy.visit("/companies/animals");
  });

  it("booking a slot at the Dog Salon", () => {
    cy.contains("Dalvegur 16b").should("be.visible");
    cy.contains("Dalvegur 16b").click();
    // Hospital site
    cy.contains("Book appointment").click();
    //  Services to pick
    cy.contains("Uncategorized").click();
    cy.contains("Klóaklipping").should("be.visible");
    cy.contains("Klóaklipping").click();
    cy.contains("Proceed").should("be.visible");
    cy.contains("Proceed").click();
    // Choosing the groomer
    cy.contains("Tiphaine Meyer").should("be.visible");
    cy.contains("Tiphaine Meyer").click();
    // finding the appropriate day and hour
    cy.get(`[aria-label="May 10, 2022"]`).click();
    cy.contains("09:30").click();
    // // Filling in the form
    cy.get("input[placeholder='Enter full name']").type("Daníel Bergmann");
    cy.get("input[type='tel']").type("6616917");
    cy.get("input[placeholder='Enter your Social ID number']").type(
      "0709932799"
    );
    cy.get("[type='checkbox']").click();
    cy.contains("Confirm booking").click();
    // // Booking finalized
    cy.contains("Booking confirmed").should("be.visible");
    // // Closing the modal to start the cancellation test
    cy.get("div.p-y.cursor-pointer").click();
    cy.contains("Cancel appointment").click();
    cy.contains("Enter mobile phone number").should("be.visible");
    cy.get("input[type='tel']").type("6616917");
    cy.contains("Proceed").click();
    cy.contains("Enter confirmation code").should("be.visible");
    cy.contains("Proceed").click();
    // // This is where the system stops working, unable to get sms with confirmation code
    cy.get("input[placeholder='Six digits confirmation code']").type("581234");
    // // This message appears behind the modal
    cy.contains("Select the appointment to cancel").should("be.visible");
  });
});
