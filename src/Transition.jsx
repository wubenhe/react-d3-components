let d3 = require('./D3Provider');

export let Transition = () => {
	let transition = {};

	let _attributes = {};
	let _styles = {};

	let _delay = 0;
	let _duration = 250;
	let _ease = d3.ease('linear');

	transition.delay = (delay) => {
		if (!delay) {
			return _delay;
		}

		_delay = delay;
		return transition;
	};

	transition.duration = (duration) => {
		if (!duration) {
			return _duration;
		}

		_duration = duration;
		return transition;
	};

	transition.ease = (value, args) => {
		if (!value) {
			return _ease;
		}
		//if is fn
		_ease = value;
		// else
		// d3.ease(value, arguments);
		return transition;
	};

	transition.attr = (name, end, start) => {
		_attributes[name] = {end: end, start: start};
		return transition;
	};

	// let attrTween

	transition.style = (name, value) => {
		_styles[name] = value;
		return transition;
	};

	transition.attributes = () => {
		return _attributes;
	};

	// let styleTween

	// each for events? start/stop?
	// what about enter/leave?
	return transition;
};
