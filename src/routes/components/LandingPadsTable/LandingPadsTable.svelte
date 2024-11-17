<script lang="ts">
	import LandingPadsTableHeader from 'components/LandingPadsTable/LandingPadsTableHeader.svelte';
	import LandingPadsTableItem from 'components/LandingPadsTable/LandingPadsTableItem.svelte';
	import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';

	interface PropsType {
		landingPads: LandPadItemType[];
	}
	const { landingPads }: PropsType = $props();
</script>

<div>
	<LandingPadsTableHeader />
	<div class="w-full shadow rounded-lg overflow-hidden">
		<Table class="w-full">
			<TableHead class="text-left uppercase text-gray-500 bg-gray-50 text-xs [&>th]:font-semibold">
				<TableHeadCell>Full Name</TableHeadCell>
				<TableHeadCell>Location Name</TableHeadCell>
				<TableHeadCell>Region</TableHeadCell>
				<TableHeadCell>Details</TableHeadCell>
				<TableHeadCell>Success Rate</TableHeadCell>
				<TableHeadCell>WikiPedia Link</TableHeadCell>
				<TableHeadCell>Status</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each landingPads as item}
					<LandingPadsTableItem {item} />
				{/each}
			</TableBody>
		</Table>
	</div>
</div>
