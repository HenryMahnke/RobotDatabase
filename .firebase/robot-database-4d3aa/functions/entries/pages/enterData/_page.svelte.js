import { c as create_ssr_component, a as compute_rest_props, v as validate_component, b as spread, d as escape_object } from "../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../chunks/Input.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { twMerge } from "tailwind-merge";
import { L as Label } from "../../../chunks/Label.js";
const Fileupload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "inputClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { inputClass = "border !p-0 dark:text-gray-400" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  return `${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign({}, $$restProps, {
      class: twMerge(inputClass, $$props.class)
    }),
    {},
    {
      default: ({ props }) => {
        return `<input${spread([{ type: "file" }, escape_object(props)], {})}>`;
      }
    }
  )} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Label, "Label").$$render($$result, { class: "mb-2" }, {}, {
    default: () => {
      return `Full Robot Picture`;
    }
  })} ${validate_component(Label, "Label").$$render($$result, { class: "py-2", for: "default_size" }, {}, {
    default: () => {
      return `Default size`;
    }
  })} ${validate_component(Fileupload, "Fileupload").$$render($$result, { id: "larg_size", size: "lg" }, {}, {})} <form class="m-4"><div class="grid gap-6 mb-6 md:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "first_name", class: "mb-2" }, {}, {
    default: () => {
      return `Robot Name`;
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
      return `Drivetrain Type`;
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
      return `Drivetrain Motors`;
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
      return `Total Number Of Motors`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Length of Robot`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Width of Robot`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Cad for Robot`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Code for Robot`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Types of subsystems used`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Link to Write Up`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Strategy Write Up`;
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
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "visitors", class: "mb-2" }, {}, {
    default: () => {
      return `Link to chief delphi post`;
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
  )}</div></div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Preview`;
    }
  })} ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mb-6 space-x-1", required: true }, {}, {
    default: () => {
      return `I acknowledge that I am sharing this information with the FRC community.`;
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
