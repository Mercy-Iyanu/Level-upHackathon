function dropdownMenu() {
    let toggleNotifyMenu = document.querySelector('.bell-icon-alert');

    toggleNotifyMenu.style.display = (toggleNotifyMenu.style.display === 'none') ? 'block' : 'none';

}

function userInfoMenu() {
    let toggleUserMenu = document.querySelector('.user-info-menu');

    toggleUserMenu.style.display = (toggleUserMenu.style.display === 'none') ? 'block' : 'none';
}

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

function toggleOptionOne() {
    let optionOneText = document.getElementById('optionOneText');
    let optionOneButton = document.getElementById('customize-theme');
    let optionOneRight = document.getElementById('optionOneRight');

    optionOneText.classList.toggle("hide");
    optionOneButton.classList.toggle("hide");
    optionOneRight.classList.toggle("hide");
}

function toggleOptionTwo() {
    let optionTwoText = document.getElementById('optionTwoText');
    let optionTwoButton = document.getElementById('add-product');
    let importProductButton = document.getElementById('import-product');
    let optionTwoRight = document.getElementById('optionTwoRight');

    optionTwoText.classList.toggle("hide");
    optionTwoButton.classList.toggle("hide");
    importProductButton.classList.toggle("hide");
    optionTwoRight.classList.toggle("hide");
}

function toggleOptionThree() {
    let optionThreeText = document.getElementById('optionThreeText');
    let optionThreeButton = document.getElementById('add-domain');
    let optionThreeRight = document.getElementById('optionThreeRight');

    optionThreeText.classList.toggle("hide");
    optionThreeButton.classList.toggle("hide");
    optionThreeRight.classList.toggle("hide");
}

function toggleOptionFour() {
    let optionFourText = document.getElementById('optionFourText');
    let optionFourButton = document.getElementById('name-store');
    let optionFourRight = document.getElementById('optionFourRight');

    optionFourText.classList.toggle("hide");
    optionFourButton.classList.toggle("hide");
    optionFourRight.classList.toggle("hide");
}
function toggleOptionFive() {
    let optionFiveText = document.getElementById('optionFiveText');
    let optionFiveButton = document.getElementById('setup-payment');
    let optionFiveRight = document.getElementById('optionFiveRight');

    optionFiveText.classList.toggle("hide");
    optionFiveButton.classList.toggle("hide");
    optionFiveRight.classList.toggle("hide");
}
