/**
 * @module ui/sub2.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Sub2
 * @extends Component
 */
exports.Sub2 = Component.specialize(/** @lends Sub2# */ {
    constructor: {
        value: function Sub2() {
            this.super();
        }
    },
    handleDisplayOverlay: {
        value: function (event) {
            this.templateObjects.overlay.show();
        }
    }
});
