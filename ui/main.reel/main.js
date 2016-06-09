/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    templateDidLoad: {
        value: function () {
            this.templateObjects.substitution.switchValue = "sub2";
        }
    },
    handleButtonAction: {
        value: function (event) {
            this.application.dispatchEventNamed("displayOverlay",true, true);
        }
    }
});
