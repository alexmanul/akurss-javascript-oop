export default class View {

  constructor() {
    this.$todoList = document.querySelector('.todo-list');
    this.$newTodo = document.querySelector('.new-todo');
  }

  onNewTodo(callback) {
    this.$newTodo.addEventListener('change', () => {
      callback(this.$newTodo.value);
      this.$newTodo.value = '';
    })
  }

  showAll(data) {
    this.$todoList.innerHTML = data.reduce((previous, current) => previous + '<li>' + current.title + '</li>', '');
  }
}
