<template>
    <div class="post">
        {{title}}
    </div>
</template>
<script>
export default {
  props:{
    title:{
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.post{
  text-align: left;
  margin: 48px 10px 48px 0px;
  font-family: 'Arvo', serif;
  font-weight: bold;
  font-size: 30px;
}
</style>
