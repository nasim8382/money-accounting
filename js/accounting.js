// convert input into float
function getInputValue (amount) {
    const getInput = document.getElementById(amount + '-input').value;
    const convertInputIntoFloat = parseFloat(getInput);
    if (getInput < 0) {
        document.getElementById('negative-error-text').style.display = 'block';
    }
    // else if (convertInputIntoFloat != 'number') {
    //     alert('Please...... input number!!');
    // }
    else{
        return convertInputIntoFloat;
    }
}

// cross-mark click handler
document.getElementById('cross-mark').addEventListener('click', function () {
    document.getElementById('negative-error-text').style.display = 'none';
})

// total amount function
function getTotalAmount () {
    const incomeInput = getInputValue('income');
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');

    // total expenses amount
    const getTotalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount =  foodInput + rentInput + clothesInput;
    getTotalExpenses.innerText = totalExpensesAmount;

    if (totalExpensesAmount > incomeInput) {
        document.getElementById('total-balance-error-text').style.display = 'block';
    }

    else{
        // total amount
        const getTotal = document.getElementById('total');
        const totalAmount = incomeInput - totalExpensesAmount;
        getTotal.innerText = totalAmount;
        document.getElementById('total-balance-error-text').style.display = 'none';
        return totalAmount;
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

    // saving amount
    const getSavingAmount = document.getElementById('saving-amount');
    const savingAmount = incomeInput /100 * saveInput;
    getSavingAmount.innerText = savingAmount;

    if ( savingAmount > getTotalAmount() ) {
        document.getElementById('saving-error-text').style.display = 'block';
    }

    else {
        // remaining balance
        const getRemainingBalance = document.getElementById('remaining-balance');
        const remainingBalance = getTotalAmount() - savingAmount;
        getRemainingBalance.innerText = remainingBalance;
        document.getElementById('saving-error-text').style.display = 'none';
    }
})