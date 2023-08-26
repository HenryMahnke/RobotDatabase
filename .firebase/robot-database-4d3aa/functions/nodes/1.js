

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9a90a802.js","_app/immutable/chunks/scheduler.b607adc8.js","_app/immutable/chunks/index.0f00d5dc.js","_app/immutable/chunks/stores.51f6c0e0.js","_app/immutable/chunks/singletons.9e383f97.js","_app/immutable/chunks/index.46e3549d.js"];
export const stylesheets = [];
export const fonts = [];
