
<script>
    import {P} from 'flowbite-svelte'
    import viewport from '../../useViewportAction'
    import {fly} from 'svelte/transition'
    import {fade} from 'svelte/transition'
    import {quintOut} from 'svelte/easing'
    import Robot1 from '$lib/images/Robot1.jpeg'
    import Robot2 from '$lib/images/Robot2.jpeg'
    import Robot3 from '$lib/images/Robot3.jpeg'
    import { Img } from 'flowbite-svelte';
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
      { alt: 'small bag', src: robotImage3 },

    ];
    const images2 = [
      { alt: 'plants', src: robotImage4 },
      { alt: 'lamp', src: robotImage9 }

    ];
    const images3 = [
      { alt: 'small bag', src: robotImage8 },
      { alt: 'watch', src: robotImage5 },

    ];
    const images4 = [
      { alt: 'toiletbag', src: robotImage10 },
      { alt: 'shoe', src: robotImage6 },
      { alt: 'bag', src: robotImage2 },

    ];

</script>
<div class="mb-10 static">
    <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
      <Gallery items={images1} />
      <Gallery items={images2} />
      <Gallery items={images3} />
      <Gallery items={images4} />
    </Gallery>
    <div class=" bg-indigo-700 h-40 w-1/2 m-auto absolute bottom-1/2 left-1/4" >
       <h1 class= " font-bold text-7xl text-center m-auto w-1/2 ">Robot Database</h1>
    </div>
   
  </div>

<div role="status" class="space-y-0 md:space md:flex md:items-center h-80">
    <Img src="{Robot1}" class=" w-1/2 object-cover h-full"/>
    <div class="w-full">
        <h1 class="text-4xl animate-fadeIn" id="ME" use:viewport
		on:enterViewport={() => document.getElementById('ME').classList.add('animate-fadeIn')}
		on:exitViewport={() => document.getElementById('ME').classList.remove('animate-fadeIn')}
        >Discover Robots</h1>
    </div>
</div>
<div role="status" class="space-y-0 md:space-x-8 md:flex md:items-center h-80">
    <div class="w-full">
        <h1 class="text-4xl animate-fadeIn" id="ME1" use:viewport
		on:enterViewport={() => document.getElementById('ME1').classList.add('animate-fadeIn')}
		on:exitViewport={() => document.getElementById('ME1').classList.remove('animate-fadeIn')}
        >Explore Documentation</h1>
    </div>
    <Img src="{Robot1}" class="w-1/2 object-cover h-full"/>

</div>
<div role="status" class="space-y-0 md:space-x-8 md:flex md:items-center h-80">
    <Img src="{Robot1}" class=" w-1/2 object-cover h-full"/>
    
    <div class="w-full">
        <h1 class="text-4xl animate-fadeIn" id="ME2" use:viewport
		on:enterViewport={() => document.getElementById('ME2').classList.add('animate-fadeIn')}
		on:exitViewport={() => document.getElementById('ME2').classList.remove('animate-fadeIn')}
        >Elevate your game</h1>
    </div>
</div>