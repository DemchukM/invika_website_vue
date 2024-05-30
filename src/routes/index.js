import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./HomePage.vue"
import SuccessPage from "./SuccessPage.vue"
import CartPage from "./CartPage.vue"
import DeliveryPage from "./DeliveryPage.vue"


export const route = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/success', component: SuccessPage },
        { path: '/cart', component: CartPage },
        { path: '/delivery', component: DeliveryPage },
    ],
})