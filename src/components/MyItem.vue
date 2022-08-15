<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    //声明接受todo对象
    props: ['todo', 'checkTodo','deleteTodo'],//接收从MyList组件中传来的数据
    methods: {
        handleCheck(id) {
            // console.log(id)
            //通知APP组件将对应的todo对象的done值取反
            this.checkTodo(id)
        },
        //删除
        handledelete(id) {
            if(confirm('确定删除吗？')){
                // console.log(id);
                this.deleteTodo(id);
            }
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

.todo-enter-active {
    animation: todo 0.5s linear;
}

.todo-leave-active {
    animation: todo 0.5s linear reverse;
}

@keyframes todo {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0px);
    }
}
</style>