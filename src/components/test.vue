<template>
  <div>
    <h2>開學日</h2>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
    }
  },
  mounted () {
    console.log('123')
  },
  beforeDestroy () {
    console.log('456')
  }
}
</script>
