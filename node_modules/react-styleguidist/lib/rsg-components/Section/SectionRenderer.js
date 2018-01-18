import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import SectionHeading from 'rsg-components/SectionHeading';

var styles = function styles(_ref) {
	var space = _ref.space;
	return {
		root: {
			marginBottom: space[4]
		}
	};
};

export function SectionRenderer(allProps) {
	var classes = allProps.classes,
	    name = allProps.name,
	    slug = allProps.slug,
	    content = allProps.content,
	    components = allProps.components,
	    sections = allProps.sections,
	    depth = allProps.depth;

	return React.createElement(
		'section',
		{ className: classes.root },
		name && React.createElement(
			SectionHeading,
			{ depth: depth, id: slug, slotName: 'sectionToolbar', slotProps: allProps },
			name
		),
		content,
		components,
		sections
	);
}

SectionRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	slug: PropTypes.string,
	content: PropTypes.node,
	components: PropTypes.node,
	sections: PropTypes.node,
	isolated: PropTypes.bool,
	depth: PropTypes.number.isRequired
};

export default Styled(styles)(SectionRenderer);