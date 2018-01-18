import { lighten, darken } from 'polished'

const colorOffsetLight = 0.15
const colorOffsetDark = 0.07

export default {
	fonts: {
		Roboto: [
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/sTdaA6j0Psb920Vjv-mrzH-_kf6ByYO6CLYdB4HQE-Y.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range':
						'U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/uYECMKoHcO9x1wdmbyHIm3-_kf6ByYO6CLYdB4HQE-Y.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range':
						'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/tnj4SB6DNbdaQnsM8CFqBX-_kf6ByYO6CLYdB4HQE-Y.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range': 'U+0370-03FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/NJ4vxlgWwWbEsv18dAhqnn-_kf6ByYO6CLYdB4HQE-Y.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range': 'U+0102-0103, U+1EA0-1EF9, U+20AB',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/Ks_cVxiCiwUWVsFWFA3Bjn-_kf6ByYO6CLYdB4HQE-Y.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range':
						'U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '400',
					localAlias: ['Roboto', 'Roboto-Regular'],
					'unicode-range':
						'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/ZLqKeelYbATG60EpZBSDy4X0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range':
						'U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/oHi30kwQWvpCWqAhzHcCSIX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range':
						'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/rGvHdJnr2l75qb0YND9NyIX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range': 'U+1F00-1FFF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/mx9Uck6uB63VIKFYnEMXrYX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range': 'U+0370-03FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/mbmhprMH69Zi6eEPBYVFhYX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range': 'U+0102-0103, U+1EA0-1EF9, U+20AB',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/oOeFwZNlrTefzLYmlVV1UIX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range':
						'U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/RxZJdnzeo3R5zSexge8UUZBw1xU1rKptJj_0jans920.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '500',
					localAlias: ['Roboto Medium', 'Roboto-Medium'],
					'unicode-range':
						'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/77FXFjRbGzN4aCrSFhlh3oX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range':
						'U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/isZ-wbCXNKAbnjo6_TwHToX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range':
						'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/UX6i4JxQDm3fVTc1CPuwqoX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range': 'U+1F00-1FFF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/jSN2CGVDbcVyCnfJfjSdfIX0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range': 'U+0370-03FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/97uahxiqZRoncBaCEI3aW4X0hVgzZQUfRDuZrPvH3D8.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range':
						'U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF',
				},
			},
			{
				files: [
					'https://fonts.gstatic.com/s/roboto/v18/d-6IYplOFocCacKzxwXSOJBw1xU1rKptJj_0jans920.woff2',
				],
				options: {
					'font-family': 'Roboto',
					'font-style': 'normal',
					'font-weight': '700',
					localAlias: ['Roboto Bold', 'Roboto-Bold'],
					'unicode-range':
						'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
				},
			},
		],
	},

	breakpoints: {
		mobileXs: '320px',
		mobileX: '375px',
		mobileXl: '480px',
		tablet: '768px',
		desktop: '991px',
		desktopLarge: '1280px',
	},
	gradient: {
		primary: 'linear-gradient(left, #76C4E2, #85CBA8)',
		two: 'linear-gradient(left, #8176B5, #85CBA8)',
		three: 'linear-gradient(left, #8176B5, #76C4E2)',
		four: 'linear-gradient(left, #8176B5, #BA77B1)',
		five: 'linear-gradient(left, #8176B5, #F16975)',
		six: 'linear-gradient(left, #F16975, #F69259)',
		seven: 'linear-gradient(left, #F69259, #FFDB6F)',
		eight: 'linear-gradient(left, #85CBA8, #FFDB6F)',
	},
	color: {
		// Style guide colors
		rain: '#408BC9',
		sky: '#76C4E2',
		dew: '#85CBA8',
		twilight: '#8176B5',
		sunset: '#BA77B1',
		dawn: '#F16975',
		sunrise: '#F69259',
		lightning: '#FFDB6F',
		night: '#404041',
		dusk: '#4D4D4F',
		storm: '#808285',
		hail: '#BCBEC0',
		moonshine: '#F7F7F7',
		mineShaft: '#3a3a3a',
		// current colors
		cement: '#7D7D7D',
		grass: '#9BCA3E',
		marine: '#2F7BBF',
		tangerine: '#FF7900',
		apple: '#BD2527',
		charcoal: '#333333',
		carrot: '#f56500',
		smoke: '#e0e0e0',
		seaGreen: '#4CD9AA',
		darkGrey: '#999999',
		lightGray: '#eeeeee',
		lightPurple: '#99B2DD',
		azureRadiance: '#0078ff',
		whisper: '#F5F5FA',
		riceFlower: '#eaffe2',
		sunglo: '#E56A6A',
		tundora: '#4A4A4A',
		dustyGray: '#9B9B9B',
		scorpion: '#5F5F5F',
		silver: '#BABABA',
		doveGray: '#666666',
	},
	fontSize: {
		xs: 11,
		s: 12,
		m: 14,
		l: 16,
		xl: 18,
		xxl: 20,
	},
	letterSpacing: {
		xs: 1,
	},
	boxShadow: {
		thick: '0 0 20px 0 rgba(136,136,136,0.50)',
		thin: '0px 1px 4px #ccc',
	},
	buttonVariants: {
		primary: '#2196f3',
		success: '#5cb85c',
		danger: '#d9534f',
		info: '#5bc0de',
		default: 'lightgray',
		accent: '#ff4081',
		disabled: '#E8E8E8',
		shamrock: '#4CD9AA',
	},
	regularBaseFont: {
		fontFamily: 'roboto',
		fontWeight: '400',
	},
	mediumBaseFont: {
		fontFamily: 'roboto',
		fontWeight: '500',
	},
	boldBaseFont: {
		fontFamily: 'roboto',
		fontWeight: '700',
	},
	inputFontSize: '13',
	lineHeight: 1.5,
	inputLineHeight: 1.4,
	em: '1em',
	rem: '1rem',
	fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
	fontWeight: 400,
	fontWeightLight: 300,
	fontWeightSemiBold: 600,
	fontWeightBold: 700,
	fontColorHeadingCaption: '#888',
	border: '1px solid #ccc',
	borderRadius: '2',
	arrowSize: '5',
	disabledInputColor: 'rgba(204, 204, 204, 0.4)',
	disabledBackground: '#ededed',
	bodyBackground: '#ebebeb',
	bodyAccentColor: darken(0.8, '#fff'),
	bodyOffsetColor: darken(0.53, '#fff'),
	fontColor: darken(0.8, '#fff'),
	colorWhite: '#fff',
	colorBlack: '#000',
	colorTransparent: 'transparent',
	colorOffsetLight,
	colorOffsetDark,
	colorInfo: '#00a9eb',
	colorSuccess: '#68970f',
	colorWarning: '#fca520',
	colorError: '#ff3100',
	colorMuted: darken(0.5125, '#fff'),
	colorSmoke: '#f2f2f2',
	colorBlue: '#007aff',
	colorBlueLight: lighten(colorOffsetLight, '#007aff'),
	colorBlueDark: darken(colorOffsetDark, '#007aff'),
	colorOrange: '#ff7900',
	colorOrangeLight: lighten(colorOffsetLight, '#ff7900'),
	colorOrangeDark: darken(colorOffsetDark, '#ff7900'),
	colorGray: '#80848f',
	colorGrayLight: darken(0.13, '#80848f'),
	colorGrayLightOnboarding: '#F7F7F7',
	colorGrayDark: darken(0.8, '#80848f'),
	colorGrayBorder: '#666',
	colorGreen: '#9bca3e',
	colorGreenLight: lighten(colorOffsetLight, '#9bca3e'),
	colorGreenDark: darken(colorOffsetDark, '#9bca3e'),
	colorRed: '#e6324B',
	colorRedLight: lighten(colorOffsetLight, '#e6324B'),
	colorRedDark: darken(colorOffsetDark, '#e6324B'),
	colorYellow: '#ffd24d',
	colorYellowLight: lighten(colorOffsetLight, '#ffd24d'),
	colorYellowDark: darken(colorOffsetDark, '#ffd24d'),
	colorPink: '#d91698',
	colorPinkLight: lighten(colorOffsetLight, '#d91698'),
	colorPinkDark: darken(colorOffsetDark, '#d91698'),
	colorPurple: '#9545e5',
	colorPurpleLight: lighten(colorOffsetLight, '#d91698'),
	colorPurpleDark: darken(colorOffsetDark, '#d91698'),
	colorTwitterBlue: '#00aced',
	colorFacebookBlue: '#3b5998',
	colorMainBackground: '#e6e6e6',
	colorPurpleApp: '#343546',
	colorOverlay: 'rgba(0, 0, 0, .7)',
	colorImportantInformation: 'rgba(64,139,201,0.2)',
	zIndex: {
		deep: -1,
		level1: 0,
		level2: 100,
		level3: 200,
		level4: 500,
		level5: 999,
	},
}
