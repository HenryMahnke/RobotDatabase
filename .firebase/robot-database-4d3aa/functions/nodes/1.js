

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.16b3fe9f.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/index.8314cd34.js","_app/immutable/chunks/stores.41e6824b.js","_app/immutable/chunks/singletons.9a4c903f.js","_app/immutable/chunks/index.4e9221da.js"];
export const stylesheets = [];
export const fonts = [];
