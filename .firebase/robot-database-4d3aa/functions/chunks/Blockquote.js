import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-l-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let { size = "lg" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote> `;
});
export {
  Blockquote as B
};
