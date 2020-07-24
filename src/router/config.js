
// import asyncComponent from "../components/AsyncComponent.tsx";
// const AsyncReduxPage = asyncComponent(() => import("../page/reduxPage.tsx"));
// const AsyncParentRouter = asyncComponent(() => import("../page/ParentRouter.tsx"));
// const AsyncHookDemo = asyncComponent(() => import("../page/hookDemo.tsx"));

import AsyncParentRouter from "../page/ParentRouter.tsx";
import AsyncReduxPage from "../page/reduxPage.tsx";
import AsyncHookDemo from "../page/hookDemo.tsx";
import AsyncHome from "../page/home.tsx";

export default {
    menus: [ // 菜单相关路由
        { key: '/', title: 'home',  component: AsyncHome },
        { key: '/ParentRouter', title: 'ParentRouter',  component: AsyncParentRouter },
        { key: '/reduxPage', title: 'reduxPage',  component: AsyncReduxPage },
        { key: '/hookDemo', title: 'hookDemo',  component: AsyncHookDemo },
    ],
    others: [
        
    ] // 非菜单相关路由
}