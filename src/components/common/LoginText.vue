<template>
  <div>
    <van-cell-group>
      <van-field v-model="content" :label="label" :placeholder="placeholder" :type="type"
    
      >

      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props:['label','placeholder','type'],
  data() {
    return {
      content:""

    }
  },
  watch: {
    content(){
      this.$emit("contentWatch",this.content)
    }
  },
}
</script>
<style>
</style>
