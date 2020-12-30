import Vue from "vue";
import VueRouter from "vue-router";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import CartPage from "../views/CartPage.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/products",
		name: "Products",
		component: ProductsPage,
	},
	{
		path: "/products/:id",
		name: "ProductDetail",
		component: ProductDetailPage,
	},
	{
		path: "/cart",
		name: "CartPage",
		component: CartPage,
	},
	{
		path: "/checkout",
		name: "Checkout",
		component: Checkout,
	},
	{
		path: "/",
		redirect: "/products",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
