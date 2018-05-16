cordova.define("cordova-plugin-logger.Logger", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Logger', 'coolMethod', [arg0]);
};

});
