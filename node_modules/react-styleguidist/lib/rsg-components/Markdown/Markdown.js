var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import mapValues from 'lodash/mapValues';
// import memoize from 'lodash/memoize';
import Styled from 'rsg-components/Styled';
import Link from 'rsg-components/Link';
import { styles as paraStyles } from 'rsg-components/Para';

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved
require('!!../../../loaders/style-loader!../../../loaders/css-loader!highlight.js/styles/tomorrow.css');

// Temporary disable memoization to fix: https://github.com/styleguidist/react-styleguidist/issues/348
// TODO: Remove after merge: https://github.com/probablyup/markdown-to-jsx/pull/96
var memoize = function memoize(a) {
	return a;
};

// Code blocks with server-side syntax highlight
function Code(_ref) {
	var children = _ref.children,
	    className = _ref.className;

	var isHighlighted = className && className.indexOf('lang-') !== -1;
	if (isHighlighted) {
		return React.createElement('code', { className: className, dangerouslySetInnerHTML: { __html: children } });
	}
	return React.createElement(
		'code',
		{ className: className },
		children
	);
}
Code.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

// Custom CSS classes for each tag: <em> → <em className={s.em}> + custom components
var getBaseOverrides = memoize(function (classes) {
	var styleOverrides = mapValues(classes, function (value) {
		return {
			props: {
				className: value
			}
		};
	});

	return _extends({}, styleOverrides, {
		a: {
			component: Link
		},
		code: {
			component: Code,
			props: {
				className: classes.code
			}
		}
	});
}, function () {
	return 'getBaseOverrides';
});

// Inline mode: replace <p> (usual root component) with <span>
var getInlineOverrides = memoize(function (classes) {
	var overrides = getBaseOverrides(classes);

	return _extends({}, overrides, {
		p: {
			component: 'span',
			props: {
				className: classes.base
			}
		}
	});
}, function () {
	return 'getInlineOverrides';
});

var styles = function styles(_ref2) {
	var space = _ref2.space,
	    fontFamily = _ref2.fontFamily,
	    fontSize = _ref2.fontSize,
	    color = _ref2.color,
	    borderRadius = _ref2.borderRadius;
	return {
		base: {
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit'
		},
		para: paraStyles({ space: space, color: color, fontFamily: fontFamily }).para,
		h1: {
			composes: '$para',
			fontSize: fontSize.h1,
			fontWeight: 'normal'
		},
		h2: {
			composes: '$para',
			fontSize: fontSize.h2,
			fontWeight: 'normal'
		},
		h3: {
			composes: '$para',
			fontSize: fontSize.h3,
			fontWeight: 'normal'
		},
		h4: {
			composes: '$para',
			fontSize: fontSize.h4,
			fontWeight: 'normal'
		},
		h5: {
			composes: '$para',
			fontSize: fontSize.h5,
			fontWeight: 'normal'
		},
		h6: {
			composes: '$para',
			fontSize: fontSize.h6,
			fontWeight: 'normal',
			fontStyle: 'italic'
		},
		p: {
			composes: '$para'
		},
		ul: {
			composes: '$para',
			paddingLeft: space[3]
		},
		ol: {
			composes: '$para',
			listStyleType: 'decimal',
			paddingLeft: space[3]
		},
		li: {
			composes: '$base',
			listStyleType: 'inherit'
		},
		input: {
			color: color.base,
			display: 'inline-block',
			margin: [[0, '0.35em', '0.25em', '-1.2em']],
			verticalAlign: 'middle'
		},
		blockquote: {
			composes: '$para',
			fontSize: fontSize.base,
			margin: [[space[2], space[4]]],
			padding: 0
		},
		hr: {
			composes: '$para',
			borderWidth: [[0, 0, 1, 0]],
			borderColor: color.border,
			borderStyle: 'solid'
		},
		em: {
			composes: '$base',
			fontStyle: 'italic'
		},
		strong: {
			composes: '$base',
			fontWeight: 'bold'
		},
		code: {
			fontFamily: fontFamily.monospace,
			fontSize: 'inherit',
			color: 'inherit',
			background: 'transparent',
			whiteSpace: 'inherit'
		},
		pre: {
			composes: '$para',
			backgroundColor: color.codeBackground,
			border: [[1, color.border, 'solid']],
			padding: [[space[1], space[2]]],
			fontSize: fontSize.small,
			borderRadius: borderRadius,
			whiteSpace: 'pre'
		},
		table: {
			composes: '$para',
			borderCollapse: 'collapse'
		},
		thead: {
			composes: '$hr'
		},
		tbody: {},
		td: {
			fontFamily: fontFamily.base,
			padding: [[space[0], space[2], space[0], 0]],
			fontSize: fontSize.base
		},
		th: {
			composes: '$td',
			fontWeight: 'bold'
		},
		tr: {}
	};
};

function Markdown(_ref3) {
	var classes = _ref3.classes,
	    text = _ref3.text,
	    inline = _ref3.inline;

	var overrides = inline ? getInlineOverrides(classes) : getBaseOverrides(classes);
	return compiler(text, { overrides: overrides });
}

Markdown.propTypes = {
	classes: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	inline: PropTypes.bool
};

export default Styled(styles)(Markdown);