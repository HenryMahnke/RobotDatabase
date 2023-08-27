import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { L as Label } from "../../../chunks/Label.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md m-auto" }, {}, {
    default: () => {
      return `<form class="flex flex-col space-y-6" action="/"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-wwn3rw">Sign in to our platform</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "email",
              name: "email",
              placeholder: "Team93",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1nyqqaq">Your password</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "password",
              name: "password",
              placeholder: "•••••",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
        default: () => {
          return `Remember me`;
        }
      })} <a href="/ForgotPassword" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500" data-svelte-h="svelte-yfa2ut">Lost password?</a></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Login to your account`;
        }
      })} <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not registered? <a href="/CreateAccount" class="text-primary-700 hover:underline dark:text-primary-500" data-svelte-h="svelte-azno2m">Create account</a></div></form>`;
    }
  })}`;
});
export {
  Page as default
};
