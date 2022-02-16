// convert input into float
function getInputValue (amount) {
    const getInput = document.getElementById(amount + '-input').value;
    const convertInputIntoFloat = parseFloat(getInput);
    return convertInputIntoFloat;
}

document.getElementById('calculate-button').addEventListener('click', function () {
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
})