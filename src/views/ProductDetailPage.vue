<template>
	<div class="container w-sm-100">
		<div class="row m-4">
			<div class="col">
				<div class="d-flex align-items-center justify-content-center">
					<img
						:src="product.imageUrl"
						:alt="product.name"
						class="img-fluid card-img-top w-50 h-50"
					/>
				</div>
				<div class="row m-2">
					<div class="col-10 ">
						<h5>{{ product.name }}</h5>
					</div>
					<div class="col-2 ">
						<span>${{ product.price }}</span>
					</div>
				</div>
				<div class="row m-2">
					<div class="col">
						<span>Average rating: </span>{{ product.averageRating }}
					</div>
				</div>
				<div class="row m-2">
					<div class="col-12 ">
						<button
							class="btn btn-block"
							@click="add(product, isInCart)"
							:class="[isInCart === -1 ? 'btn-primary' : 'btn-outline-primary']"
						>
							{{ addToCartText }}
						</button>
					</div>
				</div>
				<div class="row m-2 row-cols-1">
					<div class="col">Description</div>
					<div class="col ">{{ product.description }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { products } from "../fake-data.js";
import { cartItems } from "../fake-data.js";
import _ from "lodash";

export default {
	name: "ProductDetailPage",
	data: function() {
		return {
			//cartItems: [],
			product: products.find((p) => p.id === this.$route.params.id),
			isInCart: true,
			addToCartText: null,
		};
	},
	methods: {
		add: function(item, isInCart) {
			if (isInCart === -1) {
				cartItems.push(item);
				this.$router.push("/products");
			}
		},
	},
	computed: {
		totalCartItems: function() {
			return cartItems.length;
		},
	},
	mounted: function() {
		this.isInCart = _.findIndex(cartItems, {
			id: this.$route.params.id,
		});

		this.addToCartText =
			this.isInCart === -1 ? "Add to Cart" : "Already in Cart";
	},
};
</script>
