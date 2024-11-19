<script lang="ts">
	import LandingPadsTable from 'components/LandingPadsTable/LandingPadsTable.svelte';
	import LandingPadsTableHeader from 'components/LandingPadsTable/LandingPadsTableHeader.svelte';
	import MapView from 'components/MapView.svelte';
	import { landingPadsStore } from 'store/landingPads.store.svelte';

	export let data;

	let { ladingPadsData, viewMode } = landingPadsStore();

	const { landingPads } = data;
	ladingPadsData = landingPads;

</script>

<div class="lg:flex justify-between gap-10">
	<section class="w-full lg:w-9/12">
		<LandingPadsTableHeader />
		{#if viewMode === 'list'}
			<LandingPadsTable {ladingPadsData} />
		{:else}
			Grid
		{/if}
	</section>

	<aside class="w-full lg:w-3/12">
		<MapView {ladingPadsData} />
	</aside>
</div>
