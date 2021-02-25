<template>
<div>
    <h2>輸入地址搜尋</h2>
    <input type="text" class="mb-3" v-model.trim="txt">
  <ul v-for="(item, i) in newData" :key="i">
    <li class="h2">{{item.觀光旅館名稱}}</li>
    <li>{{item.地址}}</li>
    <br>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      newData: [],
      data: [],
      txt: ''
    }
  },
  methods: {
    getData () {
      const self = this
      const url = 'https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88'
      this.$http.get(url).then(response => {
        console.log(response)
        self.data = response.data.data
        self.newData = self.data
      })
    },
    searchData (txt) {
      const self = this
      const newTxt = txt
      const searchData = self.data.filter(item => {
        const Newitem = item.地址
        return Newitem.includes(newTxt)
      })
      self.newData = searchData
      if (txt === '') { // 搜尋 input 為空時要出現所有電商
        self.newData = self.data
      }
    }
  },
  watch: {
    txt: function (txt) {
      const self = this
      self.searchData(txt)
    }
  },
  created () {
    this.getData()
    console.log('e')
  }
}
</script>
