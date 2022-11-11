new Vue({
  el: "#app",
  data: {
    newcomment: "",
    newday: "",
    todos: [],
    editcomment: "",
    editday: "",
    editonly: true,
  },

  watch: {
    newcomment: {
      handler: function (newcomment) {
        const parsed = JSON.stringify(newcomment);
        localStorage.setItem("newcomment", parsed);
      },
      deep: true,
    },
    newday: {
      handler: function (newday) {
        const parsed = JSON.stringify(newday);
        localStorage.setItem("newday", parsed);
      },
      deep: true,
    },
    todos: {
      handler: function (todos) {
        const parsed = JSON.stringify(todos);
        localStorage.setItem("todos", parsed);
      },
      deep: true,
    },
    editonly: {
      handler: function (editonly) {
        const parsed = JSON.stringify(editonly);
        localStorage.setItem("editonly", parsed);
      },
      deep: true,
    },
    editcomment: {
      handler: function (editcomment) {
        const parsed = JSON.stringify(editcomment);
        localStorage.setItem("editcomment", parsed);
      },
      deep: true,
    },
    editday: {
      handler: function (editday) {
        const parsed = JSON.stringify(editday);
        localStorage.setItem("editday", parsed);
      },
      deep: true,
    },
  },
  mounted: function () {
    if (localStorage.getItem("newcomment")) {
      try {
        this.newcomment = JSON.parse(localStorage.getItem("newcomment"));
      } catch (e) {
        localStorage.removeItem("newcomment");
      }
    }
    if (localStorage.getItem("newday")) {
      try {
        this.newday = JSON.parse(localStorage.getItem("newday"));
      } catch (e) {
        localStorage.removeItem("newday");
      }
    }
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
    if (localStorage.getItem("editonly")) {
      try {
        this.editonly = JSON.parse(localStorage.getItem("editonly"));
      } catch (e) {
        localStorage.removeItem("editonly");
      }
    }
    if (localStorage.getItem("editcomment")) {
      try {
        this.editcomment = JSON.parse(localStorage.getItem("editcomment"));
      } catch (e) {
        localStorage.removeItem("editcomment");
      }
    }
    if (localStorage.getItem("editday")) {
      try {
        this.editday = JSON.parse(localStorage.getItem("editday"));
      } catch (e) {
        localStorage.removeItem("editday");
      }
    }
  },

  methods: {
    doAdd: function () {
      if (this.newcomment == "") {
        return;
      }
      this.todos.push({
        comment: this.newcomment,
        day: this.newday,
        editform: false,
        state: false,
      });
      this.doclear();
    },

    doclear: function () {
      this.newday = "";
      this.newcomment = "";
    },

    doChangeState: function (item) {
      item.state = !item.state;
    },

    doform: function (item) {
      item.editform = true;
      this.editonly = false;
      this.editcomment = item.comment;
      this.editday = item.day;
    },

    doChange: function (item) {
      if (this.editcomment == "") {
        return;
      }
      item.comment = this.editcomment;
      item.day = this.editday;
      item.editform = false;
      this.editonly = true;
    },

    doeditstop: function (item) {
      item.editform = false;
      this.editonly = true;
    },

    doRemove: function (item) {
      let index = this.todos.indexOf(item);
      this.todos.splice(index, 1);
    },
  },
});
