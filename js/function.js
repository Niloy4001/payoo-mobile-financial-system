
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

    const clickedButtonText = event.currentTarget.children[1].innerText;
    const eventDiv = event.currentTarget;
    const eventDivText = event.currentTarget.children[1];
    const htmlCollectionOfEventDiv = eventDiv.parentElement.children; 

   
    
    
    
    


    if (clickedButtonText === 'Add Money') {
        removeHiddenClass('add-money-section');
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2');
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
            
        }
        eventDiv.classList.add('border-primary2');
        eventDivText.classList.add('text-primary2');
 
           
    }
    else if(clickedButtonText === 'Cash out'){
        removeHiddenClass('cash-out-section')
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2')
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
        }
        eventDiv.classList.add('border-primary2')
        eventDivText.classList.add('text-primary2');
        
    } 
    else if(clickedButtonText === 'Transfer Money'){
        removeHiddenClass('transfer-section')
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2')
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
        }
        eventDiv.classList.add('border-primary2')
        eventDivText.classList.add('text-primary2');
        
    } 
    else if(clickedButtonText === 'Get Bonus'){
        removeHiddenClass('bonus-section')
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2')
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
        }
        eventDiv.classList.add('border-primary2')
        eventDivText.classList.add('text-primary2');
        
    } 
    else if(clickedButtonText === 'Pay Bill'){
        removeHiddenClass('pay-bill-section')
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2')
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
        }
        eventDiv.classList.add('border-primary2')
        eventDivText.classList.add('text-primary2');
        
    } 
    else if(clickedButtonText === 'Transactions'){
        removeHiddenClass('transaction-history-section')
        for(let item of htmlCollectionOfEventDiv){
            item.classList.remove('border-primary2')
            let childNumber = item.children[1]
            childNumber.classList.remove('text-primary2')
        }
        eventDiv.classList.add('border-primary2')
        eventDivText.classList.add('text-primary2');
        
    } 
    
        
    
}




function getTextInputValue(id){
    const result = document.getElementById(id).value ;
    return result;
}




function getNumberInputValue(id){
    const result = document.getElementById(id).value ;
    return parseFloat(result);
}






