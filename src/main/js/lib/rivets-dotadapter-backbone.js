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
     * Observes backbone collections and objects. Defaults to original rivets implementation if the target object is not
     * a backbone model/collection.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param obj
     * @param keypath
     * @param callback
     */
    adapter.observe = function (obj, keypath, callback) {
        if (obj === undefined || obj === null) {
            return;
        } else if (obj && keypath && obj[keypath] instanceof Backbone.Collection) {
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
    };

    /**
     * Stops observing backbone collections and objects. Defaults to original rivets implementation if the target object
     * is not a backbone model/collection.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param obj
     * @param keypath
     * @param callback
     */
    adapter.unobserve = function (obj, keypath, callback) {
        if (obj === undefined || obj === null) {
            return;
        } else if (obj && keypath && obj[keypath] instanceof Backbone.Collection) {
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
    };

    /**
     * Describes how rivets should retrieve properties from backbone models or how it should handle backbone
     * collections. If the object is neither of these, [] is used to access an inner property.
     *
     * Checking for undefined allows to use paths in the template which are not (yet) fully initialized.
     *
     * @param obj
     * @param keypath
     * @returns {*}
     */
    adapter.get = function (obj, keypath) {
        if (obj === null || obj === undefined) {
            return;
        } else if (obj instanceof Backbone.Model) {

            return obj.get(keypath);
        } else {
            var result = obj[keypath];
            if (result instanceof Backbone.Collection) {
                return result.models;
            } else {
                return result;
            }
        }
    };

    /**
     * Describes how rivets should set properties in backbone models or how it should handle backbone collections. If
     * the object is neither of these, [] is used to set an inner property.
     *
     * @param obj
     * @param keypath
     * @returns {*}
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
