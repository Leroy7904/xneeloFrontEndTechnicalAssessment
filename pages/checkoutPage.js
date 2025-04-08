class CheckoutPage {
    fillForm(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinue() {
        cy.get('[data-test="continue"]').click();
    }

    clickFinish() {
        cy.get('[data-test="finish"]').click();
    }

    verifySuccess() {
        cy.get('.complete-header').should('contain', 'Thank you');
    }
}

export default CheckoutPage;
