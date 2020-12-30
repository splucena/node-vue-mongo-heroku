<template>
	<div class="container mt-2 mb-2">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
			<product-grid-item
				class="col p-0 d-flex align-item-stretch"
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>

<script>
import ProductGridItem from "../components/ProductGridItem.vue";

export default {
	name: "ProductGrid",
	props: ["products"],
	components: {
		ProductGridItem,
	},
};
</script>
