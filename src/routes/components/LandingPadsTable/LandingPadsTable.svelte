<script lang="ts">
	import LandingPadsTableItem from 'components/LandingPadsTable/LandingPadsTableItem.svelte';
	import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';
	import { landingPadsStore } from 'src/lib/store/landingPads.store.svelte';

	let { ladingPadsData } = landingPadsStore;
</script>

<div class="shadow rounded-lg overflow-hidden">
	<Table>
		<TableHead class="text-left uppercase text-gray-500 bg-gray-50 text-xs [&>th]:font-semibold">
			{@render th('Full Name')}
			{@render th('Location Name')}
			{@render th('Region')}
			{@render th('Details')}
			{@render th('Success Rate')}
			{@render th('WikiPedia Link')}
			{@render th('Status')}
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each $ladingPadsData as item}
				<LandingPadsTableItem {item} />
			{/each}
		</TableBody>
	</Table>
</div>

{#snippet th(label: string)}
	<TableHeadCell>{label}</TableHeadCell>
{/snippet}
