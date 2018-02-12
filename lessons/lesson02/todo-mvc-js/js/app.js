(function (window) {

    "use strict";

    function Todo() {
        this.storage = new window.app.Storage();
        this.model = new window.app.Model(this.storage);
        this.template = new window.app.Template();
        this.view = new window.app.View(this.template);
        this.controller = new window.app.Controller(this.model, this.view);
    }

    window.app.todo = new Todo();
    window.addEventListener ('load', function(){
      window.app.todo.controller.showAll();
    })

})(window);
