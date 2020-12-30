<template>
	<div>
		<ul class="list-group" v-for="product in cartItems" :key="product.id">
			<product-list-item :product="product" @remove="remove" />
		</ul>
		<div class="float-right m-4">
			<h4>Total {{ total | currency(total) }}</h4>
		</div>
	</div>
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
