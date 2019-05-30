
import asyncComponent from "../components/AsyncComponent";
const AsyncReduxPage = asyncComponent(() => import("../page/reduxPage"));
const AsyncParentRouter = asyncComponent(() => import("../page/ParentRouter"));

export default {
    menus: [ // 菜单相关路由
        { key: '/reduxPage', title: 'reduxPage',  component: AsyncReduxPage },
        { key: '/ParentRouter', title: 'ParentRouter',  component: AsyncParentRouter },
    ],
    others: [] // 非菜单相关路由
}