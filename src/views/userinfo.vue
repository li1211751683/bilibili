<template>
  <div class="userinfo">
    <nav-bar>
    </nav-bar>

    <img src="../assets/bannerTop_new.png" alt="" class="backImg" >

    <user-detail :userInfo="model"></user-detail>

  </div>
</template>

<script>
import NavBar from "../components/common/Navbar"
import userDetail from "../components/userComponent/userDetail"
export default {
  components:{
    NavBar,
    userDetail,
  },
  data() {
    return {
      model:{}
    }
  },
  methods: {
    async userData(){
      const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0] 
    }

  },
  created() {
    this.userData()
  },
}
</script>
<style lang="less">
.userinfo{
.backImg{
    height: 91px;
    width: 100%;
}
}
</style>