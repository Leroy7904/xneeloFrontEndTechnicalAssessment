class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/', {
            timeout: 60000, // wait up to 60s for full page load
            failOnStatusCode: false // optional: prevents breaking on HTTP error
        });
    }

    enterUsername(username) {
        cy.get('[data-test="username"]', { timeout: 10000 }).should('be.visible').type(username);
    }

    enterPassword(password) {
        cy.get('[data-test="password"]', { timeout: 10000 }).should('be.visible').type(password);
    }

    clickLogin() {
        cy.get('[data-test="login-button"]', { timeout: 10000 }).should('be.visible').click();
    }
}
//Just a note: I had issues with the homepage of Saucedemo timing out, hence adding in the timeouts.

export default LoginPage;

