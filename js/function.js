function addHiddenClass(id){
    const result = document.getElementById(id);
    result.classList.add('hidden');
    
}


function removeHiddenClass(id){
    const result = document.getElementById(id);
    result.classList.remove('hidden');
    
}

function showSection(event){
   
    addHiddenClass('transaction-history-section');
    addHiddenClass('pay-bill-section');
    addHiddenClass('bonus-section');
    addHiddenClass('transfer-section');
    addHiddenClass('cash-out-section');
    addHiddenClass('add-money-section');
    addHiddenClass('latest-payment-section');

    const clickedButtonText = event.currentTarget.children[1].innerText;
    


    if (clickedButtonText === 'Add Money') {
        removeHiddenClass('add-money-section')
           
    }
    else if(clickedButtonText === 'Cash out'){
        removeHiddenClass('cash-out-section')
        
    } 
    else if(clickedButtonText === 'Transfer Money'){
        removeHiddenClass('transfer-section')
        
    } 
    else if(clickedButtonText === 'Get Bonus'){
        removeHiddenClass('bonus-section')
        
    } 
    else if(clickedButtonText === 'Pay Bill'){
        removeHiddenClass('pay-bill-section')
        
    } 
    else if(clickedButtonText === 'Transactions'){
        removeHiddenClass('transaction-history-section')
        
    } 
    
        
    
}
