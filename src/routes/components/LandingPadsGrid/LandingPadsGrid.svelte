<script lang="ts">
	import LandingPadCard from './LandingPadCard.svelte';
	let { ladingPadsData }: any = $props();
</script>

<section class="grid gid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
	{#each ladingPadsData as item}
		<LandingPadCard {item} />
	{/each}
</section>
