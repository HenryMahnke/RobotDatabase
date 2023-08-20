<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import robotImage from '$lib/images/Runway 2023-08-20T04_42_08.389Z Image to Image To 2 color vector_svg type image.jpg'
    import { Blockquote,P } from 'flowbite-svelte';
    import { Icon } from 'flowbite-svelte-icons';
</script>
<div class="grid grid-flow-col max-h-fit">
  <img class="m-auto" src="{robotImage}" alt="">
  <Blockquote size="xl">
    <Icon name="quote-solid" class="w-10 h-10 text-gray-400 dark:text-gray-600" />
    Discover robots from past eras, find their documentation, 
      and improve your robot with easy to access resources
  </Blockquote>
</div>
  
  <Accordion>
    <AccordionItem>
      <span slot="header">What is the point</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
        and start developing websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">We need your help</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
        <li>
          <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
        </li>
        <li>
          <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
        </li>
      </ul>
    </AccordionItem>
  </Accordion>