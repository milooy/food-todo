var consts = {

}, lists = {
    '1': '#list-inbox',
    '2': '#list-urgent',
    '3': '#list-today'
};

var TODO = {
    init: function() {
        $('.todo-input').keydown(this.add.bind(this));
    },
    add: function(e) {
        if($('.todo-input').val() && e.keyCode === 13) {
            var title = $('.todo-input').val();
            var key = 15;
            TODO.appendTODOHTML(title, key, 0, 1);
            $('.todo-input').val(""); //인풋이 많으니 골라 지워
        }

    },
    appendTODOHTML: function(title, id, completed, list) {
        var parent = $(lists[list])
        var source   = $("#todo-template").html();
        var template = Handlebars.compile(source);
        var data = {
            id: id,
            title : title,
            completed: completed
        };
        $(parent).append(template(data));

    }
    /*
    generateElement({
      id: "123",
      code: "1", //리스트 이름
      title: "My Uber Important Task",
      start_date: "5/9/2015",
      completed_date: "5/10/2015",
      completed: '0'
    });
    */
    remove: function(id) {

    }
}

TODO.init();
