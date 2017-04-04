'use strict';

/**
 * loggie Util
 * @namespace loggie.util
 */
module.exports = function(loggie) {
    var util = loggie.util = {};

    /**
     * Return "Hello World" string
     * @return {String} "Hello World" string
     * @method returnHelloWorld
     * @memberOf loggie.util
     */
    util.returnHelloWorld = function() {
        return "Hello World";
    }

    /**
     * Return promise object with resolved result.
     * @return {Object} Promise object
     * @method  returnPromise
     * @memberOf loggie.util
     */
    util.returnPromise = function() {
    	return new Promise((resolve, reject) => {
    		return resolve("You did well");
    	});
    }

    /**
     * Return "Hay Hay" string
     * @return {String} "Hay Hay" string
     * @method  returnHayHay
     * @memberOf loggie.util
     */
    util.returnHayHay = function() {
    	return "Hay Hay Hay Hay";
    }
}
