(function (window) {

    "use strict";

    window.$delegate = function (target, selector, type, handler) {
        target.addEventListener(type, function (event) {
            var targetElement = event.target;
            var potentialElements = target.querySelectorAll(selector);
            var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

            if (hasMatch) {
              handler.call(targetElement, event);
            }
        });
    };

    function View(template) {
        this._template = template;

        this.$todoList = document.querySelector('.todo-list');
        this.$newTodo = document.querySelector('.new-todo');
    }

    View.prototype.onNewTodo = function (callback) {
        var self = this;
        self.$newTodo.addEventListener('change', function () {
            callback(self.$newTodo.value);
            self.$newTodo.value = '';
        });
    };

    View.prototype._itemId = function (element) {
        var li = element.parentNode.parentNode;
        return parseInt(li.dataset.id, 10);
    };

    View.prototype.showAll = function (data) {
        this.$todoList.innerHTML = this._template.fillTemplate(data);
    };

    View.prototype.onItemToggle = function (callback) {
        var self = this;
        window.$delegate(self.$todoList, ".toggle", 'click', function () {
            callback({id: self._itemId(this), done:this.checked});
        });
    };

    View.prototype.onItemRemove = function (callback) {
        var self = this;
        window.$delegate(self.$todoList, ".destroy", 'click', function () {
            callback({id: self._itemId(this)});
        });
    };

    window.app = window.app || {};
    window.app.View = View;

})(window);
