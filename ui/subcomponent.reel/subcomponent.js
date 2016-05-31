/**
 * @module ui/subcomponent.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Subcomponent
 * @extends Component
 */
exports.Subcomponent = Component.specialize(/** @lends Subcomponent# */ {
    enterDocument: {
        value: function (firstTime) {
            this.templateObjects.select.element.classList.add('validation-error');
        }
    }
});
