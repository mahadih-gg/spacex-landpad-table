<script lang="ts">
	import LandingPadsTable from 'components/LandingPadsTable/LandingPadsTable.svelte';
	export let data;

	const { landingPads } = data;
	console.log(landingPads);
</script>

<LandingPadsTable {landingPads} />
