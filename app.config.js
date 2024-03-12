export default {
	config: {
		tailwindcss: false
	},
	pages: {

		"world": [
			{name: 'Hello', props: {name: 'World'}},
		],
		"*": [
			{name: 'Hello', props: {name: 'dynamic'}},
		]
	}
}
