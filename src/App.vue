<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">

<<<<<<< HEAD
        <MyHeader @receive="receive" />

        <MyList :todos="todos"/>

        <MyFooter :todos="todos" @checkAllTodo='checkAllTodo' @clearAllTodo='clearAllTodo' />
=======
        <MyHeader :receive="receive" />

        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />

        <MyFooter :todos="todos" :checkAllTodo='checkAllTodo' :clearAllTodo='clearAllTodo' />
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
      </div>
    </div>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
<<<<<<< HEAD
      // todos: [
      //   { id: '001', title: '吃饭', done: true },
      //   { id: '002', title: '睡觉', done: false },
      //   { id: '003', title: '做事', done: true },
      // ]
      todos: JSON.parse(localStorage.getItem('todos')) || []
=======
      todos: [
        { id: '001', title: '吃饭', done: true },
        { id: '002', title: '睡觉', done: false },
        { id: '003', title: '做事', done: true },
      ]
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
    }
  },
  methods: {
    //往对象数组中添加新的对象数据
    receive(e) {
      // console.log("收到数据了",e);
      this.todos.unshift(e);
      //勾选or取消勾选
    },
    //勾选or取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id)
          todo.done = !todo.done;
      })
    },
    //删除
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      })
    },
    //全选or全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      })
    },
    //清除所有已完成的任务
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
<<<<<<< HEAD
    },
    //勾选or取消勾选
    updateTodo(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id === id)
          todo.title =title;
      })
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  //解绑
  beforeDestroy() {
    this.$bus.$off('checkTodo');
    this.$bus.$off('deleteTodo');
    this.$bus.$off('updateTodo');
  },

=======
    }
  },
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: green;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
<<<<<<< HEAD

=======
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
</style>