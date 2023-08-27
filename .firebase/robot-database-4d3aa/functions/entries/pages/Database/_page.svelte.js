import { l as get_current_component, c as create_ssr_component, a as compute_rest_props, j as add_attribute, v as validate_component, s as setContext, n as compute_slots, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, o as createEventDispatcher$1, k as each, f as escape, h as validate_store, i as subscribe } from "../../../chunks/ssr.js";
import { W as Wrapper, I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { twJoin, twMerge } from "tailwind-merge";
import * as dom from "@floating-ui/dom";
import { F as Frame } from "../../../chunks/Frame.js";
import { w as writable } from "../../../chunks/index2.js";
import { v as validate_dynamic_element, a as validate_void_dynamic_element, i as is_void } from "../../../chunks/dev.js";
import { N as Navbar, a as NavBrand, b as NavUl } from "../../../chunks/NavUl.js";
import { C as CardPlaceholder } from "../../../chunks/CardPlaceholder.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { p as page } from "../../../chunks/stores.js";
import { p as pineapple } from "../../../chunks/pineapple.js";
function createEventDispatcher() {
  const component = get_current_component();
  return (type, target, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
const Popper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly"
  ]);
  let { activeContent = false } = $$props;
  let { arrow = true } = $$props;
  let { offset = 8 } = $$props;
  let { placement = "top" } = $$props;
  let { trigger = "hover" } = $$props;
  let { triggeredBy = void 0 } = $$props;
  let { reference = void 0 } = $$props;
  let { strategy = "absolute" } = $$props;
  let { open = false } = $$props;
  let { yOnly = false } = $$props;
  const dispatch = createEventDispatcher();
  let referenceEl;
  let floatingEl;
  let arrowEl;
  let contentEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  let middleware;
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({ x, y, middlewareData, placement: placement2, strategy: strategy2 }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  if ($$props.activeContent === void 0 && $$bindings.activeContent && activeContent !== void 0)
    $$bindings.activeContent(activeContent);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.triggeredBy === void 0 && $$bindings.triggeredBy && triggeredBy !== void 0)
    $$bindings.triggeredBy(triggeredBy);
  if ($$props.reference === void 0 && $$bindings.reference && reference !== void 0)
    $$bindings.reference(reference);
  if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
    $$bindings.strategy(strategy);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.yOnly === void 0 && $$bindings.yOnly && yOnly !== void 0)
    $$bindings.yOnly(yOnly);
  placement && (referenceEl = referenceEl);
  {
    dispatch("show", referenceEl, open);
  }
  middleware = [
    dom.flip(),
    dom.shift(),
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$props.border && arrowSide === "bottom" && "border-b border-r", $$props.border && arrowSide === "top" && "border-t border-l ", $$props.border && arrowSide === "right" && "border-t border-r ", $$props.border && arrowSide === "left" && "border-b border-l ");
  return `${!referenceEl ? `<div${add_attribute("this", contentEl, 0)}></div>` : ``} ${open && referenceEl ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { use: init }, { options: referenceEl }, { role: "tooltip" }, { tabindex: activeContent ? -1 : void 0 }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${arrow ? `<div${add_attribute("class", arrowClass, 0)}></div>` : ``}`;
    }
  })}` : ``} `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let activeCls = twMerge(activeClass, $$props.classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  let containerCls = twMerge(containerClass, $$props.classContainer);
  let headerCls = twMerge(headerClass, $$props.classHeader);
  let ulCls = twMerge("py-1", $$props.class);
  let footerCls = twMerge(footerClass, $$props.classFooter);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0)
    $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0)
    $$bindings.footerClass(footerClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        activeUrlStore.set(activeUrl);
      }
    }
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        validate_dynamic_element(tag);
        return tag ? (() => {
          validate_void_dynamic_element(tag);
          return `<${href ? "a" : "button"}${spread(
            [
              { href: escape_attribute_value(href) },
              {
                type: escape_attribute_value(href ? void 0 : "button")
              },
              {
                role: escape_attribute_value(href ? "link" : "button")
              },
              escape_object($$restProps),
              { class: escape_attribute_value(liClass) }
            ],
            {}
          )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
        })() : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "placeholder", "value"]);
  let $$slots = compute_slots(slots);
  let { size = "lg" } = $$props;
  let { placeholder = "Search" } = $$props;
  let { value = void 0 } = $$props;
  const sizes = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Wrapper, "Wrapper").$$render(
      $$result,
      {
        class: "relative w-full",
        show: $$slots.default
      },
      {},
      {
        default: () => {
          return `${validate_component(Input, "Input").$$render(
            $$result,
            Object.assign({}, { type: "search" }, { placeholder }, { size }, $$restProps, { class: $$props.class }, { value }),
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {
              left: () => {
                return `<svg slot="left"${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`;
              }
            }
          )}  ${$$slots.default ? `<div class="flex absolute inset-y-0 right-0 items-center text-gray-500 dark:text-gray-400">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { large = false } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  defaultClass = twMerge(
    "flex items-center font-medium",
    large ? "h-10 px-4 text-base" : "h-8 px-3 text-sm",
    group ? "" : table ? "rounded" : "rounded-lg",
    // table || 'border border-gray-300 dark:border-gray-700 dark:bg-gray-800',
    table ? "" : "border",
    active ? activeClass : normalClass,
    $$props.class
  );
  return ` ${((tag) => {
    validate_dynamic_element(tag);
    return tag ? (() => {
      validate_void_dynamic_element(tag);
      return `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", defaultClass, 0)}${add_attribute("role", href ? "button" : void 0, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}`;
    })() : "";
  })(href ? "a" : "button")} `;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px items-center" } = $$props;
  let { table = false } = $$props;
  let { large = false } = $$props;
  createEventDispatcher$1();
  setContext("group", true);
  setContext("table", table);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  return `<nav aria-label="Page navigation"><ul${add_attribute("class", twMerge(ulClass, table && "divide-x dark divide-gray-700 dark:divide-gray-700", $$props.class), 0)}><li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-l" : "rounded-l-lg"
    },
    {},
    {
      default: () => {
        return `${slots.prev ? slots.prev({}) : `Previous`}`;
      }
    }
  )}</li> ${each(pages, ({ name, href, active }) => {
    return `<li>${validate_component(PaginationItem, "PaginationItem").$$render(
      $$result,
      {
        large,
        active,
        activeClass,
        normalClass,
        href
      },
      {},
      {
        default: () => {
          return `${escape(name)} `;
        }
      }
    )} </li>`;
  })} <li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-r" : "rounded-r-lg"
    },
    {},
    {
      default: () => {
        return `${slots.next ? slots.next({}) : `Next`}`;
      }
    }
  )}</li></ul></nav> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let helper = { start: 1, end: 12, total: 100 };
  let activeClass = "text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-500";
  activeUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, {}, {}, {})} ${validate_component(NavUl, "NavUl").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Sort By${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  name: "chevron-down-solid",
                  "data-dropdown-toggle": "dropdown",
                  class: "w-3 h-3 ml-2 text-white dark:text-white"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { activeUrl, activeClass }, {}, {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `Top Teams`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `Team Number`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Year${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  name: "chevron-down-solid",
                  class: "w-3 h-3 ml-2 text-white dark:text-white"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { activeUrl, activeClass }, {}, {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2023`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2022`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2021`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2020`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2019`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: "" }, {}, {
                default: () => {
                  return `2018`;
                }
              })}`;
            }
          })} <div class="flex md:order-2">${validate_component(Button, "Button").$$render(
            $$result,
            {
              color: "none",
              "data-collapse-toggle": "mobile-menu-3",
              "aria-controls": "mobile-menu-3",
              "aria-expanded": "false",
              class: "md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            },
            {},
            {
              default: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { name: "search-outline", class: "w-5 h-5" }, {}, {})}`;
              }
            }
          )} <form class="flex gap-2">${validate_component(Search, "Search").$$render(
            $$result,
            {
              size: "md",
              class: "flex gap-2 items-center",
              placeholder: "Search for a team"
            },
            {},
            {}
          )} ${validate_component(Button, "Button").$$render($$result, { size: "sm" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  name: "search-outline",
                  class: "w-5 h-5 mr-2 -ml-1"
                },
                {},
                {}
              )}
					Search`;
            }
          })}</form></div>`;
        }
      })}`;
    }
  })} <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})} ${validate_component(CardPlaceholder, "CardPlaceholder").$$render($$result, { size: "sm", class: "mt-4" }, {}, {})}</div>  <div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape(helper.start)}</span>
		to
		<span class="font-semibold text-gray-900 dark:text-white">${escape(helper.end)}</span>
		of
		<span class="font-semibold text-gray-900 dark:text-white">${escape(helper.total)}</span>
		Entries</div> ${validate_component(Pagination, "Pagination").$$render($$result, { table: true, large: true }, {}, {
    next: () => {
      return `<div slot="next" class="flex items-center gap-2 text-white bg-gray-800">Next
			${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "arrow-right-outline",
          class: "w-3.5 h-3.5 mr-2"
        },
        {},
        {}
      )}</div>`;
    },
    prev: () => {
      return `<div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "arrow-left-outline",
          class: "w-3.5 h-3.5 mr-2"
        },
        {},
        {}
      )}
			Prev</div>`;
    }
  })}</div> <div>${validate_component(Card, "Card").$$render($$result, { img: pineapple, class: "mb-4" }, {}, {
    default: () => {
      return `<h5 id="teamNum" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-151jxjo">Team 254</h5> <p id="name" class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight" data-svelte-h="svelte-1f5iogh">CheesyPoofs</p> <p data-svelte-h="svelte-da6m7g">World EPA Rank:</p> <p data-svelte-h="svelte-x3a8xv">Unitless EPA:</p> <p></p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `Read more ${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              name: "arrow-right-outline",
              class: "w-3.5 h-3.5 ml-2 text-white"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
