<template>
    <ul class="todo-main">
<<<<<<< HEAD
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
=======
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    components: {
        MyItem
    },
    //接收从App组件中来的数据
<<<<<<< HEAD
    props:['todos']
=======
    props:['todos','checkTodo','deleteTodo']
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>