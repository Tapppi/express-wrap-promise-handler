/**
 * Returns a wrapped version of the given express handler that returns promises.
 * The wrapper calls express' `next` callback with any errors thrown from the
 * handlers returned promise.
 *
 * @param fn - An express handler function that returns a promise
 * @returns {Function} Wrapped handler that handles errors thrown from handlers promise
 */
module.exports = function (fn) {
	return function () {
		return fn.apply(null, arguments)
			.catch(arguments[2]);
	};
};
