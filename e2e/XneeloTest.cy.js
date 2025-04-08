import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';


const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('SauceDemo Automation Test', () => {
    it('should log the user in, add an item to cart, and complete checkout process', () => {
        

        // Visit and log in
        loginPage.visit();
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLogin();
        cy.log('Logged in successfully.');

        //Add item to cart
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.goToCart();
        cy.log('Item added to cart.');

        // Checkout
        cartPage.clickCheckout();
        checkoutPage.fillForm('John', 'Doe', '12345');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        cy.log('Checkout completed.');

        // Validate success
        checkoutPage.verifySuccess();
        cy.log('Order placed successfully');        
    });
});
