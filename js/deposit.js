// Deposit Btn + Input Field
document.getElementById('Deposit-btn').addEventListener('click',function(){
    // amount-input (Deposit)
    const depositField = document.getElementById('deposit-input');
    const previousDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(previousDepositAmountString);
    depositField.value = ''
    if(isNaN(newDepositAmount)){
        alert ('Please Provide a Number');
        return;
    }

    // Deposit Div
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText ;
    const newDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = newDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = currentDepositTotal;

    // Balance Div
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})