// HEADER COMPONENT

'use strict';

    var menu = {
        menus: [
        {
          title: 'summary',
          link: 'dashboard.html',
          isActive: false
        },
        {
          title: 'Joey Tribbiani',
          link: 'joey.html',
          isActive: false

        },
        {
          title: 'Ross Geller',
          link: 'ross.html',
          isActive: true

        },
        {
          title: 'Phoebe Buffay',
          link: 'phoebe.html',
          isActive: false
        }
        ]
    }

Vue.component('main-menu', {
  template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
                <div class="logout-container">
                  <a onclick="dblCheck(event)" class="logout" href="index.html">logout</a>
                </div>
              </ul>
            `,
  data: function() {
    return menu;
  }

});

function dblCheck(e) {
  e.preventDefault();
    if (confirm("Are you sure want to logout?")) {
      window.location = "index.html";
    } else {  

    }
}


var menus = new Vue({
  el: '#mainmenu'
})





