/**
 * @namespace loggie
 */

// -- loggiejs -- //
var loggie = require('./core/core.js')();

require('./core/core.util.js')(loggie);

module.exports = loggie;
// if it's in browser environment
var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
if (isBrowser()) {
    window.loggie = loggie;
}
