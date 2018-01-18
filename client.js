'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _config = require('../config');

const envPlugins = {
	development: ['transform-react-jsx-source', 'transform-react-jsx-self', 'react-hot-loader/babel'],
	production: ['transform-react-inline-elements', 'transform-react-constant-elements', 'transform-react-remove-prop-types'],
	test: ['transform-react-jsx-source', 'transform-react-jsx-self', 'transform-es2015-modules-commonjs', 'dynamic-import-node']
};

const plugins = envPlugins[process.env.NODE_ENV] || envPlugins.development;

module.exports = {
	presets: ['env', 'react'],
	plugins: ['lodash', 'transform-object-rest-spread', 'syntax-dynamic-import', 'transform-regenerator', 'transform-decorators-legacy', 'transform-class-properties', 'universal-import', ...plugins, ['module-resolver', {
		alias: _extends({}, _config.aliasesFromConfig)
	}]]
};