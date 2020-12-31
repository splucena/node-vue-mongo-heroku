<template>
	<div class="container w-sm-100" v-if="product">
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
							:class="[
								isInCart === -1
									? 'btn-primary'
									: 'btn-outline-primary',
							]"
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
	<NotFoundPage v-else />
</template>

<script>
import _ from "lodash";

import NotFoundPage from "./NotFoundPage.vue";
import axios from "axios";

export default {
	name: "ProductDetailPage",
	components: {
		NotFoundPage,
	},
	data: function() {
		return {
			cartItems: [],
			product: {},
			isInCart: true,
			addToCartText: null,
		};
	},
	props: ["localCartItems"],
	methods: {
		add: async function(item, isInCart) {
			// Add item to user's cart
			if (isInCart === -1) {
				const result = await axios.post("/api/users/12345/cart", {
					productId: item.id,
				});

				const items = result.data;
				this.$emit("update:localCartItems", items);
				this.$router.push("/products");
			}
		},
	},
	created: async function() {
		// Fetch products from database
		const result = await axios.get(
			`/api/products/${this.$route.params.id}`
		);
		const product = result.data;
		this.product = product;

		// Fetch user cart items from database
		const cartResult = await axios.get("/api/users/12345/cart");
		const cartItems = cartResult.data;
		this.cartItems = cartItems;

		// Check if item is already in user's cart
		this.isInCart = _.findIndex(cartItems, {
			id: this.$route.params.id,
		});

		// Assign appropirate text to addToCartText button
		this.addToCartText =
			this.isInCart === -1 ? "Add to Cart" : "Already in Cart";
	},
};
</script>
