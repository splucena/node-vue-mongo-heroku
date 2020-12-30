<template>
	<div>
		<product-grid :products="products" />
	</div>
</template>

<script>
import { products } from "../fake-data.js";
import ProductGrid from "../components/ProductGrid.vue";

export default {
	name: "ProductsPage",
	data: function() {
		return {
			products: [],
		};
	},
	components: {
		ProductGrid,
	},
	mounted: function() {
		this.products = products;
	},
};
</script>
