// convert input into float
function getInputValue (amount) {
    const getInput = document.getElementById(amount + '-input').value;
    const convertInputIntoFloat = parseFloat(getInput);
    if (getInput < 0) {
        document.getElementById('negative-error-text').style.display = 'block';
    }
    if(isNaN(getInput)) {
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

    if (incomeInput < 0 || foodInput < 0 || rentInput < 0 ||clothesInput < 0){
        document.getElementById('negative-error-text').style.display = 'block';
    }

    else if ( isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {
        document.getElementById('string-error-text').style.display = 'block';
        if ( incomeInput > 0) {
            getTotal.innerText = incomeInput;
        }
    }

    else {
        document.getElementById('negative-error-text').style.display = 'none';
        document.getElementById('string-error-text').style.display = 'none';
        // total expenses amount
        const getTotalExpenses = document.getElementById('total-expenses');
        const totalExpensesAmount =  foodInput + rentInput + clothesInput;
        const  totalExpensesDigit = totalExpensesAmount.toFixed(2);
        getTotalExpenses.innerText = totalExpensesDigit;

        if (totalExpensesAmount > incomeInput) {
            document.getElementById('total-balance-error-text').style.display = 'block';
            getTotal.innerText = '00';
        }
    
        else{
            // total amount
            const totalAmount = incomeInput - totalExpensesAmount;
            const  totalAmountDigit = totalAmount.toFixed(2);
            getTotal.innerText = totalAmountDigit;
            document.getElementById('total-balance-error-text').style.display = 'none';
            return totalAmount;
        }
    }
}

// calculate button event handler
document.getElementById('calculate-button').addEventListener('click', function () {
    getTotalAmount ();
})

// save button event handler
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = getInputValue('save');
    const incomeInput = getInputValue('income');
    const getRemainingBalance = document.getElementById('remaining-balance');
    const totalBalance = getTotalAmount();

    // saving amount
    const getSavingAmount = document.getElementById('saving-amount');
    const savingAmount = incomeInput /100 * saveInput;
    const savingAmountDigit = savingAmount.toFixed(2);
    getSavingAmount.innerText = savingAmountDigit;

    if ( saveInput >= 0 || isNaN(saveInput) == false) {
        // remaining balance
        const remainingBalance = getTotalAmount() - savingAmount;
        const  remainingBalanceDigit = remainingBalance.toFixed(2);
        getRemainingBalance.innerText = remainingBalanceDigit;
        document.getElementById('saving-error-text').style.display = 'none';
        document.getElementById('saving-input-error-text').style.display = 'none';
    }

    if ( savingAmount > totalBalance ) {
        getRemainingBalance.innerText = '00';
        document.getElementById('saving-error-text').style.display = 'block';
    }

    if (saveInput < 0 || isNaN(saveInput)) {
        getSavingAmount.innerText = '00';
        getRemainingBalance.innerText = '00';
        document.getElementById('saving-input-error-text').style.display = 'block';
    }
})