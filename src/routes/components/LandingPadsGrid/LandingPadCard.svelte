<script lang="ts">
	import { Card, Modal, Tooltip } from 'flowbite-svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import { getSuccessRate } from 'src/lib';
	let { item }: any = $props();

	let currentItem = $derived(item);

	let successRate = $derived(
		getSuccessRate(currentItem?.landing_successes, currentItem?.landing_attempts)
	);

	let isOpenModal: boolean = $state(false);

	const handleOpenModal = () => (isOpenModal = true);
</script>

<Card
	img={currentItem?.images?.large[0]}
	onclick={handleOpenModal}
	imgClass="h-full md:h-60"
	class="w-full cursor-pointer"
	size="none"
	padding="md"
>
	<h5 class="text-xl font-bold tracking-tight text-gray-700">{currentItem?.full_name}</h5>

	<div class="flex-start gap-2 py-3 text-xs [&>span]:py-1 [&>span]:px-2 [&>span]:rounded-lg">
		<span
			class={`capitalize ${currentItem?.status === 'active' ? 'bg-green-100 text-green-800' : currentItem?.status === 'retired' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
		>
			{currentItem?.status}
		</span>
		<Tooltip>Status</Tooltip>
		<span class="bg-gray-200 text-gray-800">{currentItem?.type}</span>
		<Tooltip>Type</Tooltip>

		<a
			href={currentItem?.wikipedia}
			class="bg-blue-100 text-blue-500 hover:text-blue-600 rounded-lg p-0.5"
			target="_blank"
			rel="wikipedia"
		>
			<LinkOutline />
		</a>
		<Tooltip>WikiPedia</Tooltip>
	</div>

	<div
		class="text-xs space-y-2 [&>div>label]:text-gray-500 [&>div>span]:text-gray-800 [&>div>span]:font-semibold"
	>
		<div>
			<label for="locality">Locality: </label>
			<span id="locality">{currentItem?.locality}</span>
		</div>
		<div>
			<label for="region">Region: </label>
			<span id="region">{currentItem?.region}</span>
		</div>
		<div>
			<label for="landing-attempts">Landing Attempts: </label>
			<span id="landing-attempts">{currentItem?.landing_attempts}</span>
		</div>
		<div>
			<label for="landing-successes">Landing Successes: </label>
			<span id="landing-successes">{currentItem?.landing_successes}</span>
		</div>
		<div>
			<label for="success-rate">Successes Rate: </label>
			<span
				id="success-rate"
				class={`px-1 rounded ${successRate > 50 ? 'bg-green-200 !text-green-600' : 'bg-red-200 !text-red-600'}`}
				>{successRate}</span
			>
		</div>
		<p class="text-xs line-clamp-2"><label for="">Details: </label> {currentItem?.details}</p>
	</div>
</Card>

<Modal
	bind:open={isOpenModal}
	title={currentItem?.full_name}
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
