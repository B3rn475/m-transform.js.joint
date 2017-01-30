// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = require('lodash'),
    $ = require('jquery'),
    backbone = require('backbone'),
    joint = require('joint'),
    navigator = require('navigator'),
    createResizeReactor = require('./resizereactor').ResizeReactor,
    createRotateReactor = require('./rotatereactor').RotateReactor;

function propertyChecker(property, defaultValue) {
    return function (model) {
        if (model[property] === undefined) { return defaultValue; }
        if (typeof model[property] === 'function') { return model[property](); }
        return model[property];
    };
}

function isMultiselect(e) {
    if (navigator.platform.substr(0, 3).toLowerCase() === 'mac') { return e.metaKey; }
    return e.ctrlKey;
}

var canResize = propertyChecker('resizable', false),
    canRotate = propertyChecker('rotatable', false);

function ManipulationReactor(options) {
    if (!(this instanceof ManipulationReactor)) { return new ManipulationReactor(options); }
    _.extend(this, backbone.Events);
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }
    if (!options.actions || typeof options.actions !== 'object') { throw new Error('actions option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }
    if (typeof options.gridSize !== 'number') { throw new Error('gridSize option is mandatory and has to be a number'); }
    if (options.gridSize < 0) { throw new Error('gridSize cannot be less than zero'); }

    var self = this,
        el = $($(options.el)[0]),
        paper = options.paper,
        model = options.model,
        gridSize = options.gridSize,
        actions = options.actions || [exports.edit, exports.delete],
        resize = options.resize === undefined ? true : !!options.resize,
        rotate = options.resize === undefined ? true : !!options.rotate,
        magnetize = options.magnetize === undefined ? true : !!options.magnetize,
        selectedViews = {};

    el.attr('tabindex', 1);

    function updateManipulator(element) {
        if (element.isLink()) { return; }
        var bundle = selectedViews[element.id],
            bbox,
            angle;
        if (!bundle) { return; }
        bbox = bundle.view.getBBox({useModelGeometry: true});
        bundle.el
            .css('left', bbox.x - gridSize)
            .css('top', bbox.y - gridSize)
            .css('width', bbox.width + 2 * gridSize)
            .css('height', bbox.height + 2 * gridSize);
        angle = element.get('angle');
        $(bundle.el.find('.m-transform-joint-marker-rotate'))
            .css('left', (bbox.width + 94) / 2 * (1 + Math.cos(joint.g.toRad(angle))) - 36)
            .css('top', (bbox.height + 94) / 2 * (1 + Math.sin(joint.g.toRad(angle))) - 36);
    }

    function updateManipulators() {
        _.map(selectedViews, function (bundle) {
            updateManipulator(bundle.view.model);
        });
    }

    function closeManipulator(element) {
        var bundle = selectedViews[element.id];
        if (!bundle) { return; }
        if (bundle.view.model.deactivate) { bundle.view.model.deactivate(); }
        bundle.el.remove();
        bundle.view.off('change:position change:size', updateManipulator);
        delete selectedViews[element.id];
    }

    function closeManipulators(currentid) {
        _.map(selectedViews, function (bundle, id) {
            if (id === currentid) { return; }
            closeManipulator(bundle.view.model);
        });
    }

    function toggleManipulator(cellView, evt) {
        if (cellView.model.isLink()) { return; }
        if (!isMultiselect(evt)) { closeManipulators(cellView.model.id); }
        var bundle = selectedViews[cellView.model.id],
            tab,
            context;
        if (!bundle) {
            bundle = selectedViews[cellView.model.id] = {
                el: (function () {var manipulator = $(require('./manipulator.html')); el.append(manipulator); return manipulator; }()),
                view: cellView,
                keydown: []
            };
            bundle.view.model.on('change:position change:size change:angle', updateManipulator);
            tab = $(bundle.el.find('.m-transform-joint-marker-tab'));
            context = {
                close: function () {
                    closeManipulator(bundle.view.model);
                }
            };
            if (magnetize && bundle.view.model.magnetize && bundle.view.model.demagnetize) {
                (function () {
                    var linkmarker = $(require('./link.svg')),
                        movemarker = $(require('./move.svg'));
                    linkmarker.on('click', function () {
                        var res = bundle.view.model.magnetize();
                        if (res !== undefined && !res) { linkmarker.after(movemarker); }
                    });
                    movemarker.on('click', function () {
                        bundle.view.model.magnetize();
                        movemarker.after(linkmarker);
                    });
                    tab.append(linkmarker);
                }());
            }
            _.forEach(actions, function (action) {
                if (action.checker(cellView.model)) {
                    switch (action.type) {
                    case undefined:
                    case 'button':
                        (function () {
                            function click() {
                                action.click.apply(context, bundle.view);
                            }
                            tab.append($(action.marker).clone().on('click', click));
                            if (action.keydown) {
                                bundle.keydown.push({ filter: action.keydown, action: click });
                            }
                        }());
                        break;
                    case 'event':
                        (function () {
                            var trigger = function () {
                                self.trigger('cell:' + action.event, bundle.view);
                            };
                            tab.append($(action.marker).clone().on('click', trigger));
                            if (action.keydown) {
                                bundle.keydown.push({ filter: action.keydown, action: trigger });
                            }
                        }());
                        break;
                    }
                }
            });
            if (resize && canResize(cellView.model)) {
                bundle.el.addClass('m-transform-joint-resizable');
                ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'].forEach(function (direction) {
                    bundle.el.find('.m-transform-joint-marker-' + direction).on('mousedown', function () {
                        createResizeReactor({view: bundle.view, paper: paper, model: model, el: el, direction: direction, gridSize: gridSize});
                    });
                });
            }
            if (rotate && canRotate(cellView.model)) {
                bundle.el.addClass('m-transform-joint-rotatable');
                bundle.el.find('.m-transform-joint-marker-rotate').on('mousedown', function () {
                    createRotateReactor({view: bundle.view, paper: paper, model: model, el: el, angleStep: 15});
                });
            }
            updateManipulator(cellView.model);
        }
    }

    function keydown(e) {
        switch (e.keyCode) {
        case 27:
            closeManipulators();
            break;
        }
        _.forEach(selectedViews, function (bundle) {
            if (bundle.keydown) {
                if (bundle.keydown.keyCode === e.keyCode) {
                    bundle.keydown.action();
                }
            }
        });
    }

    function mouseover() {
        el.focus();
    }

    paper.on('cell:pointerdown', toggleManipulator);
    paper.on('scale translate', updateManipulators);
    paper.on('cell:pointermove', function (cellView) { updateManipulator(cellView.model); });
    model.on('change:target', function (link) {
        var bundle = selectedViews[link.get('source').id];
        link.toFront();
        if (!bundle || !bundle.view.model.magnetize || !bundle.view.model.demagnetize) { return; }
        bundle.view.model.demagnetize();
        bundle.view.model.magnetize();
    });
    model.on('remove', function (element) {
        closeManipulator(element);
    });
    el.keydown(keydown);
    el.mouseover(mouseover);
}

exports.ManipulationReactor = ManipulationReactor;


exports.delete = {
    marker: require('./delete.svg'),
    checker: propertyChecker('deletable', true),
    type: 'botton',
    click: function (view) {
        view.model.remove();
        this.close();
    },
    keydown: { keyCode: 46 }
};
exports.edit = {
    marker: require('./edit.svg'),
    checker: propertyChecker('editable', false),
    type: 'botton',
    event: 'edit'
};
