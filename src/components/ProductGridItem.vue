<template>
	<div>
		<div class="card shadow p-4 m-2">
			<img
				:src="product.imageUrl"
				:alt="product.name"
				class="img-fluid card-img-top d-flex align-items-center"
			/>
			<div class="">
				<h5 class="text-center">{{ product.name }}</h5>
				<p class="card-text text-center">${{ product.price }}</p>
				<router-link
					:to="'/products/' + product.id"
					class="d-flex justify-content-center"
					><button class="btn btn-primary">
						View Details
					</button></router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductGridItem",
	props: ["product"],
};
</script>
