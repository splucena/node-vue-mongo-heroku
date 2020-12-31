<template>
	<div class="container p-0">
		<h1 class="border-bottom pb-4 mt-4 border-dark">Shopping Cart</h1>
		<product-list
			:cartItems.sync="cartItems"
			:localCartItems.sync="localCartItems"
		></product-list>
	</div>
</template>

<script>
import axios from "axios";
import ProductList from "../components/ProductList.vue";

export default {
	name: "CartPage",
	data: function() {
		return {
			cartItems: [],
		};
	},
	props: ["localCartItems"],
	components: {
		ProductList,
	},
	created: async function() {
		const result = await axios.get("/api/users/12345/cart");

		// or const { data: products } = await axios.get("/api/users/12345/cart");
		// where data is a key from the result of the axios call
		// products name of the variable data is assigned to
		// const cartItems = products;
		const cartItems = result.data;
		this.cartItems = cartItems;
	},
};
</script>
