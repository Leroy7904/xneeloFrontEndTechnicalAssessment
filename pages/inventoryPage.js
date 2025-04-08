class InventoryPage {
    addItemToCart(itemName) {
        cy.contains(itemName).parents('.inventory_item').find('button').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default InventoryPage;
