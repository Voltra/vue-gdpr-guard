module.exports = {
	lintOnSave: false,
	parallel: true,
	chainWebpack(config) {
		config.module
			.rule("eslint")
			.use("eslint-loader")
			.loader("eslint-loader")
			.options({
				fix: true,
			}).end();
	},
};
