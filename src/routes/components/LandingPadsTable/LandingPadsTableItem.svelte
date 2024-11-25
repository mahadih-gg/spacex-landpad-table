<script lang="ts">
	import { Modal, Progressbar, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import { getSuccessRate } from 'src/lib';
	import type { LandPadItemType } from 'src/lib/types';

	interface PropsType {
		item: LandPadItemType;
	}
	const { item }: PropsType = $props();

	let currentItem = $derived(item);

	let successRate = $derived(
		getSuccessRate(currentItem?.landing_successes, currentItem?.landing_attempts)
	);

	let isOpenModal: boolean = $state(false);
	const handleOpenModal = () => (isOpenModal = true);
</script>

<TableBodyRow class="[&>td]:font-semibold [&>td]:text-sm">
	<TableBodyCell>{currentItem?.full_name ?? ''}</TableBodyCell>

	<TableBodyCell>{currentItem?.locality ?? ''}</TableBodyCell>

	<TableBodyCell>{currentItem?.region ?? ''}</TableBodyCell>

	<TableBodyCell>
		<button
			onclick={handleOpenModal}
			class="text-xs bg-gray-100 hover:bg-gray-200 py-1 px-2 rounded-lg"
		>
			View Details
		</button>
	</TableBodyCell>

	<TableBodyCell>
		<Progressbar
			progress={successRate}
			size="w-24 h-1.5"
			progressClass={`${successRate > 50 ? 'bg-green-400' : 'bg-red-400'}`}
		/>
		<span class="text-xs text-gray-500">{successRate}%</span>
	</TableBodyCell>

	<TableBodyCell>
		<a
			href={currentItem?.wikipedia}
			class="text-blue-500 hover:text-blue-600"
			target="_blank"
			rel="wikipedia"
		>
			<LinkOutline />
		</a>
	</TableBodyCell>

	<TableBodyCell>
		<span
			class={`capitalize py-1 px-2 rounded-lg ${currentItem?.status === 'active' ? 'bg-green-100 text-green-800' : currentItem?.status === 'retired' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
		>
			{currentItem?.status ?? ''}
		</span>
	</TableBodyCell>
</TableBodyRow>

<Modal
	bind:open={isOpenModal}
	autoclose
	outsideclose
	backdropClass="fixed size-full inset-0 bg-gray-800/50 z-[9999]"
	dialogClass="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full w-full p-4 flex z-[99999]"
>
	<h3 slot="header" class="text-lg font-semibold text-gray-800">{currentItem?.full_name}</h3>
	<p class="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
		{currentItem?.details}
	</p>
</Modal>
