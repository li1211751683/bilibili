<template>
  <div>
    <login-top Text="注册bilibili">
      <div
        slot="right"
        style="font-size: 3.611vw"
        @click="$router.push('/login')"
      >
        用户登录
      </div>
    </login-top>

    <login-text
      label="姓名"
      style="margin: 15.001px 0"
      placeholder="请输入姓名"
      @contentWatch="(res) => (model.name = res)"
    >
    </login-text>

    <login-text
      label="账号"
      placeholder="请输入账号"
      @contentWatch="(res) => (model.username = res)"
    >
    </login-text>

    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      @contentWatch="(res) => (model.password = res)"
    >
    </login-text>

    <login-btn BtnText="注册" @TextClick="AjaxInsert"> </login-btn>
  </div>
</template>

<script>
import LoginTop from "../components/common/LonginTop";
import LoginText from "../components/common/LoginText";
import LoginBtn from "../components/common/LoginBtn";
export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
  data() {
    return {
      model: {
        name: "lixiaobai",
        username: "lixiaobai",
        password: "lixiaobai",
      },
    };
  },
  methods: {
    async AjaxInsert() {
      let rulg = /^.{6,16}/;
      if (
        rulg.test(this.model.name) &&
        rulg.test(this.model.username) &&
        rulg.test(this.model.password)
      ) {
        let res = await this.$http.post("/register", this.model);
        this.$msg.fail(res.data.msg);
        localStorage.setItem("token", res.data.objtoken);
        localStorage.setItem("id", res.data.id);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 2000);
      } else {
        this.$msg.fail("格式不正确,请重新输入!");
      }
    },
  },
};
</script>
<style>
</style>