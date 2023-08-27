import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1xcmah0">Unfortunately, creating an account is kind of a pain,
    because there are so many people per team, we limit the accounts per team to just 1, 
    that way there is no confusion where media is coming from 
    this can also help us prevent maliscious behavior and ban accounts more easily, 
    though we hope to never have to do that.
    for that reason, you must send us an email

    We also prefer that accounts are made by mentors so that account access can be prolonged</h1> ${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md m-auto" }, {}, {
    default: () => {
      return `<form class="flex flex-col space-y-6" action="/"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1nwrcje">Create An Account</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "email",
              name: "email",
              placeholder: "Team93@gmail.com",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1xw3iy4">Team Number</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "number",
              name: "TeamNumber",
              placeholder: "93",
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
      })} <div class="flex items-start"><a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500" data-svelte-h="svelte-1xxqidj">Lost password?</a></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Login to your account`;
        }
      })}</form>`;
    }
  })}`;
});
export {
  Page as default
};
