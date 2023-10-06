
document.getElementById('deposit-button').addEventListener('click', function(){

    const newDepositAmount = getInputValueById('deposit');

    const previousDepositTotal = getTextElementValueById('deposit-element');
    const depositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-element', depositTotal);

    const balance = getTextElementValueById('balance-element');
    const newBalance = balance + newDepositAmount;
    setTextElementValueById('balance-element', newBalance);
})