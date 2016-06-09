/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    handleButtonAction: {
        value: function (event) {
            this.application.dispatchEventNamed("displayOverlay",true, true);
        }
    }
});
