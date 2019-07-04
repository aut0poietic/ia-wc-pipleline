import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";

export default {
	input : 'src/ia-card/index.js',
	output: {
		file  : 'dist/ia-card.js',
		format: 'iife'
	},
	plugins: [
		eslint(),
		terser()
	]
};