<template>
  <div>
    <div style="margin-bottom: 2.778vw"><nav-bar ref="navbar"></nav-bar></div>

    <div class="uploadfile">
      <div class="uploadimg">
        <van-uploader preview-size="100vw" :after-read="afterRead" />
      </div>

      <edit-banner left="头像">
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img" />
        <img src="../assets/default_img.jpg" alt="" slot="right" v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="gendershow = true">
      <a href="javascript:;" slot="right">{{ model.gender ? "男" : "女" }}</a>
    </edit-banner>

    <edit-banner left="个签" @bannerClick="textshow = true"> </edit-banner>

    <!-- 弹出窗 -->
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus></van-field>
    </van-dialog>

    <van-dialog
      v-model="textshow"
      title="个签"
      show-cancel-button
      @confirm="textareaClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet
      v-model="gendershow"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
    />


    <div class="editback" @click="$router.back()">返回个人中心</div>


  </div>
</template>

<script>
import NavBar from "../components/common/Navbar";
import editBanner from "../components/common/editBanner";
export default {
  components: {
    NavBar,
    editBanner,
  },
  data() {
    return {
      model: {},
      show: false,
      content: "",
      textshow: false,
      gendershow: false,
      actions: [
        { name: "男", val: 1 },
        { name: "女", val: 0 },
      ],
    };
  },
  created() {
    this.selectUser();
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      var formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.UserUpdate();
      this.$refs.navbar.NavInit()
    },
    async UserUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if (res.data.code == 200) {
        this.$msg.fail("修改成功");
      }
    },
    confirmClick() {
      this.model.name = this.content;
      this.UserUpdate();
      this.content = "";
    },
    textareaClick() {
      this.model.user_desc = this.content;
      this.UserUpdate();
      this.content = "";
    },
    onSelect(data) {
      this.model.gender = data.val;
      this.UserUpdate();
      this.gendershow = false;
    },
  },
};
</script>
<style scoped lang="less">
.editViews a {
  color: #333;
}
.editViews img {
  height: 12.778vw;
  width: 12.778vw;
  border-radius: 50%;
}
.uploadfile {
  overflow: hidden;
  position: relative;
  .uploadimg {
    opacity: 0;
    position: absolute;
  }
  img {
    height: 10vw;
    width: 11vw;
  }
}
.editback {
  margin-top: 5.556vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  color: #999;
  padding: 4.167vw 0;
  font-size: 4vw;
}
</style>