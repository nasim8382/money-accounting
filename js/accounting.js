// convert input into float
function getInputValue (amount) {
    const getInput = document.getElementById(amount + '-input').value;
    const convertInputIntoFloat = parseFloat(getInput);
    return convertInputIntoFloat;
}

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

    // total amount
    const getTotal = document.getElementById('total');
    const totalAmount = incomeInput - totalExpensesAmount;
    getTotal.innerText = totalAmount;
    return totalAmount;
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

    // remaining balance
    const getRemainingBalance = document.getElementById('remaining-balance');
    const remainingBalance = getTotalAmount() - savingAmount;
    getRemainingBalance.innerText = remainingBalance;
})