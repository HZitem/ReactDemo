
import asyncComponent from "../components/AsyncComponent";
const AsyncReduxPage = asyncComponent(() => import("../page/reduxPage"));
const AsyncParentRouter = asyncComponent(() => import("../page/ParentRouter"));
const AsyncKidRouter1 = asyncComponent(() => import("../page/kidRouter1"));
const AsyncKidRouter2 = asyncComponent(() => import("../page/kidRouter2"));

export default {
    menus: [ // 菜单相关路由
        { path: '/reduxPage', title: 'reduxPage',  component: AsyncReduxPage },
        { path: '/ParentRouter', title: 'ParentRouter',  component: AsyncParentRouter,
            routes:[
                {path: '/ParentRouter/', title: '/ParentRouter/',  component: AsyncKidRouter1},
                {path: '/ParentRouter/kidRouter1', title: '/ParentRouter/kidRouter1',  component: AsyncKidRouter1},
                {path: '/ParentRouter/kidRouter2', title: '/ParentRouter/kidRouter2',  component: AsyncKidRouter2}
            ] 
        },
    ],
    others: [] // 非菜单相关路由
}

