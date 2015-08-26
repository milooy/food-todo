var consts = {

}, lists = {
    '1': '#list-inbox',
    '2': '#list-urgent',
    '3': '#list-today'
};

var Database = {
    addTODO: function() {

    }
};

var TODO = {
    init: function() {
        $('.todo-input').keydown(this.add.bind(this));
    },
    add: function(e) {
        if($('.todo-input').val() && e.keyCode === 13) {
            var title = $('.todo-input').val();
            var id = new Date().getTime();
            TODO.appendTODOHTML(title, id, 0, 1);
            $('.todo-input').val(""); //인풋이 많으니 골라 지워
        }

    },
    appendTODOHTML: function(title, id, completed, listId) {
        var parent = $(lists[listId])
        var source   = $("#todo-template").html();
        var template = Handlebars.compile(source);
        var data = {
            id: id,
            listId: "1",
            title : title,
            completed: completed
        };
        $(parent).append(template(data));

    },
    /*
    generateElement({
      id: "1440490127007", //스타트 데이트가 들어감 "5/9/2015",
      listId: "1", //리스트 이름
      title: "빨래하기",
      completed: '0' // 컴플릿 하면 "5/10/2015"처럼 들어감
    });
    */
    remove: function(id) {

    }
}

TODO.init();
