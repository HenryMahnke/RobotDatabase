<script>
import { CardPlaceholder } from 'flowbite-svelte';
let component = CardPlaceholder;
let component2 = CardPlaceholder;
let component3 = CardPlaceholder;
// need the value of the props to be held in database and passed in 
/**
	 * @type {any[]}
	 */
let components = []

components.push(component,component2,component3)
</script>

{#each components as c}
<svelte:component this={c}/>
{/each}