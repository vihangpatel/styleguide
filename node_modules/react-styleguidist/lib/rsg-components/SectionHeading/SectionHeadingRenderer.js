function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'rsg-components/Styled';

export function SectionHeadingRenderer(_ref) {
	var classes = _ref.classes,
	    children = _ref.children,
	    toolbar = _ref.toolbar,
	    id = _ref.id,
	    href = _ref.href,
	    depth = _ref.depth,
	    deprecated = _ref.deprecated;

	var headingLevel = Math.min(6, depth);
	var Tag = 'h' + headingLevel;
	var headingClasses = cx(classes.heading, classes['heading' + headingLevel], _defineProperty({}, classes.isDeprecated, deprecated));
	return React.createElement(
		Tag,
		{ id: id, className: classes.root },
		React.createElement(
			'a',
			{ href: href, className: headingClasses },
			children
		),
		React.createElement(
			'div',
			{ className: classes.toolbar },
			toolbar
		)
	);
}

export var styles = function styles(_ref2) {
	var color = _ref2.color,
	    space = _ref2.space,
	    fontSize = _ref2.fontSize,
	    fontFamily = _ref2.fontFamily;
	return {
		root: {
			display: 'flex',
			marginBottom: space[1],
			alignItems: 'center'
		},
		heading: {
			color: color.base,
			fontFamily: fontFamily.base,
			fontWeight: 'normal',
			'&:hover, &:active': {
				isolate: false,
				textDecoration: 'underline'
			}
		},
		heading1: {
			fontSize: fontSize.h1
		},
		heading2: {
			fontSize: fontSize.h2
		},
		heading3: {
			fontSize: fontSize.h3
		},
		heading4: {
			fontSize: fontSize.h4
		},
		heading5: {
			fontSize: fontSize.h5
		},
		heading6: {
			fontSize: fontSize.h6
		},
		isDeprecated: {
			textDecoration: 'line-through',
			color: color.light
		},
		toolbar: {
			marginLeft: 'auto'
		}
	};
};

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
	toolbar: PropTypes.node,
	id: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	depth: PropTypes.number.isRequired,
	deprecated: PropTypes.bool
};

export default Styled(styles)(SectionHeadingRenderer);