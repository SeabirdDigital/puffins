<script lang="ts">
	import { scrollRef, scrollTo, scrollTop } from 'svelte-scrolling';

	import Text from '$lib/components/Text.svelte';
	import ArrowDown from '../components/icons/ArrowDown.svg';
	import ChevronRight from '../components/icons/ChevronRight.svg';
	import Quote from '../components/icons/Quote.svg';
	import Star from '../components/icons/Star.svg';

	import ImageWrapper from '$lib/components/ImageWrapper.svelte';
	import pageId from '$lib/stores/pageId';
	import siteStore from '$lib/stores/site';
	import { ItalianRestaurant } from '..';
	import { RestaurantDefaults, type RestaurantSite } from '../..';

	const site = $siteStore as RestaurantSite;

	const images = site.pages.home.images;
	const globalImages = site.data?.images;

	const links = site.data?.links;
	const reviews = site.data?.reviews ?? RestaurantDefaults.data.reviews;
	const contact = site.data?.contact ?? RestaurantDefaults.data.contact;
	const openingHours = site.data?.openingHours ?? RestaurantDefaults.data.openingHours;
</script>

<div class="h-screen w-full flex flex-col">
	<div class="flex">
		<div class="bg-puffin-primary h-full w-[15vw] min-w-[96px] flex justify-center items-center">
			{#if globalImages?.logo}
				<img height="64px" width="64px" src={globalImages?.logo} alt="Logo" />
			{:else}
				<span class="text-center font-nunito font-bold 2xl:text-3xl">
					{site.siteData.siteName}
				</span>
			{/if}
		</div>

		<div class="flex flex-grow border-b">
			<div class="flex-grow" />

			<a
				href={links?.['map']}
				class="hidden md:flex items-center px-8 py-6 text-gray-800 whitespace-nowrap"
			>
				{@html contact?.address}
			</a>
			<a
				href={'tel:' + contact?.phone?.replace(/\s/g, '')}
				class="border-l bg-gray-50 text-gray-800 h-full px-8 py-6 flex items-center"
			>
				<span class="block sm:hidden">Ring</span>
				<span class="hidden sm:block">{contact?.phone} </span>
				<img class="h-6" src={ChevronRight} alt="" />
			</a>
		</div>
	</div>

	<div class="flex flex-grow">
		<div use:scrollTo={'about'} class="hidden w-[15vw] md:flex items-end justify-center pb-12">
			<img src={ArrowDown} alt="" />
		</div>

		<div class="flex flex-col md:flex-row flex-grow">
			<div class="flex-grow h-full">
				<ImageWrapper id="hero">
					<div
						class="w-full h-full bg-cover bg-center"
						style="background-image: url({images?.hero});"
					/>
				</ImageWrapper>
			</div>

			<div
				class="md:w-1/2 h-full flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left p-12"
			>
				<h1 class="text-3xl md:text-4xl 2xl:text-6xl font-lora">
					<Text id="heroHeading" />
				</h1>
				<p class="max-w-xs 2xl:max-w-md 2xl:text-lg">
					<Text id="heroText" />
				</p>

				<div class="flex items-center gap-6">
					<a href={links?.['menu']}>
						<button class="bg-puffin-primary text-white 2xl:text-lg py-3 px-4"> Se Menyn </button>
					</a>

					<a href={links?.['map']}>
						<button
							class="2xl:text-lg border-b -mb-px hover:pb-1 hover:-mb-1 border-black h-min duration-100"
						>
							Hitta hit
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div use:scrollRef={'about'} class="flex h-[85vh]">
	<div class="md:ml-[15%] flex flex-col-reverse md:flex-row flex-grow">
		<div
			class="h-full md:w-1/2 flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left p-12"
		>
			<h2 class="text-3xl md:text-4xl 2xl:text-6xl font-lora">
				<Text id="aboutHeading" />
			</h2>
			<p class="max-w-md 2xl:max-w-xl 2xl:text-lg">
				<Text id="aboutText" />
			</p>
		</div>

		<ImageWrapper id="about">
			<div
				class="w-full h-full bg-cover bg-center"
				style="background-image: url({images?.about});"
			/>
		</ImageWrapper>
	</div>
</div>

<div class="flex">
	<div id="stars" class="hidden w-[15vw] md:flex flex-col items-center">
		<img src={Star} alt="" />
		<img src={Star} alt="" />
		<img src={Star} alt="" />
		<img src={Star} alt="" />
	</div>

	<div class="flex flex-col items-center justify-center flex-grow gap-8 py-24">
		<div class="relative">
			<img class="-z-10 absolute -top-12 -left-16 h-36" src={Quote} alt="" />

			<h2 class="text-4xl md:text-4xl 2xl:text-5xl font-lora">
				<Text id="reviewsHeading" />
			</h2>
		</div>

		<div class="md:flex text-md text-center container" id="reviews">
			{#each reviews as review}
				<div>
					<p>
						{@html review.message}
					</p>
					<span>{review.author}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="flex">
	<div class="flex-grow">
		<ImageWrapper id="order">
			<div
				class="w-full flex flex-col lg:flex-row gap-4 justify-between pl-[15%] px-8 py-12 text-white bg-cover bg-center"
				style="background-image: url({images?.order});"
			>
				<div>
					<h2 class="text-4xl md:text-4xl 2xl:text-5xl font-lora">
						<Text id="orderHeading" />
					</h2>
					<p>
						<Text id="orderText" />
					</p>
				</div>

				<div class="flex flex-col-reverse md:flex-row gap-3 md:gap-6">
					<a href={'tel:' + contact?.phone?.replace(/\s/g, '')}>
						<button
							class="flex items-center h-full p-4 text-xl leading-none border-2 border-white gap-3"
						>
							<svg width="18" height="18" viewBox="0 0 36 36">
								<path
									fill="currentColor"
									d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z"
								/>
								<path fill="none" d="M0 0h36v36H0z" />
							</svg>
							{contact?.phone}
						</button>
					</a>
					<a href={links?.['foodora']}>
						<button
							class="flex items-center h-full p-4 text-xl leading-none border-2 bg-white text-black gap-4 hover:gap-5 hover:-mr-1 duration-150"
						>
							Foodora
							<svg class="rotate-90" width="18" height="18" viewBox="0 0 36 36">
								<path
									fill="currentColor"
									d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
								/>
								<path fill="none" d="M0 0h36v36H0z" />
							</svg>
						</button>
					</a>
				</div>
			</div>
		</ImageWrapper>
	</div>
	<div class="md:w-[15vw]" />
</div>

<footer class="text-sm">
	<div class="mt-24 container">
		<div class="relative border-y py-16 flex flex-col gap-8 md:gap-0 md:grid md:grid-cols-3">
			<div class="w-full flex justify-center md:justify-start">
				{#if globalImages?.logo}
					<img height="64px" width="64px" src={globalImages?.logo} alt="Logo" />
				{:else}
					<span class="text-center font-nunito font-bold 2xl:text-3xl">
						{site.siteData.siteName}
					</span>
				{/if}
			</div>

			<div class="col-span-2 flex flex-col md:flex-row relative gap-4">
				<div class="md:w-1/2 px-4 flex flex-col gap-2">
					<h3 class="text-lg font-lora font-semibold">Öppettider</h3>
					{#each openingHours as day}
						<div class="flex justify-between">
							<span>{day.weekday}</span>
							<span class="text-right">{day.time}</span>
						</div>
					{/each}
				</div>
				<div class="md:w-1/2 px-4 flex flex-col gap-2">
					<h3 class="text-lg font-lora font-semibold">Hör av dig!</h3>
					<div class="flex justify-between">
						<span>Email</span>
						<a class="text-right" href={'mailto:' + contact?.email}>
							{contact?.email}
						</a>
					</div>

					<div class="flex justify-between">
						<span>Telefon</span>
						<a class="text-right" href={'tel:' + contact?.phone?.replace(/\s/g, '')}>
							{contact?.phone}
						</a>
					</div>

					<div class="flex md:hidden justify-between">
						<span>Adress</span>
						<a class="text-right" href={'tel:' + contact?.phone?.replace(/\s/g, '')}>
							{@html contact?.address}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="text-center py-8">
		Copyright 2023 &copy; Seabird Digital UD. Alla rättigheter förbehållna.
	</div>
</footer>

<style lang="postcss">
	#stars > img {
		@apply -rotate-45 w-[8vw] h-[8vw] opacity-50;
	}

	#reviews > div {
		@apply px-8 py-6 flex flex-col gap-4;
	}

	#reviews span {
		@apply font-bold;
	}
</style>
