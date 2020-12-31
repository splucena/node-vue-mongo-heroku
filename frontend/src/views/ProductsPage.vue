<template>
	<div>
		<product-grid :products="products" />
	</div>
</template>

<script>
import axios from "axios";
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
		console.log(1);
		const result = await axios.get("/api/products");
		const products = result.data;
		this.products = products;
		console.log(products);
	},
};
</script>
