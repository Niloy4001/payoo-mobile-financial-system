// Login form 
const loginNumberInput = document.getElementById('login-number-input');
const loginPinInput = document.getElementById('login-pin-input');
const loginBtn = document.getElementById('login-btn');




loginBtn.addEventListener('click',function(){
   if (loginPinInput.value === '1234') {
    if (loginNumberInput.value === '' || isNaN(loginNumberInput.value) || loginNumberInput.value.length < 11) {
        alert('Invalid Number');
        return;
    }
    
    
   addHiddenClass('login-form');
   removeHiddenClass('all-section');
   document.getElementById('login-pin-input').value = '';
   document.getElementById('login-number-input').value = '';
    
   }
   else{
    alert('invalid Pin')
   }
    
})


// Logout button 
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click',function(){
    addHiddenClass('all-section');
    removeHiddenClass('login-form');
})



// global variable declared
let accountBalance = parseFloat(document.getElementById('account-balance').innerText);
let historyAddSection = document.getElementById('adding-history-section');


// Add money
const addMoneyBtn = document.getElementById('add-money-btn');

addMoneyBtn.addEventListener('click',function(){
    
    if (getTextInputValue('add-money-pin') === '1234') {
        let amount = getNumberInputValue('add-money-amount');
        if (amount <= 0 || isNaN(amount) || amount === '') {
            alert('Invalid Amount');
            return;
        }
        accountBalance = amount + accountBalance;
        document.getElementById('account-balance').innerText = accountBalance;
        document.getElementById('add-money-amount').value = "";
        document.getElementById('add-money-pin').value = "";

        historyAddSection.innerHTML += `
               <div class="flex justify-between items-center bg-white px-4 py-3  rounded-xl">
                <!-- left div  -->
                <div class="flex items-center gap-x-3">
                  <div class="bg-primary1 rounded-full p-4"><img src="asset/history.png" alt=""></div>
                  <div>
                    <h1 class="text-[#080808]/[0.7] text-base font-semibold mb-[6px]"><span> Add Money ${amount} Tk</span></h1>
                    <p class="text-[#080808]/[0.7] text-[12px] font-normal">${new Date().toLocaleString()}</p>
                  </div>
                </div>
                <!-- right div  -->
                <div>
                  <button class="font-normal text-sm text-primary3/[0.5]">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
              </div>
        `
       

    }
    else{
        alert('Invalid Pin')
    }
    
    
})








// cash out 

function cashOut(event) {
    let cashOutPin = event.target.parentElement.previousElementSibling.children[1].value;
    let cashOutAmount = parseFloat(event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value);

    if (cashOutAmount <=0 || isNaN(cashOutAmount) || cashOutAmount === '' || cashOutAmount > accountBalance) {
        alert('Invalid Amount');
        return;
    }

    let eventName = event.target.parentElement.parentElement.previousElementSibling.children[0].innerText;

    if (cashOutPin === '1234') {
        accountBalance = accountBalance - cashOutAmount;
        document.getElementById('account-balance').innerText = accountBalance;
        event.target.parentElement.previousElementSibling.children[1].value = '';
        event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value = '';



        historyAddSection.innerHTML += `
        <div class="flex justify-between items-center bg-white px-4 py-3  rounded-xl">
         <!-- left div  -->
         <div class="flex items-center gap-x-3">
           <div class="bg-primary1 rounded-full p-4"><img src="asset/history.png" alt=""></div>
           <div>
             <h1 class="text-[#080808]/[0.7] text-base font-semibold mb-[6px]"><span> ${eventName} ${cashOutAmount} Tk</span></h1>
             <p class="text-[#080808]/[0.7] text-[12px] font-normal">${new Date().toLocaleString()}</p>
           </div>
         </div>
         <!-- right div  -->
         <div>
           <button class="font-normal text-sm text-primary3/[0.5]">
             <i class="fa-solid fa-ellipsis-vertical"></i>
           </button>
         </div>
       </div>
 `
        
        
        


    }
    else{
        alert('Invalid Pin')
    }
    
    
    
}



// Get bonus

function getBonus(event) {
    let couponCode = event.target.parentElement.previousElementSibling.children[1].value;

    
    if (couponCode === 'WEBDEB') {
        accountBalance = accountBalance + 500;
        document.getElementById('account-balance').innerText = accountBalance;
        
        event.target.parentElement.previousElementSibling.children[1].value = '';

        historyAddSection.innerHTML += `
        <div class="flex justify-between items-center bg-white px-4 py-3  rounded-xl">
         <!-- left div  -->
         <div class="flex items-center gap-x-3">
           <div class="bg-primary1 rounded-full p-4"><img src="asset/history.png" alt=""></div>
           <div>
             <h1 class="text-[#080808]/[0.7] text-base font-semibold mb-[6px]"><span> You got bonus 500 Tk</span></h1>
             <p class="text-[#080808]/[0.7] text-[12px] font-normal">${new Date().toLocaleString()}</p>
           </div>
         </div>
         <!-- right div  -->
         <div>
           <button class="font-normal text-sm text-primary3/[0.5]">
             <i class="fa-solid fa-ellipsis-vertical"></i>
           </button>
         </div>
       </div>
 `
        


    }
    else{
        alert('Invalid Coupon code')
    }
    
    
    
}




