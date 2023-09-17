<script>
	import { CardPlaceholder } from 'flowbite-svelte';
	import CardComponent from '../../components/CardComponent.svelte';
	import { createEventDispatcher } from 'svelte';
    import {Navbar,NavBrand, NavUl, NavLi, Button, Dropdown,DropdownItem,Search} from 'flowbite-svelte';
	import { page } from '$app/stores';
	  /** @type {import('./$types').PageData} */
	  export let data;
	  console.log(data.data);
	  console.log(data.data.length);
	  console.log("SITE"+data.length);

	let template = {
		num: '93',
		name: 'nac',
		driveType: ' tank'
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
    $: activeUrl = $page.url.searchParams.get('page');
	console.log(activeUrl)
	let activeClass =
		'text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500';

	import { Pagination } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	let helper = { start: 1, end: 10, total: 100 };
	let pages = [
    { name: 6, href: '/Test?page=6' },
    { name: 7, href: '/Test?page=7' },
    { name: 8, href: '/Test?page=8' },
    { name: 9, href: '/Test?page=9' },
    { name: 10, href: '/Test?page=10' }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
	  console.log(queryString)
      const hrefParams = new URLSearchParams(queryString);
	  console.log(hrefParams)
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

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

<Navbar>
	<NavBrand>
	</NavBrand>
	<NavUl>
		<Button
			>Sort By<Icon
				name="chevron-down-solid"
				data-dropdown-toggle="dropdown"
				class="w-3 h-3 ml-2 text-white dark:text-white"
			/></Button
		>
		<Dropdown {activeUrl} {activeClass}>
			<DropdownItem href="">Top Teams</DropdownItem>
			<DropdownItem href="">Team Number</DropdownItem>
		</Dropdown>
		<Button
			>Year<Icon
				name="chevron-down-solid"
				class="w-3 h-3 ml-2 text-white dark:text-white"
			/></Button
		>
		<Dropdown {activeUrl} {activeClass}>
			<DropdownItem href="">2023</DropdownItem>
			<DropdownItem href="">2022</DropdownItem>
			<DropdownItem href="">2021</DropdownItem>
			<DropdownItem href="">2020</DropdownItem>
			<DropdownItem href="">2019</DropdownItem>
			<DropdownItem href="">2018</DropdownItem>
		</Dropdown>
		<div class="flex md:order-2">
			<Button
				color="none"
				data-collapse-toggle="mobile-menu-3"
				aria-controls="mobile-menu-3"
				aria-expanded="false"
				class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
			>
				<Icon name="search-outline" class="w-5 h-5" />
			</Button>
			<form class="flex gap-2">
				<Search size="md" class="flex gap-2 items-center" placeholder="Search for a team" />
				<Button size="sm">
					<Icon name="search-outline" class="w-5 h-5 mr-2 -ml-1" />
					Search
				</Button>
			</form>
		</div>
	</NavUl>
</Navbar>

<div class="grid md:grid-cols-4 grid-cols-2 align-middle justify-items-center gap-4">
	{#each Array(data.data.length) as _, i}
		<CardComponent
			num={data.data[i]['Team Number']}
			name={"Place holder"}
			driveType={data.data[i]['Drivetrain Type']}
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
