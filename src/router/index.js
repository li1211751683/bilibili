import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import("../views/Home.vue")
const register = () => import("../views/register.vue")
const userinfo = () => import("../views/userinfo.vue")
const Login = () => import("../views/Login.vue")
const edit = () => import("../views/Edit.vue")
const article = () => import("../views/Article.vue")
const editcategory = () => import("../views/EditCategory.vue")


Vue.use(Router)

let router =  new Router({
 
  routes: [
    {
      path:"/",
      component:Home,
      meta:{
        keepalive:true
      }
    },
    {
      path:"/register",
      component:register
    },
    {
      path:"/userinfo",
      component:userinfo,
      meta:{
        istoken:true
      }
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:'/edit',
      component:edit,
      meta:{
       istoken:true
     }
    },
    {
      path:'/article/:id',
      component:article
    },
    {
      path:'/editcategory',
      component:editcategory
    }
  ],
  mode:'history'
})

router.beforeEach((to,from,next) => {
  if((!localStorage.getItem('token') || !localStorage.getItem('id'))&&to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router