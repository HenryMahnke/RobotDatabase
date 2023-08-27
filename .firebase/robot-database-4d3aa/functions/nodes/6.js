

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.a1de299d.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/index.8314cd34.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.69f018ca.js","_app/immutable/chunks/pineapple.8aa5b50b.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.be78b448.css"];
export const fonts = [];
