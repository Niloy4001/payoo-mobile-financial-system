const loginInput = document.getElementById('login-pin-input');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',function(){
   if (loginInput.value === '1234') {
   addHiddenClass('login-form');
   removeHiddenClass('all-section');
    
   }
    
})

const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click',function(){
    addHiddenClass('all-section');
    removeHiddenClass('login-form');
})




