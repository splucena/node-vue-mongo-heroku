<template>
	<div id="app" class="m-0 p-0">
		<div
			class="d-flex align-items-center justify-content-center bg-success text-white m-0 p-4"
		>
			<h1 class="display-1">Pure Vuesomeness</h1>
		</div>
		<nav
			class="site-nav navbar navbar-expand navbar-light bg-light shadow sticky-top"
		>
			<div class="container container-fluid">
				<router-link to="/" class="navbar-brand"
					><h1>Products</h1></router-link
				>
				<div class="btn btn-danger p-0">
					<router-link to="/cart" class="nav-item nav-link text-white"
						>Cart
						<span
							class="badge badge-pill bg-warning text-dark p-2 mx-1"
						>
							{{ totalCartItems }}
						</span>
						Total
						<span
							class="badge badge-pill bg-warning text-dark p-2 mx-1"
						>
							{{ totalCartPrice | currency(totalCartPrice) }}
						</span>
					</router-link>
				</div>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<script>
//import { cartItems } from "../fake-data.js";
import axios from "axios";

export default {
	name: "navigation",
	data: function() {
		return {
			cartItems: [],
		};
	},
	filters: {
		currency: function(value) {
			return "$" + Number.parseFloat(value).toFixed(2);
		},
	},
	created: async function() {
		const result = await axios.get("/api/users/12345/cart");
		const cartItems = result.data;
		this.cartItems = cartItems;
	},
	computed: {
		totalCartItems: function() {
			return this.cartItems.length;
		},
		totalCartPrice: function() {
			let sum = 0;
			this.cartItems.forEach((p) => {
				sum += Number(p.price);
			});
			return sum;
		},
	},
	//mounted: function() {
	//	this.cartItems = cartItems;
	//},
};
</script>
