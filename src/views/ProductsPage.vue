<template>
	<div class="container mt-2 mb-2">
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
			<div
				class="col p-0 d-flex align-item-stretch"
				v-for="(p, index) in products"
				:key="index"
			>
				<div class="card shadow p-4 m-2">
					<img
						:src="p.imageUrl"
						:alt="p.name"
						class="img-fluid card-img-top d-flex align-items-center"
					/>
					<div class="">
						<h5 class="text-center">{{ p.name }}</h5>
						<p class="card-text text-center">${{ p.price }}</p>
						<router-link
							:to="'/products/' + p.id"
							class="d-flex justify-content-center"
							><button class="btn btn-primary">
								View Details
							</button></router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { products } from "../fake-data.js";

export default {
	name: "ProductsPage",
	data: function() {
		return {
			products: [],
		};
	},
	mounted: function() {
		this.products = products;
	},
};
</script>
