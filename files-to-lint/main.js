// eslint-disable-next-line
import Vue from 'vue';

import SiteIcon from './components/SiteIcon.vue';

Vue.component('SiteIcon', SiteIcon);

const app = new Vue({
  el: '#app',
});

console.log(app);

switch (true) {
  case true:
    console.log('True!');
    break;
  case false:
    console.log('False!');
    break;
  default:
    console.log('Neither true or false!');
}
