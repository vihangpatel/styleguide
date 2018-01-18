var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import Argument from 'rsg-components/Argument';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize;
	return {
		root: {
			marginBottom: space[2],
			fontSize: 'inherit'
		},
		heading: {
			marginBottom: space[0],
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			fontWeight: 'normal'
		}
	};
};

export function ArgumentsRenderer(_ref2) {
	var classes = _ref2.classes,
	    args = _ref2.args,
	    heading = _ref2.heading;

	if (args.length === 0) {
		return null;
	}

	return React.createElement(
		'div',
		{ className: classes.root },
		heading && React.createElement(
			'h5',
			{ className: classes.heading },
			'Arguments'
		),
		args.map(function (arg) {
			return React.createElement(Argument, _extends({ key: arg.name }, arg));
		})
	);
}

ArgumentsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	args: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.object,
		description: PropTypes.string
	})).isRequired,
	heading: PropTypes.bool
};

export default Styled(styles)(ArgumentsRenderer);