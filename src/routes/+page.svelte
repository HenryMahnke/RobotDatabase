<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import robotImage from '$lib/images/Runway 2023-08-20T04_42_08.389Z Image to Image To 2 color vector_svg type image.jpg'
    import { Blockquote,P } from 'flowbite-svelte';
    import { Icon } from 'flowbite-svelte-icons';
    import { Gallery } from 'flowbite-svelte';
    import robotImage2 from '$lib/images/Robot2.jpeg'
    import robotImage1 from '$lib/images/Robot1.jpeg'
    import robotImage4 from '$lib/images/Robot4.jpeg'
    import robotImage5 from '$lib/images/Robot5.jpeg'
    import robotImage6 from '$lib/images/Robot6.jpeg'
    import robotImage7 from '$lib/images/Robot7.jpeg'
    import robotImage8 from '$lib/images/Robot8.jpeg'
    import robotImage3 from '$lib/images/Robot3.jpeg'
    import robotImage9 from '$lib/images/Robot9.jpeg'
    import robotImage10 from '$lib/images/Robot10.jpeg'
    const images1 = [
      { alt: 'erbology', src: robotImage1 },
      { alt: 'shoes', src: robotImage2 },
      { alt: 'small bag', src: robotImage3 }
    ];
    const images2 = [
      { alt: 'plants', src: robotImage4 },
      { alt: 'watch', src: robotImage5 },
      { alt: 'shoe', src: robotImage6 }
    ];
    const images3 = [
      { alt: 'cream', src: robotImage7 },
      { alt: 'small bag', src: robotImage8 },
      { alt: 'lamp', src: robotImage9 }
    ];
    const images4 = [
      { alt: 'toiletbag', src: robotImage10 },
      { alt: 'playstation', src: robotImage },
      { alt: 'bag', src: robotImage2 }
    ];
</script>
<div class="mb-10">
  <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
    <Gallery items={images1} />
    <Gallery items={images2} />
    <Gallery items={images3} />
    <Gallery items={images4} />
  </Gallery>
</div>
<div class="grid grid-flow-col max-h-fit">
  <img class="m-auto" src="{robotImage}" alt="">
  <Blockquote size="xl">
    <Icon name="quote-solid" class="w-10 h-10 text-gray-400 dark:text-gray-600" />
    Discover robots 
  </Blockquote>
</div>
<div class="grid grid-flow-col max-h-fit mt-8">
  <Blockquote size="xl">
    <Icon name="quote-solid" class="w-10 h-10 text-gray-400 dark:text-gray-600" />
     Explore documentation
  </Blockquote>
  <img class="m-auto" src="{robotImage}" alt="">

</div>
<div class="grid grid-flow-col max-h-fit mt-8">
  <img class="m-auto" src="{robotImage}" alt="">
  <Blockquote size="xl">
    <Icon name="quote-solid" class="w-10 h-10 text-gray-400 dark:text-gray-600" />
     Learn from hand-crafted tutorials
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