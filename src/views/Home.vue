<template>
  <div>
    <nav-bar></nav-bar>
    <div class="categorytab">

       <div class="category-ico" @click="$router.push('/editcategory')"><van-icon name="setting-o" /></div>

      <van-tabs v-model="active" swipeable sticky animated @change="changeItem">
        
        <van-tab v-for="(item,index) in category" :title="item.title" :key="index"  >
          <!-- 下拉加载列表 -->
          <van-list v-model="item.loading" :finished="item.finished" finished-text="我也是有底线的" @load="onLoad">


          <div class="detailparent">
           <cover class="detailitem" v-for="(categoryitem,categoryindex) in item.list" :key="categoryindex" :detailitem="categoryitem">
           </cover>
          </div>

          </van-list>

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/common/Navbar";
import cover from "./cover"
export default {
  data() {
    return {
      category: [],
      active:0
    };
  },
  components: {
    NavBar,
    cover
  },
  activated() {
    if(localStorage.getItem('newCat')) {
        let newCat = JSON.parse(localStorage.getItem('newCat'))
        this.category = this.changeCategory(newCat)
        this.selectArticle();
    }
  },
  created() {
    this.selectCategory();
  },
  methods: {
    onLoad(){
      const categoryitem = this.category[this.active];
      setTimeout(()=>{
        categoryitem.page += 1;
        this.selectArticle();
      },1000)
    },
    // 点击切换时，动态更新内容
    changeItem(){
    const categoryitem = this.category[this.active];
     if (categoryitem.list.length==0) {
        this.selectArticle();
      }
    },
    async selectCategory() {
      if(localStorage.getItem('newCat')) {
        return
      }

      const res = await this.$http.get("/category");
      this.category = this.changeCategory(res.data)
      this.selectArticle();
    },
    // 添加数据
    changeCategory(data){
      const category1= data.map((item,index)=>{
        item.list = [];
        item.page = 1;
        item.finished = false;
        item.loading = true;
        item.pagesize = 10;
        return item;
      })
      return category1;
    },
    async selectArticle(){
      const categoryitem = this.category[this.active];
      const res = await this.$http.get("/detail/" + categoryitem._id,{
        params:{
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      })
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
       if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
      
      
      
    },
  },
};
</script>
<style lang="less">
.home {
  background-color: white;
}
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem {
    margin: 1.389vw 0;
    width: 45%;
  }
}
.categorytab {
  position: relative;
  .category-ico {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 1.944vw;
    padding: 1.389vw 2.778vw;
    background-color: white;
  }
}
</style>