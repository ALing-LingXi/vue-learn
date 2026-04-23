import { createRouter,createWebHashHistory} from "vue-router"
import news from "@/componet/news.vue";
import about from "@/componet/about.vue";
import home from "@/componet/home.vue";
const router = createRouter({
  history:createWebHashHistory(),
  routes:[{path:"/news",component:news}
    ,{path:"/about",component:about},
    {path:"/",component:home},]
})
export default router