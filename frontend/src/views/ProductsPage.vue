<template>
	<div>
		<product-grid :products="products" />
	</div>
</template>

<script>
import axios from "axios";
//import { products } from "../fake-data.js";
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
	created: async function() {
		//this.products = products;
		const result = await axios.get("/api/products");
		const products = result.data;
		this.products = products;
	},
};
</script>
