const loaders = require('loaders')
const webpack = require('webpack')
const path = require('path')

module.exports = {
	components: 'src/components/[!(components|utils)]**/[A-Za-z]*.js',
	context: {
		Box: 'kilvin/lib/components/Box',
	},
	template: 'src/utils/index.html',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/utils/Provider'),
	},
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						// This is a feature of `babel-loader` for webpack (not Babel itself).
						// It enables caching results in ./node_modules/.cache/babel-loader/ directory for faster rebuilds.
						cacheDirectory: true,
					},
				},
				loaders.css,
				{
					test: /\.global\.less$/,
					exclude: /node_modules/,
					loaders: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /[^\.global]\.less$/,
					exclude: /node_modules/,
					loaders: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								modules: true,
								localIdentName:
									'[name]__[local]--[hash:base64:5]',
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(svg)$/i,
					loaders: [
						{
							loader: 'svg-sprite-loader',
						},
						{
							loader: 'svgo-loader',
							options: {
								original: false,
								gzip: true,
								multipass: true,
								floatPrecision: 2,
								plugins: [
									{ cleanupAttrs: true },
									{ removeDoctype: true },
									{ removeXMLProcInst: true },
									{ removeComments: true },
									{ removeMetadata: true },
									{ removeTitle: true },
									{ removeDesc: true },
									{ removeUselessDefs: true },
									{ removeEditorsNSData: true },
									{ removeEmptyAttrs: true },
									{ removeHiddenElems: true },
									{ removeEmptyText: true },
									{ removeEmptyContainers: true },
									{ removeViewBox: false },
									{ cleanUpEnableBackground: true },
									{ convertStyleToAttrs: true },
									{ convertColors: true },
									{ convertPathData: false },
									{ convertTransform: true },
									{ removeUnknownsAndDefaults: true },
									{ removeNonInheritableGroupAttrs: true },
									{ removeUselessStrokeAndFill: true },
									{ removeUnusedNS: true },
									{ cleanupIDs: true },
									{ cleanupNumericValues: true },
									{ cleanupListOfValues: true },
									{ moveElemsAttrsToGroup: true },
									{ moveGroupAttrsToElems: true },
									{ removeRasterImages: false },
									{ mergePaths: true },
									{ convertShapeToPath: true },
									{ sortAttrs: false },
									{ transformsWithOnePath: false },
									{ removeDimensions: true },
									{ cleanupEnableBackground: true },
									{ collapseGroups: true },
								],
							},
						},
					],
				},
				{
					exclude: [
						/\.html$/,
						/\.svg$/,
						/\.less$/,
						loaders.babel.test,
						loaders.css.test,
						loaders.json.test,
					],
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: 'static/media/[name].[hash:8].[ext]',
					},
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('development'),
				},
				__SERVER__: false,
				__CLIENT__: true,
				__STYLEGUIDE__: true,
			}),
		],
	},

	theme: {
		color: {
			baseBackground: '#F5F5FA',
			sidebarBackground: '#FFFFFF',
		},
	},
}
