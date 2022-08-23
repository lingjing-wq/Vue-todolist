<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'MyHeader',
    //接收从APP内传来的函数receive
<<<<<<< HEAD
=======
    props:['receive'],
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
    methods: {
        add(event) {
            // console.log(event.target.value)
            if(!event.target.value.trim()) return;//校验数据：输入不为空  &  trim()去掉前后空格
            //将用户的输入包包装成一个todo对象
            const todoObj = { id: nanoid(), title: event.target.value, done: false }
            // console.log(todoObj)
<<<<<<< HEAD
            this.$emit('receive',todoObj);//将需要添加的数据传给App
=======
            this.receive(todoObj);//将需要添加的数据传给App
>>>>>>> aa4a0d066879ee6bde17074b017cef8f53045ae5
            //添加完后将值置为空
            event.target.value=''
        }
    },
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>