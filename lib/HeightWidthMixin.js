"use strict";

var HeightWidthMixin = {
	componentWillMount: function componentWillMount() {
		this._calculateInner(this.props);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this._calculateInner(nextProps);
	},

	_calculateInner: function _calculateInner(props) {
		var _props = this.props;
		var height = _props.height;
		var width = _props.width;
		var margin = _props.margin;

		this._innerHeight = height - margin.top - margin.bottom;
		this._innerWidth = width - margin.left - margin.right;
	}
};

module.exports = HeightWidthMixin;