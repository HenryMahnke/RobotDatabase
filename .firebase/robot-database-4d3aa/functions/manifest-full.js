export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0f775c6e.js","app":"_app/immutable/entry/app.7016e32a.js","imports":["_app/immutable/entry/start.0f775c6e.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/singletons.9a4c903f.js","_app/immutable/chunks/index.4e9221da.js","_app/immutable/entry/app.7016e32a.js","_app/immutable/chunks/scheduler.0e4530e3.js","_app/immutable/chunks/index.8314cd34.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/CreateAccount",
				pattern: /^\/CreateAccount\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Database",
				pattern: /^\/Database\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/ForgotPassword",
				pattern: /^\/ForgotPassword\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Test",
				pattern: /^\/Test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/ThisTeamAllYears",
				pattern: /^\/ThisTeamAllYears\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/ThisTeamAtYear",
				pattern: /^\/ThisTeamAtYear\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Tutorials",
				pattern: /^\/Tutorials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Tutorials/SwerveDrive",
				pattern: /^\/Tutorials\/SwerveDrive\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/api/internal/postRobotData",
				pattern: /^\/api\/internal\/postRobotData\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/internal/postRobotData/_server.js'))
			},
			{
				id: "/enterData",
				pattern: /^\/enterData\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/signIn",
				pattern: /^\/signIn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
