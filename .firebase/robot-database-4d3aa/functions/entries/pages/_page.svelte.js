import { c as create_ssr_component, a as compute_rest_props, s as setContext, v as validate_component, g as getContext, h as validate_store, i as subscribe, j as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, k as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { F as Frame } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
/* empty css                                                    */import { B as Blockquote } from "../../chunks/Blockquote.js";
import { I as Icon } from "../../chunks/Icon.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-l border-r group-first:border-t" } = $$props;
  let { borderOpenClass = "border-l border-r" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  validate_store(selected, "selected");
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0)
    $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0)
    $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0)
    $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0)
    $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0)
    $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0)
    $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button></h2> ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<div class="hidden"><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`} `;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divClass;
  let $$restProps = compute_rest_props($$props, ["items", "imgClass"]);
  let { items = [] } = $$props;
  let { imgClass = "h-auto max-w-full rounded-lg" } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  divClass = twMerge("grid", $$props.class);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${items.length ? each(items, (item) => {
    return `${slots.default ? slots.default({ item }) : ` <div><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)}${add_attribute("class", twMerge(imgClass, $$props.classImg), 0)}></div> `}`;
  }) : `${slots.default ? slots.default({ item: items[0] }) : ``}`}</div> `;
});
const robotImage = "/_app/immutable/assets/Runway 2023-08-20T04_42_08.389Z Image to Image To 2 color vector_svg type image.d8c00ca6.jpg";
const robotImage2 = "/_app/immutable/assets/Robot2.74ecafd7.jpeg";
const robotImage1 = "/_app/immutable/assets/Robot1.57189f02.jpeg";
const robotImage4 = "/_app/immutable/assets/Robot4.4b2e1505.jpeg";
const robotImage5 = "/_app/immutable/assets/Robot5.5c46d521.jpeg";
const robotImage6 = "/_app/immutable/assets/Robot6.917cbf4c.jpeg";
const robotImage7 = "/_app/immutable/assets/Robot7.825eba20.jpeg";
const robotImage8 = "/_app/immutable/assets/Robot8.28696015.jpeg";
const robotImage3 = "/_app/immutable/assets/Robot3.bcbe5be2.jpeg";
const robotImage9 = "/_app/immutable/assets/Robot9.4e30bc3a.jpeg";
const robotImage10 = "/_app/immutable/assets/Robot10.e944ca82.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images1 = [
    { alt: "erbology", src: robotImage1 },
    { alt: "shoes", src: robotImage2 },
    { alt: "small bag", src: robotImage3 },
    { alt: "shoe", src: robotImage6 }
  ];
  const images2 = [{ alt: "plants", src: robotImage4 }, { alt: "watch", src: robotImage5 }];
  const images3 = [
    { alt: "cream", src: robotImage7 },
    { alt: "small bag", src: robotImage8 },
    { alt: "lamp", src: robotImage9 }
  ];
  const images4 = [
    { alt: "toiletbag", src: robotImage10 },
    { alt: "small bag", src: robotImage3 },
    { alt: "bag", src: robotImage2 },
    { alt: "lamp", src: robotImage9 }
  ];
  return `<div class="mb-10">${validate_component(Gallery, "Gallery").$$render(
    $$result,
    {
      class: "gap-4 grid-cols-2 md:grid-cols-4"
    },
    {},
    {
      default: () => {
        return `${validate_component(Gallery, "Gallery").$$render($$result, { items: images1 }, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, { items: images2 }, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, { items: images3 }, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, { items: images4 }, {}, {})}`;
      }
    }
  )}</div> <div class="grid grid-flow-col max-h-fit"><img class="m-auto"${add_attribute("src", robotImage, 0)} alt=""> ${validate_component(Blockquote, "Blockquote").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "quote-solid",
          class: "w-10 h-10 text-gray-400 dark:text-gray-600"
        },
        {},
        {}
      )}
    Discover robots`;
    }
  })}</div> <div class="grid grid-flow-col max-h-fit mt-8">${validate_component(Blockquote, "Blockquote").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "quote-solid",
          class: "w-10 h-10 text-gray-400 dark:text-gray-600"
        },
        {},
        {}
      )}
     Explore documentation`;
    }
  })} <img class="m-auto"${add_attribute("src", robotImage, 0)} alt=""></div> <div class="grid grid-flow-col max-h-fit mt-8"><img class="m-auto"${add_attribute("src", robotImage, 0)} alt=""> ${validate_component(Blockquote, "Blockquote").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "quote-solid",
          class: "w-10 h-10 text-gray-400 dark:text-gray-600"
        },
        {},
        {}
      )}
     Learn from hand-crafted tutorials`;
    }
  })}</div> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-1lq55n7">What is the point</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-fexbvj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p> <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" data-svelte-h="svelte-1bh3u9z">get started</a>
        and start developing websites even faster with components on top of Tailwind CSS.</p>`;
        }
      })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        header: () => {
          return `<span slot="header" data-svelte-h="svelte-kjzxfs">We need your help</span>`;
        },
        default: () => {
          return `<p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-fexbvj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p> <p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-fexbvj">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p> <p class="mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-tbqy8r">Learn more about these technologies:</p> <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500"><li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline" data-svelte-h="svelte-1qfdtf9">Lorem ipsum</a></li> <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline" data-svelte-h="svelte-1omipx8">Tailwind UI</a></li></ul>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
