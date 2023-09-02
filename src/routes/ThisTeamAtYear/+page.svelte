<script>
	import pineapple from '$lib/images/pineapple.jpg';
	import { ImagePlaceholder,Navbar,NavBrand, NavUl, NavLi} from 'flowbite-svelte';
	import { Skeleton } from 'flowbite-svelte';

</script>
<Navbar>
    <NavBrand class=" font-bold text-2xl">Team xxxx</NavBrand>
    <NavUl>
	  <NavLi href="">2023</NavLi>
	  <NavLi href="/ThisTeamAllYears">View Team</NavLi>
    </NavUl>
</Navbar>
<ImagePlaceholder />
<div class="grid sm:grid-cols-2 grid-cols-1">
    <Skeleton size="m" class="my-8" />
    <Skeleton size="m" class="my-8" />
    <Skeleton size="m" class="my-8" />
    <Skeleton size="m" class="my-8" />
</div>
