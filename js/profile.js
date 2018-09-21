// PROFILE COMPONENT

'use strict';

function changeTheme() {
    $('html, .sidebar').toggleClass('theme');
}

Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>              
              <div class="profile-links">
                  <ul>
                    <li v-for="menu in menus" v-bind:class="{ active: menu.isActive }">
                      <a :href="menu.link" >{{ menu.title }}</a>
                    </li>
                  </ul>
              </div>
              <div class="theme-change">
                <h4>Change theme</h4>
                <hr>
                <a onclick="changeTheme();" href="#" id="change-theme">Theme Change</a>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})


var profile = new Vue({
  el: '#profile'
})