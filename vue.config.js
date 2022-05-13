module.exports = {
	lintOnSave: true,
	parallel: true,
	configureWebpack: {
		output: {
			globalObject: "typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : this",
		},
	},
};
