<script lang="ts">
	import LandingPadsTableHeader from 'components/LandingPadsTable/LandingPadsTableHeader.svelte';
	import LandingPadsTableItem from 'components/LandingPadsTable/LandingPadsTableItem.svelte';
	import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';

	let { ladingPadsData }: any = $props();
</script>

<div>
	<LandingPadsTableHeader />
	<div class="w-full shadow rounded-lg overflow-hidden">
		<Table class="w-full">
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
				{#each ladingPadsData as item}
					<LandingPadsTableItem {item} />
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

{#snippet th(label: string)}
	<TableHeadCell>{label}</TableHeadCell>
{/snippet}
