cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-logger.Logger",
    "file": "plugins/cordova-plugin-logger/www/Logger.js",
    "pluginId": "cordova-plugin-logger",
    "clobbers": [
      "cordova.plugins.Logger"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-logger": "1.0.0"
};
// BOTTOM OF METADATA
});