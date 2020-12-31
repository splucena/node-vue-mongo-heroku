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
//import { cartItems } from "../fake-data.js";
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
		const cartItems = result.data;
		this.cartItems = cartItems;

		// Update localCartItems of parent App.vue
		//this.$emit("update:localCartItems", this.cartItems);
	},
};
</script>
