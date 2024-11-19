<script lang="ts">
	import { Card, Modal, Tooltip } from 'flowbite-svelte';
	import { LinkOutline } from 'flowbite-svelte-icons';
	import { getSuccessRate } from 'src/lib';
	let { item }: any = $props();
	const {
		images,
		full_name,
		status,
		type,
		locality,
		region,
		latitude,
		longitude,
		landing_attempts,
		landing_successes,
		wikipedia,
		details
	} = item;

	let isOpenModal: boolean = $state(false);

	const successRate = getSuccessRate(landing_successes, landing_attempts);
	const handleOpenModal = () => (isOpenModal = true);
</script>

<Card
	img={images?.large[0]}
	onclick={handleOpenModal}
	imgClass="h-full md:h-40"
	class="w-full cursor-pointer space-y-3"
	size="none"
>
	<h5 class="text-2xl font-bold tracking-tight text-gray-900">{full_name}</h5>

	<div class="flex-start gap-2 py-3 text-xs [&>span]:py-1 [&>span]:px-2 [&>span]:rounded-lg">
		<span
			class={`capitalize ${status === 'active' ? 'bg-green-100 text-green-800' : status === 'retired' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}
		>
			{status}
		</span>
		<Tooltip>Status</Tooltip>
		<span class="bg-gray-200 text-gray-800">{type}</span>
		<Tooltip>Type</Tooltip>

		<a
			href={wikipedia}
			class="bg-blue-100 text-blue-500 hover:text-blue-600 rounded-lg p-0.5"
			target="_blank"
			rel="wikipedia"
		>
			<LinkOutline />
		</a>
		<Tooltip>WikiPedia</Tooltip>
	</div>

	<div
		class="text-sm space-y-2 [&>div>label]:text-gray-500 [&>div>span]:text-gray-800 [&>div>span]:font-semibold"
	>
		<div>
			<label>Locality: </label>
			<span>{locality}</span>
		</div>
		<div>
			<label>Region: </label>
			<span>{region}</span>
		</div>
		<div>
			<label>Landing Attempts: </label>
			<span>{landing_attempts}</span>
		</div>
		<div>
			<label>Landing Successes: </label>
			<span>{landing_successes}</span>
		</div>
		<div>
			<label>Successes Rate: </label>
			<span
				class={`px-1 rounded ${successRate > 50 ? 'bg-green-200 !text-green-600' : 'bg-red-200 !text-red-600'}`}
				>{successRate}</span
			>
		</div>
		<p class="text-sm line-clamp-2"><label>Details: </label> {details}</p>
	</div>
</Card>

<Modal
	bind:open={isOpenModal}
	title={full_name}
	autoclose
	outsideclose
	backdropClass="fixed size-full inset-0 bg-gray-800/50 z-[9999]"
	dialogClass="fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full w-full p-4 flex z-[99999]"
>
	<h3 slot="header" class="text-lg font-semibold text-gray-800">{full_name}</h3>
	<p class="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">{details}</p>
</Modal>
