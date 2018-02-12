(function (window) {

    "use strict";

    function Storage(todo) {

        if (!localStorage.todo) {
            var data = {
                todos: []
            };
            localStorage.todo = JSON.stringify(data);
        }
    }

    Storage.prototype.findAll = function (callback) {
        var todos = JSON.parse(localStorage.todo).todos;
        callback(todos);
    };

    Storage.prototype.remove = function (id, callback) {
        var todos = JSON.parse(localStorage.todo).todos;
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos.splice(i, 1);
                break;
            }
        }
        localStorage.todo = JSON.stringify({todos: todos});
        callback();
    };

    Storage.prototype.update = function (id, data, callback) {
        var todos = JSON.parse(localStorage.todo).todos;

        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].done = data.done;
                break;
            }
        }
        localStorage.todo = JSON.stringify({todos: todos});
        callback();
    };

    Storage.prototype.save = function (data, callback) {
        var todos = JSON.parse(localStorage.todo).todos;
        data.id = new Date().getTime();
        todos.push(data);
        localStorage.todo = JSON.stringify({
            todos: todos
        });
        callback(data);
    };

    window.app = window.app || {};
    window.app.Storage = Storage;

})(window);
