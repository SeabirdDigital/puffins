<script lang="ts">
	import './KingRestaurant.css';

	import siteStore from '$lib/stores/site';
	import { onMount } from 'svelte';
	import { KingRestaurant } from '.';
	import { RestaurantDefaults, type RestaurantSite } from '..';

	onMount(() => {
		// @ts-ignore
		AOS.init();
	});

	const site = $siteStore as RestaurantSite;
	let colors = site.data?.colors;
	siteStore.subscribe((newSite) => {
		colors = (newSite as RestaurantSite).data?.colors;
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Readex+Pro:wght@400;700&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</svelte:head>

<div
	class="font-text relative xl:text-lg"
	style="--puffin-primary: {colors?.primary ?? RestaurantDefaults.colors.primary};
		--puffin-dark: {colors?.dark ?? RestaurantDefaults.colors.dark};"
>
	<slot />
</div>
