<template>
	<div class="container p-0">
		<h1 class="border-bottom pb-4 mt-4 border-dark">Shopping Cart</h1>
		<product-list :cartItems="cartItems"></product-list>
		<router-link to="/checkout">
			<button class="btn btn-primary btn-block btn-lg mb-4">
				Proceed to Checkout
			</button>
		</router-link>
	</div>
</template>

<script>
import { cartItems } from "../fake-data.js";

import ProductList from "../components/ProductList.vue";

export default {
	name: "CartPage",
	data: function() {
		return {
			cartItems: cartItems,
		};
	},
	components: {
		ProductList,
	},
};
</script>
