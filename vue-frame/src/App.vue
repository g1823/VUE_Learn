<template>
  <div>
    <Brother1></Brother1>
    <hr>
    <Brother2></Brother2>
  </div>
</template>

<script>
  import Brother1 from '@/components/brother1.vue'
  import Brother2 from '@/components/brother2.vue'
  export default {
    name: 'App',
    components: {
      Brother1,
      Brother2
    }
  }

</script>

<style>
  *{
    text-align: center;
  }
</style>
