// convert input into float
function getInputValue (amount) {
    const getInput = document.getElementById(amount + '-input').value;
    const convertInputIntoFloat = parseFloat(getInput);
    console.log(convertInputIntoFloat);
    if (getInput < 0) {
        document.getElementById('negative-error-text').style.display = 'block';
    }
    if(isNaN(convertInputIntoFloat)) {
        document.getElementById('string-error-text').style.display = 'block';
    }
    else{
        return convertInputIntoFloat;
    }
}

// cross-mark click handler
document.getElementById('cross-mark-negative').addEventListener('click', function () {
    document.getElementById('negative-error-text').style.display = 'none';
})

document.getElementById('cross-mark').addEventListener('click', function () {
    document.getElementById('string-error-text').style.display = 'none';
})

// total amount function
function getTotalAmount () {
    const incomeInput = getInputValue('income');
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    const getTotal = document.getElementById('total');

    // total expenses amount
    const getTotalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount =  foodInput + rentInput + clothesInput;
    getTotalExpenses.innerText = totalExpensesAmount;

    if (totalExpensesAmount > incomeInput) {
        document.getElementById('total-balance-error-text').style.display = 'block';
        getTotal.innerText = '00';
    }

    else{
        // total amount
        const totalAmount = incomeInput - totalExpensesAmount;
        getTotal.innerText = totalAmount;
        document.getElementById('total-balance-error-text').style.display = 'none';
        return totalAmount;
    }
}

// function invalid text
function fixIsNan () {
    const getTotalExpenses = document.getElementById('total-expenses');
    getTotalExpenses.innerText = '00';
    const getTotal = document.getElementById('total');
    getTotal.innerText = '00';
}

// inavalid calculation function
function invalidCalculation () {
    const incomeInput = getInputValue('income');
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    if (incomeInput < 0 || isNaN(incomeInput)) {
        fixIsNan ();
        document.getElementById('total-balance-error-text').style.display = 'none';
    }
    if (foodInput < 0 || isNaN(foodInput)) {
        fixIsNan ();
        document.getElementById('total-balance-error-text').style.display = 'none';
    }
    if (rentInput < 0 || isNaN(rentInput)) {
        fixIsNan ();
        document.getElementById('total-balance-error-text').style.display = 'none';
    }
    if (clothesInput < 0 || isNaN(clothesInput)) {
        fixIsNan ();
        document.getElementById('total-balance-error-text').style.display = 'none';
    }
}

// calculate button event handler
document.getElementById('calculate-button').addEventListener('click', function () {
    getTotalAmount ();
    invalidCalculation();
})

// save button event handler
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = getInputValue('save');
    const incomeInput = getInputValue('income');
    const getRemainingBalance = document.getElementById('remaining-balance');
    const getTotalBalance = document.getElementById('total').innerText;
    const getTotalBalanceFloat = parseFloat(getTotalBalance);

    // saving amount
    const getSavingAmount = document.getElementById('saving-amount');
    const savingAmount = incomeInput /100 * saveInput;
    getSavingAmount.innerText = savingAmount;

    if ( savingAmount > getTotalAmount() ) {
        document.getElementById('saving-error-text').style.display = 'block';
    }

    else if (getTotalBalanceFloat == '00' ) {
        getRemainingBalance.innerText = '00';
    }

    else {
        // remaining balance
        const remainingBalance = getTotalAmount() - savingAmount;
        getRemainingBalance.innerText = remainingBalance;
        document.getElementById('saving-error-text').style.display = 'none';
    }
})