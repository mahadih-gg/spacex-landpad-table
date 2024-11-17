<script lang="ts">
	import LandingPadsTable from 'components/LandingPadsTable/LandingPadsTable.svelte';
	import { landingPadsStore } from 'store/landingPads.store.svelte';

	export let data;

	let { ladingPadsData, viewMode } = landingPadsStore();

	const { landingPads } = data;
	ladingPadsData = landingPads;

	console.log(ladingPadsData);
</script>

{#if viewMode === 'list'}
	<LandingPadsTable {ladingPadsData} />
{:else}
	Grid
{/if}
