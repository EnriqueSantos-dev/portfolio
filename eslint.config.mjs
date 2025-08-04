/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportOrder from "eslint-plugin-simple-import-sort";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
const config = [
	js.configs.recommended,
	eslintPluginPrettier,
	...tseslint.configs.recommendedTypeChecked,

	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: "./tsconfig.json",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"no-unused-vars": "off",
			"no-constant-binary-expression": "warn",
			"@typescript-eslint/no-floating-promises": "warn",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-assignment": "warn",
			"@typescript-eslint/no-unsafe-member-access": "warn",
			"@typescript-eslint/no-unsafe-call": "warn",
			"@typescript-eslint/no-unsafe-return": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
	},
	...tailwindPlugin.configs["flat/recommended"],
	{
		settings: {
			tailwindcss: {
				calles: ["className", "cn", "clsx"],
				config: "tailwind.config.mjs",
			},
		},
		rules: {
			"tailwindcss/classnames-order": "error",
			"tailwindcss/no-custom-classname": "off",
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
			},
		},
		rules: {
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
	{
		plugins: {
			"@next/next": pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs["core-web-vitals"].rules,
		},
	},
	{
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		settings: { react: { version: "detect" } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		plugins: {
			"simple-import-sort": simpleImportOrder,
		},
		rules: {
			"simple-import-sort/imports": [
				"error",
				{
					groups: [
						["^@/styles", "\\w?(\\.css|\\.scss)$"],
						["^react(-dom)?$"],
						["^next/?(.*)"],
						["^@?\\w"],
						["^@/components"],
						["^@/hooks"],
						["^@/services"],
						["^@/i18n"],
						["^@/constants"],
						["^@/utils"],
						["^@/types"],
						["^"],
						["^\\."],
					],
				},
			],
		},
	},
	{
		ignores: ["node_modules/**", ".next/**"],
	},
];

export default config;
