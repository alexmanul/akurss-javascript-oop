import Store from './store.js';
import View from './view.js';
import Controller from './controller.js';

const store = new Store();
const view = new View();

const controller = new Controller(store, view);

window.addEventListener('load', ()=> {
  controller.showAll();
})
