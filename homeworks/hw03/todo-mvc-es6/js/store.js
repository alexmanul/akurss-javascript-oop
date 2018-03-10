export default class Store {

    constructor() {
        if (!localStorage.todo) {
            let data = {
                todos: []
            };
            localStorage.todo = JSON.stringify(data);
        }
    }

    insert(data, callback){
      const todos = JSON.parse(localStorage.todo).todos;
      data.id = new Date().getTime;
      todos.push(data);
      localStorage.todo = JSON.stringify({todos: todos});
      callback(data);
    }

    delete(data, callback){
      const todos = JSON.parse(localStorage.todo).todos;
      data.id = new Date().getTime;
      todos.pop(data);
      localStorage.todo = JSON.stringify({todos: todos});
      callback(data);
    }

    findAll(callback){
      callback(JSON.parse(localStorage.todo).todos);
    }
}
