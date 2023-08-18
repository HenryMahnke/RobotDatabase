<script>
	import { Search, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { CardPlaceholder } from 'flowbite-svelte';
	import { Pagination } from 'flowbite-svelte';
	let helper = { start: 1, end: 12, total: 100 };
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import pineapple from '$lib/images/pineapple.jpg';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500';
  
	const previous = () => {
	  alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
	  alert('Next btn clicked. Make a call to your server to fetch data.');
	};

	import { Card, Toggle } from 'flowbite-svelte';
	let vCard = false;
</script>

<form class="flex gap-2">
	<Search
		size="md"
		class="flex gap-2 items-center"
		placeholder="Search Mockups, Logos, Design Templates..."
	/>
	<Button size="sm">
		<Icon name="search-outline" class="w-5 h-5 mr-2 -ml-1" />
		Search
	</Button>
</form>
  
  <Button>Sort By<Icon name="chevron-down-solid" class="w-3 h-3 ml-2 text-white dark:text-white" /></Button>
  <Dropdown {activeUrl} {activeClass}>
	<DropdownItem href="">Top Teams</DropdownItem>
	<DropdownItem href="">Team Number</DropdownItem>
  </Dropdown>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />
	<CardPlaceholder size="sm" class="mt-4" />

  </div>
  <!-- need to sort by something -->
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

  
  <div>
	<Card img="{pineapple}" class="mb-4">
	  <h5 id="teamNum" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team 254</h5>
	  <p id="name"class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">CheesyPoofs</p>
	  <p>World EPA Rank: </p>
	  <p>Unitless EPA:</p>
	  <p></p>
	  <Button>
		Read more <Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2 text-white" />
	  </Button>
	</Card>
  </div>
