// This code looks like Srinivasan's adapter
// I used it as a confirmation for my own code
// https://github.com/srinisoundar/backbone-rivets-adapter/
define([
    'rivets',
    'backbone'
], function (rivets, Backbone) {
    'use strict';
    // Assign some of the original functions to variables. This allows the extended functions to defer to these
    // implementations when not dealing with backbone objects.
    var adapter = rivets.adapters['.'],
        dotDefaultObserve = adapter.observe,
        dotDefaultUnobserve = adapter.unobserve;

    /**
     * The callback to apply when a field of the observed object is being changed.
     *
     * Rivets should provide that one
     *
     * @callback rivetsCallback
     * @param {*} value the updated value
     */

    /**
     * Observes backbone collections and objects. Defaults to original rivets implementation if the target object is not
     * a backbone model/collection.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param {Object} obj the object bound by this binder
     * @param {string} keypath the keypath to the property in the bound object
     * @param {rivetsCallback} callback the callback to attach to value change
     */
    adapter.observe = function (obj, keypath, callback) {
        if (obj !== undefined && obj !== null) {
            if (obj && keypath && obj[keypath] instanceof Backbone.Collection) {
                obj[keypath].on('add remove reset', function () {
                    callback(obj[keypath]);
                });
            } else if (obj instanceof Backbone.Model) {
                obj.on('change:' + keypath, function (m, v) {
                    callback(v);
                });
            } else {
                dotDefaultObserve.apply(this, arguments);
            }
        }
    };

    /**
     * Stops observing backbone collections and objects. Defaults to original rivets implementation if the target object
     * is not a backbone model/collection.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param {Object} obj the object bound by this binder
     * @param {string} keypath the keypath to the property in the bound object
     * @param {rivetsCallback} callback the callback to unattach from value change
     */
    adapter.unobserve = function (obj, keypath, callback) {
        if (obj !== undefined && obj !== null) {
            if (obj && keypath && obj[keypath] instanceof Backbone.Collection) {
                obj[keypath].off('add remove reset', function () {
                    callback(obj[keypath]);
                });
            } else if (obj instanceof Backbone.Model) {
                obj.off('change:' + keypath, function (m, v) {
                    callback(v);
                });
            } else {
                dotDefaultUnobserve.apply(this, arguments);
            }
        }
    };

    /**
     * Describes how rivets should retrieve properties from backbone models or how it should handle backbone
     * collections. If the object is neither of these, [] is used to access an inner property.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param {Object} obj the object bound by this binder
     * @param {string} keypath the keypath to the property in the bound object
     * @return {*} the field from the object at the specified keypath
     */
    adapter.get = function (obj, keypath) {
        if (obj !== null && obj !== undefined) {
            if (obj instanceof Backbone.Model) {
                return obj.get(keypath);
            }

            var result = obj[keypath];
            if (result instanceof Backbone.Collection) {
                return result.models;
            }

            return result;
        }

        return undefined;
    };

    /**
     * Describes how rivets should set properties in backbone models or how it should handle backbone collections. If
     * the object is neither of these, [] is used to set an inner property.
     *
     * @param {Object} obj the object bound by this binder
     * @param {string} keypath the keypath to the property in the bound object
     * @param {*} value the value to set at the specified keypath of the object
     */
    adapter.set = function (obj, keypath, value) {
        if (obj instanceof Backbone.Collection) {
            obj.models = value;
        } else if (obj instanceof Backbone.Model) {
            obj.set(keypath, value);
        } else {
            obj[keypath] = value;
        }
    };

    return rivets;
});
