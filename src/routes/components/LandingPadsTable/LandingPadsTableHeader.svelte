<script lang="ts">
	import { Button, Dropdown, Radio } from 'flowbite-svelte';
	import {
		AdjustmentsVerticalSolid,
		ChevronDownOutline,
		GridSolid,
		ListOutline
	} from 'flowbite-svelte-icons';
	import type { ViewModeType } from 'src/lib/types';
	import { landingPadsStore } from 'store/landingPads.store.svelte';

	let { viewMode, filterBy } = landingPadsStore();

	const handleViewModeChange = (view: ViewModeType) => {
		viewMode = view;
	};

	const handleFilterByChange = (value: string) => {
		filterBy = value;
	};

	console.log(filterBy);
</script>

<div class="flex-between py-5">
	<div class="flex-start [&>button]:border [&>button]:border-gray-200 [&>button]:p-1.5">
		<button
			onclick={() => handleViewModeChange('list')}
			class={`rounded-l-md ${viewMode === 'list' ? 'bg-[#EBEDF0] text-blue-600' : 'text-gray-800'}`}
		>
			<ListOutline />
		</button>

		<button
			onclick={() => handleViewModeChange('grid')}
			class={`rounded-r-md ${viewMode === 'grid' ? 'bg-[#EBEDF0] text-blue-600' : 'text-gray-800'}`}
		>
			<GridSolid />
		</button>
	</div>

	<div>
		<Button
			color="light"
			class={`space-x-2 bg-[#F8F8F8] border border-gray-200 ${filterBy ? 'text-blue-600' : 'text-gray-800'}`}
		>
			<AdjustmentsVerticalSolid class="size-4" /> <span>Filter By Status</span>
			<ChevronDownOutline />
		</Button>
		<Dropdown class="w-52 p-3 space-y-3 text-sm">
			{@render ddItem({ label: 'All', value: '' })}
			{@render ddItem({ label: 'Active', value: 'active' })}
			{@render ddItem({ label: 'Retired', value: 'retired' })}
			{@render ddItem({ label: 'Under Construction', value: 'under_construction' })}
		</Dropdown>
	</div>
</div>

{#snippet ddItem({ label, value }: { label: string; value: string })}
	<li>
		<Radio name="filterItems" onclick={() => handleFilterByChange(value)} {value}>{label}</Radio>
	</li>
{/snippet}
