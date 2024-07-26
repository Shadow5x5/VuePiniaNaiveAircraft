import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "welcome-page",
        component: () => import("../views/WelcomePage/WelcomePage.vue"),
    },
    {
        path: "/result",
        name: "result-page",
        component: () => import("../views/ResultPage/ResultPage.vue"),
    },
    {
        path: "/about/:id",
        name: "about",
        component: () => import("../views/AboutPage/AboutPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
