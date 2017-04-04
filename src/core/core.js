'use strict';

module.exports = function() {
    var loggie = function() {
        var me = this;
        return me;
    };

    loggie.globalText = "Test";
    loggie.dynamicText;    // to be set via mockContext for testing purpose later

    return loggie;
};
