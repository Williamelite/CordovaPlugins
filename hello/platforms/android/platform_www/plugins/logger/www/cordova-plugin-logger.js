cordova.define("logger.cordova-plugin-logger", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-logger', 'coolMethod', [arg0]);
};

});
