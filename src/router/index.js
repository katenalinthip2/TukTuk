import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/booking",
        name: "Booking",
        component: () =>
            import("../components/Booking.vue")
    },
    {
        path: "/contect",
        name: "Contect",
        component: () =>
            import("../components/Contect.vue")
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => 
            import("../components/Profile.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;