import reduxPage from '../page/reduxPage';
import ParentRouter from '../page/ParentRouter';
export default {
    menus: [ // 菜单相关路由
        { key: '/reduxPage', title: 'reduxPage', icon: 'mobile', component: reduxPage },
        { key: '/ParentRouter', title: 'ParentRouter', icon: 'mobile', component: ParentRouter },
    ],
    others: [] // 非菜单相关路由
}