<script>
	// @ts-nocheck

	import { Search, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { CardPlaceholder } from 'flowbite-svelte';
	import { Pagination } from 'flowbite-svelte';
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import pineapple from '$lib/images/pineapple.jpg';
	$: activeUrl = $page.url.pathname;
	let activeClass =
		'text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500';
	import { Card, Toggle } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand>Team xxxx</NavBrand>
	
</Navbar>
<div class="grid grid-cols-2 gap-0 lg:grid-cols-4">
	<CardPlaceholder size="sm" class="mt-4 " /> 
	<CardPlaceholder size="sm" class="mt-4 " />
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

