<template>
  <div>
    <test :msg="status"></test>
    <h2 class="my-3">期末成績</h2>
    <ul v-for="(item, i) in sub" :key="i">
      <li class="h2">{{item.name}}:{{item.score}} *
      <span><input type="number" v-model="item.amount" style="width:50px"></span>
      </li>
    </ul>
    <h4><strong>總共:{{ total }}</strong> </h4>
   <button type="button" class="btn btn-primary mb-2" @click="PlusScore">click me</button>
   <br>
   <input type="text" v-model="txt">
   <br>
   <span>{{txt}}</span>
   <inter></inter>
    <!-- <h2>好好吃攤位</h2>
    <ul v-for="(item, i) in foods" :key="i">
      <li>
        {{ item.name }} - {{ item.price }},
        <span
          >數量<input type="number" v-model="item.amount" style="width:50px"
        /></span>
        <span>價錢:{{ item.price * item.amount }}</span>
      </li>
    </ul>
    <h4>
      <strong>總共:{{ total }}</strong>
    </h4> -->
  </div>
</template>

<script>
import test from './test'
import inter from './inter'
export default {
  data () {
    return {
      status: 'false',
      txt: '',
      sub: [
        {
          name: '國文',
          score: 55,
          amount: 0
        },
        {
          name: '數學',
          score: 60,
          amount: 0
        },
        {
          name: '英文',
          score: 80,
          amount: 0
        },
        {
          name: '地理',
          score: 75,
          amount: 0
        }
      ]
    }
  },
  components: {
    test,
    inter
  },
  methods: {
    PlusScore () {
      if (this.total < 300) {
        alert('failed')
      } else {
        alert('success')
      }
    }
  },
  computed: {
    total () {
      var sum = 0
      for (var i in this.sub) {
        let num = 0
        num = this.sub[i].score * this.sub[i].amount
        sum = sum + num
      }
      return sum
    }
    // total: function () {
    // // *4
    // var newdata = this.foods.reduce((sum, item) => { return sum + item.price * item.amount }, 0)
    // return newdata
    // *3
    // var sum = 0
    // var num = 0
    // this.foods.forEach(function (item, index, array) {
    //   num = item.price * item.amount
    //   sum = sum + num
    // })

    // return sum
    // *1 true
    // var sum = 0
    // for (var i in this.foods) {
    //   let num = 0
    //   num = this.foods[i].price * this.foods[i].amount
    //   sum = sum + num
    // }
    // return sum

    // *2 error
    // for (var i = 0; i <= this.foods.length; i++) {
    //   var num = 0
    //   num = this.foods[i].price * this.foods[i].amount
    //   sum = sum + num
    // }
    // return sum
    // }
  },
  mounted () {
    this.status = true
    setTimeout(() => {
      this.status = false
    }, 1000)
  }
}
</script>
