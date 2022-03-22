/* eslint-env node */

module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		// "parser": "babel-eslint"
		parser: "@babel/eslint-parser",
	},
	extends: [
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"eslint:recommended",
	],
	rules: {
		// [JS]
		"arrow-body-style": [
			"error",
			"as-needed",
			{
				requireReturnForObjectLiteral: true,
			},
		],
		curly: "error",
		"dot-notation": "error",
		eqeqeq: "error",
		"no-lonely-if": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"array-bracket-newline": [
			"error",
			{ multiline: true },
		],
		"array-element-newline": [
			"error",
			{
				multiline: true,
				minItems: 1,
			},
		],
		"arrow-parens": [
			"error",
			"as-needed",
		],
		"comma-dangle": [
			"error",
			"always-multiline",
			{
				functions: "never",
			},
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: true,
				avoidEscape: false,
			},
		],
		semi: [
			"error",
			"always",
		],
		"quote-props": [
			"error",
			"as-needed",
		],
		"nonblock-statement-body-position": [
			"error",
			"below",
			{
				overrides: {
					do: "any",
				},
			},
		],
		// [/JS]


		// [VUE]
		"vue/script-indent": [
			"error",
			"tab",
			{
				baseIndent: 1,
			},
		],
	},
	overrides: [
		{
			files: ["*.vue"],
			rules: {
				indent: "off",
			},
		},
	],
};
