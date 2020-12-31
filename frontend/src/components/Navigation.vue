<template>
	<div id="app" class="m-0 p-0">
		<div
			class="d-flex align-items-center justify-content-center bg-primary text-white m-0 p-4"
		>
			<div class="justify-content-center">
				<h1 class="display-1">
					FullStack <span class="text-success">Vue</span>someness
				</h1>
				<span class="float-right"
					><span class="text-warning">Node</span> |
					<span class="text-success">Vue</span> |
					<span class="text-light">Bootstrap</span> |
					<span class="text-info">Mongo</span> |
					<span class="text-danger">Heroku</span></span
				>
			</div>
		</div>
		<nav
			class="site-nav navbar navbar-expand navbar-light bg-light shadow sticky-top"
		>
			<div class="container container-fluid">
				<router-link to="/" class="navbar-brand"
					><h1>Products</h1></router-link
				>
				<div class="btn btn-danger p-0">
					<router-link to="/cart" class="nav-item nav-link text-white"
						>Cart
						<span
							class="badge badge-pill bg-warning text-dark p-2 mx-1"
							@change="
								$emit(
									'update:totalCartItems',
									localTotalCartItems
								)
							"
						>
							{{ totalCartItems }}
						</span>
						Total
						<span
							class="badge badge-pill bg-warning text-dark p-2 mx-1"
						>
							{{ totalCartPrice | currency(totalCartPrice) }}
						</span>
					</router-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "navigation",
	data: function() {
		return {
			localTotalCartItems: 0,
		};
	},
	props: ["totalCartItems", "totalCartPrice"],
	filters: {
		currency: function(value) {
			return "$" + Number.parseFloat(value).toFixed(2);
		},
	},
};
</script>
