<template>
	<div class="container mt-4 p-0 text-center">
		<h1 class="my-4">Thank you for shopping with us!</h1>
		<div class="d-flex align-items-center justify-content-center">
			<table class="table w-75">
				<thead>
					<th class="text-left">Product</th>
					<th class="text-right">Price</th>
				</thead>
				<tbody>
					<tr v-for="p in cartItems" :key="p.id">
						<td class="text-left">{{ p.name }}</td>
						<td class="text-right">{{ p.price }}</td>
					</tr>
					<tr>
						<td class="text-left"><h5>Total</h5></td>
						<td class="text-right">
							<h5>{{ totalPrice | currency(totalPrice) }}</h5>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<router-link to="/products">
			<button class="btn btn-primary">Continue Shopping!</button>
		</router-link>
	</div>
</template>
<script>
import { cartItems } from "../fake-data.js";
export default {
	name: "checkout",
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
	computed: {
		totalPrice: function() {
			let sum = 0;
			this.cartItems.forEach((p) => {
				sum += Number(p.price);
			});

			return sum;
		},
	},
	mounted: function() {
		this.cartItems = cartItems;
	},
};
</script>
