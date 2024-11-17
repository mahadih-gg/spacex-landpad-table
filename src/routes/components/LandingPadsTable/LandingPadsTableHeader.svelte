<script>
	import { Button, Dropdown, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline, GridSolid, ListOutline } from 'flowbite-svelte-icons';
	let group1 = 2;
</script>

<div class="flex-between">
	<div>
		<button><ListOutline /></button>
		<button><GridSolid /></button>
	</div>

	<div>
		<Button color="light">
			Dropdown radio {group1}<ChevronDownOutline class="" />
		</Button>
		<Dropdown class="w-44 p-3 space-y-3 text-sm">
			<li>
				<Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
			</li>
			<li>
				<Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
			</li>
			<li>
				<Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
			</li>
		</Dropdown>
	</div>
</div>
