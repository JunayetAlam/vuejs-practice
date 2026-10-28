import LayoutTwo from "@/layouts/LayoutTwo.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import CounterView from "@/views/CounterView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home-default",
        component: HomeView,
      },
      {
        path: "/layout-two",
        name: "home-layout-two",
        component: LayoutTwo,
      },
      {
        path: "/counter",
        name: "counter",
        component: CounterView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
