import {terser} from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import flexbugFixes  from 'postcss-flexbugs-fixes';
import autoprefixer  from 'autoprefixer';
import html from 'rollup-plugin-html';

export default {
	input  : 'src/ia-dijkstra/index.js',
	output : {
		file  : 'dist/ia-dijkstra.js',
		format: 'iife'
	},
	plugins: [
		terser(),
		html(),
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