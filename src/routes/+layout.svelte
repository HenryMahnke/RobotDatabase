<script>
	import '../app.postcss';

	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>
  <Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FRC Robot Database</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {activeUrl} {hidden} {activeClass} {nonActiveClass}>
	  <NavLi href="/Database">Database</NavLi>
	  <NavLi href="/Tutorials">Tutorials</NavLi>
	  <NavLi href="/signIn">Log in</NavLi>
	  <NavLi href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Buy Us A Coffee</NavLi>
	</NavUl>
	
  </Navbar>
<slot />
