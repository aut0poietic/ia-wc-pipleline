import {terser} from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import flexbugFixes  from 'postcss-flexbugs-fixes';
import autoprefixer  from 'autoprefixer';
const {readdirSync, statSync} = require('fs');
const {join} = require('path');

const source = './src';
const dist = './dist';
const dirs = readdirSync(source).filter(f => statSync(join(source, f)).isDirectory());
const config = [];

dirs.forEach(dir => {
	config.push({
		input  : join(source, dir, 'index.js'),
		output : {
			file  : join(dist, dir + '.js'),
			format: 'iife'
		},
		plugins: [
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
	})
});

export default config ;