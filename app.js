

function redirectToShopifyPricing() {
    window.location.href = '/shopify.com/pricing'
}

function deleteParentDiv(element) {
    let parentDiv = element.closest('.extend-trial');
    if (parentDiv) {
        parentDiv.remove();
    }
}

function toggleOptionCards() {
    let optionCards = document.querySelector('.option-cards');
    let arrowUp = document.querySelector('.arrow-up');
    let arrowDown = document.querySelector('.arrow-down');

    if (optionCards.style.display === 'none' || optionCards.style.display === '') {
        optionCards.style.display = 'block';
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    }
    else {
        optionCards.style.display = 'none';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
    }
}