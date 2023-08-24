import { c as create_ssr_component, a as compute_rest_props, h as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, v as validate_component, f as escape } from "../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import "../../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { L as Label, C as Checkbox } from "../../../chunks/Checkbox.js";
import { twMerge } from "tailwind-merge";
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "defaultClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { defaultClass = "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `<button${add_attribute("class", twMerge(defaultClass, $$props.class), 0)} type="button"><label class="flex flex-col items-center" tabindex="0">${slots.default ? slots.default({}) : ``} <input${spread([escape_object($$restProps), { type: "file" }, { class: "hidden" }], {})}></label></button> `;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-primary-600 dark:text-primary-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = [];
  const showFiles = (files) => {
    if (files.length === 1)
      return files[0];
    let concat = "";
    files.map((file) => {
      concat += file;
      concat += ",";
      concat += " ";
    });
    if (concat.length > 40)
      concat = concat.slice(0, 40);
    concat += "...";
    return concat;
  };
  return `<h1 data-svelte-h="svelte-5aztbz">Full Robot Picture</h1> ${validate_component(Dropzone, "Dropzone").$$render($$result, { id: "dropzone" }, {}, {
    default: () => {
      return `<svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> ${value.length === 0 ? `<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold" data-svelte-h="svelte-1td7sga">Click to upload</span> or drag and drop</p> <p class="text-xs text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1k1b5r1">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>` : `<p>${escape(showFiles(value))}</p>`}`;
    }
  })} <form><div class="grid gap-6 mb-6 md:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "first_name", class: "mb-2" }, {}, {
    default: () => {
      return `First name`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "first_name",
      placeholder: "John",
      required: true
    },
    {},
    {}
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "last_name", class: "mb-2" }, {}, {
    default: () => {
      return `Last name`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "last_name",
      placeholder: "Doe",
      required: true
    },
    {},
    {}
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "company", class: "mb-2" }, {}, {
    default: () => {
      return `Company`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "company",
      placeholder: "Flowbite",
      required: true
    },
    {},
    {}
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Unique visitors (per month)`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "number",
      id: "visitors",
      placeholder: "",
      required: true
    },
    {},
    {}
  )}</div></div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
    default: () => {
      return `Password`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      placeholder: "•••••••••",
      required: true
    },
    {},
    {}
  )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "confirm_password", class: "mb-2" }, {}, {
    default: () => {
      return `Confirm password`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "confirm_password",
      placeholder: "•••••••••",
      required: true
    },
    {},
    {}
  )}</div> ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mb-6 space-x-1", required: true }, {}, {
    default: () => {
      return `I agree with the ${validate_component(A, "A").$$render(
        $$result,
        {
          href: "/",
          class: "text-primary-700 dark:text-primary-600 hover:underline"
        },
        {},
        {
          default: () => {
            return `terms and conditions`;
          }
        }
      )}.`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Submit`;
    }
  })}</form>`;
});
export {
  Page as default
};
