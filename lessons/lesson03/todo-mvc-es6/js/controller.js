import Store from './store.js'
import View from './view.js'

export default class Controller {

  constructor(store, view) {
    this.store = store;
    this.view = view;

    this.view.onNewTodo((title) => this.addItem(title));
  }

  addItem(title) {
    if (title.trim() === '') {
      return;
    }

    this.store.insert({
      title: title,
      done: false
    }, () => this.showAll());
  }

 removeItem(title){

   this.store.delete({
     title: title,
     done: false
   }, () => this.showAll());
 }

  showAll() {
    this.store.findAll((data) => this.view.showAll(data));
  }
}
