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
//import _ from "lodash";
import ProductListItem from "../components/ProductListItem.vue";
import axios from "axios";

export default {
	name: "ProductList",
	components: {
		ProductListItem,
	},
	data: function() {
		return {
			//localCartItems: this.cartItems,
		};
	},
	props: ["cartItems", "localCartItems"],
	filters: {
		currency: function(value) {
			return "$" + Number.parseFloat(value).toFixed(2);
		},
	},
	computed: {
		total: function() {
			let sum = 0;
			sum = this.cartItems
				.map((p) => Number(p.price))
				.reduce((a, b) => a + b);

			return sum;
		},
	},
	methods: {
		remove: async function(product) {
			let result = await axios.delete(
				"/api/users/12345/cart/" + product.id
			);
			const items = result.data;
			this.$emit("update:cartItems", items);
			// Update localCartItems of CartPage.vue
			this.$parent.$emit("update:localCartItems", items);
		},
	},
};
</script>
