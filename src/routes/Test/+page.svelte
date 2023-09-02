<script>
	import { CardPlaceholder } from 'flowbite-svelte';
	import CardComponent from '../../components/CardComponent.svelte';
	import { createEventDispatcher } from 'svelte';

	let template = {
		num: '254',
		name: 'poofs',
		driveType: ' swerve'
	};
	let template1 = {
		num: '93',
		name: 'nac',
		driveType: ' tank'
	};
	let template2 = {
		num: '971',
		name: 'spartan robotics',
		driveType: ' tank'
	};
	let templates = [];
	templates.push(template, template1, template2);
	let component = CardPlaceholder;
	let component2 = CardPlaceholder;
	let component3 = CardPlaceholder;
	let component4 = CardComponent;
	// need the value of the props to be held in database and passed in
	let components = [];

	import { Pagination } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	let helper = { start: 1, end: 10, total: 100 };

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};

	components.push(component, component2, component3);

	// get page somewhere
	function chunk1() {
		// Code 1
	}

	function chunk2() {
		// Code 2
	}

	chunk1();
	chunk2();
</script>

<!-- {#each components as c}
<svelte:component this={c}/>
{/each} -->
<div class="grid md:grid-cols-4 grid-cols-2 align-middle justify-items-center gap-4">
	{#each Array(12) as _, i}
		<CardComponent
			num={templates[i % 3].num}
			name={templates[i % 3].name}
			driveType={templates[i % 3].driveType}
		/>
	{/each}
</div>
<div class="flex flex-col items-center justify-center gap-2">
	<div class="text-sm text-gray-700 dark:text-gray-400">
		Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
		to
		<span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
		of
		<span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
		Entries
	</div>

	<Pagination table large>
		<div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">
			<Icon name="arrow-left-outline" class="w-3.5 h-3.5 mr-2" />
			Prev
		</div>
		<div slot="next" class="flex items-center gap-2 text-white bg-gray-800">
			Next
			<Icon name="arrow-right-outline" class="w-3.5 h-3.5 mr-2" />
		</div>
	</Pagination>
</div>
