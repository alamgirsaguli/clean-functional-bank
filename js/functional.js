function getInputValue(fieldId){
const inputField = document.getElementById(fieldId);
const valueInText = inputField.value;
const value = parseFloat(valueInText);
inputField.value = '';
return value;
}

function updateTotal(fieldId, amount){
    
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal =parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;
}
// update balance
function updateBalance(amount){
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    const newBalance = previousBalance + amount;
    balanceTag.innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click',
function(){
    const amount = getInputValue('deposit-amount');
   
   updateTotal('deposit-total',amount);
   updateBalance(amount);
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
})