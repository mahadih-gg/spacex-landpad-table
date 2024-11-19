<script lang="ts">
	import { landingPadsStore } from 'src/lib/store/landingPads.store.svelte';
	import LandingPadCard from './LandingPadCard.svelte';
	let { ladingPadsData } = landingPadsStore;
</script>

<section class="w-full grid gid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
	{#if $ladingPadsData.length}
		{#each $ladingPadsData as item}
			<LandingPadCard {item} />
		{/each}
	{:else}
		<div class="flex-center sm:col-span-2 xl:col-span-3">
			<h3 class="text-gray-500 text-lg p-10 card text-center">No Data Found</h3>
		</div>
	{/if}
</section>
