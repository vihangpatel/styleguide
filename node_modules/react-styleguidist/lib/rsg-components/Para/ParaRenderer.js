import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

export var styles = function styles(_ref) {
	var space = _ref.space,
	    fontFamily = _ref.fontFamily,
	    color = _ref.color;
	return {
		para: {
			marginTop: 0,
			marginBottom: space[2],
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit',
			lineHeight: 1.5
		}
	};
};

export function ParaRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return React.createElement(
		'div',
		{ className: classes.para },
		children
	);
}

ParaRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired
};

export default Styled(styles)(ParaRenderer);