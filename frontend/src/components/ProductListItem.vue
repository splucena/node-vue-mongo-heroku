<template>
	<li class="list-group-item border-0 m-0">
		<div class="row border-bottom">
			<div class="col-2">
				<img
					:src="product.imageUrl"
					:alt="product.name"
					class="img-fluid"
				/>
			</div>
			<div class="col-5 d-flex align-items-center">
				<div>
					<h5>{{ product.name }}</h5>
					<span>${{ product.price }}</span>
				</div>
			</div>
			<div class="col-5 d-flex align-items-center justify-content-end">
				<button
					class="btn btn-primary"
					@click="$emit('remove', product)"
				>
					Remove From Cart
				</button>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "ProductListItem",
	props: ["product"],
};
</script>
