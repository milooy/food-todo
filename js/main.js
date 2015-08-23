var defaults = {
    todoTask: 'tood-task',
    todoHeader: 'task-header',
    todoDate: 'task-date',
    taskId: 'task-',
    deleteDiv: 'delete-div'
}, codes = {
    '1': '#list-inbox',
    '2': '#list-urgent',
    '3': '#list-today'
};

var TODO = {
    init: function() {
        console.log("in init");
        $('.todo-input').keydown(this.add.bind(this));
    },
    add: function(e) {
        console.log("in add");
        if($('.todo-input').val() && e.keyCode === 13) {
            console.log("haha");
            var title = $('.todo-input').val();
            console.log(title);
            var key = 13;
            TODO.appendTODOHTML(title, key, 0, 1);
            $('.todo-input').val(""); //인풋이 많으니 골라 지워
        }

    },
    appendTODOHTML: function(title, id, completed, code) {
        var parent = $(codes[code])
        var source   = $("#todo-template").html();
        var template = Handlebars.compile(source);
        var data = {
            id: id,
            title : title,
            completed: completed
        };
        $(parent).append(template(data));
        console.log(template(data));

    }
    // generateElement({
    //   id: "123",
    //   code: "1", //리스트 이름
    //   title: "My Uber Important Task",
    //   start-date: "5/9/2015",
    //   completed-date: "5/10/2015",
    //   completed: '0'
    // });
}

TODO.init();
