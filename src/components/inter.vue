<template>
    <div>
<h1>hello inter component</h1>
<h2>{{txt}}</h2>
<input type="text" v-model="module"/>
<br>
<br>
{{ total }}
<br>
<br>
<button @click="exChange()">Change</button>
    </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
      txt: 1234,
      module: ''
    }
  },
  methods: {
    exChange () {
      this.txt = 12345678
    }
  },
  computed: {
    total () {
      return this.module * 2
    }
  }
}
</script>
