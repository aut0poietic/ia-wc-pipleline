import {terser} from "rollup-plugin-terser";
import {eslint} from "rollup-plugin-eslint";
import postcss from 'rollup-plugin-postcss';
import stylelint from 'rollup-plugin-stylelint';
import flexbugFixes  from 'postcss-flexbugs-fixes';
import autoprefixer  from 'autoprefixer';

export default {
	input  : 'src/ia-card/index.js',
	output : {
		file  : 'dist/ia-card.js',
		format: 'iife'
	},
	plugins: [
		stylelint(),
		eslint(),
		terser(),
		postcss({
			extract  : false,
			inject   : false,
			minimize : true,
			sourceMap: false,
			plugins  : [
				autoprefixer(),
				flexbugFixes()
			]
		})
	]
};