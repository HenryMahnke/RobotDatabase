

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ThisTeamAtYear/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.4cb3d2aa.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/index.8314cd34.js"];
export const stylesheets = [];
export const fonts = [];
