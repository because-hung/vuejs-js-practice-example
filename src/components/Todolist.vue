<template>
<div>
    <div class="section">
        <h1>todolist</h1>
<p>thingS</p>
  <input type="text" v-model="Content">
  <p>Date:</p>
  <input type="date"  v-model="Dat">
  <p>Time:</p>
<input type="time" v-model="Time">

<button @click="addTodo">enter</button>
    </div>

<div class="item">
<ul class="list"  v-for="item in Todo" :key="item.i" >
    <li>{{item.Content}}</li>
      <li>{{item.Dat}}</li>
        <li>{{item.Time}}</li>
        <li>{{item.i}}</li>
        <button @click="delTodo(item.i)">del</button>
</ul>
</div>
</div>

</template>

<script>
export default {
  data () {
    return {
      Content: '',
      Dat: '',
      Time: '',
      i: '',
      Todo: []
    }
  },
  methods: {
    addTodo () {
      var timecode = Math.floor(Date.now())
      this.Todo.reverse().push({
        Content: this.Content,
        Dat: this.Dat,
        Time: this.Time,
        i: timecode
      })
      this.Content = ''
      this.Dat = ''
      this.Time = ''
      this.Todo = this.Todo.sort().reverse()
    },
    delTodo (id) {
      var filterTodo = this.Todo.filter(item => {
        return item.i !== id
      })
      this.Todo = filterTodo
    }
  }
}

</script>

<style>
.section{
    margin: 10px ;
    border:3px black solid;
}
button{
    margin-bottom: 20px;
    margin-left: 50px;
}
.item{
    width: 1200px;
    margin: 0 auto;
    border: orange 2px dotted;

}

li{
    font-size: 24px;
    list-style-type: none;
}

</style>
