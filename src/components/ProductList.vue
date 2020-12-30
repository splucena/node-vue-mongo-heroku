<template>
	<div v-if="cartItems.length > 0">
		<ul class="list-group">
			<product-list-item
				v-for="product in cartItems"
				:key="product.id"
				:product="product"
				@remove="remove"
			/>
		</ul>
		<div class="float-right m-4">
			<h4>Total {{ total | currency(total) }}</h4>
		</div>
		<router-link to="/checkout">
			<button class="btn btn-primary btn-block btn-lg mb-4">
				Proceed to Checkout
			</button>
		</router-link>
	</div>
	<p v-else>You haven't added anything in your cart yet.</p>
</template>

<script>
import _ from "lodash";
import ProductListItem from "../components/ProductListItem.vue";

export default {
	name: "ProductList",
	components: {
		ProductListItem,
	},
	props: ["cartItems"],
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
