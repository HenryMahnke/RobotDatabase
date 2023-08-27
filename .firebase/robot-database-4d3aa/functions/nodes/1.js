

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ebe57ed6.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/index.8314cd34.js","_app/immutable/chunks/stores.39a16026.js","_app/immutable/chunks/singletons.65fbaf80.js","_app/immutable/chunks/index.4e9221da.js"];
export const stylesheets = [];
export const fonts = [];
