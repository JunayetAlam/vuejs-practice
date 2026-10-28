import DefaultView from "@/views/DefaultVue.vue";
import LayoutOne from "@/layouts/LayoutOne.vue";
import LayoutTwo from "@/layouts/LayoutTwo.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import CounterView from "@/views/CounterView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";
import LayoutThree from "@/layouts/LayoutThree.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home-default",
        component: LayoutOne,
        children: [
          {
            path: "",
            name: "layout-one",
            component: DefaultView,
            props: {
              url: "layout-two",
            },
          },
          {
            path: "/layout-two",
            name: "layout-two",
            component: LayoutTwo,
            children: [
              {
                path: "",
                name: "layout-two-data",
                component: DefaultView,
                props: {
                  url: "/layout-two/layout-three",
                },
              },
              {
                path: "layout-three",
                name: "layout-three",
                component: LayoutThree,
                children: [
                  {
                    path: "",
                    name: "user-data",
                    component: UserView,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "/counter",
        name: "counter",
        component: CounterView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
