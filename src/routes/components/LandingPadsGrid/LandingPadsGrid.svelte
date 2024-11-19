<script lang="ts">
	import { landingPadsStore } from 'src/lib/store/landingPads.store.svelte';
	import LandingPadCard from './LandingPadCard.svelte';
	let { ladingPadsData } = landingPadsStore;
</script>

<section class="w-full grid gid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
	{#each $ladingPadsData as item}
		<LandingPadCard {item} />
	{/each}
</section>
