var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

export var styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		text: {
			fontFamily: fontFamily.base,
			fontSize: fontSize.small,
			color: color.light
		},
		isUnderlined: {
			borderBottom: [[1, 'dotted', color.lightest]]
		}
	};
};

export function TextRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children,
	    underlined = _ref2.underlined,
	    other = _objectWithoutProperties(_ref2, ['classes', 'children', 'underlined']);

	var classNames = cx(classes.text, _defineProperty({}, classes.isUnderlined, underlined));
	return React.createElement(
		'span',
		_extends({ className: classNames }, other),
		children
	);
}

TextRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	underlined: PropTypes.bool
};

export default Styled(styles)(TextRenderer);