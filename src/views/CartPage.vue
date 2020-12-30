<template>
	<div class="container p-0">
		<h1 class="border-bottom pb-4 mt-4 border-dark">Shopping Cart</h1>
		<ul class="list-group" v-for="product in cartItems" :key="product.id">
			<li class="list-group-item border-0 m-0">
				<div class="row border-bottom">
					<div class="col-2">
						<img
							:src="product.imageUrl"
							:alt="product.name"
							class="img-fluid"
						/>
					</div>
					<div class="col-5 d-flex align-items-center">
						<div>
							<h5>{{ product.name }}</h5>
							<span>${{ product.price }}</span>
						</div>
					</div>
					<div
						class="col-5 d-flex align-items-center justify-content-end"
					>
						<button
							class="btn btn-primary"
							@click="remove(product)"
						>
							Remove From Cart
						</button>
					</div>
				</div>
			</li>
		</ul>
		<div class="float-right m-4">
			<h4>Total {{ total | currency(total) }}</h4>
		</div>
		<button class="btn btn-primary btn-block btn-lg mb-4">
			Proceed to Chechkout
		</button>
	</div>
</template>

<script>
import { cartItems } from "../fake-data.js";
import _ from "lodash";

export default {
	name: "CartPage",
	data: function() {
		return {
			cartItems: cartItems,
		};
	},
	filters: {
		currency: function(value) {
			return "$" + Number.parseFloat(value).toFixed(2);
		},
	},
	computed: {
		total: function() {
			let sum = 0;
			this.cartItems.forEach((p) => {
				sum += Number(p.price);
			});
			return sum;
		},
	},
	methods: {
		remove: function(product) {
			let index = _.findIndex(this.cartItems, { id: product.id });
			this.cartItems.splice(index, 1);
		},
	},
};
</script>
