import Vue from 'vue'
import VueRouter from 'vue-router'
//定义路由
import Home from '../views/HomePage/Home.vue'
import Main from '../views/Main.vue'
import Drug from '../views/DrugPage/Drug.vue'
import Disease from '../views/DiseasePage/Disease.vue'
import Institution from '../views/InstitutionPage/Institution.vue'
import Parameters from '../views/ParametersPage/Parameters.vue'
import UnitBasicInformation from "../views/UnitBasicInformation/UnitBasicInformation.vue"
import PersonalBasicInformation from "../views/PersonalBasicInformation/PersonalBasicInformation.vue"
import ToBeContinue from "../views/ToBeContinue.vue"
import CapLine from "../views/ParametersPage/CapLine.vue"
import SegmentRatio from "../views/ParametersPage/SegmentRatio.vue"
import Threshold from "../views/ParametersPage/Threshold.vue"
Vue.use(VueRouter)

//路由与组件映射
const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        children: [
            //子路由
            { path: 'home', component: Home },
            { path: '/medical/drug', component: Drug },
            { path: '/medical/disease', component: Disease },
            { path: '/medical/hospital', component: Institution },
            { path: '/medical/arg', component: Parameters },
            { path: '/common/company', component: UnitBasicInformation },
            { path: '/common/person', component: PersonalBasicInformation },
            { path: '/ToBeContinue', component: ToBeContinue },
            { path: '/ToBeContinue1', component: ToBeContinue },
            { path: '/ToBeContinue2', component: ToBeContinue },
            { path: '/ToBeContinue3', component: ToBeContinue },
            { path: '/ToBeContinue4', component: ToBeContinue },
            { path: '/ToBeContinue5', component: ToBeContinue },
            { path: '/ToBeContinue6', component: ToBeContinue },
            { path: '/medical/arg/ceil', component: CapLine },
            { path: '/medical/arg/ratio', component: SegmentRatio },
            { path: '/medical/arg/pay', component: Threshold },
        ]
    },
]

//创建router实例
const router = new VueRouter({
    routes // `routes: routes` 的缩写
})

export default router

