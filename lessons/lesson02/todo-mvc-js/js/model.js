(function (window) {

    "use strict";

    function Model(storage) {
        this._storage = storage;
    }

    Model.prototype.create = function (title, callback) {
        var newTodo = {
            title: title.trim(),
            done: false
        };

        this._storage.save(newTodo, callback);
    };

    Model.prototype.findAll = function (callback) {
        this._storage.findAll(callback);
    };

    window.app = window.app || {};
    window.app.Model = Model;

})(window);