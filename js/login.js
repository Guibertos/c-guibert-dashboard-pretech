// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">
                <div class="user">
                  <img class="icon" src="./img/user-icon.svg">
                  <h5>Username</h5>
                </div>
                 <input v-on:click="focus" type="text" id="username">
                <div class="pass">
                  <img class="icon-2" src="./img/password-icon.svg">
                  <h5>Password</h5>
                </div>
                <input v-on:click="scream" type="password" id="password">
                <div class="login-button">
                  <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
                </div>
              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'Chandler Bing' && pass === 'espresso') {
        alert('Successful!');

        window.location = "./dashboard.html";
        
      } else {
        alert('Maybe you need another cuppa?');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "#FFE8AE";
      
    },
    scream: function() {
        alert("AAAAAAAAAHHHHHHHHHHHHHH!!!!!!!");
      
    }
  }
});



var login = new Vue({
  el: '#login'
});
