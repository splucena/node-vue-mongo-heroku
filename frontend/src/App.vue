<template>
	<div id="main-app">
		<navigation
			:totalCartItems.sync="totalCartItems"
			:totalCartPrice.sync="totalCartPrice"
		></navigation>
		<router-view class="container" :localCartItems.sync="cartItems" />
	</div>
</template>

<script>
import axios from "axios";
import Navigation from "./components/Navigation.vue";
//import ProductsPage from './views/ProductsPage.vue';

export default {
	name: "main-app",
	components: {
		Navigation,
	},
	data: function() {
		return {
			cartItems: [],
		};
	},
	created: async function() {
		const result = await axios.get("/api/users/12345/cart");
		const cartItems = result.data;
		this.cartItems = cartItems;
	},
	computed: {
		totalCartItems: function() {
			let totalCartItems = 0;
			if (this.cartItems.length > 0) {
				totalCartItems = this.cartItems.length;
			}
			return totalCartItems;
		},
		totalCartPrice: function() {
			let sum = 0;

			if (this.cartItems.length > 0) {
				sum = this.cartItems
					.map((p) => Number(p.price))
					.reduce((a, b) => a + b);
			}

			return sum;
		},
	},
};
</script>

<style lang="scss">
$primary: #272727;

@import "node_modules/bootstrap/scss/bootstrap";
</style>
