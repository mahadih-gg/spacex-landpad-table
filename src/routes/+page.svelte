<script lang="ts">
	import LandingPadsGrid from 'components/LandingPadsGrid/LandingPadsGrid.svelte';
	import LandingPadsTable from 'components/LandingPadsTable/LandingPadsTable.svelte';
	import MapView from 'components/MapView.svelte';
	import RateCart from 'components/RateCart.svelte';
	import { landingPadsStore } from 'src/lib/store/landingPads.store.svelte.js';
	import Toolbar from 'src/routes/components/global/Toolbar.svelte';

	export let data;

	let { initialLadingPadsData, viewMode } = landingPadsStore;

	const { landingPads } = data;
	initialLadingPadsData.set(landingPads);
</script>

<div class="lg:flex justify-between space-y-10 lg:space-y-0 gap-10">
	<section class="w-full lg:w-7/12 xl:w-9/12">
		<Toolbar />
		{#if $viewMode === 'list'}
			<LandingPadsTable />
		{:else}
			<LandingPadsGrid />
		{/if}
	</section>

	<aside class="w-full lg:w-5/12 xl:w-3/12 space-y-7">
		<MapView />
		<RateCart />
	</aside>
</div>
