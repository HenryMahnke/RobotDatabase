<script>
import { CardPlaceholder } from 'flowbite-svelte';
import CardComponent from '../../components/CardComponent.svelte'
	import { createEventDispatcher } from 'svelte';

let template = {
    num: "254",
    name: "poofs",
    driveType: " swerve",
}
let component = CardPlaceholder;
let component2 = CardPlaceholder;
let component3 = CardPlaceholder;
let component4 = CardComponent;
// need the value of the props to be held in database and passed in 
let components = []

components.push(component,component2,component3)

// get page somewhere
</script>

<!-- {#each components as c}
<svelte:component this={c}/>
{/each} -->
<div class = "grid md:grid-cols-4  grid-cols-2 align-middle justify-items-center gap-4">
{#each Array(12) as _, i}
    <CardComponent num= "244" name="the cow riders" driveType="swervingaroundyour mother"></CardComponent>
{/each}
</div>
