var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableOfContents from 'rsg-components/TableOfContents';
import StyleGuideRenderer from 'rsg-components/StyleGuide/StyleGuideRenderer';
import Sections from 'rsg-components/Sections';
import Welcome from 'rsg-components/Welcome';
import Error from 'rsg-components/Error';
import { HOMEPAGE } from '../../../scripts/consts';

var StyleGuide = function (_Component) {
	_inherits(StyleGuide, _Component);

	function StyleGuide() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, StyleGuide);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StyleGuide.__proto__ || Object.getPrototypeOf(StyleGuide)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			error: false,
			info: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(StyleGuide, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				codeRevision: this.props.codeRevision,
				config: this.props.config,
				slots: this.props.slots,
				isolatedComponent: this.props.isolatedComponent,
				isolatedExample: this.props.isolatedExample,
				isolatedSection: this.props.isolatedSection
			};
		}
	}, {
		key: 'componentDidCatch',
		value: function componentDidCatch(error, info) {
			this.setState({
				error: error,
				info: info
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    config = _props.config,
			    sections = _props.sections,
			    welcomeScreen = _props.welcomeScreen,
			    patterns = _props.patterns,
			    isolatedComponent = _props.isolatedComponent;


			if (this.state.error) {
				return React.createElement(Error, { error: this.state.error, info: this.state.info });
			}

			if (welcomeScreen) {
				return React.createElement(Welcome, { patterns: patterns });
			}

			return React.createElement(
				StyleGuideRenderer,
				{
					title: config.title,
					homepageUrl: HOMEPAGE,
					toc: React.createElement(TableOfContents, { sections: sections }),
					hasSidebar: config.showSidebar && !isolatedComponent
				},
				React.createElement(Sections, { sections: sections, depth: 1 })
			);
		}
	}]);

	return StyleGuide;
}(Component);

StyleGuide.propTypes = {
	codeRevision: PropTypes.number.isRequired,
	config: PropTypes.object.isRequired,
	slots: PropTypes.object.isRequired,
	sections: PropTypes.array.isRequired,
	welcomeScreen: PropTypes.bool,
	patterns: PropTypes.array,
	isolatedComponent: PropTypes.bool,
	isolatedExample: PropTypes.bool,
	isolatedSection: PropTypes.bool
};
StyleGuide.childContextTypes = {
	codeRevision: PropTypes.number.isRequired,
	config: PropTypes.object.isRequired,
	slots: PropTypes.object.isRequired,
	isolatedComponent: PropTypes.bool,
	isolatedExample: PropTypes.bool,
	isolatedSection: PropTypes.bool
};
StyleGuide.defaultProps = {
	isolatedComponent: false
};
export default StyleGuide;