<template>
	<div id="main-app">
		<Navigation></Navigation>
	</div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
	name: "main-app",
	components: {
		Navigation,
	},
};
</script>

<style lang="scss">
$primary: #272727;

@import "node_modules/bootstrap/scss/bootstrap";
</style>
