<template>
    <div class="todo-footer" v-show="todos.length"> 
        <label>
            <input type="checkbox" @change='checkAll'/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props:['todos'],
    computed:{
        doneTotal(){
            //计已完成的个数
            let i=0;
            this.todos.forEach((todo) => {
                if(todo.done)
                i++;
            });
            return i;
        }
    },
    methods:{
        checkAll(e){
            // console.log(e.target.checked)
            // this.checkAllTodo(e.target.checked);
            this.$emit('checkAllTodo',e.target.checked);
        },
        clearAll(){
            // this.clearAllTodo();
            this.$emit('clearAllTodo');
        }
    },

}
</script>

<style>
</style>