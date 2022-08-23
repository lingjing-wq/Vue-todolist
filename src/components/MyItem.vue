<template>
    <transition name="todo" appear>
        <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
    </transition>
</template>

<script>
export default {
    name: 'MyItem',
    //声明接受todo对象
    props: ['todo'],//接收从MyList组件中传来的数据
    methods: {
        handleCheck(id) {
            // console.log(id)
            //通知APP组件将对应的todo对象的done值取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo', id);
        },
        //删除
        handledelete(id) {
            if (confirm('确定删除吗？')) {
                // console.log(id);
                //this.deleteTodo(id);
                this.$bus.$emit('deleteTodo', id);
            }
        },
        handleEdit(todo) {
            // todo.isEdit=true;
            if (todo.hisEdit!=null) {
                todo.isEdit = true;
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus();
            })
        },
        handleBlur(todo,event) {
            todo.isEdit = false;
            if(!event.target.value.trim())
            return alert('输入不能为空');
            this.$bus.$emit('updateTodo',todo.id,event.target.value)
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