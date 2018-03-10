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

    Model.prototype.showCount = function (callback) {
        this._storage.showCount(callback);
    };

    Model.prototype.remove = function (id, callback) {
        this._storage.remove(id, callback)
    };

    Model.prototype.update = function (id, data, callback) {
        this._storage.update(id, data, callback)
    };

    window.app = window.app || {};
    window.app.Model = Model;

})(window);