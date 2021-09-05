import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ThisUI from "../views/ThisUI.vue";
import ManchkinCounter from "../views/ManchkinCounter.vue";
import MediatrExtension from "../views/MediatrExtension.vue";
import Server from "../views/Server.vue";
import SignIn from "../views/Authorization/SignIn.vue";


const routes: Array<RouteRecordRaw> = [
	{
    path: "/auth",
    name: "Auth",
		component: () => import("@/views/Authorization/Authorization.vue"),
    children: [
			{
				path: "/sign-in",
				name: "SignIn",
				component: SignIn,
			},
		]
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
	{
    path: "/ikcv",
    name: "ikcv",
    component: ThisUI,
  },
	{
    path: "/manchkin-counter",
    name: "manchkin-counter",
    component: ManchkinCounter,
  },
	{
    path: "/mediatr-extension",
    name: "mediatr-extension",
    component: MediatrExtension,
  },
	{
    path: "/server",
    name: "server",
    component: Server,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
