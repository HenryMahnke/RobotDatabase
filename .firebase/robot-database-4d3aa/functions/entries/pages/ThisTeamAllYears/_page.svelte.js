import { c as create_ssr_component, h as validate_store, i as subscribe, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                       */import { C as CardPlaceholder } from "../../../chunks/CardPlaceholder.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="grid grid-cols-2 gap-0 lg:grid-cols-4">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4 " }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4 " }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})}</div>`;
});
export {
  Page as default
};
