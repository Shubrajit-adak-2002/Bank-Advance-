document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawField = getInputValueById('withdraw');
    
    
    const withdrawTextElement = getTextElementValueById('withdraw-element');
    const totalWithdraw = withdrawTextElement + withdrawField; 
    setTextElementValueById('withdraw-element', totalWithdraw);

    
    const balanceElement = getTextElementValueById('balance-element');
    const currentbalance = balanceElement - withdrawField;
    setTextElementValueById('balance-element', currentbalance);
    
    
})