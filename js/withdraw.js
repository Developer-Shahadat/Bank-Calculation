// Withdraw btn + input field
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // Withdraw Div
    const withdrawField = document.getElementById('withdraw-input');
    const previousWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(previousWithdrawAmountString);
    withdrawField.value = ''
    if(isNaN(newWithdrawAmount)){
        alert ('Please Provide a Number');
        return;
    }
 

    // Withdraw Div
    const widthTotalElement = document.getElementById('withdraw-total');
    const previousTotalString = widthTotalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);

  
    

    // Balance Div

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
     if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap Er Bank a Taka Nai Sorry');
        return;
    }

    const currentWidthTotal = previousTotal + newWithdrawAmount;
    widthTotalElement.innerText = currentWidthTotal;
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    
    
})