<script lang="ts">
	import LandingPadsTable from 'components/LandingPadsTable/LandingPadsTable.svelte';
	import LandingPadsTableHeader from 'components/LandingPadsTable/LandingPadsTableHeader.svelte';
	import MapView from 'components/MapView.svelte';
	import RateCart from 'components/RateCart.svelte';
	import { landingPadsStore } from 'store/landingPads.store.svelte';

	export let data;

	let { ladingPadsData, viewMode } = landingPadsStore();

	const { landingPads } = data;
	ladingPadsData = landingPads;

	console.log(landingPads)

</script>

<div class="lg:flex justify-between space-y-10 lg:space-y-0 gap-10">
	<section class="w-full lg:w-7/12 xl:w-9/12">
		<LandingPadsTableHeader />
		{#if viewMode === 'list'}
			<LandingPadsTable {ladingPadsData} />
		{:else}
			Grid
		{/if}
	</section>

	<aside class="w-full lg:w-5/12 xl:w-3/12 space-y-7">
		<MapView {ladingPadsData} />
		<RateCart {ladingPadsData} />
	</aside>
</div>
