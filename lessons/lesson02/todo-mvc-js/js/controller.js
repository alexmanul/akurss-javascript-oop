(function (window) {

	"use strict";

	function Controller(model, view) {
		var self = this;
		self.model = model;
		self.view = view;

		self.view.onNewTodo(function (title) {
			self.addItem(title);
		});

		self.view.onItemToggle(function (todo) {
			self.toggleItem(todo);
		});

		self.view.onItemRemove(function (todo) {
			self.removeItem(todo);
		});
	}

	Controller.prototype.addItem = function (title) {
		var self = this;
		if (title.trim() === '') {
			return;
		}
		self.model.create(title, function () {
			self.showAll();
		});
	};

	Controller.prototype.toggleItem = function (todo) {
		var self = this;
		self.model.update(todo.id, todo, function () {
			self.showAll();
		})
	};

	Controller.prototype.removeItem = function (todo) {
		var self = this;
		self.model.remove(todo.id, function () {
			self.showAll();
		})
	};

	Controller.prototype.showAll = function () {
		var self = this;
		self.model.findAll(function (data) {
			self.view.showAll(data);
		});
		self.model.showCount(function (data) {
			self.view.showAll(data);
		});
	};

	window.app = window.app || {};
	window.app.Controller = Controller;

})(window);
