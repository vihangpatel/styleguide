import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color,
	    space = _ref.space;
	return {
		root: {
			margin: [[-space[2], -space[2], -(space[2] + space[0])]],
			padding: space[2],
			lineHeight: 1.2,
			fontSize: fontSize.small,
			fontFamily: fontFamily.monospace,
			color: color.error,
			backgroundColor: color.errorBackground,
			whiteSpace: 'pre'
		}
	};
};

export function PlaygroundErrorRenderer(_ref2) {
	var classes = _ref2.classes,
	    message = _ref2.message;

	return React.createElement(
		'pre',
		{ className: classes.root },
		message
	);
}

PlaygroundErrorRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	message: PropTypes.string.isRequired
};

export default Styled(styles)(PlaygroundErrorRenderer);