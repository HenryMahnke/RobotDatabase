import { c as create_ssr_component, j as add_attribute, f as escape, k as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                       */import { p as pineapple } from "../../../chunks/pineapple.js";
const CardComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { num = "254" } = $$props;
  let { name = "poofs" } = $$props;
  let { driveType = "swerve" } = $$props;
  if ($$props.num === void 0 && $$bindings.num && num !== void 0)
    $$bindings.num(num);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.driveType === void 0 && $$bindings.driveType && driveType !== void 0)
    $$bindings.driveType(driveType);
  return `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a href="/"><img class="rounded-t-lg"${add_attribute("src", pineapple, 0)} alt=""></a> <div class="p-5"><a href="/"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Team ${escape(num)}</h5></a> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Drive Train: ${escape(driveType)}</p> <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="grid md:grid-cols-4 grid-cols-2 align-middle justify-items-center gap-4">${each(Array(12), (_, i) => {
    return `${validate_component(CardComponent, "CardComponent").$$render(
      $$result,
      {
        num: "244",
        name: "the cow riders",
        driveType: "swervingaroundyour mother"
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
