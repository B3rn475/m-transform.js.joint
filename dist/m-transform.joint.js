(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true*/
"use strict";

var mtjoint = require('./'),
    window = (typeof window !== "undefined" ? window['window'] : typeof global !== "undefined" ? global['window'] : null);

window.mtjoint = mtjoint;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./":2}],2:[function(require,module,exports){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true*/
"use strict";

var Board = require('./lib/board').Board,
    ElementsMenu = require('./lib/elementsmenu').ElementsMenu,
    ModalEdit = require('./lib/modaledit').ModalEdit,
    utils = require('./lib/utils');

// Constructors
exports.Board = Board;
exports.ElementsMenu = ElementsMenu;
exports.ModalEdit = ModalEdit;

// Maker Functions
exports.createBoard = Board;
exports.createElementsMenu = ElementsMenu;
exports.createModalEdit = ModalEdit;

// utils
exports.utils = utils;

},{"./lib/board":6,"./lib/elementsmenu":27,"./lib/modaledit":28,"./lib/utils":30}],3:[function(require,module,exports){
module.exports = "<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   version=\"1.1\"\r\n   id=\"Capa_1\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"44.238px\"\r\n   height=\"44.238px\"\r\n   viewBox=\"0 0 44.238 44.238\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"delete.svg\"\r\n   style=\"enable-background:new 0 0 44.238 44.238;\"><metadata\r\n     id=\"metadata51\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs49\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1600\"\r\n     inkscape:window-height=\"837\"\r\n     id=\"namedview47\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"5.3347802\"\r\n     inkscape:cx=\"68.874387\"\r\n     inkscape:cy=\"22.118999\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"Capa_1\"\r\n     showguides=\"true\"\r\n     inkscape:guide-bbox=\"true\" /><g\r\n     id=\"g4230\"><circle\r\n       r=\"21\"\r\n       cy=\"22.237999\"\r\n       cx=\"22\"\r\n       id=\"path4208\"\r\n       style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><g\r\n       style=\"fill:#000000;fill-opacity:1\"\r\n       id=\"g7\"><path\r\n         inkscape:connector-curvature=\"0\"\r\n         style=\"fill:#000000;fill-opacity:1\"\r\n         id=\"path9\"\r\n         d=\"m 15.533,29.455 c -0.192,0 -0.384,-0.073 -0.53,-0.22 -0.293,-0.293 -0.293,-0.769 0,-1.062 L 28.174,15.002 c 0.293,-0.293 0.768,-0.293 1.061,0 0.293,0.293 0.293,0.768 0,1.061 L 16.063,29.235 c -0.146,0.147 -0.338,0.22 -0.53,0.22 z\" /></g><g\r\n       style=\"fill:#000000;fill-opacity:1\"\r\n       id=\"g11\"><path\r\n         inkscape:connector-curvature=\"0\"\r\n         style=\"fill:#000000;fill-opacity:1\"\r\n         id=\"path13\"\r\n         d=\"m 28.704,29.455 c -0.192,0 -0.384,-0.073 -0.53,-0.22 L 15.002,16.064 c -0.293,-0.293 -0.293,-0.768 0,-1.061 0.293,-0.293 0.768,-0.293 1.061,0 l 13.171,13.171 c 0.293,0.293 0.293,0.769 0,1.062 -0.146,0.146 -0.338,0.219 -0.53,0.219 z\" /></g><path\r\n       inkscape:connector-curvature=\"0\"\r\n       style=\"fill:#ff0000;fill-opacity:1\"\r\n       id=\"path15\"\r\n       d=\"M 22.119,44.237 C 9.922,44.237 0,34.315 0,22.12 0,9.924 9.922,0.001 22.119,0.001 c 12.197,0 22.119,9.922 22.119,22.119 0,12.197 -9.924,22.117 -22.119,22.117 z m 0,-42.736 C 10.75,1.501 1.5,10.751 1.5,22.12 c 0,11.369 9.25,20.619 20.619,20.619 11.369,0 20.619,-9.25 20.619,-20.619 0,-11.369 -9.25,-20.619 -20.619,-20.619 z\" /></g><g\r\n     id=\"g17\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /></svg>\r\n";

},{}],4:[function(require,module,exports){
module.exports = "<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   class=\"detail convertSvgInline replaced-svg\"\r\n   id=\"imgView\"\r\n   fill=\"#000000\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"256\"\r\n   height=\"256\"\r\n   version=\"1.1\"\r\n   data-kw=\"configuration12\"\r\n   data-id=\"51874\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"edit.svg\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1920\"\r\n     inkscape:window-height=\"1017\"\r\n     id=\"namedview49\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"2.6074563\"\r\n     inkscape:cx=\"221.70951\"\r\n     inkscape:cy=\"106.74523\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"imgView\" /><circle\r\n     style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03455937;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:0;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;enable-background:accumulate\"\r\n     id=\"path4181\"\r\n     cx=\"22.118\"\r\n     cy=\"22.118\"\r\n     r=\"21.254015\" /><g\r\n     id=\"g3\"><g\r\n       id=\"g5\"><path\r\n         fill=\"\"\r\n         d=\"M 22.118 44.236 C 9.922 44.236 0 34.314 0 22.119 C 0 9.923 9.922 0 22.118 0 s 22.118 9.923 22.118 22.119 C 44.236 34.314 34.314 44.236 22.118 44.236 Z M 22.118 1.5 C 10.75 1.5 1.5 10.75 1.5 22.119 s 9.25 20.617 20.618 20.617 s 20.618 -9.248 20.618 -20.617 S 33.486 1.5 22.118 1.5 Z\"\r\n         id=\"path7\" /><g\r\n         id=\"g9\"><circle\r\n           fill=\"\"\r\n           cx=\"22.118\"\r\n           cy=\"22.438\"\r\n           r=\"1.41\"\r\n           id=\"circle11\" /><path\r\n           fill=\"\"\r\n           d=\"M 22.118 24.098 c -0.916 0 -1.66 -0.744 -1.66 -1.66 c 0 -0.915 0.745 -1.66 1.66 -1.66 s 1.659 0.745 1.659 1.66 C 23.777 23.354 23.034 24.098 22.118 24.098 Z M 22.118 21.277 c -0.64 0 -1.16 0.521 -1.16 1.16 s 0.521 1.161 1.16 1.161 c 0.639 0 1.159 -0.521 1.159 -1.161 S 22.758 21.277 22.118 21.277 Z\"\r\n           id=\"path13\" /></g><g\r\n         id=\"g15\"><path\r\n           fill=\"\"\r\n           d=\"M 22.118 32.42 c -0.6 0 -1.208 -0.061 -1.86 -0.182 c -0.446 -0.062 -0.83 -0.444 -0.898 -0.926 l -0.357 -1.838 c -0.461 -0.207 -0.896 -0.459 -1.287 -0.744 l -1.798 0.623 c -0.087 0.041 -0.233 0.07 -0.381 0.07 c -0.317 0 -0.622 -0.146 -0.837 -0.398 c -0.836 -0.952 -1.482 -2.074 -1.862 -3.233 c -0.183 -0.418 -0.023 -0.974 0.403 -1.257 l 1.358 -1.186 c -0.023 -0.23 -0.035 -0.479 -0.035 -0.752 c 0 -0.271 0.011 -0.52 0.035 -0.75 l -1.435 -1.245 c -0.35 -0.226 -0.51 -0.78 -0.303 -1.262 c 0.356 -1.098 1.003 -2.219 1.847 -3.181 c 0.299 -0.355 0.822 -0.488 1.261 -0.298 l 1.746 0.603 c 0.39 -0.284 0.825 -0.537 1.287 -0.745 l 0.364 -1.874 c 0.063 -0.447 0.449 -0.83 0.932 -0.894 c 1.125 -0.234 2.465 -0.243 3.693 0.009 c 0.432 0.055 0.817 0.438 0.886 0.921 l 0.357 1.838 c 0.447 0.204 0.875 0.453 1.283 0.746 l 1.803 -0.624 c 0.087 -0.04 0.232 -0.07 0.381 -0.07 c 0.318 0 0.624 0.146 0.838 0.401 c 0.834 0.949 1.48 2.07 1.861 3.23 c 0.183 0.419 0.022 0.974 -0.403 1.258 l -1.358 1.185 c 0.022 0.232 0.034 0.48 0.034 0.752 s -0.011 0.52 -0.034 0.75 l 1.434 1.245 c 0.351 0.226 0.511 0.78 0.304 1.261 c -0.356 1.098 -1.002 2.22 -1.847 3.182 c -0.303 0.357 -0.825 0.486 -1.262 0.299 l -1.75 -0.604 c -0.406 0.293 -0.836 0.541 -1.281 0.746 l -0.364 1.873 c -0.062 0.444 -0.446 0.827 -0.927 0.896 C 23.327 32.359 22.718 32.42 22.118 32.42 Z M 20.789 30.809 c 0.96 0.152 1.738 0.146 2.66 0 l 0.39 -2.012 c 0.05 -0.254 0.226 -0.464 0.466 -0.557 c 0.57 -0.221 1.111 -0.535 1.607 -0.936 c 0.201 -0.162 0.472 -0.207 0.716 -0.125 l 1.938 0.672 c 0.58 -0.705 1.033 -1.49 1.33 -2.301 l -1.549 -1.337 c -0.201 -0.174 -0.295 -0.442 -0.246 -0.703 c 0.047 -0.259 0.07 -0.558 0.07 -0.914 s -0.023 -0.654 -0.07 -0.913 c -0.05 -0.261 0.045 -0.529 0.246 -0.703 l 1.547 -1.342 c -0.313 -0.838 -0.764 -1.611 -1.33 -2.297 l -1.938 0.673 c -0.244 0.083 -0.516 0.036 -0.717 -0.125 c -0.495 -0.4 -1.035 -0.715 -1.605 -0.936 c -0.242 -0.093 -0.418 -0.303 -0.467 -0.557 l -0.391 -2.014 c -0.926 -0.156 -1.792 -0.148 -2.659 0 l -0.39 2.014 c -0.049 0.254 -0.225 0.464 -0.466 0.557 c -0.598 0.231 -1.149 0.552 -1.595 0.926 c -0.202 0.17 -0.478 0.22 -0.728 0.135 l -1.938 -0.672 c -0.581 0.707 -1.034 1.491 -1.33 2.301 l 1.549 1.337 c 0.201 0.175 0.294 0.442 0.246 0.705 c -0.048 0.255 -0.071 0.553 -0.071 0.911 s 0.023 0.657 0.071 0.912 c 0.049 0.263 -0.044 0.53 -0.246 0.705 l -1.547 1.343 c 0.313 0.836 0.763 1.609 1.329 2.297 l 1.938 -0.674 c 0.251 -0.084 0.526 -0.033 0.728 0.135 c 0.446 0.375 0.998 0.693 1.595 0.926 c 0.241 0.093 0.417 0.303 0.466 0.557 L 20.789 30.809 Z\"\r\n           id=\"path17\" /></g></g></g><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /></svg>\r\n";

},{}],5:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    createResizeReactor = require('./resizereactor').ResizeReactor;

function isContainerOf(element) {
    var containers = element.containers || [];
    return function (element) {
        return -1 !== containers.indexOf(element.get('type'));
    };
}

function isEmbeddable(element) {
    function fullyContained(parent) {
        var bbox = element.getBBox({useModelGeometry: true}),
            padding = parent.padding,
            pbbox = parent.getBBox({useModelGeometry: true}),
            pinternal = joint.g.rect(
                pbbox.x + padding.left,
                pbbox.y + padding.top,
                pbbox.width - padding.left - padding.right,
                pbbox.height - padding.top - padding.bottom
            );
        return parent.id !== element.id && pinternal.containsRect(bbox);
    }

    if (element.fullyContained) {
        return fullyContained;
    }
    return function () { return true; };
}

function EmbeddingReactor(options) {
    if (!(this instanceof EmbeddingReactor)) { return new EmbeddingReactor(options); }
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }

    var paper = options.paper,
        model = options.model,
        startPosition;

    paper.on('cell:pointerdown', function (cellView, evt, x, y) {
        _.noop(evt, x, y);
        var element = cellView.model;

        if (element.isLink()) { return; }

        startPosition = element.get('position');

        element.toFront({deep: true});

        model.startBatch('to-front');
        _.invoke(model.getLinks(), 'toFront');
        model.stopBatch('to-front');
    });

    function getParent(element, x, y) {
        _.noop(x, y);
        var elementsBelow = model.findModelsInArea(element.getBBox({useModelGeometry: true}));

        if (elementsBelow.length) {
            return _.chain(elementsBelow)
                .filter(isContainerOf(element))
                .filter(isEmbeddable(element))
                .sortBy(_.method('get', 'z'))
                .last()
                .value();
        }
    }

    function moveTo(element, x, y) {
        var position = element.position();
        element.translate(x - position.x, y - position.y);
    }

    paper.on('cell:pointerup', function (cellView, evt, x, y) {
        _.noop(evt, x, y);
        var element = cellView.model,
            newPosition = element.get('position'),
            oldparent,
            newparent;

        if (element.isLink()) { return; }

        if (newPosition.x === startPosition.x && newPosition.y === startPosition.y) { return; }

        function abort() {
            moveTo(element, startPosition.x, startPosition.y);
        }

        function reparent() {
            _.each(
                model.getConnectedLinks(element, {deep: true}),
                function (link) { link.reparent(); }
            );
        }

        newparent = getParent(element, x, y);
        if (!newparent && element.requireEmbedding) {
            abort();
            return;
        }

        oldparent = model.getCell(element.get('parent'));

        if (newparent) {
            if (oldparent) {
                if (oldparent.id !== newparent.id && element.get('fixedParent')) {
                    abort();
                } else {
                    oldparent.unembed(element, {reparenting: true});
                    newparent.embed(element);
                    reparent();
                }
            } else {
                newparent.embed(element);
                reparent();
            }
        } else {
            if (oldparent) {
                if (element.get('fixedParent')) {
                    abort();
                } else {
                    oldparent.unembed(element);
                    reparent();
                }
            }
        }
    });

    model.on('add', function (cell) {
        if (cell.isLink()) { return cell.get('parent') || cell.reparent(); }
        var element = cell,
            position,
            parent;
        if (element.get('parent')) {
            parent = model.getCell(element.get('parent'));
            parent.unembed(element, {reparenting: true});
            parent.embed(element);
            return;
        }
        position = element.get('position');
        parent = getParent(element, position.x, position.y);
        if (parent) {
            parent.embed(element);
        } else {
            if (element.requireEmbedding) {
                _.defer(function () { element.remove(); });
            } else {
                element.set('parent');
            }
        }
    });
}

exports.EmbeddingReactor = EmbeddingReactor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./resizereactor":23}],6:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    backbone = (typeof window !== "undefined" ? window['Backbone'] : typeof global !== "undefined" ? global['Backbone'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    window = (typeof window !== "undefined" ? window['window'] : typeof global !== "undefined" ? global['window'] : null),
    createMap = require('./map').Map,
    createItemDragger = require('./itemdragger').ItemDragger,
    createPanReactor = require('./panreactor').PanReactor,
    createZoomReactor = require('./zoomreactor').ZoomReactor,
    createManipulationReactor = require('./manipulationreactor').ManipulationReactor,
    createEmbeddingReactor = require('./embeddingreactor').EmbeddingReactor,
    linkConnectionPoint = require('./linkconnectionpoint').linkConnectionPoint,
    validateConnection = require('./validateconnection').validateConnection;

function Board(options) {
    if (!(this instanceof Board)) { return new Board(options); }
    _.extend(this, backbone.Events);
    options = options || {};

    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }
    if (options.actions && !Array.isArray(options.actions)) { throw new Error('actions option should be an Array'); }
    if (!options.defaultLink || typeof options.defaultLink !== 'function') { throw new Error('defaultLink option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }

    var self = this,
        el = $($(options.el).addClass('m-transform-joint-paper')[0]),
        model = options.model,
        gridSize = 10,
        defaultLink = options.defaultLink,
        paper = new joint.dia.Paper({
            el: el,
            width: el.width(),
            height: el.height(),
            model: model,
            gridSize: gridSize,
            defaultLink: defaultLink,
            multiLinks: false,
            linkConnectionPoint: linkConnectionPoint,
            linkPinning: false,
            validateConnection: validateConnection,
            interactive: !options.readonly
        }),
        map = createMap({
            paper: paper,
            el: el,
            model: model,
            linkConnectionPoint: linkConnectionPoint
        }),
        zoomReactor = createZoomReactor({
            paper: paper,
            el: el,
            model: model,
            minScale: options.minScale || 0.01,
            maxScale: options.maxScale || 2
        }),
        manipulationReactor = createManipulationReactor({
            paper: paper,
            el: el,
            model: model,
            gridSize: gridSize,
            actions: options.actions,
            resize: options.resize,
            rotate: options.rotate,
            magnetize: options.magnetize
        }),
        embeddingReactor = createEmbeddingReactor({
            paper: paper,
            model: model
        });

    _.noop(embeddingReactor);

    manipulationReactor.on('all', this.trigger, this);

    paper.on('all', this.trigger, this);

    paper.on('blank:pointerdown', function (evt, x, y) {
        _.noop(evt);
        createPanReactor({paper: paper, el: el, x: x, y: y});
    });

    function updateViewport() {
        var left = el.offset().left,
            top = el.offset().top,
            width = el.width(),
            height = el.height(),
            topLeft = joint.g.point(left, top),
            bottomRight = joint.g.point(left + width, top + height),
            min = paper.clientToLocalPoint(topLeft),
            max = paper.clientToLocalPoint(bottomRight);
        map.setViewport({x: min.x, y: min.y, width: max.x - min.x, height: max.y - min.y});
    }

    $(window).resize(function () {
        paper.setDimensions(el.width(), el.height());
        updateViewport();
    });

    paper.on('translate', updateViewport);
    paper.on('scale', updateViewport);
    model.once('add', updateViewport);

    self.zoomE = function () {
        zoomReactor.zoomE();
    };

    self.paper = function () {
        return paper;
    };

    self.download = function () {
        map.download();
    };

    self.createItemDragger = function (options) {
        options = options || {};
        return createItemDragger({
            paper: paper,
            el: options.el,
            model: model,
            gridSize: gridSize,
            createElements: options.createElements,
            width: options.width,
            minHeight: options.minHeight,
            padding: options.padding,
            linkConnectionPoint: linkConnectionPoint
        });
    };
}

exports.Board = Board;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./embeddingreactor":5,"./itemdragger":7,"./linkconnectionpoint":11,"./manipulationreactor":12,"./map":14,"./panreactor":22,"./validateconnection":25,"./zoomreactor":26}],7:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    backbone = (typeof window !== "undefined" ? window['Backbone'] : typeof global !== "undefined" ? global['Backbone'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    document = (typeof window !== "undefined" ? window['document'] : typeof global !== "undefined" ? global['document'] : null);

function clone(model, items) {
    var mapping = model.cloneCells(items);
    return _.map(items, function (i) { return mapping[i.id]; });
}

function wrapItems(items, size, minHeight, padding) {
    var bbox = joint.dia.Graph.prototype.getBBox(items, {useModelGeometry: true}),
        maxsize = Math.max(bbox.width, bbox.height) + padding * 2,
        scale = Math.max(1, maxsize / size),
        actualwidth = size * scale,
        actualheight = Math.max(bbox.height + padding * 2, minHeight * scale),
        left = (actualwidth - bbox.width) / 2,
        top = (actualheight - bbox.height) / 2,
        containerItem = new joint.shapes.basic.Rect({
            position: { x: bbox.x - left, y: bbox.y - top},
            size: { width: actualwidth, height: actualheight},
            attrs: { rect: { fill: 'transparent', stroke: 'transparent' } }
        });

    return containerItem;
}

function removeHandlers(paper, items) {
    _.each(items, function (item) {
        paper.findViewByModel(item).$el.css('pointer-events', 'none');
    });
}

function ItemDragger(options) {
    if (!(this instanceof ItemDragger)) { return new ItemDragger(options); }
    _.extend(this, backbone.Events);

    options = options || {};

    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }
    if (!options.paper || typeof options.paper !== 'object') { throw new Error('paper option is mandatory'); }
    if (!options.createElements || typeof options.createElements !== 'function') { throw new Error('createElements option is mandatory'); }
    if (!options.linkConnectionPoint || typeof options.linkConnectionPoint !== 'function') { throw new Error('linkConnectionPoint option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el options'); }
    if (typeof options.gridSize !== 'number') { throw new Error('gridSize option is mandatory and has to be a number'); }
    if (options.gridSize < 0) { throw new Error('gridSize cannot be less than zero'); }
    if (typeof options.padding !== 'number') { throw new Error('padding option is mandatory and has to be a number'); }
    if (options.padding < 0) { throw new Error('padding cannot be less than zero'); }
    if (typeof options.width !== 'number') { throw new Error('width option is mandatory and has to be a number'); }
    if (options.width < 2 * options.padding) { throw new Error('width cannot be less than zero (or 2 time padding)'); }
    if (options.minHeight < 2 * options.padding) { throw new Error('minHeight cannot be less than zero (or 2 time padding)'); }

    var self = this,
        gridSize = options.gridSize,
        createElements = options.createElements,
        linkConnectionPoint = options.linkConnectionPoint,
        el = $($(options.el)[0]),
        paper = options.paper,
        model = options.model,
        padding = options.padding,
        minHeight = options.minHeight,
        paperWidth = options.width - padding * 2,
        overlayitems = createElements(),
        mainitem = wrapItems(overlayitems, paperWidth, minHeight, gridSize),
        mainposition = mainitem.position(),
        size = mainitem.get('size'),
        preview = (function () { var container = $(require('./itemdragger.html')).css('padding', padding); $(document.body).append(container); return container; }()),
        baseScale = Math.min(1, paperWidth / size.width),
        paperHeight = size.height * baseScale,
        overlaymodel = new joint.dia.Graph(),
        overlaypaper = new joint.dia.Paper({
            el: preview,
            width: paperWidth,
            height: paperHeight,
            model: overlaymodel,
            linkConnectionPoint: linkConnectionPoint,
            gridSize: gridSize
        });

    overlaypaper.scale(baseScale, baseScale);
    overlaymodel.addCell(mainitem);
    overlaymodel.addCells(overlayitems);
    //for rendering
    el.append(preview);
    //remove handlers
    removeHandlers(overlaypaper, overlayitems);
    _.each(overlayitems, function (item) {
        if (item.get('parent')) { return; }
        mainitem.embed(item);
    });
    mainitem.translate(-mainposition.x, -mainposition.y);

    overlaypaper.on('cell:pointerdown', function (cellView, e, x, y) {
        _.noop(cellView);
        var overlay = $(require('./overlay.html')),
            container = $(paper.el),
            spacer = $('<div></div>').css('height', preview.height() + 2 * padding),
            left = container.offset().left,
            top = container.offset().top,
            width = container.width(),
            height = container.height(),
            topLeft = joint.g.point(left, top),
            bottomRight = joint.g.point(left + width, top + height),
            current = joint.g.point(e.clientX, e.clientY),
            minLocal = paper.clientToLocalPoint(topLeft),
            maxLocal = paper.clientToLocalPoint(bottomRight),
            startPoint = paper.clientToLocalPoint(current),
            scale = joint.g.point(width / (maxLocal.x - minLocal.x), height / (maxLocal.y - minLocal.y)),
            startPosition = joint.g.point(joint.g.snapToGrid(startPoint.x - x, gridSize), joint.g.snapToGrid(startPoint.y - y, gridSize));

        container.append(overlay);
        overlay.append(preview);
        el.append(spacer);
        preview.css('padding', 0);

        overlaypaper.setDimensions(width, height);
        overlaypaper.scale(scale.x, scale.y);
        overlaypaper.setOrigin(-minLocal.x * scale.x, -minLocal.y * scale.y);
        mainitem.translate(startPosition.x, startPosition.y);

        overlaypaper.once('cell:pointermove', function () {
            mainitem.translate(-startPosition.x, -startPosition.y);
        });

        overlaypaper.on('cell:pointerup', function pointerup() {
            var position = mainitem.position(),
                mainid = mainitem.id,
                items,
                topitems,
                overlaytopitems = _.filter(overlayitems, function (i) { return i.get('parent') === mainid; });
            _.each(overlaytopitems, function (item) { mainitem.unembed(item); });
            items = clone(overlaymodel, overlayitems);
            topitems = _.filter(items, function (i) { return !i.get('parent'); });
            model.addCells(items);
            _.each(overlaytopitems, function (item) { mainitem.embed(item); });
            _.each(topitems, function (item) {
                item.toFront({deep: true});
            });
            spacer.remove();
            el.append(preview);
            overlay.remove();
            preview.css('padding', padding);

            mainitem.translate(-position.x, -position.y);
            overlaypaper.setDimensions(paperWidth, paperHeight);
            overlaypaper.scale(baseScale, baseScale);
            overlaypaper.setOrigin(0, 0);

            overlaypaper.off('cell:pointerup', pointerup);
            self.trigger('drag:end');
        });

        self.trigger('drag:start');
    });
}

ItemDragger.prototype = Object.create(ItemDragger.prototype);

exports.ItemDragger = ItemDragger;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./itemdragger.html":8,"./overlay.html":9}],8:[function(require,module,exports){
module.exports = "<div style=\"width: 100%\"></div>\r\n";

},{}],9:[function(require,module,exports){
module.exports = "<div style=\"position: absolute; left:0; right:0; top: 0; bottom: 0; z-index: 100000;\"></div>\r\n";

},{}],10:[function(require,module,exports){
module.exports = "<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xml:space=\"preserve\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   height=\"44.236\"\r\n   width=\"44.236\"\r\n   y=\"0px\"\r\n   x=\"0px\"\r\n   id=\"Capa_1\"\r\n   version=\"1.1\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><circle\r\n     r=\"22.118\"\r\n     cy=\"22.118\"\r\n     cx=\"22.118\"\r\n     id=\"path4181\"\r\n     style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><path\r\n     id=\"path7\"\r\n     d=\"M 22.118,44.236 C 9.922,44.236 0,34.314 0,22.119 0,9.923 9.922,0 22.118,0 c 12.196,0 22.118,9.923 22.118,22.119 0,12.195 -9.922,22.117 -22.118,22.117 z m 0,-42.736 C 10.75,1.5 1.5,10.75 1.5,22.119 c 0,11.369 9.25,20.617 20.618,20.617 11.368,0 20.618,-9.248 20.618,-20.617 C 42.736,10.75 33.486,1.5 22.118,1.5 Z\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /><g\r\n     id=\"g3\"\r\n     transform=\"matrix(0.07890863,-0.07890863,0.07890863,0.07890863,0.90476107,22.118124)\"><path\r\n       id=\"path5\"\r\n       d=\"m 265.171,125.577 -80,-80 c -4.881,-4.881 -12.797,-4.881 -17.678,0 -4.882,4.882 -4.882,12.796 0,17.678 l 58.661,58.661 -213.654,0 c -6.903,0 -12.5,5.597 -12.5,12.5 0,6.902 5.597,12.5 12.5,12.5 l 213.654,0 -58.659,58.661 c -4.882,4.882 -4.882,12.796 0,17.678 2.44,2.439 5.64,3.661 8.839,3.661 3.199,0 6.398,-1.222 8.839,-3.661 l 79.998,-80 c 4.882,-4.882 4.882,-12.796 0,-17.678 z\" /></g></svg>\r\n";

},{}],11:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

var allBorders = {top: true, left: true, bottom: true, right: true};

function fixBorders(borders) {
    if (!borders) { return allBorders; }
    if (borders.top || borders.left || borders.bottom || borders.right) { return borders; }
    return allBorders;
}

function nearestPointOnBorder(me, other, borders) {
    borders = fixBorders(borders);
    var left =   borders.left   ? Math.abs(me.origin().x - other.origin().x) : Infinity,
        top =    borders.top    ? Math.abs(me.origin().y - other.origin().y) : Infinity,
        right =  borders.right  ? Math.abs(me.corner().x - other.corner().x) : Infinity,
        bottom = borders.bottom ? Math.abs(me.corner().y - other.corner().y) : Infinity,
        min = Math.min(left, top, right, bottom),
        center = me.containsRect(other) ? other.center() : me.center();
    if (min === top) {    return joint.g.point(center.x,      me.origin().y); }
    if (min === left) {   return joint.g.point(me.origin().x, center.y); }
    if (min === bottom) { return joint.g.point(center.x,      me.corner().y); }
    return joint.g.point(me.corner().x, center.y);
}

function perpendicular(me, other) {
    if (me.intersect(other)) { return false; }
    var minX = Math.max(me.origin().x, other.origin().x),
        maxX = Math.min(me.corner().x, other.corner().x),
        minY = Math.max(me.origin().y, other.origin().y),
        maxY = Math.min(me.corner().y, other.corner().y);
    if (minX <= maxX) {
        return me.pointNearestToPoint(joint.g.point((minX + maxX) / 2, other.center().y));
    }
    if (minY <= maxY) {
        return me.pointNearestToPoint(joint.g.point(other.center().x, (minY + maxY) / 2));
    }
    return false;
}

function fixPointByAngle(bbox, angle, point) {
    if (!point) { return; }
    angle = joint.g.normalizeAngle(angle);
    if (angle % 90 === 0) { return point; }
    var rbbox = bbox.bbox(angle),
        center = bbox.center(),
        rorigin = bbox.origin().rotate(center, angle),
        rtopRight = bbox.topRight().rotate(center, angle),
        rcorner = bbox.corner().rotate(center, angle),
        rbottomLeft = bbox.bottomLeft().rotate(center, angle),
        leftLine = joint.g.line(rorigin, rbottomLeft),
        topLine = joint.g.line(rtopRight, rorigin),
        bottomtLine = joint.g.line(rcorner, rbottomLeft),
        rightLine = joint.g.line(rtopRight, rcorner),
        intersectionLine;
    switch (rbbox.sideNearestToPoint(point)) {
    case "top":
        intersectionLine = joint.g.line(point, joint.g.point(point.x, rbbox.corner().y));
        break;
    case "left":
        intersectionLine = joint.g.line(point, joint.g.point(rbbox.origin().x, point.y));
        break;
    case "right":
        intersectionLine = joint.g.line(point, joint.g.point(rbbox.corner().x, point.y));
        break;
    case "bottom":
        intersectionLine = joint.g.line(point, joint.g.point(point.x, rbbox.origin().y));
        break;
    }
    return _.chain([leftLine, topLine, bottomtLine, rightLine])
        .map(_.bind(intersectionLine.intersection, intersectionLine))
        .reduce(function (previousValue, currentValue) {
            if (!currentValue) { return previousValue; }
            if (!previousValue) { return currentValue; }
            if (point.distance(previousValue) > point.distance(currentValue)) { return currentValue; }
            return previousValue;
        }).value();
}

function linkConnectionPoint(linkView, view, magnet, reference) {
    var element = view.model,
        dTargetBorders,
        dTargetAngle = 0,
        dTargetBBox = (function () {
            var link = linkView.model,
                other,
                vertices = link.get('vertices'),
                source = link.get('source').id,
                target = link.get('target').id;
            if (source === element.id) {
                if (vertices && vertices.length > 0) {
                    return joint.g.rect(vertices[0].x, vertices[0].y, 0, 0);
                }
                if (target) {
                    other = link.getTargetElement();
                    dTargetAngle = other.get('angle');
                    dTargetBorders = other.get('borders');
                    return other.getBBox({useModelGeometry: true});
                }
            } else {
                if (vertices && vertices.length > 0) {
                    return joint.g.rect(vertices[vertices.length - 1].x, vertices[vertices.length - 1].y, 0, 0);
                }
                if (source) {
                    other = link.getSourceElement();
                    dTargetAngle = other.get('angle');
                    dTargetBorders = other.get('borders');
                    return other.getBBox({useModelGeometry: true});
                }
            }
            return joint.g.rect(reference.x, reference.y, 0, 0);
        }());
    function defaultConnectionPoint(bbox, targetBBox, angle, targetAngle) {
        targetBBox = targetBBox || dTargetBBox;
        targetAngle = targetAngle || dTargetAngle;
        angle = angle || element.get('angle');
        bbox = bbox || element.getBBox({useModelGeometry: true});
        var rbbox = bbox.bbox(angle),
            rTargetBBox = targetBBox;
        if (rbbox.containsRect(rTargetBBox)) {
            return fixPointByAngle(bbox, angle, nearestPointOnBorder(rbbox, rTargetBBox, dTargetBorders));
        }
        if (rTargetBBox.containsRect(rbbox)) {
            return fixPointByAngle(bbox, angle, nearestPointOnBorder(rbbox, rTargetBBox, element.get('borders')));
        }
        return fixPointByAngle(bbox, angle, perpendicular(rbbox, rTargetBBox)) ||
                bbox.intersectionWithLineFromCenterToPoint(targetBBox.center(), angle) ||
                fixPointByAngle(bbox, angle, rbbox.pointNearestToPoint(targetBBox.center()));
    }
    if (view.model.linkConnectionPoint) {
        return view.model.linkConnectionPoint(linkView, view, magnet, reference, dTargetBBox, dTargetAngle, defaultConnectionPoint);
    }
    return defaultConnectionPoint();
}

exports.linkConnectionPoint = linkConnectionPoint;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    backbone = (typeof window !== "undefined" ? window['Backbone'] : typeof global !== "undefined" ? global['Backbone'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    navigator = (typeof window !== "undefined" ? window['navigator'] : typeof global !== "undefined" ? global['navigator'] : null),
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
    if (options.actions && !Array.isArray(options.actions)) { throw new Error('actions option should be an array'); }
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
                    var linkmarker = $(_.first($(require('./link.svg')))),
                        movemarker = $(_.first($(require('./move.svg'))));
                    linkmarker.on('click', function () {
                        var res = bundle.view.model.magnetize();
                        if (res === undefined || res) {
                            linkmarker.after(movemarker);
                            linkmarker.detach();
                        }
                    });
                    movemarker.on('click', function () {
                        bundle.view.model.demagnetize();
                        movemarker.after(linkmarker);
                        movemarker.detach();
                    });
                    bundle.magnetizeCycle = function () {
                        if (movemarker.parent().length) {
                            movemarker.click();
                            linkmarker.click();
                        }
                    };
                    tab.append(linkmarker);
                }());
            }
            _.forEach(actions, function (action) {
                if (action.checker(cellView.model)) {
                    if (action.click) {
                        (function () {
                            function click() {
                                action.click.call(context, bundle.view);
                            }
                            tab.append($(action.marker).clone().on('click', click));
                            if (action.keydown) {
                                bundle.keydown.push({ filter: action.keydown, action: click });
                            }
                        }());
                    }
                    if (action.event) {
                        (function () {
                            var trigger = function () {
                                self.trigger('cell:' + action.event, bundle.view);
                            };
                            tab.append($(action.marker).clone().on('click', trigger));
                            if (action.keydown) {
                                bundle.keydown.push({ filter: action.keydown, action: trigger });
                            }
                        }());
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
            _.forEach(bundle.keydown || [], function (keydown) {
                if (keydown.filter.keyCode === e.keyCode) {
                    keydown.action();
                }
            });
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
        bundle.magnetizeCycle();
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
    click: function (view) {
        view.model.remove();
        this.close();
    },
    keydown: { keyCode: 46 }
};
exports.edit = {
    marker: require('./edit.svg'),
    checker: propertyChecker('editable', false),
    event: 'edit'
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./delete.svg":3,"./edit.svg":4,"./link.svg":10,"./manipulator.html":13,"./move.svg":21,"./resizereactor":23,"./rotatereactor":24}],13:[function(require,module,exports){
module.exports = "<div class=\"m-transform-joint-manipulator\">\r\n    <div class=\"m-transform-joint-marker-tab\"></div>\r\n    <div class=\"m-transform-joint-marker-ne\"></div>\r\n    <div class=\"m-transform-joint-marker-e\"></div>\r\n    <div class=\"m-transform-joint-marker-se\"></div>\r\n    <div class=\"m-transform-joint-marker-s\"></div>\r\n    <div class=\"m-transform-joint-marker-sw\"></div>\r\n    <div class=\"m-transform-joint-marker-w\"></div>\r\n    <div class=\"m-transform-joint-marker-nw\"></div>\r\n    <div class=\"m-transform-joint-marker-n\"></div>\r\n    <div class=\"m-transform-joint-marker-rotate\"></div>\r\n</div>\r\n";

},{}],14:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    createPreview = require('./preview').Preview,
    createViewport = require('./viewport').Viewport;

function Map(options) {
    if (!(this instanceof Map)) { return new Map(options); }
    options = options || {};

    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is Mandatory'); }
    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is Mandatory'); }
    if (!options.linkConnectionPoint || typeof options.linkConnectionPoint !== 'function') { throw new Error('linkConnectionPoint option is Mandatory'); }
    if (!options.el) { throw new Error('el option is Mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }

    var self = this,
        el = $($(options.el)[0]),
        paper = options.paper,
        linkConnectionPoint = options.linkConnectionPoint,
        mapContainer = (function () {var container = $(require('./preview.html')); el.append(container); return container; }()),
        viewportContainer = (function () {var container = $(require('./viewport.html')); el.append(container); return container; }()),
        model = options.model,
        preview = createPreview({el: mapContainer, model: model, linkConnectionPoint: linkConnectionPoint}),
        viewport = createViewport({el: viewportContainer}),
        autoRefreshEnabled = true;

    model.on('change:position change:size change:angle change:parent add remove', function (element) {
        if (model.hasActiveBatch('add') || model.hasActiveBatch('clear')) { return; }
        if (!autoRefreshEnabled) { return; }
        if (element.isLink()) { return; }
        if (element.get('parent')) { return; }
        _.defer(function () { self.refresh(); });
    });
    model.on('batch:stop', function (e) {
        if ((e.batchName !== 'add' && e.batchName !== 'clear') || model.hasActiveBatch('add') || model.hasActiveBatch('clear')) { return; }
        _.defer(function () { self.refresh(); });
    });

    self.refresh = function () {
        var bbox,
            width,
            height,
            minLocal,
            maxLocal;
        if (model.getElements().length === 0) {
            width = el.width();
            height = el.height();
            minLocal = paper.clientToLocalPoint(joint.g.point(0, 0));
            maxLocal = paper.clientToLocalPoint(joint.g.point(width, height));
            bbox = joint.g.rect(minLocal.x, minLocal.y, maxLocal.x - minLocal.x, maxLocal.y - minLocal.y);
        } else {
            bbox = model.getBBox(model.getElements(), {useModelGeometry: true});
            bbox = joint.g.rect(bbox.x - 10, bbox.y - 10, bbox.width + 20, bbox.height + 20);
        }
        preview.setBBox(bbox);
        viewport.setBBox(bbox);
    };

    self.disableAutorefresh = function () {
        autoRefreshEnabled = false;
    };

    self.enableAutorefresh = function () {
        autoRefreshEnabled = true;
    };

    self.setViewport = function (bbox) {
        viewport.setViewport(bbox);
    };

    self.download = function () {
        preview.download();
    };

    self.refresh();
}

exports.Map = Map;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./preview":16,"./preview.html":15,"./viewport":18,"./viewport.html":17}],15:[function(require,module,exports){
module.exports = "<div class='m-transform-joint-map'></div>\r\n";

},{}],16:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    atob = (typeof window !== "undefined" ? window['atob'] : typeof global !== "undefined" ? global['atob'] : null),
    Uint8Array = (typeof window !== "undefined" ? window['Uint8Array'] : typeof global !== "undefined" ? global['Uint8Array'] : null),
    Blob = (typeof window !== "undefined" ? window['Blob'] : typeof global !== "undefined" ? global['Blob'] : null),
    saveAs = (typeof window !== "undefined" ? window['saveAs'] : typeof global !== "undefined" ? global['saveAs'] : null),
    svg2png = require('save-svg-as-png');

function uriToBlob(uri) {
    var delimiter = 'base64,',
        index = uri.indexOf(delimiter),
        b64Data = uri.substr(index + delimiter.length),
        contentType = uri.substr(0, uri.indexOf(';')),
        sliceSize = 512,
        byteCharacters = atob(b64Data),
        byteArrays = [],
        offset,
        slice,
        byteNumbers,
        i,
        byteArray;

    for (offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        slice = byteCharacters.slice(offset, offset + sliceSize);

        byteNumbers = [];
        for (i = 0; i < slice.length; i += 1) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
}

function Preview(options) {
    if (!(this instanceof Preview)) { return new Preview(options); }
    options = options || {};

    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is Mandatory'); }
    if (!options.linkConnectionPoint || typeof options.linkConnectionPoint !== 'function') { throw new Error('linkConnectionPoint option is Mandatory'); }
    if (!options.el) { throw new Error('el option is Mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }

    var self = this,
        el = $($(options.el)[0]),
        model = options.model,
        lastScale = 1,
        linkConnectionPoint = options.linkConnectionPoint,
        paper = new joint.dia.Paper({
            el: el,
            width: el.width(),
            height: el.height(),
            model: model,
            linkConnectionPoint: linkConnectionPoint,
            interactive: false
        });

    self.setBBox = function (bbox) {
        // it is similar to paper.scaleContentToFit(); but i require to do it manually to change even the origin
        var width = el.width(),
            height = el.height(),
            scaleX = width / bbox.width,
            scaleY = height / bbox.height,
            scale = Math.min(scaleX, scaleY),
            ox = (width - bbox.width * scale) / 2 - bbox.x * scale,
            oy = (height - bbox.height * scale) / 2 - bbox.y * scale;

        lastScale = scale;
        paper.scale(scale, scale);
        paper.setOrigin(ox, oy);
    };

    self.download = function () {
        var svg = $($('<div>').append($(paper.svg).clone()).html().replace(/&nbsp;|xmlns:xml="http:\/\/www\.w3\.org\/XML\/1998\/namespace"/g, ' '));
        svg.find('.element *').css('vector-effect', 'none');
        svg2png.svgAsPngUri(svg[0], {scale: 3 / lastScale}, function (uri) {
            saveAs(uriToBlob(uri), "model.png");
        });
    };
}

exports.Preview = Preview;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"save-svg-as-png":32}],17:[function(require,module,exports){
module.exports = "<div class='m-transform-joint-map-viewport'></div>\r\n";

},{}],18:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null),
    ViewportOutline = require('./viewportoutline').ViewportOutline;

function Viewport(options) {
    if (!(this instanceof Viewport)) { return new Viewport(options); }
    options = options || {};

    if (!options.el) { throw new Error('el options is Mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el options'); }

    var self = this,
        el = $($(options.el)[0]),
        model = new joint.dia.Graph(),
        paper = new joint.dia.Paper({
            el: el,
            width: el.width(),
            height: el.height(),
            model: model,
            interactive: false
        }),
        viewport = new ViewportOutline({
            position: joint.g.point(0, 0),
            size: { width: 1, height: 1 }
        });

    model.addCells([viewport]);

    self.setBBox = function (bbox) {
        // it is similar to paper.scaleContentToFit(); but i require to do it manually to change even the origin
        var width = el.width(),
            height = el.height(),
            scaleX = width / bbox.width,
            scaleY = height / bbox.height,
            scale = Math.min(scaleX, scaleY),
            ox = (width - bbox.width * scale) / 2 - bbox.x * scale,
            oy = (height - bbox.height * scale) / 2 - bbox.y * scale;

        paper.scale(scale, scale);
        paper.setOrigin(ox, oy);
    };

    self.setViewport = function (bbox) {
        viewport.position(bbox.x, bbox.y);
        viewport.resize(bbox.width, bbox.height);
    };
}

exports.Viewport = Viewport;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./viewportoutline":19}],19:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

exports.ViewportOutline = joint.shapes.basic.Generic.extend({
    markup: require('./markup.svg'),

    defaults: joint.util.deepSupplement({
        type: 'map.ViewportOutline',
        size: {width: 1, height: 1},
        attrs: {
            '.m-transform-joint-viewport-bg-rect' : {'follow-scale': 'auto'},
            '.m-transform-joint-viewport-outer-rect': {
                'ref-x': 0,
                'ref-y': 0,
                'ref-width': 1,
                'ref-height': 1,
                ref: '.m-transform-joint-viewport-bg-rect'
            }
        }
    }, joint.shapes.basic.Generic.prototype.defaults)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./markup.svg":20}],20:[function(require,module,exports){
module.exports = "<g class=\"scalable\">\r\n    <rect class=\"m-transform-joint-viewport-bg-rect\" width=\"1\" height=\"1\" fill=\"transparent\" />\r\n</g>\r\n<rect class=\"m-transform-joint-viewport-outer-rect\" fill=\"transparent\" stroke=\"blue\" stroke-width=\"1\" />\r\n";

},{}],21:[function(require,module,exports){
module.exports = "<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   version=\"1.1\"\r\n   id=\"Capa_1\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"44.236\"\r\n   height=\"44.236\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"move.svg\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title /></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1600\"\r\n     inkscape:window-height=\"837\"\r\n     id=\"namedview49\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"7.5448594\"\r\n     inkscape:cx=\"28.520049\"\r\n     inkscape:cy=\"32.284412\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"Capa_1\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /><g\r\n     id=\"g4177\"><circle\r\n       r=\"22.118\"\r\n       cy=\"22.118\"\r\n       cx=\"22.118\"\r\n       id=\"path4181\"\r\n       style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><path\r\n       inkscape:connector-curvature=\"0\"\r\n       id=\"path7\"\r\n       d=\"M 22.118,44.236 C 9.922,44.236 0,34.314 0,22.119 0,9.923 9.922,0 22.118,0 c 12.196,0 22.118,9.923 22.118,22.119 0,12.195 -9.922,22.117 -22.118,22.117 z m 0,-42.736 C 10.75,1.5 1.5,10.75 1.5,22.119 c 0,11.369 9.25,20.617 20.618,20.617 11.368,0 20.618,-9.248 20.618,-20.617 C 42.736,10.75 33.486,1.5 22.118,1.5 Z\" /><g\r\n       id=\"g9\"><circle\r\n         id=\"circle11\"\r\n         r=\"1.41\"\r\n         cy=\"22.438\"\r\n         cx=\"22.118\" /><path\r\n         inkscape:connector-curvature=\"0\"\r\n         id=\"path13\"\r\n         d=\"m 22.118,24.098 c -0.916,0 -1.66,-0.744 -1.66,-1.66 0,-0.915 0.745,-1.66 1.66,-1.66 0.915,0 1.659,0.745 1.659,1.66 0,0.916 -0.743,1.66 -1.659,1.66 z m 0,-2.821 c -0.64,0 -1.16,0.521 -1.16,1.16 0,0.639 0.521,1.161 1.16,1.161 0.639,0 1.159,-0.521 1.159,-1.161 0,-0.64 -0.519,-1.16 -1.159,-1.16 z\" /></g><path\r\n       id=\"path7-2\"\r\n       d=\"m 37.039974,21.736127 -0.214021,-0.324019 -4.000025,-4.000045 c -0.390033,-0.390026 -1.025986,-0.390026 -1.414002,0 -0.390025,0.390034 -0.390025,1.024038 0,1.414005 l 2.292035,2.292038 -10.586092,0 0,-10.586064 2.292034,2.292038 c 0.388016,0.390034 1.024029,0.390034 1.413994,0 0.388016,-0.390026 0.388016,-1.02403 0,-1.413997 l -4.000031,-4.000112 -0.01,-0.006 -0.314013,-0.207977 -0.38197,-0.07803 -0.0038,0 -0.378011,0.07803 -0.314013,0.207977 -0.012,0.006 -4.000031,4.000045 c -0.390026,0.390034 -0.390026,1.024038 0,1.414004 0.390026,0.389966 1.024029,0.390026 1.413994,0 l 2.294052,-2.292045 0,10.586131 -10.586032,0 2.292034,-2.292038 c 0.390026,-0.390034 0.390026,-1.024038 0,-1.414005 -0.390033,-0.389966 -1.024036,-0.390026 -1.414002,0 l -4.000092,4.000045 -0.006,0.01 -0.207976,0.314013 -0.07803,0.382039 0,0.0038 0.07803,0.378011 0.207976,0.312003 0.006,0.012 4.000032,4.000045 c 0.390026,0.390034 1.024029,0.390034 1.413995,0 0.390033,-0.388016 0.390033,-1.02403 0,-1.414004 l -2.291967,-2.292098 10.586092,0 0,10.586131 -2.292034,-2.292046 c -0.390026,-0.388016 -1.024029,-0.388016 -1.413995,0 -0.390033,0.390034 -0.390033,1.025988 0,1.414005 l 4.000032,4.000045 0.324018,0.215964 0.378003,0.07602 0.0038,0 0.381978,-0.07803 0.324018,-0.214022 4.000031,-4.000045 c 0.388008,-0.390026 0.388008,-1.02598 0,-1.413997 -0.390033,-0.390033 -1.025986,-0.390033 -1.414002,0 l -2.292027,2.292038 0,-10.586063 10.586092,0 -2.292034,2.292038 c -0.388016,0.388016 -0.388016,1.024038 0,1.414004 0.390026,0.388016 1.025979,0.388016 1.413995,0 l 4.000031,-4.000045 0.215964,-0.324018 0.07602,-0.378011 0,-0.0038 -0.07803,-0.381979 z\"\r\n       style=\"fill:#010002\"\r\n       inkscape:connector-curvature=\"0\" /></g></svg>\r\n";

},{}],22:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

function PanReactor(options) {
    if (!(this instanceof PanReactor)) { return new PanReactor(options); }
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (typeof options.x !== 'number') { throw new Error('x option is mandatory and has to be a number'); }
    if (typeof options.y !== 'number') { throw new Error('y option is mandatory and has to be a number'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }

    var el = $($(options.el)[0]),
        paper = options.paper,
        startLocal = {x: options.x, y: options.y},
        mouseout;

    function mousemove(e) {
        var left = el.offset().left,
            top = el.offset().top,
            width = el.width(),
            height = el.height(),
            topLeft = joint.g.point(left, top),
            bottomRight = joint.g.point(left + width, top + height),
            minLocal = paper.clientToLocalPoint(topLeft),
            maxLocal = paper.clientToLocalPoint(bottomRight),
            scale = joint.g.point(width / (maxLocal.x - minLocal.x), height / (maxLocal.y - minLocal.y)),
            offsetClient = joint.g.point(startLocal.x * scale.x + left, startLocal.y * scale.y + top),
            origin = joint.g.point(e.clientX - offsetClient.x, e.clientY - offsetClient.y);

        paper.setOrigin(origin.x, origin.y);
    }

    function terminate() {
        el.off('mouseup', terminate);
        el.off('mouseout', mouseout);
        el.off('mousemove', mousemove);
        el.removeClass('m-transform-joint-manipulating');
    }

    mouseout = function (e) {
        if (e.target === el.get(0)) {
            terminate();
        }
    };

    el.on('mouseup', terminate);
    el.on('mouseout', mouseout);
    el.on('mousemove touchmove', mousemove);
    el.addClass('m-transform-joint-manipulating');
}

exports.PanReactor = PanReactor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],23:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

function normalizeDirection(direction) {
    if (2 === direction.length) { return {v: direction.substr(0, 1), h: direction.substr(-1)}; }
    switch (direction) {
    case 'n':
    case 's':
        return {v: direction};
    case 'w':
    case 'e':
        return {h: direction};
    }
}

function ResizeReactor(options) {
    if (!(this instanceof ResizeReactor)) { return new ResizeReactor(options); }
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (!options.view || typeof options.view !== 'object') { throw new Error('view option is mandatory'); }
    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }
    if (!options.direction) { throw new Error('direction option is mandatory'); }
    if (-1 === ['ne', 'e', 'se', 's', 'sw', 'w', 'nw', 'n'].indexOf(options.direction)) { throw new Error('invalid direction option'); }
    if (typeof options.gridSize !== 'number') { throw new Error('gridSize option is mandatory and has to be a number'); }
    if (options.gridSize < 0) { throw new Error('gridSize cannot be less than zero'); }

    var el = $($(options.el)[0]),
        paper = options.paper,
        model = options.model,
        gridSize = options.gridSize,
        element = options.view.model,
        direction = normalizeDirection(options.direction),
        minsize = (function () {
            var msize = element.minsize,
                padding,
                embeds = _.filter(element.getEmbeddedCells(), function (element) { return element.isContraint; }),
                bbox,
                embedsbbox,
                minwidth = msize.width,
                minheight = msize.height;
            if (embeds.length) {
                embedsbbox = model.getBBox(embeds, {useModelGeometry: true});
                bbox = element.getBBox({useModelGeometry: true});
                padding = element.padding;
                switch (direction.h) {
                case 'e':
                    minwidth = embedsbbox.corner().x - bbox.origin().x + padding.right;
                    break;
                case 'w':
                    minwidth = bbox.corner().x - embedsbbox.origin().x + padding.left;
                    break;
                }
                switch (direction.v) {
                case 's':
                    minheight = embedsbbox.corner().y - bbox.origin().y + padding.bottom;
                    break;
                case 'n':
                    minheight = bbox.corner().y - embedsbbox.origin().y + padding.top;
                    break;
                }
                return {width: Math.max(minwidth, msize.width), height: Math.max(minheight, msize.height)};
            }
            return msize;
        }()),
        mouseenter;

    function fixPoint(point, direction) {
        var x = point.x,
            y = point.y;
        switch (direction.h) {
        case 'e':
            x -= gridSize;
            break;
        case 'w':
            x += gridSize;
            break;
        }
        switch (direction.v) {
        case 's':
            y -= gridSize;
            break;
        case 'n':
            y += gridSize;
            break;
        }
        return joint.g.point(x, y);
    }

    function constrain(point) {
        var parent = element.get('parent'),
            bbox,
            padding;
        point = joint.g.point(joint.g.snapToGrid(point.x, gridSize), joint.g.snapToGrid(point.y, gridSize));
        if (parent) {
            parent = model.getCell(parent);
            bbox = parent.getBBox({useModelGeometry: true});
            padding = parent.padding;
            point = joint.g.point(
                Math.max(Math.min(point.x, bbox.corner().x - padding.right), bbox.x + padding.left),
                Math.max(Math.min(point.y, bbox.corner().y - padding.bottom), bbox.y + padding.top)
            );
        }
        return point;
    }

    function mousemove(e) {
        var client = constrain(fixPoint(paper.clientToLocalPoint({x: e.clientX, y: e.clientY}), direction)),
            position = element.get('position'),
            size = element.get('size'),
            width,
            height,
            px,
            py;
        switch (direction.h) {
        case 'e':
            width = Math.max(client.x - position.x, minsize.width);
            px = position.x;
            break;
        case 'w':
            width = Math.max(size.width - client.x + position.x, minsize.width);
            px = position.x + size.width - width;
            break;
        default:
            width = size.width;
            px = position.x;
        }
        switch (direction.v) {
        case 's':
            height = Math.max(client.y - position.y, minsize.height);
            py = position.y;
            break;
        case 'n':
            height = Math.max(size.height - client.y + position.y, minsize.height);
            py = position.y + size.height - height;
            break;
        default:
            height = size.height;
            py = position.y;
        }
        element.position(px, py);
        element.resize(width, height);
    }

    function mouseleave(e) {
        var point = joint.g.point(e.clientX, e.clientY),
            bbox = joint.g.rect(el.offset().left, el.offset().top, el.width(), el.height());
        point = bbox.pointNearestToPoint(point);
        e.clientX = point.x;
        e.clientY = point.y;
        return mousemove(e);
    }

    function terminate() {
        el.off('mouseup', terminate);
        el.off('mouseenter', mouseenter);
        el.off('mousemove', mousemove);
        el.off('mouseleave', mouseleave);
        el.removeClass('m-transform-joint-manipulating');
        el.removeClass('m-transform-joint-resizing-' + options.direction);
    }

    mouseenter = function (e) {
        if (e.buttons === 0) {
            terminate();
        }
    };

    el.on('mouseup', terminate);
    el.on('mouseenter', mouseenter);
    el.on('mousemove', mousemove);
    el.on('mouseleave', mouseleave);

    el.addClass('m-transform-joint-manipulating');
    el.addClass('m-transform-joint-resizing-' + options.direction);
}

exports.ResizeReactor = ResizeReactor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],24:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

function RotateReactor(options) {
    if (!(this instanceof RotateReactor)) { return new RotateReactor(options); }
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (!options.view || typeof options.view !== 'object') { throw new Error('view option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }
    if (typeof options.angleStep !== 'number') { throw new Error('angleStep option is mandatory and has to be a number'); }
    if (options.angleStep < 0) { throw new Error('angleStep cannot be less than zero'); }

    var el = $($(options.el)[0]),
        paper = options.paper,
        element = options.view.model,
        angleStep = options.angleStep,
        mouseout;

    function mousemove(e) {
        var client = paper.clientToLocalPoint({x: e.clientX, y: e.clientY}),
            bbox = element.getBBox({useModelGeometry: true}),
            center = bbox.center(),
            rad = Math.atan2(client.y - center.y, client.x - center.x);
        element.rotate(Math.round(joint.g.toDeg(rad) / angleStep) * angleStep, true);
    }

    function terminate() {
        el.off('mouseup', terminate);
        el.off('mouseout', mouseout);
        el.off('mousemove', mousemove);
        el.removeClass('m-transform-joint-manipulating');
    }

    mouseout = function (e) {
        if (e.target === el.get(0)) {
            terminate();
        }
    };

    el.on('mouseup', terminate);
    el.on('mouseout', mouseout);
    el.on('mousemove', mousemove);

    el.addClass('m-transform-joint-manipulating');
}

exports.RotateReactor = RotateReactor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],25:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true */
"use strict";

var joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

function ignore() { return undefined; }

exports.validateConnection = function (cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
    ignore(magnetS, magnetT);
    if (cellViewS === cellViewT) { return false; }
    if (linkView.model.validateConnection) {
        return linkView.model.validateConnection(cellViewS, magnetS, cellViewT, magnetT, end, linkView);
    }
    if (end === 'source') {
        return -1 !== linkView.model.validSources.indexOf(cellViewS.model.get('type'));
    }
    return -1 !== linkView.model.validTargets.indexOf(cellViewT.model.get('type'));
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],26:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    joint = (typeof window !== "undefined" ? window['joint'] : typeof global !== "undefined" ? global['joint'] : null);

function ZoomReactor(options) {
    if (!(this instanceof ZoomReactor)) { return new ZoomReactor(options); }
    options = options || {};

    if (!options.paper || typeof options.paper !== 'object' || !(options.paper instanceof joint.dia.Paper)) { throw new Error('paper option is mandatory'); }
    if (!options.model || typeof options.model !== 'object') { throw new Error('model option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }
    if (typeof options.minScale !== 'number') { throw new Error('minScale option is mandatory and has to be a number'); }
    if (typeof options.maxScale !== 'number') { throw new Error('maxScale option is mandatory and has to be a number'); }
    if (options.minScale < 0) { throw new Error('minScale cannot be less than zero'); }
    if (options.minScale > options.maxScale) { throw new Error('maxScale cannot be less the minScale'); }

    var self = this,
        el = $($(options.el)[0]),
        paper = options.paper,
        model = options.model,
        minScale = options.minScale,
        maxScale = options.maxScale,
        paddingZoomE = {width: 50, height: 50};

    function normalizeScale(scale) {
        return Math.min(Math.max(scale, minScale), maxScale);
    }

    function mousewheel(e) {
        var left = el.offset().left,
            top = el.offset().top,
            width = el.width(),
            height = el.height(),
            topLeft = joint.g.point(left, top),
            bottomRight = joint.g.point(left + width, top + height),
            current = joint.g.point(e.clientX, e.clientY),
            minLocal = paper.clientToLocalPoint(topLeft),
            maxLocal = paper.clientToLocalPoint(bottomRight),
            startLocal = paper.clientToLocalPoint(current),
            scale = {x: width / (maxLocal.x - minLocal.x), y: height / (maxLocal.y - minLocal.y)},
            offsetClient,
            origin;
        scale = normalizeScale(scale.x * Math.pow(1.1, e.deltaY * e.deltaFactor / 1000));
        paper.scale(scale, scale);
        minLocal = paper.clientToLocalPoint(topLeft);
        maxLocal = paper.clientToLocalPoint(bottomRight);
        scale = joint.g.point(width / (maxLocal.x - minLocal.x), height / (maxLocal.y - minLocal.y));
        offsetClient = joint.g.point(startLocal.x * scale.x, startLocal.y * scale.y);
        origin = joint.g.point(e.clientX - offsetClient.x, e.clientY - offsetClient.y);

        paper.setOrigin(origin.x - left, origin.y - top);
    }

    function pointerdblclick() {
        if (model.getElements().length === 0) { return; }
        // it is similar to paper.scaleContentToFit(); but i require to do it manually to change even the origin
        var width = el.width() - paddingZoomE.width * 2,
            height = el.height() - paddingZoomE.height * 2,
            bbox = model.getBBox(model.getElements(), {useModelGeometry: true}),
            scaleX = width / bbox.width,
            scaleY = height / bbox.height,
            scale = Math.max(Math.min(scaleX, scaleY, maxScale), minScale),
            ox = (width - bbox.width * scale) / 2 - bbox.x * scale,
            oy = (height - bbox.height * scale) / 2 - bbox.y * scale;

        paper.scale(scale, scale);
        paper.setOrigin(ox + paddingZoomE.width, oy + paddingZoomE.height);
    }

    paper.on('blank:pointerdblclick', pointerdblclick);
    el.on('mousewheel', mousewheel);

    self.zoomE = function () {
        pointerdblclick();
    };
}

exports.ZoomReactor = ZoomReactor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],27:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

function ElementsMenu(options) {
    if (!(this instanceof ElementsMenu)) { return new ElementsMenu(options); }
    options = options || {};

    if (!options.container) { throw new Error('container option is mandatory'); }
    if ($(options.container).length === 0) { throw new Error('invalid container option'); }
    if (!options.template) { throw new Error('template option is mandatory'); }
    if (typeof options.template !== 'string') { throw new Error('invalid template option'); }
    if ($(options.template).length === 0) { throw new Error('invalid template option'); }
    if (!Array.isArray(options.builders)) { throw new Error('builders options is mandatory'); }
    if (!options.createItemDragger) { throw new Error('createItemDragger option is Mandatory'); }
    if (typeof options.createItemDragger !== 'function') { throw new Error('invalid createItemDragger option'); }
    if (typeof options.width !== 'number') { throw new Error('width option is mandatory and has to be a number'); }
    if (options.width < 2 * options.padding) { throw new Error('width cannot be less than zero (or 2 time padding)'); }

    var container = $(_.head($(options.container))),
        builders = options.builders,
        createItemDragger = options.createItemDragger,
        template = $(options.template),
        width = options.width;

    _.each(builders, function (builder) {
        var item = template.clone();
        container.append(item);
        if (!item.hasClass('m-transform-place-holder')) {
            item = item.find('.m-transform-place-holder');
        }
        createItemDragger({el: item, createElements: builder, width: width, minHeight: 50, padding: 0});
    });
}

exports.ElementsMenu = ElementsMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],28:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null),
    $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),
    document = (typeof window !== "undefined" ? window['document'] : typeof global !== "undefined" ? global['document'] : null);

ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        _.noop(valueAccessor);
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which || event.keyCode);
            if (keyCode === 13) {
                allBindings.executeOnEnter.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

function mapBase(e, f) {
    var field = {
        name: f.name,
        type: f.type,
        property: f.property,
        value: ko.observable(e.prop(f.property))
    };
    field.value.subscribe(function (value) {
        e.prop(f.property, value);
    });
    return field;
}

var mapString = mapBase;
var mapBoolean = mapBase;

function mapBooleanSet(e, f) {
    var field = {
        name: f.name,
        type: f.type,
        items: f.items.map(function (v) { return mapBoolean(e, v); })
    };
    return field;
}

function mapStringSet(e, f) {
    var field = {
        name: f.name,
        type: f.type,
        strings: ko.observableArray(_(e.get(f.property) || []).sort().uniq(true).value()),
        value: ko.observable(''),
        add: function () {
            if (field.value().trim().length) {
                field.strings(_(field.strings()).concat(field.value().trim()).sort().uniq(true).value());
                field.value('');
            }
        },
        remove: function () {
            field.strings.remove(this);
        },
    };
    field.strings.subscribe(function (strings) {
        e.prop(f.property, strings);
    });
    return field;
}

function mapEnum(e, f) {
    var field = mapBase(e, f);
    field.values = f.values;
    return field;
}

function mapNumber(e, f) {
    var field = mapBase(e, f);
    field.min = f.min;
    field.max = f.max;
    field.text = ko.pureComputed({
        read: field.value,
        write: function (value) {
            if (value === '' || value === '-') { return; }
            var current = field.value(),
                currentNumber = (f.integer && parseInt(value, 10)) || parseFloat(value, 10) || 0,
                number = currentNumber;
            if (typeof f.min === 'number') { number = Math.max(f.min, number); }
            if (typeof f.max === 'number') { number = Math.min(f.max, number); }
            if (current !== number) {
                field.value(number);
            } else {
                if (currentNumber !== number) {
                    field.value.notifySubscribers(number);
                }
            }
        }
    }).extend({notify: 'always'});
    return field;
}

function mapBindings(l, f) {
    var field = {
        name: f.name,
        type: f.type,
        bindings: ko.observableArray((l.get(f.property) || []).slice()),
        output: ko.observable(),
        input: ko.observable(),
        addBinding: function () {
            if (field.output() && field.input()) {
                field.bindings.push({input: field.input(), output: field.output()});
            }
        },
        removeBinding: function () {
            field.bindings.remove(this);
        }
    };
    field.outputs = (l.getSourceElement().outputs && l.getSourceElement().outputs()) ||
        (l.getSourceElement().getAncestors()[0].outputs && l.getSourceElement().getAncestors()[0].outputs()) ||
        [];
    field.inputs = ko.computed(
        function () {
            return _(l.getTargetElement().inputs())
                .difference(_.map(field.bindings(), function (b) { return b.input; }))
                .value();
        }
    );
    field.bindings.subscribe(function (bindings) {
        l.set(f.property, bindings.slice());
    });
    return field;
}

function mapElementsList(l, f) {
    var elements = l.get(f.property),
        ignored = _.reject(elements, f.filter),
        field = {
            name: f.name,
            type: f.type,
            children: ko.observableArray(_.chain(elements)
                .filter(f.filter)
                .map(function (id) { return {id: id, display: f.display(id)}; })
                .value())
        };
    field.top = function () {
        var index = field.children.indexOf(this);
        if (index > 0) {
            field.children.splice(index, 1);
            field.children.unshift(this);
        }
    };
    field.up = function () {
        var index = field.children.indexOf(this);
        if (index > 0) {
            field.children.splice(index - 1, 2, this, field.children()[index - 1]);
        }
    };
    field.down = function () {
        var index = field.children.indexOf(this);
        if (index < field.children().length - 1) {
            field.children.splice(index, 2, field.children()[index + 1], this);
        }
    };
    field.bottom = function () {
        var index = field.children.indexOf(this);
        if (index < field.children().length - 1) {
            field.children.splice(index, 1);
            field.children.push(this);
        }
    };
    field.children.subscribe(function (sorted) {
        l.set(f.property, _.chain(sorted).map('id').concat(ignored).value());
    });
    return field;
}

function ElementViewModel(options, close) {
    var self = this,
        cell = options.cell;
    self.id = cell.id;
    self.fields = _.map(options.fields, function (f) {
        switch (f.type) {
        case 'number':
            return mapNumber(cell, f);
        case 'string':
            return mapString(cell, f);
        case 'stringset':
            return mapStringSet(cell, f);
        case 'boolean':
            return mapBoolean(cell, f);
        case 'enum':
            return mapEnum(cell, f);
        case 'booleanset':
            return mapBooleanSet(cell, f);
        case 'bindings':
            return mapBindings(cell, f);
        case 'elementslist':
            return mapElementsList(cell, f);
        }
    });
    this.close = close;
}

function ModalEdit(options) {
    if (!(this instanceof ModalEdit)) { return new ModalEdit(options); }
    options = options || {};

    if (typeof options.cell !== 'object') { throw new Error('at least element or link should be provided'); }

    var cell = options.cell,
        fields = cell.editable && cell.editable(),
        el = $(require('./modal.html'));

    if (!fields) { return; }

    $(document.body).append(el);

    function tearDown() {
        el.remove();
    }

    ko.applyBindings(new ElementViewModel({cell: cell, fields: fields}, function () { el.modal('hide'); }), el.find('.modal-content')[0]);

    el.modal('show').on('hidden.bs.modal', tearDown);
}

exports.ModalEdit = ModalEdit;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modal.html":29}],29:[function(require,module,exports){
module.exports = "<div class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"modal-title\">Edit Element <small>(id: <span class=\"selectable\" data-bind=\"text: id\"></span>)</small></h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-horizontal\" data-bind=\"foreach: fields\">\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'string', visible: type === 'string'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name, attr: {for: 'input-field' + property}\"></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input class=\"form-control\" type=\"text\" data-bind=\"textInput: value, executeOnEnter: $root.close, attr: {id: 'input-field' + property}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'number', visible: type === 'number'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name, attr: {for: 'input-field' + property}\"></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input class=\"form-control\" type=\"number\" data-bind=\"textInput: text, executeOnEnter: $root.close, attr: {id: 'input-field' + property, min: min, max: max}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"checkbox\" data-bind=\"if: type === 'boolean', visible: type === 'boolean'\">\r\n                        <label>\r\n                            <input type=\"checkbox\" data-bind=\"checked: value\">\r\n                            <span data-bind=\"text: name\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'enum', visible: type === 'enum'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name, attr: {for: 'input-field' + property}\"></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <select class=\"form-control\" data-bind=\"options: values, optionsText: 'name', optionsValue: 'value', value: value, attr: {id: 'input-field' + property}\"></select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'booleanset', visible: type === 'booleanset'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name\"></label>\r\n                        <div class=\"col-sm-10\" data-bind=\"foreach: items\">\r\n                            <label class=\"checkbox-inline\">\r\n                                <input type=\"checkbox\" data-bind=\"checked: value, attr: {id: 'input-field' + property}\">\r\n                                <span data-bind=\"text: name\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'stringset', visible: type === 'stringset'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name\"></label>\r\n                        <div class=\"col-sm-10\">\r\n                            <table class=\"table table-condensed table-stripped\">\r\n                                <thead>\r\n                                    <th>#</th>\r\n                                    <th>value</th>\r\n                                    <th></th>\r\n                                </thead>\r\n                                <tbody data-bind=\"foreach: strings\">\r\n                                    <tr>\r\n                                        <th scopre=\"row\" data-bind=\"text: $index\"></th>\r\n                                        <td data-bind=\"text: $data\"></td>\r\n                                        <td>\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.remove\">remove</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tfoot>\r\n                                    <th></th>\r\n                                    <th class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"text\" data-bind=\"textInput: value, executeOnEnter: add\">\r\n                                    </th>\r\n                                    <th>\r\n                                        <button class=\"btn\" data-bind=\"click: add\">add</button>\r\n                                    </th>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'bindings', visible: type === 'bindings'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name\"></label>\r\n                        <div class=\"cols-sm-10 col-sm-10\">\r\n                            <table class=\"table table-condensed table-stripped\">\r\n                                <thead>\r\n                                    <th>#</th>\r\n                                    <th>output</th>\r\n                                    <th>input</th>\r\n                                    <th></th>\r\n                                </thead>\r\n                                <tbody data-bind=\"foreach: bindings\">\r\n                                    <tr>\r\n                                        <th scopre=\"row\" data-bind=\"text: $index\"></th>\r\n                                        <td data-bind=\"text: output\"></td>\r\n                                        <td data-bind=\"text: input\"></td>\r\n                                        <td>\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.removeBinding\">remove</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tfoor>\r\n                                    <th></th>\r\n                                    <th class=\"form-group\">\r\n                                        <select class=\"form-control\" data-bind=\"options: outputs, value: output\"></select>\r\n                                    </th>\r\n                                    <th class=\"form-group\">\r\n                                        <select class=\"form-control\" data-bind=\"options: inputs, value: input\"></select>\r\n                                    </th>\r\n                                    <th>\r\n                                        <button class=\"btn\" data-bind=\"click: addBinding\">add</button>\r\n                                    </th>\r\n                                </tfoot>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" data-bind=\"if: type === 'elementslist', visible: type === 'elementslist'\">\r\n                        <label class=\"col-sm-2 control-label\" data-bind=\"text: name\"></label>\r\n                        <div class=\"cols-sm-10 col-sm-10\">\r\n                            <table class=\"table table-condensed table-stripped\">\r\n                                <tbody data-bind=\"foreach: children\">\r\n                                    <tr>\r\n                                        <th scopre=\"row\" data-bind=\"text: $index\"></th>\r\n                                        <td data-bind=\"text: display\"></td>\r\n                                        <td class=\"btn-group\">\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.top, disable: $index() === 0\">\r\n                                                <span class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span>\r\n                                            </button>\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.up, disable: $index() === 0\">\r\n                                                <span class=\"glyphicon glyphicon-menu-up\" aria-hidden=\"true\"></span>\r\n                                            </button>\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.down, disable: $index() + 1 === $parent.children().length\">\r\n                                                <span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span>\r\n                                            </button>\r\n                                            <button class=\"btn\" data-bind=\"click: $parent.bottom, disable: $index() + 1 === $parent.children().length\">\r\n                                                <span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

},{}],30:[function(require,module,exports){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true*/
"use strict";

exports.sortCells = require('./sortcells').sortCells;

},{"./sortcells":31}],31:[function(require,module,exports){
(function (global){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true*/
"use strict";

var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

function computeAncestors(id, lookup) {
    if (!id) { return _([]); }
    return computeAncestors(lookup[id].get('parent'), lookup).concat(id);
}

function sortCells(cells) {
    var lookup = _.zipObject(_.map(cells, function (cell) { return [cell.id, cell]; })),
        ancestors = _.zipObject(_.map(cells, function (cell) { return [cell.id, computeAncestors(cell.id, lookup).value()]; }));
    function compareRelatives(cell1, cell2) {
        var parent = lookup[cell1.get('parent')],
            embeds;
        if (parent) {
            embeds = parent.get('embeds');
            return embeds.indexOf(cell1.id) - embeds.indexOf(cell2.id);
        }
        return cell1.id < cell2.id ? -1 : 1;
    }
    return cells.sort(function (cell1, cell2) {
        if (cell1.isLink() !== cell2.isLink()) {
            return cell2.isLink() ? -1 : 1;
        }
        if (cell1.isLink()) {
            return cell1.id < cell2.id ? -1 : 1;
        }
        var ancestors1 = ancestors[cell1.id],
            ancestors2 = ancestors[cell2.id],
            commonUncestors;
        if (ancestors1.length < ancestors2.length) {
            return -1;
        }
        if (ancestors1.length > ancestors2.length) {
            return 1;
        }
        commonUncestors = _.intersection(ancestors1, ancestors2);
        ancestors1 = ancestors1.slice(commonUncestors.length);
        ancestors2 = ancestors2.slice(commonUncestors.length);
        if (ancestors1.length === 0) {
            return compareRelatives(cell1, cell2);
        }
        return compareRelatives(lookup[ancestors1[0]], lookup[ancestors2[0]]);
    });
}

exports.sortCells = sortCells;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],32:[function(require,module,exports){
(function() {
  var out$ = typeof exports != 'undefined' && exports || typeof define != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';

  function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  }

  function requireDomNode(el) {
    if (!isElement(el)) {
      throw new Error('an HTMLElement or SVGElement is required; got ' + el);
    }
  }

  function isExternal(url) {
    return url && url.lastIndexOf('http',0) == 0 && url.lastIndexOf(window.location.host) == -1;
  }

  function inlineImages(el, callback) {
    requireDomNode(el);

    var images = el.querySelectorAll('image'),
        left = images.length,
        checkDone = function() {
          if (left === 0) {
            callback();
          }
        };

    checkDone();
    for (var i = 0; i < images.length; i++) {
      (function(image) {
        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        if (href) {
          if (isExternal(href.value)) {
            console.warn("Cannot render embedded images linking to external hosts: "+href.value);
            return;
          }
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin="anonymous";
        href = href || image.getAttribute('href');
        if (href) {
          img.src = href;
          img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
            left--;
            checkDone();
          }
          img.onerror = function() {
            console.log("Could not load "+href);
            left--;
            checkDone();
          }
        } else {
          left--;
          checkDone();
        }
      })(images[i]);
    }
  }

  function styles(el, options, cssLoadedCallback) {
    var selectorRemap = options.selectorRemap;
    var modifyStyle = options.modifyStyle;
    var css = "";
    // each font that has extranl link is saved into queue, and processed
    // asynchronously
    var fontsQueue = [];
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: "+sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0, match; j < rules.length; j++, match = null) {
          var rule = rules[j];
          if (typeof(rule.style) != "undefined") {
            var selectorText;

            try {
              selectorText = rule.selectorText;
            } catch(err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText);
              }
            } catch(err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              var cssText = modifyStyle ? modifyStyle(rule.style.cssText) : rule.style.cssText;
              css += selector + " { " + cssText + " }\n";
            } else if(rule.cssText.match(/^@font-face/)) {
              // below we are trying to find matches to external link. E.g.
              // @font-face {
              //   // ...
              //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
              // }
              //
              // This regex will save extrnal link into first capture group
              var fontUrlRegexp = /url\(["']?(.+?)["']?\)/;
              // TODO: This needs to be changed to support multiple url declarations per font.
              var fontUrlMatch = rule.cssText.match(fontUrlRegexp);

              var externalFontUrl = (fontUrlMatch && fontUrlMatch[1]) || '';
              var fontUrlIsDataURI = externalFontUrl.match(/^data:/);
              if (fontUrlIsDataURI) {
                // We should ignore data uri - they are already embedded
                externalFontUrl = '';
              }

              if (externalFontUrl) {
                // okay, we are lucky. We can fetch this font later
                fontsQueue.push({
                  text: rule.cssText,
                  // Pass url regex, so that once font is downladed, we can run `replace()` on it
                  fontUrlRegexp: fontUrlRegexp,
                  format: getFontMimeTypeFromUrl(externalFontUrl),
                  url: externalFontUrl
                });
              } else {
                // otherwise, use previous logic
                css += rule.cssText + '\n';
              }
            }
          }
        }
      }
    }

    // Now all css is processed, it's time to handle scheduled fonts
    processFontQueue(fontsQueue);

    function getFontMimeTypeFromUrl(fontUrl) {
      var supportedFormats = {
        'woff2': 'font/woff2',
        'woff': 'font/woff',
        'otf': 'application/x-font-opentype',
        'ttf': 'application/x-font-ttf',
        'eot': 'application/vnd.ms-fontobject',
        'sfnt': 'application/font-sfnt',
        'svg': 'image/svg+xml'
      };
      var extensions = Object.keys(supportedFormats);
      for (var i = 0; i < extensions.length; ++i) {
        var extension = extensions[i];
        // TODO: This is not bullet proof, it needs to handle edge cases...
        if (fontUrl.indexOf('.' + extension) > 0) {
          return supportedFormats[extension];
        }
      }

      // If you see this error message, you probably need to update code above.
      console.error('Unknown font format for ' + fontUrl+ '; Fonts may not be working correctly');
      return 'application/octet-stream';
    }

    function processFontQueue(queue) {
      if (queue.length > 0) {
        // load fonts one by one until we have anything in the queue:
        var font = queue.pop();
        processNext(font);
      } else {
        // no more fonts to load.
        cssLoadedCallback(css);
      }

      function processNext(font) {
        // TODO: This could benefit from caching.
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', fontLoaded);
        oReq.addEventListener('error', transferFailed);
        oReq.addEventListener('abort', transferFailed);
        oReq.open('GET', font.url);
        oReq.responseType = 'arraybuffer';
        oReq.send();

        function fontLoaded() {
          // TODO: it may be also worth to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet )
          var fontBits = oReq.response;
          var fontInBase64 = arrayBufferToBase64(fontBits);
          updateFontStyle(font, fontInBase64);
        }

        function transferFailed(e) {
          console.warn('Failed to load font from: ' + font.url);
          console.warn(e)
          css += font.text + '\n';
          processFontQueue();
        }

        function updateFontStyle(font, fontInBase64) {
          var dataUrl = 'url("data:' + font.format + ';base64,' + fontInBase64 + '")';
          css += font.text.replace(font.fontUrlRegexp, dataUrl) + '\n';

          // schedule next font download on next tick.
          setTimeout(function() {
            processFontQueue(queue)
          }, 0);
        }

      }
    }

    function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
      }

      return window.btoa(binary);
    }
  }

  function getDimension(el, clone, dim) {
    var v = (el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
      (clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
      el.getBoundingClientRect()[dim] ||
      parseInt(clone.style[dim]) ||
      parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
  }

  function reEncode(data) {
    data = encodeURIComponent(data);
    data = data.replace(/%([0-9A-F]{2})/g, function(match, p1) {
      var c = String.fromCharCode('0x'+p1);
      return c === '%' ? '%25' : c;
    });
    return decodeURIComponent(data);
  }

  out$.prepareSvg = function(el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.scale = options.scale || 1;
    options.responsive = options.responsive || false;
    var xmlns = "http://www.w3.org/2000/xmlns/";

    inlineImages(el, function() {
      var outer = document.createElement("div");
      var clone = el.cloneNode(true);
      var width, height;
      if(el.tagName == 'svg') {
        width = options.width || getDimension(el, clone, 'width');
        height = options.height || getDimension(el, clone, 'height');
      } else if(el.getBBox) {
        var box = el.getBBox();
        width = box.x + box.width;
        height = box.y + box.height;
        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.appendChild(clone)
        clone = svg;
      } else {
        console.error('Attempted to render non-SVG element', el);
        return;
      }

      clone.setAttribute("version", "1.1");
      if (!clone.getAttribute('xmlns')) {
        clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
      }
      if (!clone.getAttribute('xmlns:xlink')) {
        clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      }

      if (options.responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute("width", width * options.scale);
        clone.setAttribute("height", height * options.scale);
      }

      clone.setAttribute("viewBox", [
        options.left || 0,
        options.top || 0,
        width,
        height
      ].join(" "));

      var fos = clone.querySelectorAll('foreignObject > *');
      for (var i = 0; i < fos.length; i++) {
        if (!fos[i].getAttribute('xmlns')) {
          fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
        }
      }

      outer.appendChild(clone);

      // In case of custom fonts we need to fetch font first, and then inline
      // its url into data-uri format (encode as base64). That's why style
      // processing is done asynchonously. Once all inlining is finshed
      // cssLoadedCallback() is called.
      styles(el, options, cssLoadedCallback);

      function cssLoadedCallback(css) {
        // here all fonts are inlined, so that we can render them properly.
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
        var defs = document.createElement('defs');
        defs.appendChild(s);
        clone.insertBefore(defs, clone.firstChild);

        if (cb) {
          var outHtml = outer.innerHTML;
          outHtml = outHtml.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
          cb(outHtml, width, height);
        }
      }
    });
  }

  out$.svgAsDataUri = function(el, options, cb) {
    out$.prepareSvg(el, options, function(svg) {
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + svg));
      if (cb) {
        cb(uri);
      }
    });
  }

  out$.svgAsPngUri = function(el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.encoderType = options.encoderType || 'image/png';
    options.encoderOptions = options.encoderOptions || 0.8;

    var convertToPng = function(src, w, h) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      if(options.canvg) {
        options.canvg(canvas, src);
      } else {
        context.drawImage(src, 0, 0);
      }

      if(options.backgroundColor){
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      var png;
      try {
        png = canvas.toDataURL(options.encoderType, options.encoderOptions);
      } catch (e) {
        if ((typeof SecurityError !== 'undefined' && e instanceof SecurityError) || e.name == "SecurityError") {
          console.error("Rendered SVG images cannot be downloaded in this browser.");
          return;
        } else {
          throw e;
        }
      }
      cb(png);
    }

    if(options.canvg) {
      out$.prepareSvg(el, options, convertToPng);
    } else {
      out$.svgAsDataUri(el, options, function(uri) {
        var image = new Image();

        image.onload = function() {
          convertToPng(image, image.width, image.height);
        }

        image.onerror = function() {
          console.error(
            'There was an error loading the data URI as an image on the following SVG\n',
            window.atob(uri.slice(26)), '\n',
            "Open the following link to see browser's diagnosis\n",
            uri);
        }

        image.src = uri;
      });
    }
  }

  out$.download = function(name, uri) {
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
    } else {
      var saveLink = document.createElement('a');
      var downloadSupported = 'download' in saveLink;
      if (downloadSupported) {
        saveLink.download = name;
        saveLink.href = uri;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        saveLink.click();
        document.body.removeChild(saveLink);
      }
      else {
        window.open(uri, '_temp', 'menubar=no,toolbar=no,status=no');
      }
    }
  }

  function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0]
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], {type: mimeString});
  }

  out$.saveSvg = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function(uri) {
      out$.download(name, uri);
    });
  }

  out$.saveSvgAsPng = function(el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function(uri) {
      out$.download(name, uri);
    });
  }

  // if define is defined create as an AMD module
  if (typeof define !== 'undefined') {
    define(function() {
      return out$;
    });
  }

})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJnbG9iYWwuanMiLCJpbmRleC5qcyIsImxpYi9ib2FyZC9kZWxldGUuc3ZnIiwibGliL2JvYXJkL2VkaXQuc3ZnIiwibGliL2JvYXJkL2VtYmVkZGluZ3JlYWN0b3IuanMiLCJsaWIvYm9hcmQvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaXRlbWRyYWdnZXIuaHRtbCIsImxpYi9ib2FyZC9pdGVtZHJhZ2dlci9vdmVybGF5Lmh0bWwiLCJsaWIvYm9hcmQvbGluay5zdmciLCJsaWIvYm9hcmQvbGlua2Nvbm5lY3Rpb25wb2ludC5qcyIsImxpYi9ib2FyZC9tYW5pcHVsYXRpb25yZWFjdG9yLmpzIiwibGliL2JvYXJkL21hbmlwdWxhdG9yLmh0bWwiLCJsaWIvYm9hcmQvbWFwL2luZGV4LmpzIiwibGliL2JvYXJkL21hcC9wcmV2aWV3Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ByZXZpZXcuanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0LmpzIiwibGliL2JvYXJkL21hcC92aWV3cG9ydG91dGxpbmUvaW5kZXguanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0b3V0bGluZS9tYXJrdXAuc3ZnIiwibGliL2JvYXJkL21vdmUuc3ZnIiwibGliL2JvYXJkL3BhbnJlYWN0b3IuanMiLCJsaWIvYm9hcmQvcmVzaXplcmVhY3Rvci5qcyIsImxpYi9ib2FyZC9yb3RhdGVyZWFjdG9yLmpzIiwibGliL2JvYXJkL3ZhbGlkYXRlY29ubmVjdGlvbi5qcyIsImxpYi9ib2FyZC96b29tcmVhY3Rvci5qcyIsImxpYi9lbGVtZW50c21lbnUvaW5kZXguanMiLCJsaWIvbW9kYWxlZGl0L2luZGV4LmpzIiwibGliL21vZGFsZWRpdC9tb2RhbC5odG1sIiwibGliL3V0aWxzL2luZGV4LmpzIiwibGliL3V0aWxzL3NvcnRjZWxscy5qcyIsIm5vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7O0FDREE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdktBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1T0E7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JGQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1RkE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzQkE7QUFDQTs7QUNEQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdE9BO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtdGpvaW50ID0gcmVxdWlyZSgnLi8nKSxcclxuICAgIHdpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wyd3aW5kb3cnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ3dpbmRvdyddIDogbnVsbCk7XHJcblxyXG53aW5kb3cubXRqb2ludCA9IG10am9pbnQ7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vbGliL2JvYXJkJykuQm9hcmQsXHJcbiAgICBFbGVtZW50c01lbnUgPSByZXF1aXJlKCcuL2xpYi9lbGVtZW50c21lbnUnKS5FbGVtZW50c01lbnUsXHJcbiAgICBNb2RhbEVkaXQgPSByZXF1aXJlKCcuL2xpYi9tb2RhbGVkaXQnKS5Nb2RhbEVkaXQsXHJcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XHJcblxyXG4vLyBDb25zdHJ1Y3RvcnNcclxuZXhwb3J0cy5Cb2FyZCA9IEJvYXJkO1xyXG5leHBvcnRzLkVsZW1lbnRzTWVudSA9IEVsZW1lbnRzTWVudTtcclxuZXhwb3J0cy5Nb2RhbEVkaXQgPSBNb2RhbEVkaXQ7XHJcblxyXG4vLyBNYWtlciBGdW5jdGlvbnNcclxuZXhwb3J0cy5jcmVhdGVCb2FyZCA9IEJvYXJkO1xyXG5leHBvcnRzLmNyZWF0ZUVsZW1lbnRzTWVudSA9IEVsZW1lbnRzTWVudTtcclxuZXhwb3J0cy5jcmVhdGVNb2RhbEVkaXQgPSBNb2RhbEVkaXQ7XHJcblxyXG4vLyB1dGlsc1xyXG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnXFxyXFxuICAgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcbiAgIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiXFxyXFxuICAgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIlxcclxcbiAgIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCJcXHJcXG4gICB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCJcXHJcXG4gICB2ZXJzaW9uPVxcXCIxLjFcXFwiXFxyXFxuICAgaWQ9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICB4PVxcXCIwcHhcXFwiXFxyXFxuICAgeT1cXFwiMHB4XFxcIlxcclxcbiAgIHdpZHRoPVxcXCI0NC4yMzhweFxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzOHB4XFxcIlxcclxcbiAgIHZpZXdCb3g9XFxcIjAgMCA0NC4yMzggNDQuMjM4XFxcIlxcclxcbiAgIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFxyXFxuICAgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45MSByMTM3MjVcXFwiXFxyXFxuICAgc29kaXBvZGk6ZG9jbmFtZT1cXFwiZGVsZXRlLnN2Z1xcXCJcXHJcXG4gICBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NC4yMzggNDQuMjM4O1xcXCI+PG1ldGFkYXRhXFxyXFxuICAgICBpZD1cXFwibWV0YWRhdGE1MVxcXCI+PHJkZjpSREY+PGNjOldvcmtcXHJcXG4gICAgICAgICByZGY6YWJvdXQ9XFxcIlxcXCI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGVcXHJcXG4gICAgICAgICAgIHJkZjpyZXNvdXJjZT1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2VcXFwiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzXFxyXFxuICAgICBpZD1cXFwiZGVmczQ5XFxcIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXdcXHJcXG4gICAgIHBhZ2Vjb2xvcj1cXFwiI2ZmZmZmZlxcXCJcXHJcXG4gICAgIGJvcmRlcmNvbG9yPVxcXCIjNjY2NjY2XFxcIlxcclxcbiAgICAgYm9yZGVyb3BhY2l0eT1cXFwiMVxcXCJcXHJcXG4gICAgIG9iamVjdHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBncmlkdG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGd1aWRldG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PVxcXCIwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz1cXFwiMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD1cXFwiMTYwMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9XFxcIjgzN1xcXCJcXHJcXG4gICAgIGlkPVxcXCJuYW1lZHZpZXc0N1xcXCJcXHJcXG4gICAgIHNob3dncmlkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnpvb209XFxcIjUuMzM0NzgwMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN4PVxcXCI2OC44NzQzODdcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeT1cXFwiMjIuMTE4OTk5XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXg9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXk9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD1cXFwiMVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICAgIHNob3dndWlkZXM9XFxcInRydWVcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpndWlkZS1iYm94PVxcXCJ0cnVlXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQyMzBcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgcj1cXFwiMjFcXFwiXFxyXFxuICAgICAgIGN5PVxcXCIyMi4yMzc5OTlcXFwiXFxyXFxuICAgICAgIGN4PVxcXCIyMlxcXCJcXHJcXG4gICAgICAgaWQ9XFxcInBhdGg0MjA4XFxcIlxcclxcbiAgICAgICBzdHlsZT1cXFwiY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNDAwMDAwMDE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZVxcXCIgLz48Z1xcclxcbiAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICBpZD1cXFwiZzdcXFwiPjxwYXRoXFxyXFxuICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCJcXHJcXG4gICAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICAgIGlkPVxcXCJwYXRoOVxcXCJcXHJcXG4gICAgICAgICBkPVxcXCJtIDE1LjUzMywyOS40NTUgYyAtMC4xOTIsMCAtMC4zODQsLTAuMDczIC0wLjUzLC0wLjIyIC0wLjI5MywtMC4yOTMgLTAuMjkzLC0wLjc2OSAwLC0xLjA2MiBMIDI4LjE3NCwxNS4wMDIgYyAwLjI5MywtMC4yOTMgMC43NjgsLTAuMjkzIDEuMDYxLDAgMC4yOTMsMC4yOTMgMC4yOTMsMC43NjggMCwxLjA2MSBMIDE2LjA2MywyOS4yMzUgYyAtMC4xNDYsMC4xNDcgLTAuMzM4LDAuMjIgLTAuNTMsMC4yMiB6XFxcIiAvPjwvZz48Z1xcclxcbiAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICBpZD1cXFwiZzExXFxcIj48cGF0aFxcclxcbiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgc3R5bGU9XFxcImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgICBpZD1cXFwicGF0aDEzXFxcIlxcclxcbiAgICAgICAgIGQ9XFxcIm0gMjguNzA0LDI5LjQ1NSBjIC0wLjE5MiwwIC0wLjM4NCwtMC4wNzMgLTAuNTMsLTAuMjIgTCAxNS4wMDIsMTYuMDY0IGMgLTAuMjkzLC0wLjI5MyAtMC4yOTMsLTAuNzY4IDAsLTEuMDYxIDAuMjkzLC0wLjI5MyAwLjc2OCwtMC4yOTMgMS4wNjEsMCBsIDEzLjE3MSwxMy4xNzEgYyAwLjI5MywwLjI5MyAwLjI5MywwLjc2OSAwLDEuMDYyIC0wLjE0NiwwLjE0NiAtMC4zMzgsMC4yMTkgLTAuNTMsMC4yMTkgelxcXCIgLz48L2c+PHBhdGhcXHJcXG4gICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6I2ZmMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgaWQ9XFxcInBhdGgxNVxcXCJcXHJcXG4gICAgICAgZD1cXFwiTSAyMi4xMTksNDQuMjM3IEMgOS45MjIsNDQuMjM3IDAsMzQuMzE1IDAsMjIuMTIgMCw5LjkyNCA5LjkyMiwwLjAwMSAyMi4xMTksMC4wMDEgYyAxMi4xOTcsMCAyMi4xMTksOS45MjIgMjIuMTE5LDIyLjExOSAwLDEyLjE5NyAtOS45MjQsMjIuMTE3IC0yMi4xMTksMjIuMTE3IHogbSAwLC00Mi43MzYgQyAxMC43NSwxLjUwMSAxLjUsMTAuNzUxIDEuNSwyMi4xMiBjIDAsMTEuMzY5IDkuMjUsMjAuNjE5IDIwLjYxOSwyMC42MTkgMTEuMzY5LDAgMjAuNjE5LC05LjI1IDIwLjYxOSwtMjAuNjE5IDAsLTExLjM2OSAtOS4yNSwtMjAuNjE5IC0yMC42MTksLTIwLjYxOSB6XFxcIiAvPjwvZz48Z1xcclxcbiAgICAgaWQ9XFxcImcxN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcxOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0MVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0M1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0NVxcXCIgLz48L3N2Zz5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnXFxyXFxuICAgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcbiAgIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiXFxyXFxuICAgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIlxcclxcbiAgIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCJcXHJcXG4gICB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCJcXHJcXG4gICBjbGFzcz1cXFwiZGV0YWlsIGNvbnZlcnRTdmdJbmxpbmUgcmVwbGFjZWQtc3ZnXFxcIlxcclxcbiAgIGlkPVxcXCJpbWdWaWV3XFxcIlxcclxcbiAgIGZpbGw9XFxcIiMwMDAwMDBcXFwiXFxyXFxuICAgdmlld0JveD1cXFwiMCAwIDQ0LjIzNiA0NC4yMzZcXFwiXFxyXFxuICAgeD1cXFwiMHB4XFxcIlxcclxcbiAgIHk9XFxcIjBweFxcXCJcXHJcXG4gICB3aWR0aD1cXFwiMjU2XFxcIlxcclxcbiAgIGhlaWdodD1cXFwiMjU2XFxcIlxcclxcbiAgIHZlcnNpb249XFxcIjEuMVxcXCJcXHJcXG4gICBkYXRhLWt3PVxcXCJjb25maWd1cmF0aW9uMTJcXFwiXFxyXFxuICAgZGF0YS1pZD1cXFwiNTE4NzRcXFwiXFxyXFxuICAgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHJcXG4gICBpbmtzY2FwZTp2ZXJzaW9uPVxcXCIwLjkxIHIxMzcyNVxcXCJcXHJcXG4gICBzb2RpcG9kaTpkb2NuYW1lPVxcXCJlZGl0LnN2Z1xcXCI+PG1ldGFkYXRhXFxyXFxuICAgICBpZD1cXFwibWV0YWRhdGE1M1xcXCI+PHJkZjpSREY+PGNjOldvcmtcXHJcXG4gICAgICAgICByZGY6YWJvdXQ9XFxcIlxcXCI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGVcXHJcXG4gICAgICAgICAgIHJkZjpyZXNvdXJjZT1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2VcXFwiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzXFxyXFxuICAgICBpZD1cXFwiZGVmczUxXFxcIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXdcXHJcXG4gICAgIHBhZ2Vjb2xvcj1cXFwiI2ZmZmZmZlxcXCJcXHJcXG4gICAgIGJvcmRlcmNvbG9yPVxcXCIjNjY2NjY2XFxcIlxcclxcbiAgICAgYm9yZGVyb3BhY2l0eT1cXFwiMVxcXCJcXHJcXG4gICAgIG9iamVjdHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBncmlkdG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGd1aWRldG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PVxcXCIwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz1cXFwiMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD1cXFwiMTkyMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9XFxcIjEwMTdcXFwiXFxyXFxuICAgICBpZD1cXFwibmFtZWR2aWV3NDlcXFwiXFxyXFxuICAgICBzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp6b29tPVxcXCIyLjYwNzQ1NjNcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeD1cXFwiMjIxLjcwOTUxXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3k9XFxcIjEwNi43NDUyM1xcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy14PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy15PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XFxcIjFcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPVxcXCJpbWdWaWV3XFxcIiAvPjxjaXJjbGVcXHJcXG4gICAgIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4wMzQ1NTkzNztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDowO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZVxcXCJcXHJcXG4gICAgIGlkPVxcXCJwYXRoNDE4MVxcXCJcXHJcXG4gICAgIGN4PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICBjeT1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgcj1cXFwiMjEuMjU0MDE1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzNcXFwiPjxnXFxyXFxuICAgICAgIGlkPVxcXCJnNVxcXCI+PHBhdGhcXHJcXG4gICAgICAgICBmaWxsPVxcXCJcXFwiXFxyXFxuICAgICAgICAgZD1cXFwiTSAyMi4xMTggNDQuMjM2IEMgOS45MjIgNDQuMjM2IDAgMzQuMzE0IDAgMjIuMTE5IEMgMCA5LjkyMyA5LjkyMiAwIDIyLjExOCAwIHMgMjIuMTE4IDkuOTIzIDIyLjExOCAyMi4xMTkgQyA0NC4yMzYgMzQuMzE0IDM0LjMxNCA0NC4yMzYgMjIuMTE4IDQ0LjIzNiBaIE0gMjIuMTE4IDEuNSBDIDEwLjc1IDEuNSAxLjUgMTAuNzUgMS41IDIyLjExOSBzIDkuMjUgMjAuNjE3IDIwLjYxOCAyMC42MTcgcyAyMC42MTggLTkuMjQ4IDIwLjYxOCAtMjAuNjE3IFMgMzMuNDg2IDEuNSAyMi4xMTggMS41IFpcXFwiXFxyXFxuICAgICAgICAgaWQ9XFxcInBhdGg3XFxcIiAvPjxnXFxyXFxuICAgICAgICAgaWQ9XFxcImc5XFxcIj48Y2lyY2xlXFxyXFxuICAgICAgICAgICBmaWxsPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICBjeD1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICAgICAgY3k9XFxcIjIyLjQzOFxcXCJcXHJcXG4gICAgICAgICAgIHI9XFxcIjEuNDFcXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwiY2lyY2xlMTFcXFwiIC8+PHBhdGhcXHJcXG4gICAgICAgICAgIGZpbGw9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgIGQ9XFxcIk0gMjIuMTE4IDI0LjA5OCBjIC0wLjkxNiAwIC0xLjY2IC0wLjc0NCAtMS42NiAtMS42NiBjIDAgLTAuOTE1IDAuNzQ1IC0xLjY2IDEuNjYgLTEuNjYgcyAxLjY1OSAwLjc0NSAxLjY1OSAxLjY2IEMgMjMuNzc3IDIzLjM1NCAyMy4wMzQgMjQuMDk4IDIyLjExOCAyNC4wOTggWiBNIDIyLjExOCAyMS4yNzcgYyAtMC42NCAwIC0xLjE2IDAuNTIxIC0xLjE2IDEuMTYgcyAwLjUyMSAxLjE2MSAxLjE2IDEuMTYxIGMgMC42MzkgMCAxLjE1OSAtMC41MjEgMS4xNTkgLTEuMTYxIFMgMjIuNzU4IDIxLjI3NyAyMi4xMTggMjEuMjc3IFpcXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwicGF0aDEzXFxcIiAvPjwvZz48Z1xcclxcbiAgICAgICAgIGlkPVxcXCJnMTVcXFwiPjxwYXRoXFxyXFxuICAgICAgICAgICBmaWxsPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICBkPVxcXCJNIDIyLjExOCAzMi40MiBjIC0wLjYgMCAtMS4yMDggLTAuMDYxIC0xLjg2IC0wLjE4MiBjIC0wLjQ0NiAtMC4wNjIgLTAuODMgLTAuNDQ0IC0wLjg5OCAtMC45MjYgbCAtMC4zNTcgLTEuODM4IGMgLTAuNDYxIC0wLjIwNyAtMC44OTYgLTAuNDU5IC0xLjI4NyAtMC43NDQgbCAtMS43OTggMC42MjMgYyAtMC4wODcgMC4wNDEgLTAuMjMzIDAuMDcgLTAuMzgxIDAuMDcgYyAtMC4zMTcgMCAtMC42MjIgLTAuMTQ2IC0wLjgzNyAtMC4zOTggYyAtMC44MzYgLTAuOTUyIC0xLjQ4MiAtMi4wNzQgLTEuODYyIC0zLjIzMyBjIC0wLjE4MyAtMC40MTggLTAuMDIzIC0wLjk3NCAwLjQwMyAtMS4yNTcgbCAxLjM1OCAtMS4xODYgYyAtMC4wMjMgLTAuMjMgLTAuMDM1IC0wLjQ3OSAtMC4wMzUgLTAuNzUyIGMgMCAtMC4yNzEgMC4wMTEgLTAuNTIgMC4wMzUgLTAuNzUgbCAtMS40MzUgLTEuMjQ1IGMgLTAuMzUgLTAuMjI2IC0wLjUxIC0wLjc4IC0wLjMwMyAtMS4yNjIgYyAwLjM1NiAtMS4wOTggMS4wMDMgLTIuMjE5IDEuODQ3IC0zLjE4MSBjIDAuMjk5IC0wLjM1NSAwLjgyMiAtMC40ODggMS4yNjEgLTAuMjk4IGwgMS43NDYgMC42MDMgYyAwLjM5IC0wLjI4NCAwLjgyNSAtMC41MzcgMS4yODcgLTAuNzQ1IGwgMC4zNjQgLTEuODc0IGMgMC4wNjMgLTAuNDQ3IDAuNDQ5IC0wLjgzIDAuOTMyIC0wLjg5NCBjIDEuMTI1IC0wLjIzNCAyLjQ2NSAtMC4yNDMgMy42OTMgMC4wMDkgYyAwLjQzMiAwLjA1NSAwLjgxNyAwLjQzOCAwLjg4NiAwLjkyMSBsIDAuMzU3IDEuODM4IGMgMC40NDcgMC4yMDQgMC44NzUgMC40NTMgMS4yODMgMC43NDYgbCAxLjgwMyAtMC42MjQgYyAwLjA4NyAtMC4wNCAwLjIzMiAtMC4wNyAwLjM4MSAtMC4wNyBjIDAuMzE4IDAgMC42MjQgMC4xNDYgMC44MzggMC40MDEgYyAwLjgzNCAwLjk0OSAxLjQ4IDIuMDcgMS44NjEgMy4yMyBjIDAuMTgzIDAuNDE5IDAuMDIyIDAuOTc0IC0wLjQwMyAxLjI1OCBsIC0xLjM1OCAxLjE4NSBjIDAuMDIyIDAuMjMyIDAuMDM0IDAuNDggMC4wMzQgMC43NTIgcyAtMC4wMTEgMC41MiAtMC4wMzQgMC43NSBsIDEuNDM0IDEuMjQ1IGMgMC4zNTEgMC4yMjYgMC41MTEgMC43OCAwLjMwNCAxLjI2MSBjIC0wLjM1NiAxLjA5OCAtMS4wMDIgMi4yMiAtMS44NDcgMy4xODIgYyAtMC4zMDMgMC4zNTcgLTAuODI1IDAuNDg2IC0xLjI2MiAwLjI5OSBsIC0xLjc1IC0wLjYwNCBjIC0wLjQwNiAwLjI5MyAtMC44MzYgMC41NDEgLTEuMjgxIDAuNzQ2IGwgLTAuMzY0IDEuODczIGMgLTAuMDYyIDAuNDQ0IC0wLjQ0NiAwLjgyNyAtMC45MjcgMC44OTYgQyAyMy4zMjcgMzIuMzU5IDIyLjcxOCAzMi40MiAyMi4xMTggMzIuNDIgWiBNIDIwLjc4OSAzMC44MDkgYyAwLjk2IDAuMTUyIDEuNzM4IDAuMTQ2IDIuNjYgMCBsIDAuMzkgLTIuMDEyIGMgMC4wNSAtMC4yNTQgMC4yMjYgLTAuNDY0IDAuNDY2IC0wLjU1NyBjIDAuNTcgLTAuMjIxIDEuMTExIC0wLjUzNSAxLjYwNyAtMC45MzYgYyAwLjIwMSAtMC4xNjIgMC40NzIgLTAuMjA3IDAuNzE2IC0wLjEyNSBsIDEuOTM4IDAuNjcyIGMgMC41OCAtMC43MDUgMS4wMzMgLTEuNDkgMS4zMyAtMi4zMDEgbCAtMS41NDkgLTEuMzM3IGMgLTAuMjAxIC0wLjE3NCAtMC4yOTUgLTAuNDQyIC0wLjI0NiAtMC43MDMgYyAwLjA0NyAtMC4yNTkgMC4wNyAtMC41NTggMC4wNyAtMC45MTQgcyAtMC4wMjMgLTAuNjU0IC0wLjA3IC0wLjkxMyBjIC0wLjA1IC0wLjI2MSAwLjA0NSAtMC41MjkgMC4yNDYgLTAuNzAzIGwgMS41NDcgLTEuMzQyIGMgLTAuMzEzIC0wLjgzOCAtMC43NjQgLTEuNjExIC0xLjMzIC0yLjI5NyBsIC0xLjkzOCAwLjY3MyBjIC0wLjI0NCAwLjA4MyAtMC41MTYgMC4wMzYgLTAuNzE3IC0wLjEyNSBjIC0wLjQ5NSAtMC40IC0xLjAzNSAtMC43MTUgLTEuNjA1IC0wLjkzNiBjIC0wLjI0MiAtMC4wOTMgLTAuNDE4IC0wLjMwMyAtMC40NjcgLTAuNTU3IGwgLTAuMzkxIC0yLjAxNCBjIC0wLjkyNiAtMC4xNTYgLTEuNzkyIC0wLjE0OCAtMi42NTkgMCBsIC0wLjM5IDIuMDE0IGMgLTAuMDQ5IDAuMjU0IC0wLjIyNSAwLjQ2NCAtMC40NjYgMC41NTcgYyAtMC41OTggMC4yMzEgLTEuMTQ5IDAuNTUyIC0xLjU5NSAwLjkyNiBjIC0wLjIwMiAwLjE3IC0wLjQ3OCAwLjIyIC0wLjcyOCAwLjEzNSBsIC0xLjkzOCAtMC42NzIgYyAtMC41ODEgMC43MDcgLTEuMDM0IDEuNDkxIC0xLjMzIDIuMzAxIGwgMS41NDkgMS4zMzcgYyAwLjIwMSAwLjE3NSAwLjI5NCAwLjQ0MiAwLjI0NiAwLjcwNSBjIC0wLjA0OCAwLjI1NSAtMC4wNzEgMC41NTMgLTAuMDcxIDAuOTExIHMgMC4wMjMgMC42NTcgMC4wNzEgMC45MTIgYyAwLjA0OSAwLjI2MyAtMC4wNDQgMC41MyAtMC4yNDYgMC43MDUgbCAtMS41NDcgMS4zNDMgYyAwLjMxMyAwLjgzNiAwLjc2MyAxLjYwOSAxLjMyOSAyLjI5NyBsIDEuOTM4IC0wLjY3NCBjIDAuMjUxIC0wLjA4NCAwLjUyNiAtMC4wMzMgMC43MjggMC4xMzUgYyAwLjQ0NiAwLjM3NSAwLjk5OCAwLjY5MyAxLjU5NSAwLjkyNiBjIDAuMjQxIDAuMDkzIDAuNDE3IDAuMzAzIDAuNDY2IDAuNTU3IEwgMjAuNzg5IDMwLjgwOSBaXFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInBhdGgxN1xcXCIgLz48L2c+PC9nPjwvZz48Z1xcclxcbiAgICAgaWQ9XFxcImcxOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0MVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0M1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0NVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0N1xcXCIgLz48L3N2Zz5cXHJcXG5cIjtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIGNyZWF0ZVJlc2l6ZVJlYWN0b3IgPSByZXF1aXJlKCcuL3Jlc2l6ZXJlYWN0b3InKS5SZXNpemVSZWFjdG9yO1xyXG5cclxuZnVuY3Rpb24gaXNDb250YWluZXJPZihlbGVtZW50KSB7XHJcbiAgICB2YXIgY29udGFpbmVycyA9IGVsZW1lbnQuY29udGFpbmVycyB8fCBbXTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAtMSAhPT0gY29udGFpbmVycy5pbmRleE9mKGVsZW1lbnQuZ2V0KCd0eXBlJykpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbWJlZGRhYmxlKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIGZ1bGx5Q29udGFpbmVkKHBhcmVudCkge1xyXG4gICAgICAgIHZhciBiYm94ID0gZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSksXHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSBwYXJlbnQucGFkZGluZyxcclxuICAgICAgICAgICAgcGJib3ggPSBwYXJlbnQuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pLFxyXG4gICAgICAgICAgICBwaW50ZXJuYWwgPSBqb2ludC5nLnJlY3QoXHJcbiAgICAgICAgICAgICAgICBwYmJveC54ICsgcGFkZGluZy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcGJib3gueSArIHBhZGRpbmcudG9wLFxyXG4gICAgICAgICAgICAgICAgcGJib3gud2lkdGggLSBwYWRkaW5nLmxlZnQgLSBwYWRkaW5nLnJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcGJib3guaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQuaWQgIT09IGVsZW1lbnQuaWQgJiYgcGludGVybmFsLmNvbnRhaW5zUmVjdChiYm94KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWxlbWVudC5mdWxseUNvbnRhaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBmdWxseUNvbnRhaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBFbWJlZGRpbmdSZWFjdG9yKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFbWJlZGRpbmdSZWFjdG9yKSkgeyByZXR1cm4gbmV3IEVtYmVkZGluZ1JlYWN0b3Iob3B0aW9ucyk7IH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5wYXBlciB8fCB0eXBlb2Ygb3B0aW9ucy5wYXBlciAhPT0gJ29iamVjdCcgfHwgIShvcHRpb25zLnBhcGVyIGluc3RhbmNlb2Ygam9pbnQuZGlhLlBhcGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG5cclxuICAgIHZhciBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIHN0YXJ0UG9zaXRpb247XHJcblxyXG4gICAgcGFwZXIub24oJ2NlbGw6cG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoY2VsbFZpZXcsIGV2dCwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcChldnQsIHgsIHkpO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gY2VsbFZpZXcubW9kZWw7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmlzTGluaygpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZWxlbWVudC5nZXQoJ3Bvc2l0aW9uJyk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQudG9Gcm9udCh7ZGVlcDogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBtb2RlbC5zdGFydEJhdGNoKCd0by1mcm9udCcpO1xyXG4gICAgICAgIF8uaW52b2tlKG1vZGVsLmdldExpbmtzKCksICd0b0Zyb250Jyk7XHJcbiAgICAgICAgbW9kZWwuc3RvcEJhdGNoKCd0by1mcm9udCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50KGVsZW1lbnQsIHgsIHkpIHtcclxuICAgICAgICBfLm5vb3AoeCwgeSk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzQmVsb3cgPSBtb2RlbC5maW5kTW9kZWxzSW5BcmVhKGVsZW1lbnQuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnRzQmVsb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfLmNoYWluKGVsZW1lbnRzQmVsb3cpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlzQ29udGFpbmVyT2YoZWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlzRW1iZWRkYWJsZShlbGVtZW50KSlcclxuICAgICAgICAgICAgICAgIC5zb3J0QnkoXy5tZXRob2QoJ2dldCcsICd6JykpXHJcbiAgICAgICAgICAgICAgICAubGFzdCgpXHJcbiAgICAgICAgICAgICAgICAudmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVRvKGVsZW1lbnQsIHgsIHkpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGVtZW50LnBvc2l0aW9uKCk7XHJcbiAgICAgICAgZWxlbWVudC50cmFuc2xhdGUoeCAtIHBvc2l0aW9uLngsIHkgLSBwb3NpdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXBlci5vbignY2VsbDpwb2ludGVydXAnLCBmdW5jdGlvbiAoY2VsbFZpZXcsIGV2dCwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcChldnQsIHgsIHkpO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gY2VsbFZpZXcubW9kZWwsXHJcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gZWxlbWVudC5nZXQoJ3Bvc2l0aW9uJyksXHJcbiAgICAgICAgICAgIG9sZHBhcmVudCxcclxuICAgICAgICAgICAgbmV3cGFyZW50O1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnggPT09IHN0YXJ0UG9zaXRpb24ueCAmJiBuZXdQb3NpdGlvbi55ID09PSBzdGFydFBvc2l0aW9uLnkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICBtb3ZlVG8oZWxlbWVudCwgc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVwYXJlbnQoKSB7XHJcbiAgICAgICAgICAgIF8uZWFjaChcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldENvbm5lY3RlZExpbmtzKGVsZW1lbnQsIHtkZWVwOiB0cnVlfSksXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobGluaykgeyBsaW5rLnJlcGFyZW50KCk7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld3BhcmVudCA9IGdldFBhcmVudChlbGVtZW50LCB4LCB5KTtcclxuICAgICAgICBpZiAoIW5ld3BhcmVudCAmJiBlbGVtZW50LnJlcXVpcmVFbWJlZGRpbmcpIHtcclxuICAgICAgICAgICAgYWJvcnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2xkcGFyZW50ID0gbW9kZWwuZ2V0Q2VsbChlbGVtZW50LmdldCgncGFyZW50JykpO1xyXG5cclxuICAgICAgICBpZiAobmV3cGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRwYXJlbnQuaWQgIT09IG5ld3BhcmVudC5pZCAmJiBlbGVtZW50LmdldCgnZml4ZWRQYXJlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZHBhcmVudC51bmVtYmVkKGVsZW1lbnQsIHtyZXBhcmVudGluZzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3BhcmVudC5lbWJlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3cGFyZW50LmVtYmVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgcmVwYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdldCgnZml4ZWRQYXJlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9sZHBhcmVudC51bmVtYmVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RlbC5vbignYWRkJywgZnVuY3Rpb24gKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5pc0xpbmsoKSkgeyByZXR1cm4gY2VsbC5nZXQoJ3BhcmVudCcpIHx8IGNlbGwucmVwYXJlbnQoKTsgfVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gY2VsbCxcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIHBhcmVudDtcclxuICAgICAgICBpZiAoZWxlbWVudC5nZXQoJ3BhcmVudCcpKSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG1vZGVsLmdldENlbGwoZWxlbWVudC5nZXQoJ3BhcmVudCcpKTtcclxuICAgICAgICAgICAgcGFyZW50LnVuZW1iZWQoZWxlbWVudCwge3JlcGFyZW50aW5nOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHBhcmVudC5lbWJlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbiA9IGVsZW1lbnQuZ2V0KCdwb3NpdGlvbicpO1xyXG4gICAgICAgIHBhcmVudCA9IGdldFBhcmVudChlbGVtZW50LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5lbWJlZChlbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5yZXF1aXJlRW1iZWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBfLmRlZmVyKGZ1bmN0aW9uICgpIHsgZWxlbWVudC5yZW1vdmUoKTsgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldCgncGFyZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0cy5FbWJlZGRpbmdSZWFjdG9yID0gRW1iZWRkaW5nUmVhY3RvcjtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBiYWNrYm9uZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydCYWNrYm9uZSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnQmFja2JvbmUnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIHdpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wyd3aW5kb3cnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ3dpbmRvdyddIDogbnVsbCksXHJcbiAgICBjcmVhdGVNYXAgPSByZXF1aXJlKCcuL21hcCcpLk1hcCxcclxuICAgIGNyZWF0ZUl0ZW1EcmFnZ2VyID0gcmVxdWlyZSgnLi9pdGVtZHJhZ2dlcicpLkl0ZW1EcmFnZ2VyLFxyXG4gICAgY3JlYXRlUGFuUmVhY3RvciA9IHJlcXVpcmUoJy4vcGFucmVhY3RvcicpLlBhblJlYWN0b3IsXHJcbiAgICBjcmVhdGVab29tUmVhY3RvciA9IHJlcXVpcmUoJy4vem9vbXJlYWN0b3InKS5ab29tUmVhY3RvcixcclxuICAgIGNyZWF0ZU1hbmlwdWxhdGlvblJlYWN0b3IgPSByZXF1aXJlKCcuL21hbmlwdWxhdGlvbnJlYWN0b3InKS5NYW5pcHVsYXRpb25SZWFjdG9yLFxyXG4gICAgY3JlYXRlRW1iZWRkaW5nUmVhY3RvciA9IHJlcXVpcmUoJy4vZW1iZWRkaW5ncmVhY3RvcicpLkVtYmVkZGluZ1JlYWN0b3IsXHJcbiAgICBsaW5rQ29ubmVjdGlvblBvaW50ID0gcmVxdWlyZSgnLi9saW5rY29ubmVjdGlvbnBvaW50JykubGlua0Nvbm5lY3Rpb25Qb2ludCxcclxuICAgIHZhbGlkYXRlQ29ubmVjdGlvbiA9IHJlcXVpcmUoJy4vdmFsaWRhdGVjb25uZWN0aW9uJykudmFsaWRhdGVDb25uZWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gQm9hcmQob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJvYXJkKSkgeyByZXR1cm4gbmV3IEJvYXJkKG9wdGlvbnMpOyB9XHJcbiAgICBfLmV4dGVuZCh0aGlzLCBiYWNrYm9uZS5FdmVudHMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuYWN0aW9ucyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLmFjdGlvbnMpKSB7IHRocm93IG5ldyBFcnJvcignYWN0aW9ucyBvcHRpb24gc2hvdWxkIGJlIGFuIEFycmF5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5kZWZhdWx0TGluayB8fCB0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0TGluayAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2RlZmF1bHRMaW5rIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbicpOyB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGVsID0gJCgkKG9wdGlvbnMuZWwpLmFkZENsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1wYXBlcicpWzBdKSxcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgZ3JpZFNpemUgPSAxMCxcclxuICAgICAgICBkZWZhdWx0TGluayA9IG9wdGlvbnMuZGVmYXVsdExpbmssXHJcbiAgICAgICAgcGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICB3aWR0aDogZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogZ3JpZFNpemUsXHJcbiAgICAgICAgICAgIGRlZmF1bHRMaW5rOiBkZWZhdWx0TGluayxcclxuICAgICAgICAgICAgbXVsdGlMaW5rczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgICAgIGxpbmtQaW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWRhdGVDb25uZWN0aW9uOiB2YWxpZGF0ZUNvbm5lY3Rpb24sXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiAhb3B0aW9ucy5yZWFkb25seVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1hcCA9IGNyZWF0ZU1hcCh7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnRcclxuICAgICAgICB9KSxcclxuICAgICAgICB6b29tUmVhY3RvciA9IGNyZWF0ZVpvb21SZWFjdG9yKHtcclxuICAgICAgICAgICAgcGFwZXI6IHBhcGVyLFxyXG4gICAgICAgICAgICBlbDogZWwsXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgbWluU2NhbGU6IG9wdGlvbnMubWluU2NhbGUgfHwgMC4wMSxcclxuICAgICAgICAgICAgbWF4U2NhbGU6IG9wdGlvbnMubWF4U2NhbGUgfHwgMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1hbmlwdWxhdGlvblJlYWN0b3IgPSBjcmVhdGVNYW5pcHVsYXRpb25SZWFjdG9yKHtcclxuICAgICAgICAgICAgcGFwZXI6IHBhcGVyLFxyXG4gICAgICAgICAgICBlbDogZWwsXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgZ3JpZFNpemU6IGdyaWRTaXplLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBvcHRpb25zLmFjdGlvbnMsXHJcbiAgICAgICAgICAgIHJlc2l6ZTogb3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgICAgIHJvdGF0ZTogb3B0aW9ucy5yb3RhdGUsXHJcbiAgICAgICAgICAgIG1hZ25ldGl6ZTogb3B0aW9ucy5tYWduZXRpemVcclxuICAgICAgICB9KSxcclxuICAgICAgICBlbWJlZGRpbmdSZWFjdG9yID0gY3JlYXRlRW1iZWRkaW5nUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgXy5ub29wKGVtYmVkZGluZ1JlYWN0b3IpO1xyXG5cclxuICAgIG1hbmlwdWxhdGlvblJlYWN0b3Iub24oJ2FsbCcsIHRoaXMudHJpZ2dlciwgdGhpcyk7XHJcblxyXG4gICAgcGFwZXIub24oJ2FsbCcsIHRoaXMudHJpZ2dlciwgdGhpcyk7XHJcblxyXG4gICAgcGFwZXIub24oJ2JsYW5rOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGV2dCwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcChldnQpO1xyXG4gICAgICAgIGNyZWF0ZVBhblJlYWN0b3Ioe3BhcGVyOiBwYXBlciwgZWw6IGVsLCB4OiB4LCB5OiB5fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3cG9ydCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IGVsLm9mZnNldCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgdG9wTGVmdCA9IGpvaW50LmcucG9pbnQobGVmdCwgdG9wKSxcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBqb2ludC5nLnBvaW50KGxlZnQgKyB3aWR0aCwgdG9wICsgaGVpZ2h0KSxcclxuICAgICAgICAgICAgbWluID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXggPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoYm90dG9tUmlnaHQpO1xyXG4gICAgICAgIG1hcC5zZXRWaWV3cG9ydCh7eDogbWluLngsIHk6IG1pbi55LCB3aWR0aDogbWF4LnggLSBtaW4ueCwgaGVpZ2h0OiBtYXgueSAtIG1pbi55fSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGFwZXIuc2V0RGltZW5zaW9ucyhlbC53aWR0aCgpLCBlbC5oZWlnaHQoKSk7XHJcbiAgICAgICAgdXBkYXRlVmlld3BvcnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhcGVyLm9uKCd0cmFuc2xhdGUnLCB1cGRhdGVWaWV3cG9ydCk7XHJcbiAgICBwYXBlci5vbignc2NhbGUnLCB1cGRhdGVWaWV3cG9ydCk7XHJcbiAgICBtb2RlbC5vbmNlKCdhZGQnLCB1cGRhdGVWaWV3cG9ydCk7XHJcblxyXG4gICAgc2VsZi56b29tRSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB6b29tUmVhY3Rvci56b29tRSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnBhcGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXBlcjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5kb3dubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXAuZG93bmxvYWQoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5jcmVhdGVJdGVtRHJhZ2dlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1EcmFnZ2VyKHtcclxuICAgICAgICAgICAgcGFwZXI6IHBhcGVyLFxyXG4gICAgICAgICAgICBlbDogb3B0aW9ucy5lbCxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogZ3JpZFNpemUsXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzOiBvcHRpb25zLmNyZWF0ZUVsZW1lbnRzLFxyXG4gICAgICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBvcHRpb25zLm1pbkhlaWdodCxcclxuICAgICAgICAgICAgcGFkZGluZzogb3B0aW9ucy5wYWRkaW5nLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnRzLkJvYXJkID0gQm9hcmQ7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgYmFja2JvbmUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snQmFja2JvbmUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0JhY2tib25lJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICBkb2N1bWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydkb2N1bWVudCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnZG9jdW1lbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gY2xvbmUobW9kZWwsIGl0ZW1zKSB7XHJcbiAgICB2YXIgbWFwcGluZyA9IG1vZGVsLmNsb25lQ2VsbHMoaXRlbXMpO1xyXG4gICAgcmV0dXJuIF8ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gbWFwcGluZ1tpLmlkXTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBJdGVtcyhpdGVtcywgc2l6ZSwgbWluSGVpZ2h0LCBwYWRkaW5nKSB7XHJcbiAgICB2YXIgYmJveCA9IGpvaW50LmRpYS5HcmFwaC5wcm90b3R5cGUuZ2V0QkJveChpdGVtcywge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICBtYXhzaXplID0gTWF0aC5tYXgoYmJveC53aWR0aCwgYmJveC5oZWlnaHQpICsgcGFkZGluZyAqIDIsXHJcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBtYXhzaXplIC8gc2l6ZSksXHJcbiAgICAgICAgYWN0dWFsd2lkdGggPSBzaXplICogc2NhbGUsXHJcbiAgICAgICAgYWN0dWFsaGVpZ2h0ID0gTWF0aC5tYXgoYmJveC5oZWlnaHQgKyBwYWRkaW5nICogMiwgbWluSGVpZ2h0ICogc2NhbGUpLFxyXG4gICAgICAgIGxlZnQgPSAoYWN0dWFsd2lkdGggLSBiYm94LndpZHRoKSAvIDIsXHJcbiAgICAgICAgdG9wID0gKGFjdHVhbGhlaWdodCAtIGJib3guaGVpZ2h0KSAvIDIsXHJcbiAgICAgICAgY29udGFpbmVySXRlbSA9IG5ldyBqb2ludC5zaGFwZXMuYmFzaWMuUmVjdCh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IGJib3gueCAtIGxlZnQsIHk6IGJib3gueSAtIHRvcH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IGFjdHVhbHdpZHRoLCBoZWlnaHQ6IGFjdHVhbGhlaWdodH0sXHJcbiAgICAgICAgICAgIGF0dHJzOiB7IHJlY3Q6IHsgZmlsbDogJ3RyYW5zcGFyZW50Jywgc3Ryb2tlOiAndHJhbnNwYXJlbnQnIH0gfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXJJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVycyhwYXBlciwgaXRlbXMpIHtcclxuICAgIF8uZWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBwYXBlci5maW5kVmlld0J5TW9kZWwoaXRlbSkuJGVsLmNzcygncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEl0ZW1EcmFnZ2VyKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJdGVtRHJhZ2dlcikpIHsgcmV0dXJuIG5ldyBJdGVtRHJhZ2dlcihvcHRpb25zKTsgfVxyXG4gICAgXy5leHRlbmQodGhpcywgYmFja2JvbmUuRXZlbnRzKTtcclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuY3JlYXRlRWxlbWVudHMgfHwgdHlwZW9mIG9wdGlvbnMuY3JlYXRlRWxlbWVudHMgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVFbGVtZW50cyBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50IHx8IHR5cGVvZiBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdsaW5rQ29ubmVjdGlvblBvaW50IG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbnMnKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmdyaWRTaXplICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2dyaWRTaXplIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5ncmlkU2l6ZSA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBhZGRpbmcgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcigncGFkZGluZyBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMucGFkZGluZyA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdwYWRkaW5nIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud2lkdGggIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignd2lkdGggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLndpZHRoIDwgMiAqIG9wdGlvbnMucGFkZGluZykgeyB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybyAob3IgMiB0aW1lIHBhZGRpbmcpJyk7IH1cclxuICAgIGlmIChvcHRpb25zLm1pbkhlaWdodCA8IDIgKiBvcHRpb25zLnBhZGRpbmcpIHsgdGhyb3cgbmV3IEVycm9yKCdtaW5IZWlnaHQgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvIChvciAyIHRpbWUgcGFkZGluZyknKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBncmlkU2l6ZSA9IG9wdGlvbnMuZ3JpZFNpemUsXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHMgPSBvcHRpb25zLmNyZWF0ZUVsZW1lbnRzLFxyXG4gICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcclxuICAgICAgICBtaW5IZWlnaHQgPSBvcHRpb25zLm1pbkhlaWdodCxcclxuICAgICAgICBwYXBlcldpZHRoID0gb3B0aW9ucy53aWR0aCAtIHBhZGRpbmcgKiAyLFxyXG4gICAgICAgIG92ZXJsYXlpdGVtcyA9IGNyZWF0ZUVsZW1lbnRzKCksXHJcbiAgICAgICAgbWFpbml0ZW0gPSB3cmFwSXRlbXMob3ZlcmxheWl0ZW1zLCBwYXBlcldpZHRoLCBtaW5IZWlnaHQsIGdyaWRTaXplKSxcclxuICAgICAgICBtYWlucG9zaXRpb24gPSBtYWluaXRlbS5wb3NpdGlvbigpLFxyXG4gICAgICAgIHNpemUgPSBtYWluaXRlbS5nZXQoJ3NpemUnKSxcclxuICAgICAgICBwcmV2aWV3ID0gKGZ1bmN0aW9uICgpIHsgdmFyIGNvbnRhaW5lciA9ICQocmVxdWlyZSgnLi9pdGVtZHJhZ2dlci5odG1sJykpLmNzcygncGFkZGluZycsIHBhZGRpbmcpOyAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZChjb250YWluZXIpOyByZXR1cm4gY29udGFpbmVyOyB9KCkpLFxyXG4gICAgICAgIGJhc2VTY2FsZSA9IE1hdGgubWluKDEsIHBhcGVyV2lkdGggLyBzaXplLndpZHRoKSxcclxuICAgICAgICBwYXBlckhlaWdodCA9IHNpemUuaGVpZ2h0ICogYmFzZVNjYWxlLFxyXG4gICAgICAgIG92ZXJsYXltb2RlbCA9IG5ldyBqb2ludC5kaWEuR3JhcGgoKSxcclxuICAgICAgICBvdmVybGF5cGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IHByZXZpZXcsXHJcbiAgICAgICAgICAgIHdpZHRoOiBwYXBlcldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHBhcGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBtb2RlbDogb3ZlcmxheW1vZGVsLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogZ3JpZFNpemVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5cGFwZXIuc2NhbGUoYmFzZVNjYWxlLCBiYXNlU2NhbGUpO1xyXG4gICAgb3ZlcmxheW1vZGVsLmFkZENlbGwobWFpbml0ZW0pO1xyXG4gICAgb3ZlcmxheW1vZGVsLmFkZENlbGxzKG92ZXJsYXlpdGVtcyk7XHJcbiAgICAvL2ZvciByZW5kZXJpbmdcclxuICAgIGVsLmFwcGVuZChwcmV2aWV3KTtcclxuICAgIC8vcmVtb3ZlIGhhbmRsZXJzXHJcbiAgICByZW1vdmVIYW5kbGVycyhvdmVybGF5cGFwZXIsIG92ZXJsYXlpdGVtcyk7XHJcbiAgICBfLmVhY2gob3ZlcmxheWl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmdldCgncGFyZW50JykpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbWFpbml0ZW0uZW1iZWQoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIG1haW5pdGVtLnRyYW5zbGF0ZSgtbWFpbnBvc2l0aW9uLngsIC1tYWlucG9zaXRpb24ueSk7XHJcblxyXG4gICAgb3ZlcmxheXBhcGVyLm9uKCdjZWxsOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGNlbGxWaWV3LCBlLCB4LCB5KSB7XHJcbiAgICAgICAgXy5ub29wKGNlbGxWaWV3KTtcclxuICAgICAgICB2YXIgb3ZlcmxheSA9ICQocmVxdWlyZSgnLi9vdmVybGF5Lmh0bWwnKSksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICQocGFwZXIuZWwpLFxyXG4gICAgICAgICAgICBzcGFjZXIgPSAkKCc8ZGl2PjwvZGl2PicpLmNzcygnaGVpZ2h0JywgcHJldmlldy5oZWlnaHQoKSArIDIgKiBwYWRkaW5nKSxcclxuICAgICAgICAgICAgbGVmdCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0b3AgPSBjb250YWluZXIub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgICAgICB3aWR0aCA9IGNvbnRhaW5lci53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHRvcExlZnQgPSBqb2ludC5nLnBvaW50KGxlZnQsIHRvcCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0ID0gam9pbnQuZy5wb2ludChsZWZ0ICsgd2lkdGgsIHRvcCArIGhlaWdodCksXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBqb2ludC5nLnBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSxcclxuICAgICAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQodG9wTGVmdCksXHJcbiAgICAgICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KSxcclxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChjdXJyZW50KSxcclxuICAgICAgICAgICAgc2NhbGUgPSBqb2ludC5nLnBvaW50KHdpZHRoIC8gKG1heExvY2FsLnggLSBtaW5Mb2NhbC54KSwgaGVpZ2h0IC8gKG1heExvY2FsLnkgLSBtaW5Mb2NhbC55KSksXHJcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBqb2ludC5nLnBvaW50KGpvaW50Lmcuc25hcFRvR3JpZChzdGFydFBvaW50LnggLSB4LCBncmlkU2l6ZSksIGpvaW50Lmcuc25hcFRvR3JpZChzdGFydFBvaW50LnkgLSB5LCBncmlkU2l6ZSkpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG92ZXJsYXkpO1xyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKHByZXZpZXcpO1xyXG4gICAgICAgIGVsLmFwcGVuZChzcGFjZXIpO1xyXG4gICAgICAgIHByZXZpZXcuY3NzKCdwYWRkaW5nJywgMCk7XHJcblxyXG4gICAgICAgIG92ZXJsYXlwYXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIG92ZXJsYXlwYXBlci5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcclxuICAgICAgICBvdmVybGF5cGFwZXIuc2V0T3JpZ2luKC1taW5Mb2NhbC54ICogc2NhbGUueCwgLW1pbkxvY2FsLnkgKiBzY2FsZS55KTtcclxuICAgICAgICBtYWluaXRlbS50cmFuc2xhdGUoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBvdmVybGF5cGFwZXIub25jZSgnY2VsbDpwb2ludGVybW92ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbml0ZW0udHJhbnNsYXRlKC1zdGFydFBvc2l0aW9uLngsIC1zdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvdmVybGF5cGFwZXIub24oJ2NlbGw6cG9pbnRlcnVwJywgZnVuY3Rpb24gcG9pbnRlcnVwKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBtYWluaXRlbS5wb3NpdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgbWFpbmlkID0gbWFpbml0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvcGl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheXRvcGl0ZW1zID0gXy5maWx0ZXIob3ZlcmxheWl0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5nZXQoJ3BhcmVudCcpID09PSBtYWluaWQ7IH0pO1xyXG4gICAgICAgICAgICBfLmVhY2gob3ZlcmxheXRvcGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkgeyBtYWluaXRlbS51bmVtYmVkKGl0ZW0pOyB9KTtcclxuICAgICAgICAgICAgaXRlbXMgPSBjbG9uZShvdmVybGF5bW9kZWwsIG92ZXJsYXlpdGVtcyk7XHJcbiAgICAgICAgICAgIHRvcGl0ZW1zID0gXy5maWx0ZXIoaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiAhaS5nZXQoJ3BhcmVudCcpOyB9KTtcclxuICAgICAgICAgICAgbW9kZWwuYWRkQ2VsbHMoaXRlbXMpO1xyXG4gICAgICAgICAgICBfLmVhY2gob3ZlcmxheXRvcGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkgeyBtYWluaXRlbS5lbWJlZChpdGVtKTsgfSk7XHJcbiAgICAgICAgICAgIF8uZWFjaCh0b3BpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udG9Gcm9udCh7ZGVlcDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmQocHJldmlldyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHByZXZpZXcuY3NzKCdwYWRkaW5nJywgcGFkZGluZyk7XHJcblxyXG4gICAgICAgICAgICBtYWluaXRlbS50cmFuc2xhdGUoLXBvc2l0aW9uLngsIC1wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLnNldERpbWVuc2lvbnMocGFwZXJXaWR0aCwgcGFwZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBvdmVybGF5cGFwZXIuc2NhbGUoYmFzZVNjYWxlLCBiYXNlU2NhbGUpO1xyXG4gICAgICAgICAgICBvdmVybGF5cGFwZXIuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLm9mZignY2VsbDpwb2ludGVydXAnLCBwb2ludGVydXApO1xyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2RyYWc6ZW5kJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYudHJpZ2dlcignZHJhZzpzdGFydCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbkl0ZW1EcmFnZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlbURyYWdnZXIucHJvdG90eXBlKTtcclxuXHJcbmV4cG9ydHMuSXRlbURyYWdnZXIgPSBJdGVtRHJhZ2dlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj48L2Rpdj5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6MDsgcmlnaHQ6MDsgdG9wOiAwOyBib3R0b206IDA7IHotaW5kZXg6IDEwMDAwMDtcXFwiPjwvZGl2PlxcclxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmdcXHJcXG4gICB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiXFxyXFxuICAgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCJcXHJcXG4gICB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiXFxyXFxuICAgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM2IDQ0LjIzNlxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICB3aWR0aD1cXFwiNDQuMjM2XFxcIlxcclxcbiAgIHk9XFxcIjBweFxcXCJcXHJcXG4gICB4PVxcXCIwcHhcXFwiXFxyXFxuICAgaWQ9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICB2ZXJzaW9uPVxcXCIxLjFcXFwiPjxtZXRhZGF0YVxcclxcbiAgICAgaWQ9XFxcIm1ldGFkYXRhNTNcXFwiPjxyZGY6UkRGPjxjYzpXb3JrXFxyXFxuICAgICAgICAgcmRmOmFib3V0PVxcXCJcXFwiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlXFxyXFxuICAgICAgICAgICByZGY6cmVzb3VyY2U9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlXFxcIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmc1xcclxcbiAgICAgaWQ9XFxcImRlZnM1MVxcXCIgLz48Y2lyY2xlXFxyXFxuICAgICByPVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICBjeT1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgY3g9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgIGlkPVxcXCJwYXRoNDE4MVxcXCJcXHJcXG4gICAgIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40MDAwMDAwMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlXFxcIiAvPjxwYXRoXFxyXFxuICAgICBpZD1cXFwicGF0aDdcXFwiXFxyXFxuICAgICBkPVxcXCJNIDIyLjExOCw0NC4yMzYgQyA5LjkyMiw0NC4yMzYgMCwzNC4zMTQgMCwyMi4xMTkgMCw5LjkyMyA5LjkyMiwwIDIyLjExOCwwIGMgMTIuMTk2LDAgMjIuMTE4LDkuOTIzIDIyLjExOCwyMi4xMTkgMCwxMi4xOTUgLTkuOTIyLDIyLjExNyAtMjIuMTE4LDIyLjExNyB6IG0gMCwtNDIuNzM2IEMgMTAuNzUsMS41IDEuNSwxMC43NSAxLjUsMjIuMTE5IGMgMCwxMS4zNjkgOS4yNSwyMC42MTcgMjAuNjE4LDIwLjYxNyAxMS4zNjgsMCAyMC42MTgsLTkuMjQ4IDIwLjYxOCwtMjAuNjE3IEMgNDIuNzM2LDEwLjc1IDMzLjQ4NiwxLjUgMjIuMTE4LDEuNSBaXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzE5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzNcXFwiXFxyXFxuICAgICB0cmFuc2Zvcm09XFxcIm1hdHJpeCgwLjA3ODkwODYzLC0wLjA3ODkwODYzLDAuMDc4OTA4NjMsMC4wNzg5MDg2MywwLjkwNDc2MTA3LDIyLjExODEyNClcXFwiPjxwYXRoXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNVxcXCJcXHJcXG4gICAgICAgZD1cXFwibSAyNjUuMTcxLDEyNS41NzcgLTgwLC04MCBjIC00Ljg4MSwtNC44ODEgLTEyLjc5NywtNC44ODEgLTE3LjY3OCwwIC00Ljg4Miw0Ljg4MiAtNC44ODIsMTIuNzk2IDAsMTcuNjc4IGwgNTguNjYxLDU4LjY2MSAtMjEzLjY1NCwwIGMgLTYuOTAzLDAgLTEyLjUsNS41OTcgLTEyLjUsMTIuNSAwLDYuOTAyIDUuNTk3LDEyLjUgMTIuNSwxMi41IGwgMjEzLjY1NCwwIC01OC42NTksNTguNjYxIGMgLTQuODgyLDQuODgyIC00Ljg4MiwxMi43OTYgMCwxNy42NzggMi40NCwyLjQzOSA1LjY0LDMuNjYxIDguODM5LDMuNjYxIDMuMTk5LDAgNi4zOTgsLTEuMjIyIDguODM5LC0zLjY2MSBsIDc5Ljk5OCwtODAgYyA0Ljg4MiwtNC44ODIgNC44ODIsLTEyLjc5NiAwLC0xNy42NzggelxcXCIgLz48L2c+PC9zdmc+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbnZhciBhbGxCb3JkZXJzID0ge3RvcDogdHJ1ZSwgbGVmdDogdHJ1ZSwgYm90dG9tOiB0cnVlLCByaWdodDogdHJ1ZX07XHJcblxyXG5mdW5jdGlvbiBmaXhCb3JkZXJzKGJvcmRlcnMpIHtcclxuICAgIGlmICghYm9yZGVycykgeyByZXR1cm4gYWxsQm9yZGVyczsgfVxyXG4gICAgaWYgKGJvcmRlcnMudG9wIHx8IGJvcmRlcnMubGVmdCB8fCBib3JkZXJzLmJvdHRvbSB8fCBib3JkZXJzLnJpZ2h0KSB7IHJldHVybiBib3JkZXJzOyB9XHJcbiAgICByZXR1cm4gYWxsQm9yZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gbmVhcmVzdFBvaW50T25Cb3JkZXIobWUsIG90aGVyLCBib3JkZXJzKSB7XHJcbiAgICBib3JkZXJzID0gZml4Qm9yZGVycyhib3JkZXJzKTtcclxuICAgIHZhciBsZWZ0ID0gICBib3JkZXJzLmxlZnQgICA/IE1hdGguYWJzKG1lLm9yaWdpbigpLnggLSBvdGhlci5vcmlnaW4oKS54KSA6IEluZmluaXR5LFxyXG4gICAgICAgIHRvcCA9ICAgIGJvcmRlcnMudG9wICAgID8gTWF0aC5hYnMobWUub3JpZ2luKCkueSAtIG90aGVyLm9yaWdpbigpLnkpIDogSW5maW5pdHksXHJcbiAgICAgICAgcmlnaHQgPSAgYm9yZGVycy5yaWdodCAgPyBNYXRoLmFicyhtZS5jb3JuZXIoKS54IC0gb3RoZXIuY29ybmVyKCkueCkgOiBJbmZpbml0eSxcclxuICAgICAgICBib3R0b20gPSBib3JkZXJzLmJvdHRvbSA/IE1hdGguYWJzKG1lLmNvcm5lcigpLnkgLSBvdGhlci5jb3JuZXIoKS55KSA6IEluZmluaXR5LFxyXG4gICAgICAgIG1pbiA9IE1hdGgubWluKGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSksXHJcbiAgICAgICAgY2VudGVyID0gbWUuY29udGFpbnNSZWN0KG90aGVyKSA/IG90aGVyLmNlbnRlcigpIDogbWUuY2VudGVyKCk7XHJcbiAgICBpZiAobWluID09PSB0b3ApIHsgICAgcmV0dXJuIGpvaW50LmcucG9pbnQoY2VudGVyLngsICAgICAgbWUub3JpZ2luKCkueSk7IH1cclxuICAgIGlmIChtaW4gPT09IGxlZnQpIHsgICByZXR1cm4gam9pbnQuZy5wb2ludChtZS5vcmlnaW4oKS54LCBjZW50ZXIueSk7IH1cclxuICAgIGlmIChtaW4gPT09IGJvdHRvbSkgeyByZXR1cm4gam9pbnQuZy5wb2ludChjZW50ZXIueCwgICAgICBtZS5jb3JuZXIoKS55KTsgfVxyXG4gICAgcmV0dXJuIGpvaW50LmcucG9pbnQobWUuY29ybmVyKCkueCwgY2VudGVyLnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJwZW5kaWN1bGFyKG1lLCBvdGhlcikge1xyXG4gICAgaWYgKG1lLmludGVyc2VjdChvdGhlcikpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB2YXIgbWluWCA9IE1hdGgubWF4KG1lLm9yaWdpbigpLngsIG90aGVyLm9yaWdpbigpLngpLFxyXG4gICAgICAgIG1heFggPSBNYXRoLm1pbihtZS5jb3JuZXIoKS54LCBvdGhlci5jb3JuZXIoKS54KSxcclxuICAgICAgICBtaW5ZID0gTWF0aC5tYXgobWUub3JpZ2luKCkueSwgb3RoZXIub3JpZ2luKCkueSksXHJcbiAgICAgICAgbWF4WSA9IE1hdGgubWluKG1lLmNvcm5lcigpLnksIG90aGVyLmNvcm5lcigpLnkpO1xyXG4gICAgaWYgKG1pblggPD0gbWF4WCkge1xyXG4gICAgICAgIHJldHVybiBtZS5wb2ludE5lYXJlc3RUb1BvaW50KGpvaW50LmcucG9pbnQoKG1pblggKyBtYXhYKSAvIDIsIG90aGVyLmNlbnRlcigpLnkpKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5ZIDw9IG1heFkpIHtcclxuICAgICAgICByZXR1cm4gbWUucG9pbnROZWFyZXN0VG9Qb2ludChqb2ludC5nLnBvaW50KG90aGVyLmNlbnRlcigpLngsIChtaW5ZICsgbWF4WSkgLyAyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgcG9pbnQpIHtcclxuICAgIGlmICghcG9pbnQpIHsgcmV0dXJuOyB9XHJcbiAgICBhbmdsZSA9IGpvaW50Lmcubm9ybWFsaXplQW5nbGUoYW5nbGUpO1xyXG4gICAgaWYgKGFuZ2xlICUgOTAgPT09IDApIHsgcmV0dXJuIHBvaW50OyB9XHJcbiAgICB2YXIgcmJib3ggPSBiYm94LmJib3goYW5nbGUpLFxyXG4gICAgICAgIGNlbnRlciA9IGJib3guY2VudGVyKCksXHJcbiAgICAgICAgcm9yaWdpbiA9IGJib3gub3JpZ2luKCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIHJ0b3BSaWdodCA9IGJib3gudG9wUmlnaHQoKS5yb3RhdGUoY2VudGVyLCBhbmdsZSksXHJcbiAgICAgICAgcmNvcm5lciA9IGJib3guY29ybmVyKCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIHJib3R0b21MZWZ0ID0gYmJveC5ib3R0b21MZWZ0KCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIGxlZnRMaW5lID0gam9pbnQuZy5saW5lKHJvcmlnaW4sIHJib3R0b21MZWZ0KSxcclxuICAgICAgICB0b3BMaW5lID0gam9pbnQuZy5saW5lKHJ0b3BSaWdodCwgcm9yaWdpbiksXHJcbiAgICAgICAgYm90dG9tdExpbmUgPSBqb2ludC5nLmxpbmUocmNvcm5lciwgcmJvdHRvbUxlZnQpLFxyXG4gICAgICAgIHJpZ2h0TGluZSA9IGpvaW50LmcubGluZShydG9wUmlnaHQsIHJjb3JuZXIpLFxyXG4gICAgICAgIGludGVyc2VjdGlvbkxpbmU7XHJcbiAgICBzd2l0Y2ggKHJiYm94LnNpZGVOZWFyZXN0VG9Qb2ludChwb2ludCkpIHtcclxuICAgIGNhc2UgXCJ0b3BcIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHBvaW50LngsIHJiYm94LmNvcm5lcigpLnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IGpvaW50LmcubGluZShwb2ludCwgam9pbnQuZy5wb2ludChyYmJveC5vcmlnaW4oKS54LCBwb2ludC55KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHJiYm94LmNvcm5lcigpLngsIHBvaW50LnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHBvaW50LngsIHJiYm94Lm9yaWdpbigpLnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBfLmNoYWluKFtsZWZ0TGluZSwgdG9wTGluZSwgYm90dG9tdExpbmUsIHJpZ2h0TGluZV0pXHJcbiAgICAgICAgLm1hcChfLmJpbmQoaW50ZXJzZWN0aW9uTGluZS5pbnRlcnNlY3Rpb24sIGludGVyc2VjdGlvbkxpbmUpKVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgeyByZXR1cm4gcHJldmlvdXNWYWx1ZTsgfVxyXG4gICAgICAgICAgICBpZiAoIXByZXZpb3VzVmFsdWUpIHsgcmV0dXJuIGN1cnJlbnRWYWx1ZTsgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQuZGlzdGFuY2UocHJldmlvdXNWYWx1ZSkgPiBwb2ludC5kaXN0YW5jZShjdXJyZW50VmFsdWUpKSB7IHJldHVybiBjdXJyZW50VmFsdWU7IH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgfSkudmFsdWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlua0Nvbm5lY3Rpb25Qb2ludChsaW5rVmlldywgdmlldywgbWFnbmV0LCByZWZlcmVuY2UpIHtcclxuICAgIHZhciBlbGVtZW50ID0gdmlldy5tb2RlbCxcclxuICAgICAgICBkVGFyZ2V0Qm9yZGVycyxcclxuICAgICAgICBkVGFyZ2V0QW5nbGUgPSAwLFxyXG4gICAgICAgIGRUYXJnZXRCQm94ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmsgPSBsaW5rVmlldy5tb2RlbCxcclxuICAgICAgICAgICAgICAgIG90aGVyLFxyXG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBsaW5rLmdldCgndmVydGljZXMnKSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGxpbmsuZ2V0KCdzb3VyY2UnKS5pZCxcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGxpbmsuZ2V0KCd0YXJnZXQnKS5pZDtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZlcnRpY2VzICYmIHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9pbnQuZy5yZWN0KHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnksIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyID0gbGluay5nZXRUYXJnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZFRhcmdldEFuZ2xlID0gb3RoZXIuZ2V0KCdhbmdsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRUYXJnZXRCb3JkZXJzID0gb3RoZXIuZ2V0KCdib3JkZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNlcyAmJiB2ZXJ0aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvaW50LmcucmVjdCh2ZXJ0aWNlc1t2ZXJ0aWNlcy5sZW5ndGggLSAxXS54LCB2ZXJ0aWNlc1t2ZXJ0aWNlcy5sZW5ndGggLSAxXS55LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdGhlciA9IGxpbmsuZ2V0U291cmNlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRUYXJnZXRBbmdsZSA9IG90aGVyLmdldCgnYW5nbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkVGFyZ2V0Qm9yZGVycyA9IG90aGVyLmdldCgnYm9yZGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlci5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGpvaW50LmcucmVjdChyZWZlcmVuY2UueCwgcmVmZXJlbmNlLnksIDAsIDApO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0Q29ubmVjdGlvblBvaW50KGJib3gsIHRhcmdldEJCb3gsIGFuZ2xlLCB0YXJnZXRBbmdsZSkge1xyXG4gICAgICAgIHRhcmdldEJCb3ggPSB0YXJnZXRCQm94IHx8IGRUYXJnZXRCQm94O1xyXG4gICAgICAgIHRhcmdldEFuZ2xlID0gdGFyZ2V0QW5nbGUgfHwgZFRhcmdldEFuZ2xlO1xyXG4gICAgICAgIGFuZ2xlID0gYW5nbGUgfHwgZWxlbWVudC5nZXQoJ2FuZ2xlJyk7XHJcbiAgICAgICAgYmJveCA9IGJib3ggfHwgZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgdmFyIHJiYm94ID0gYmJveC5iYm94KGFuZ2xlKSxcclxuICAgICAgICAgICAgclRhcmdldEJCb3ggPSB0YXJnZXRCQm94O1xyXG4gICAgICAgIGlmIChyYmJveC5jb250YWluc1JlY3QoclRhcmdldEJCb3gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIG5lYXJlc3RQb2ludE9uQm9yZGVyKHJiYm94LCByVGFyZ2V0QkJveCwgZFRhcmdldEJvcmRlcnMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJUYXJnZXRCQm94LmNvbnRhaW5zUmVjdChyYmJveCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgbmVhcmVzdFBvaW50T25Cb3JkZXIocmJib3gsIHJUYXJnZXRCQm94LCBlbGVtZW50LmdldCgnYm9yZGVycycpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIHBlcnBlbmRpY3VsYXIocmJib3gsIHJUYXJnZXRCQm94KSkgfHxcclxuICAgICAgICAgICAgICAgIGJib3guaW50ZXJzZWN0aW9uV2l0aExpbmVGcm9tQ2VudGVyVG9Qb2ludCh0YXJnZXRCQm94LmNlbnRlcigpLCBhbmdsZSkgfHxcclxuICAgICAgICAgICAgICAgIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgcmJib3gucG9pbnROZWFyZXN0VG9Qb2ludCh0YXJnZXRCQm94LmNlbnRlcigpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmlldy5tb2RlbC5saW5rQ29ubmVjdGlvblBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHZpZXcubW9kZWwubGlua0Nvbm5lY3Rpb25Qb2ludChsaW5rVmlldywgdmlldywgbWFnbmV0LCByZWZlcmVuY2UsIGRUYXJnZXRCQm94LCBkVGFyZ2V0QW5nbGUsIGRlZmF1bHRDb25uZWN0aW9uUG9pbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZmF1bHRDb25uZWN0aW9uUG9pbnQoKTtcclxufVxyXG5cclxuZXhwb3J0cy5saW5rQ29ubmVjdGlvblBvaW50ID0gbGlua0Nvbm5lY3Rpb25Qb2ludDtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBiYWNrYm9uZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydCYWNrYm9uZSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnQmFja2JvbmUnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIG5hdmlnYXRvciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyduYXZpZ2F0b3InXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ25hdmlnYXRvciddIDogbnVsbCksXHJcbiAgICBjcmVhdGVSZXNpemVSZWFjdG9yID0gcmVxdWlyZSgnLi9yZXNpemVyZWFjdG9yJykuUmVzaXplUmVhY3RvcixcclxuICAgIGNyZWF0ZVJvdGF0ZVJlYWN0b3IgPSByZXF1aXJlKCcuL3JvdGF0ZXJlYWN0b3InKS5Sb3RhdGVSZWFjdG9yO1xyXG5cclxuZnVuY3Rpb24gcHJvcGVydHlDaGVja2VyKHByb3BlcnR5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICBpZiAobW9kZWxbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIGRlZmF1bHRWYWx1ZTsgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxbcHJvcGVydHldID09PSAnZnVuY3Rpb24nKSB7IHJldHVybiBtb2RlbFtwcm9wZXJ0eV0oKTsgfVxyXG4gICAgICAgIHJldHVybiBtb2RlbFtwcm9wZXJ0eV07XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc011bHRpc2VsZWN0KGUpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0uc3Vic3RyKDAsIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdtYWMnKSB7IHJldHVybiBlLm1ldGFLZXk7IH1cclxuICAgIHJldHVybiBlLmN0cmxLZXk7XHJcbn1cclxuXHJcbnZhciBjYW5SZXNpemUgPSBwcm9wZXJ0eUNoZWNrZXIoJ3Jlc2l6YWJsZScsIGZhbHNlKSxcclxuICAgIGNhblJvdGF0ZSA9IHByb3BlcnR5Q2hlY2tlcigncm90YXRhYmxlJywgZmFsc2UpO1xyXG5cclxuZnVuY3Rpb24gTWFuaXB1bGF0aW9uUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuaXB1bGF0aW9uUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBNYW5pcHVsYXRpb25SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBfLmV4dGVuZCh0aGlzLCBiYWNrYm9uZS5FdmVudHMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5hY3Rpb25zICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMuYWN0aW9ucykpIHsgdGhyb3cgbmV3IEVycm9yKCdhY3Rpb25zIG9wdGlvbiBzaG91bGQgYmUgYW4gYXJyYXknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZ3JpZFNpemUgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignZ3JpZFNpemUgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLmdyaWRTaXplIDwgMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2dyaWRTaXplIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIGdyaWRTaXplID0gb3B0aW9ucy5ncmlkU2l6ZSxcclxuICAgICAgICBhY3Rpb25zID0gb3B0aW9ucy5hY3Rpb25zIHx8IFtleHBvcnRzLmVkaXQsIGV4cG9ydHMuZGVsZXRlXSxcclxuICAgICAgICByZXNpemUgPSBvcHRpb25zLnJlc2l6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhb3B0aW9ucy5yZXNpemUsXHJcbiAgICAgICAgcm90YXRlID0gb3B0aW9ucy5yZXNpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIW9wdGlvbnMucm90YXRlLFxyXG4gICAgICAgIG1hZ25ldGl6ZSA9IG9wdGlvbnMubWFnbmV0aXplID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFvcHRpb25zLm1hZ25ldGl6ZSxcclxuICAgICAgICBzZWxlY3RlZFZpZXdzID0ge307XHJcblxyXG4gICAgZWwuYXR0cigndGFiaW5kZXgnLCAxKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW5pcHVsYXRvcihlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNMaW5rKCkpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIGJ1bmRsZSA9IHNlbGVjdGVkVmlld3NbZWxlbWVudC5pZF0sXHJcbiAgICAgICAgICAgIGJib3gsXHJcbiAgICAgICAgICAgIGFuZ2xlO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGJib3ggPSBidW5kbGUudmlldy5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgYnVuZGxlLmVsXHJcbiAgICAgICAgICAgIC5jc3MoJ2xlZnQnLCBiYm94LnggLSBncmlkU2l6ZSlcclxuICAgICAgICAgICAgLmNzcygndG9wJywgYmJveC55IC0gZ3JpZFNpemUpXHJcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgYmJveC53aWR0aCArIDIgKiBncmlkU2l6ZSlcclxuICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgYmJveC5oZWlnaHQgKyAyICogZ3JpZFNpemUpO1xyXG4gICAgICAgIGFuZ2xlID0gZWxlbWVudC5nZXQoJ2FuZ2xlJyk7XHJcbiAgICAgICAgJChidW5kbGUuZWwuZmluZCgnLm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yb3RhdGUnKSlcclxuICAgICAgICAgICAgLmNzcygnbGVmdCcsIChiYm94LndpZHRoICsgOTQpIC8gMiAqICgxICsgTWF0aC5jb3Moam9pbnQuZy50b1JhZChhbmdsZSkpKSAtIDM2KVxyXG4gICAgICAgICAgICAuY3NzKCd0b3AnLCAoYmJveC5oZWlnaHQgKyA5NCkgLyAyICogKDEgKyBNYXRoLnNpbihqb2ludC5nLnRvUmFkKGFuZ2xlKSkpIC0gMzYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbmlwdWxhdG9ycygpIHtcclxuICAgICAgICBfLm1hcChzZWxlY3RlZFZpZXdzLCBmdW5jdGlvbiAoYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmlwdWxhdG9yKGJ1bmRsZS52aWV3Lm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1hbmlwdWxhdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tlbGVtZW50LmlkXTtcclxuICAgICAgICBpZiAoIWJ1bmRsZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoYnVuZGxlLnZpZXcubW9kZWwuZGVhY3RpdmF0ZSkgeyBidW5kbGUudmlldy5tb2RlbC5kZWFjdGl2YXRlKCk7IH1cclxuICAgICAgICBidW5kbGUuZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgYnVuZGxlLnZpZXcub2ZmKCdjaGFuZ2U6cG9zaXRpb24gY2hhbmdlOnNpemUnLCB1cGRhdGVNYW5pcHVsYXRvcik7XHJcbiAgICAgICAgZGVsZXRlIHNlbGVjdGVkVmlld3NbZWxlbWVudC5pZF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNYW5pcHVsYXRvcnMoY3VycmVudGlkKSB7XHJcbiAgICAgICAgXy5tYXAoc2VsZWN0ZWRWaWV3cywgZnVuY3Rpb24gKGJ1bmRsZSwgaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBjdXJyZW50aWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGNsb3NlTWFuaXB1bGF0b3IoYnVuZGxlLnZpZXcubW9kZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1hbmlwdWxhdG9yKGNlbGxWaWV3LCBldnQpIHtcclxuICAgICAgICBpZiAoY2VsbFZpZXcubW9kZWwuaXNMaW5rKCkpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKCFpc011bHRpc2VsZWN0KGV2dCkpIHsgY2xvc2VNYW5pcHVsYXRvcnMoY2VsbFZpZXcubW9kZWwuaWQpOyB9XHJcbiAgICAgICAgdmFyIGJ1bmRsZSA9IHNlbGVjdGVkVmlld3NbY2VsbFZpZXcubW9kZWwuaWRdLFxyXG4gICAgICAgICAgICB0YWIsXHJcbiAgICAgICAgICAgIGNvbnRleHQ7XHJcbiAgICAgICAgaWYgKCFidW5kbGUpIHtcclxuICAgICAgICAgICAgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tjZWxsVmlldy5tb2RlbC5pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBlbDogKGZ1bmN0aW9uICgpIHt2YXIgbWFuaXB1bGF0b3IgPSAkKHJlcXVpcmUoJy4vbWFuaXB1bGF0b3IuaHRtbCcpKTsgZWwuYXBwZW5kKG1hbmlwdWxhdG9yKTsgcmV0dXJuIG1hbmlwdWxhdG9yOyB9KCkpLFxyXG4gICAgICAgICAgICAgICAgdmlldzogY2VsbFZpZXcsXHJcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBidW5kbGUudmlldy5tb2RlbC5vbignY2hhbmdlOnBvc2l0aW9uIGNoYW5nZTpzaXplIGNoYW5nZTphbmdsZScsIHVwZGF0ZU1hbmlwdWxhdG9yKTtcclxuICAgICAgICAgICAgdGFiID0gJChidW5kbGUuZWwuZmluZCgnLm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci10YWInKSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTWFuaXB1bGF0b3IoYnVuZGxlLnZpZXcubW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAobWFnbmV0aXplICYmIGJ1bmRsZS52aWV3Lm1vZGVsLm1hZ25ldGl6ZSAmJiBidW5kbGUudmlldy5tb2RlbC5kZW1hZ25ldGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua21hcmtlciA9ICQoXy5maXJzdCgkKHJlcXVpcmUoJy4vbGluay5zdmcnKSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZW1hcmtlciA9ICQoXy5maXJzdCgkKHJlcXVpcmUoJy4vbW92ZS5zdmcnKSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rbWFya2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGJ1bmRsZS52aWV3Lm1vZGVsLm1hZ25ldGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQgfHwgcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rbWFya2VyLmFmdGVyKG1vdmVtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua21hcmtlci5kZXRhY2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVtYXJrZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidW5kbGUudmlldy5tb2RlbC5kZW1hZ25ldGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyLmFmdGVyKGxpbmttYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyLmRldGFjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5tYWduZXRpemVDeWNsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVtYXJrZXIucGFyZW50KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rbWFya2VyLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYi5hcHBlbmQobGlua21hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF8uZm9yRWFjaChhY3Rpb25zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmNoZWNrZXIoY2VsbFZpZXcubW9kZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5jbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmNsaWNrLmNhbGwoY29udGV4dCwgYnVuZGxlLnZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmFwcGVuZCgkKGFjdGlvbi5tYXJrZXIpLmNsb25lKCkub24oJ2NsaWNrJywgY2xpY2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ua2V5ZG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5rZXlkb3duLnB1c2goeyBmaWx0ZXI6IGFjdGlvbi5rZXlkb3duLCBhY3Rpb246IGNsaWNrIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2NlbGw6JyArIGFjdGlvbi5ldmVudCwgYnVuZGxlLnZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5hcHBlbmQoJChhY3Rpb24ubWFya2VyKS5jbG9uZSgpLm9uKCdjbGljaycsIHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ua2V5ZG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5rZXlkb3duLnB1c2goeyBmaWx0ZXI6IGFjdGlvbi5rZXlkb3duLCBhY3Rpb246IHRyaWdnZXIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc2l6ZSAmJiBjYW5SZXNpemUoY2VsbFZpZXcubW9kZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBidW5kbGUuZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgWyduJywgJ25lJywgJ2UnLCAnc2UnLCAncycsICdzdycsICd3JywgJ253J10uZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmVsLmZpbmQoJy5tLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItJyArIGRpcmVjdGlvbikub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzaXplUmVhY3Rvcih7dmlldzogYnVuZGxlLnZpZXcsIHBhcGVyOiBwYXBlciwgbW9kZWw6IG1vZGVsLCBlbDogZWwsIGRpcmVjdGlvbjogZGlyZWN0aW9uLCBncmlkU2l6ZTogZ3JpZFNpemV9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyb3RhdGUgJiYgY2FuUm90YXRlKGNlbGxWaWV3Lm1vZGVsKSkge1xyXG4gICAgICAgICAgICAgICAgYnVuZGxlLmVsLmFkZENsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1yb3RhdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGJ1bmRsZS5lbC5maW5kKCcubS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJvdGF0ZScpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRlUmVhY3Rvcih7dmlldzogYnVuZGxlLnZpZXcsIHBhcGVyOiBwYXBlciwgbW9kZWw6IG1vZGVsLCBlbDogZWwsIGFuZ2xlU3RlcDogMTV9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmlwdWxhdG9yKGNlbGxWaWV3Lm1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24ga2V5ZG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDI3OlxyXG4gICAgICAgICAgICBjbG9zZU1hbmlwdWxhdG9ycygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5mb3JFYWNoKHNlbGVjdGVkVmlld3MsIGZ1bmN0aW9uIChidW5kbGUpIHtcclxuICAgICAgICAgICAgXy5mb3JFYWNoKGJ1bmRsZS5rZXlkb3duIHx8IFtdLCBmdW5jdGlvbiAoa2V5ZG93bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleWRvd24uZmlsdGVyLmtleUNvZGUgPT09IGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleWRvd24uYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlb3ZlcigpIHtcclxuICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcGVyLm9uKCdjZWxsOnBvaW50ZXJkb3duJywgdG9nZ2xlTWFuaXB1bGF0b3IpO1xyXG4gICAgcGFwZXIub24oJ3NjYWxlIHRyYW5zbGF0ZScsIHVwZGF0ZU1hbmlwdWxhdG9ycyk7XHJcbiAgICBwYXBlci5vbignY2VsbDpwb2ludGVybW92ZScsIGZ1bmN0aW9uIChjZWxsVmlldykgeyB1cGRhdGVNYW5pcHVsYXRvcihjZWxsVmlldy5tb2RlbCk7IH0pO1xyXG4gICAgbW9kZWwub24oJ2NoYW5nZTp0YXJnZXQnLCBmdW5jdGlvbiAobGluaykge1xyXG4gICAgICAgIHZhciBidW5kbGUgPSBzZWxlY3RlZFZpZXdzW2xpbmsuZ2V0KCdzb3VyY2UnKS5pZF07XHJcbiAgICAgICAgbGluay50b0Zyb250KCk7XHJcbiAgICAgICAgaWYgKCFidW5kbGUgfHwgIWJ1bmRsZS52aWV3Lm1vZGVsLm1hZ25ldGl6ZSB8fCAhYnVuZGxlLnZpZXcubW9kZWwuZGVtYWduZXRpemUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgYnVuZGxlLm1hZ25ldGl6ZUN5Y2xlKCk7XHJcbiAgICB9KTtcclxuICAgIG1vZGVsLm9uKCdyZW1vdmUnLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGNsb3NlTWFuaXB1bGF0b3IoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIGVsLmtleWRvd24oa2V5ZG93bik7XHJcbiAgICBlbC5tb3VzZW92ZXIobW91c2VvdmVyKTtcclxufVxyXG5cclxuZXhwb3J0cy5NYW5pcHVsYXRpb25SZWFjdG9yID0gTWFuaXB1bGF0aW9uUmVhY3RvcjtcclxuXHJcblxyXG5leHBvcnRzLmRlbGV0ZSA9IHtcclxuICAgIG1hcmtlcjogcmVxdWlyZSgnLi9kZWxldGUuc3ZnJyksXHJcbiAgICBjaGVja2VyOiBwcm9wZXJ0eUNoZWNrZXIoJ2RlbGV0YWJsZScsIHRydWUpLFxyXG4gICAgY2xpY2s6IGZ1bmN0aW9uICh2aWV3KSB7XHJcbiAgICAgICAgdmlldy5tb2RlbC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAga2V5ZG93bjogeyBrZXlDb2RlOiA0NiB9XHJcbn07XHJcbmV4cG9ydHMuZWRpdCA9IHtcclxuICAgIG1hcmtlcjogcmVxdWlyZSgnLi9lZGl0LnN2ZycpLFxyXG4gICAgY2hlY2tlcjogcHJvcGVydHlDaGVja2VyKCdlZGl0YWJsZScsIGZhbHNlKSxcclxuICAgIGV2ZW50OiAnZWRpdCdcclxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRvclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci10YWJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItbmVcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1zZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1zXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXN3XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXdcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItbndcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItblxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yb3RhdGVcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgY3JlYXRlUHJldmlldyA9IHJlcXVpcmUoJy4vcHJldmlldycpLlByZXZpZXcsXHJcbiAgICBjcmVhdGVWaWV3cG9ydCA9IHJlcXVpcmUoJy4vdmlld3BvcnQnKS5WaWV3cG9ydDtcclxuXHJcbmZ1bmN0aW9uIE1hcChvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFwKSkgeyByZXR1cm4gbmV3IE1hcChvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCB8fCB0eXBlb2Ygb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50ICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignbGlua0Nvbm5lY3Rpb25Qb2ludCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgbWFwQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHt2YXIgY29udGFpbmVyID0gJChyZXF1aXJlKCcuL3ByZXZpZXcuaHRtbCcpKTsgZWwuYXBwZW5kKGNvbnRhaW5lcik7IHJldHVybiBjb250YWluZXI7IH0oKSksXHJcbiAgICAgICAgdmlld3BvcnRDb250YWluZXIgPSAoZnVuY3Rpb24gKCkge3ZhciBjb250YWluZXIgPSAkKHJlcXVpcmUoJy4vdmlld3BvcnQuaHRtbCcpKTsgZWwuYXBwZW5kKGNvbnRhaW5lcik7IHJldHVybiBjb250YWluZXI7IH0oKSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIHByZXZpZXcgPSBjcmVhdGVQcmV2aWV3KHtlbDogbWFwQ29udGFpbmVyLCBtb2RlbDogbW9kZWwsIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnR9KSxcclxuICAgICAgICB2aWV3cG9ydCA9IGNyZWF0ZVZpZXdwb3J0KHtlbDogdmlld3BvcnRDb250YWluZXJ9KSxcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIG1vZGVsLm9uKCdjaGFuZ2U6cG9zaXRpb24gY2hhbmdlOnNpemUgY2hhbmdlOmFuZ2xlIGNoYW5nZTpwYXJlbnQgYWRkIHJlbW92ZScsIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKG1vZGVsLmhhc0FjdGl2ZUJhdGNoKCdhZGQnKSB8fCBtb2RlbC5oYXNBY3RpdmVCYXRjaCgnY2xlYXInKSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoIWF1dG9SZWZyZXNoRW5hYmxlZCkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoZWxlbWVudC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoZWxlbWVudC5nZXQoJ3BhcmVudCcpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIF8uZGVmZXIoZnVuY3Rpb24gKCkgeyBzZWxmLnJlZnJlc2goKTsgfSk7XHJcbiAgICB9KTtcclxuICAgIG1vZGVsLm9uKCdiYXRjaDpzdG9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoKGUuYmF0Y2hOYW1lICE9PSAnYWRkJyAmJiBlLmJhdGNoTmFtZSAhPT0gJ2NsZWFyJykgfHwgbW9kZWwuaGFzQWN0aXZlQmF0Y2goJ2FkZCcpIHx8IG1vZGVsLmhhc0FjdGl2ZUJhdGNoKCdjbGVhcicpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIF8uZGVmZXIoZnVuY3Rpb24gKCkgeyBzZWxmLnJlZnJlc2goKTsgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxmLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJib3gsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbkxvY2FsLFxyXG4gICAgICAgICAgICBtYXhMb2NhbDtcclxuICAgICAgICBpZiAobW9kZWwuZ2V0RWxlbWVudHMoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoam9pbnQuZy5wb2ludCgwLCAwKSk7XHJcbiAgICAgICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGpvaW50LmcucG9pbnQod2lkdGgsIGhlaWdodCkpO1xyXG4gICAgICAgICAgICBiYm94ID0gam9pbnQuZy5yZWN0KG1pbkxvY2FsLngsIG1pbkxvY2FsLnksIG1heExvY2FsLnggLSBtaW5Mb2NhbC54LCBtYXhMb2NhbC55IC0gbWluTG9jYWwueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmJveCA9IG1vZGVsLmdldEJCb3gobW9kZWwuZ2V0RWxlbWVudHMoKSwge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgYmJveCA9IGpvaW50LmcucmVjdChiYm94LnggLSAxMCwgYmJveC55IC0gMTAsIGJib3gud2lkdGggKyAyMCwgYmJveC5oZWlnaHQgKyAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpZXcuc2V0QkJveChiYm94KTtcclxuICAgICAgICB2aWV3cG9ydC5zZXRCQm94KGJib3gpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmRpc2FibGVBdXRvcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5lbmFibGVBdXRvcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnNldFZpZXdwb3J0ID0gZnVuY3Rpb24gKGJib3gpIHtcclxuICAgICAgICB2aWV3cG9ydC5zZXRWaWV3cG9ydChiYm94KTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5kb3dubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LmRvd25sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYucmVmcmVzaCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hcCA9IE1hcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J20tdHJhbnNmb3JtLWpvaW50LW1hcCc+PC9kaXY+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgYXRvYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydhdG9iJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydhdG9iJ10gOiBudWxsKSxcclxuICAgIFVpbnQ4QXJyYXkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVWludDhBcnJheSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVWludDhBcnJheSddIDogbnVsbCksXHJcbiAgICBCbG9iID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ0Jsb2InXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0Jsb2InXSA6IG51bGwpLFxyXG4gICAgc2F2ZUFzID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ3NhdmVBcyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnc2F2ZUFzJ10gOiBudWxsKSxcclxuICAgIHN2ZzJwbmcgPSByZXF1aXJlKCdzYXZlLXN2Zy1hcy1wbmcnKTtcclxuXHJcbmZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcclxuICAgIHZhciBkZWxpbWl0ZXIgPSAnYmFzZTY0LCcsXHJcbiAgICAgICAgaW5kZXggPSB1cmkuaW5kZXhPZihkZWxpbWl0ZXIpLFxyXG4gICAgICAgIGI2NERhdGEgPSB1cmkuc3Vic3RyKGluZGV4ICsgZGVsaW1pdGVyLmxlbmd0aCksXHJcbiAgICAgICAgY29udGVudFR5cGUgPSB1cmkuc3Vic3RyKDAsIHVyaS5pbmRleE9mKCc7JykpLFxyXG4gICAgICAgIHNsaWNlU2l6ZSA9IDUxMixcclxuICAgICAgICBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSksXHJcbiAgICAgICAgYnl0ZUFycmF5cyA9IFtdLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBzbGljZSxcclxuICAgICAgICBieXRlTnVtYmVycyxcclxuICAgICAgICBpLFxyXG4gICAgICAgIGJ5dGVBcnJheTtcclxuXHJcbiAgICBmb3IgKG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG4gICAgICAgIHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG5cclxuICAgICAgICBieXRlTnVtYmVycyA9IFtdO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblxyXG4gICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldmlldyhvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJldmlldykpIHsgcmV0dXJuIG5ldyBQcmV2aWV3KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCB8fCB0eXBlb2Ygb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50ICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignbGlua0Nvbm5lY3Rpb25Qb2ludCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIGxhc3RTY2FsZSA9IDEsXHJcbiAgICAgICAgbGlua0Nvbm5lY3Rpb25Qb2ludCA9IG9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCxcclxuICAgICAgICBwYXBlciA9IG5ldyBqb2ludC5kaWEuUGFwZXIoe1xyXG4gICAgICAgICAgICBlbDogZWwsXHJcbiAgICAgICAgICAgIHdpZHRoOiBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLmhlaWdodCgpLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHNlbGYuc2V0QkJveCA9IGZ1bmN0aW9uIChiYm94KSB7XHJcbiAgICAgICAgLy8gaXQgaXMgc2ltaWxhciB0byBwYXBlci5zY2FsZUNvbnRlbnRUb0ZpdCgpOyBidXQgaSByZXF1aXJlIHRvIGRvIGl0IG1hbnVhbGx5IHRvIGNoYW5nZSBldmVuIHRoZSBvcmlnaW5cclxuICAgICAgICB2YXIgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgc2NhbGVYID0gd2lkdGggLyBiYm94LndpZHRoLFxyXG4gICAgICAgICAgICBzY2FsZVkgPSBoZWlnaHQgLyBiYm94LmhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSksXHJcbiAgICAgICAgICAgIG94ID0gKHdpZHRoIC0gYmJveC53aWR0aCAqIHNjYWxlKSAvIDIgLSBiYm94LnggKiBzY2FsZSxcclxuICAgICAgICAgICAgb3kgPSAoaGVpZ2h0IC0gYmJveC5oZWlnaHQgKiBzY2FsZSkgLyAyIC0gYmJveC55ICogc2NhbGU7XHJcblxyXG4gICAgICAgIGxhc3RTY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIHBhcGVyLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG94LCBveSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZG93bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN2ZyA9ICQoJCgnPGRpdj4nKS5hcHBlbmQoJChwYXBlci5zdmcpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC8mbmJzcDt8eG1sbnM6eG1sPVwiaHR0cDpcXC9cXC93d3dcXC53M1xcLm9yZ1xcL1hNTFxcLzE5OThcXC9uYW1lc3BhY2VcIi9nLCAnICcpKTtcclxuICAgICAgICBzdmcuZmluZCgnLmVsZW1lbnQgKicpLmNzcygndmVjdG9yLWVmZmVjdCcsICdub25lJyk7XHJcbiAgICAgICAgc3ZnMnBuZy5zdmdBc1BuZ1VyaShzdmdbMF0sIHtzY2FsZTogMyAvIGxhc3RTY2FsZX0sIGZ1bmN0aW9uICh1cmkpIHtcclxuICAgICAgICAgICAgc2F2ZUFzKHVyaVRvQmxvYih1cmkpLCBcIm1vZGVsLnBuZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMuUHJldmlldyA9IFByZXZpZXc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtLXRyYW5zZm9ybS1qb2ludC1tYXAtdmlld3BvcnQnPjwvZGl2PlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIFZpZXdwb3J0T3V0bGluZSA9IHJlcXVpcmUoJy4vdmlld3BvcnRvdXRsaW5lJykuVmlld3BvcnRPdXRsaW5lO1xyXG5cclxuZnVuY3Rpb24gVmlld3BvcnQob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZXdwb3J0KSkgeyByZXR1cm4gbmV3IFZpZXdwb3J0KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb25zIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbnMnKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBuZXcgam9pbnQuZGlhLkdyYXBoKCksXHJcbiAgICAgICAgcGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICB3aWR0aDogZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB2aWV3cG9ydCA9IG5ldyBWaWV3cG9ydE91dGxpbmUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogam9pbnQuZy5wb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBtb2RlbC5hZGRDZWxscyhbdmlld3BvcnRdKTtcclxuXHJcbiAgICBzZWxmLnNldEJCb3ggPSBmdW5jdGlvbiAoYmJveCkge1xyXG4gICAgICAgIC8vIGl0IGlzIHNpbWlsYXIgdG8gcGFwZXIuc2NhbGVDb250ZW50VG9GaXQoKTsgYnV0IGkgcmVxdWlyZSB0byBkbyBpdCBtYW51YWxseSB0byBjaGFuZ2UgZXZlbiB0aGUgb3JpZ2luXHJcbiAgICAgICAgdmFyIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHNjYWxlWCA9IHdpZHRoIC8gYmJveC53aWR0aCxcclxuICAgICAgICAgICAgc2NhbGVZID0gaGVpZ2h0IC8gYmJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLFxyXG4gICAgICAgICAgICBveCA9ICh3aWR0aCAtIGJib3gud2lkdGggKiBzY2FsZSkgLyAyIC0gYmJveC54ICogc2NhbGUsXHJcbiAgICAgICAgICAgIG95ID0gKGhlaWdodCAtIGJib3guaGVpZ2h0ICogc2NhbGUpIC8gMiAtIGJib3gueSAqIHNjYWxlO1xyXG5cclxuICAgICAgICBwYXBlci5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIHBhcGVyLnNldE9yaWdpbihveCwgb3kpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnNldFZpZXdwb3J0ID0gZnVuY3Rpb24gKGJib3gpIHtcclxuICAgICAgICB2aWV3cG9ydC5wb3NpdGlvbihiYm94LngsIGJib3gueSk7XHJcbiAgICAgICAgdmlld3BvcnQucmVzaXplKGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMuVmlld3BvcnQgPSBWaWV3cG9ydDtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5leHBvcnRzLlZpZXdwb3J0T3V0bGluZSA9IGpvaW50LnNoYXBlcy5iYXNpYy5HZW5lcmljLmV4dGVuZCh7XHJcbiAgICBtYXJrdXA6IHJlcXVpcmUoJy4vbWFya3VwLnN2ZycpLFxyXG5cclxuICAgIGRlZmF1bHRzOiBqb2ludC51dGlsLmRlZXBTdXBwbGVtZW50KHtcclxuICAgICAgICB0eXBlOiAnbWFwLlZpZXdwb3J0T3V0bGluZScsXHJcbiAgICAgICAgc2l6ZToge3dpZHRoOiAxLCBoZWlnaHQ6IDF9LFxyXG4gICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdCcgOiB7J2ZvbGxvdy1zY2FsZSc6ICdhdXRvJ30sXHJcbiAgICAgICAgICAgICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtb3V0ZXItcmVjdCc6IHtcclxuICAgICAgICAgICAgICAgICdyZWYteCc6IDAsXHJcbiAgICAgICAgICAgICAgICAncmVmLXknOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3JlZi13aWR0aCc6IDEsXHJcbiAgICAgICAgICAgICAgICAncmVmLWhlaWdodCc6IDEsXHJcbiAgICAgICAgICAgICAgICByZWY6ICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIGpvaW50LnNoYXBlcy5iYXNpYy5HZW5lcmljLnByb3RvdHlwZS5kZWZhdWx0cylcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZyBjbGFzcz1cXFwic2NhbGFibGVcXFwiPlxcclxcbiAgICA8cmVjdCBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdFxcXCIgd2lkdGg9XFxcIjFcXFwiIGhlaWdodD1cXFwiMVxcXCIgZmlsbD1cXFwidHJhbnNwYXJlbnRcXFwiIC8+XFxyXFxuPC9nPlxcclxcbjxyZWN0IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC12aWV3cG9ydC1vdXRlci1yZWN0XFxcIiBmaWxsPVxcXCJ0cmFuc3BhcmVudFxcXCIgc3Ryb2tlPVxcXCJibHVlXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIC8+XFxyXFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Z1xcclxcbiAgIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCJcXHJcXG4gICB4bWxuczpjYz1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjXFxcIlxcclxcbiAgIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCJcXHJcXG4gICB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiXFxyXFxuICAgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiXFxyXFxuICAgdmVyc2lvbj1cXFwiMS4xXFxcIlxcclxcbiAgIGlkPVxcXCJDYXBhXzFcXFwiXFxyXFxuICAgeD1cXFwiMHB4XFxcIlxcclxcbiAgIHk9XFxcIjBweFxcXCJcXHJcXG4gICB3aWR0aD1cXFwiNDQuMjM2XFxcIlxcclxcbiAgIGhlaWdodD1cXFwiNDQuMjM2XFxcIlxcclxcbiAgIHZpZXdCb3g9XFxcIjAgMCA0NC4yMzYgNDQuMjM2XFxcIlxcclxcbiAgIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFxyXFxuICAgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45MSByMTM3MjVcXFwiXFxyXFxuICAgc29kaXBvZGk6ZG9jbmFtZT1cXFwibW92ZS5zdmdcXFwiPjxtZXRhZGF0YVxcclxcbiAgICAgaWQ9XFxcIm1ldGFkYXRhNTNcXFwiPjxyZGY6UkRGPjxjYzpXb3JrXFxyXFxuICAgICAgICAgcmRmOmFib3V0PVxcXCJcXFwiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlXFxyXFxuICAgICAgICAgICByZGY6cmVzb3VyY2U9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlXFxcIiAvPjxkYzp0aXRsZSAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmc1xcclxcbiAgICAgaWQ9XFxcImRlZnM1MVxcXCIgLz48c29kaXBvZGk6bmFtZWR2aWV3XFxyXFxuICAgICBwYWdlY29sb3I9XFxcIiNmZmZmZmZcXFwiXFxyXFxuICAgICBib3JkZXJjb2xvcj1cXFwiIzY2NjY2NlxcXCJcXHJcXG4gICAgIGJvcmRlcm9wYWNpdHk9XFxcIjFcXFwiXFxyXFxuICAgICBvYmplY3R0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3JpZHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBndWlkZXRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT1cXFwiMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9XFxcIjJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9XFxcIjE2MDBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PVxcXCI4MzdcXFwiXFxyXFxuICAgICBpZD1cXFwibmFtZWR2aWV3NDlcXFwiXFxyXFxuICAgICBzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp6b29tPVxcXCI3LjU0NDg1OTRcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeD1cXFwiMjguNTIwMDQ5XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3k9XFxcIjMyLjI4NDQxMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy14PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy15PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XFxcIjFcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPVxcXCJDYXBhXzFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMTlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDE3N1xcXCI+PGNpcmNsZVxcclxcbiAgICAgICByPVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICAgIGN5PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICAgIGN4PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNDE4MVxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQwMDAwMDAxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGVcXFwiIC8+PHBhdGhcXHJcXG4gICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCJcXHJcXG4gICAgICAgaWQ9XFxcInBhdGg3XFxcIlxcclxcbiAgICAgICBkPVxcXCJNIDIyLjExOCw0NC4yMzYgQyA5LjkyMiw0NC4yMzYgMCwzNC4zMTQgMCwyMi4xMTkgMCw5LjkyMyA5LjkyMiwwIDIyLjExOCwwIGMgMTIuMTk2LDAgMjIuMTE4LDkuOTIzIDIyLjExOCwyMi4xMTkgMCwxMi4xOTUgLTkuOTIyLDIyLjExNyAtMjIuMTE4LDIyLjExNyB6IG0gMCwtNDIuNzM2IEMgMTAuNzUsMS41IDEuNSwxMC43NSAxLjUsMjIuMTE5IGMgMCwxMS4zNjkgOS4yNSwyMC42MTcgMjAuNjE4LDIwLjYxNyAxMS4zNjgsMCAyMC42MTgsLTkuMjQ4IDIwLjYxOCwtMjAuNjE3IEMgNDIuNzM2LDEwLjc1IDMzLjQ4NiwxLjUgMjIuMTE4LDEuNSBaXFxcIiAvPjxnXFxyXFxuICAgICAgIGlkPVxcXCJnOVxcXCI+PGNpcmNsZVxcclxcbiAgICAgICAgIGlkPVxcXCJjaXJjbGUxMVxcXCJcXHJcXG4gICAgICAgICByPVxcXCIxLjQxXFxcIlxcclxcbiAgICAgICAgIGN5PVxcXCIyMi40MzhcXFwiXFxyXFxuICAgICAgICAgY3g9XFxcIjIyLjExOFxcXCIgLz48cGF0aFxcclxcbiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgaWQ9XFxcInBhdGgxM1xcXCJcXHJcXG4gICAgICAgICBkPVxcXCJtIDIyLjExOCwyNC4wOTggYyAtMC45MTYsMCAtMS42NiwtMC43NDQgLTEuNjYsLTEuNjYgMCwtMC45MTUgMC43NDUsLTEuNjYgMS42NiwtMS42NiAwLjkxNSwwIDEuNjU5LDAuNzQ1IDEuNjU5LDEuNjYgMCwwLjkxNiAtMC43NDMsMS42NiAtMS42NTksMS42NiB6IG0gMCwtMi44MjEgYyAtMC42NCwwIC0xLjE2LDAuNTIxIC0xLjE2LDEuMTYgMCwwLjYzOSAwLjUyMSwxLjE2MSAxLjE2LDEuMTYxIDAuNjM5LDAgMS4xNTksLTAuNTIxIDEuMTU5LC0xLjE2MSAwLC0wLjY0IC0wLjUxOSwtMS4xNiAtMS4xNTksLTEuMTYgelxcXCIgLz48L2c+PHBhdGhcXHJcXG4gICAgICAgaWQ9XFxcInBhdGg3LTJcXFwiXFxyXFxuICAgICAgIGQ9XFxcIm0gMzcuMDM5OTc0LDIxLjczNjEyNyAtMC4yMTQwMjEsLTAuMzI0MDE5IC00LjAwMDAyNSwtNC4wMDAwNDUgYyAtMC4zOTAwMzMsLTAuMzkwMDI2IC0xLjAyNTk4NiwtMC4zOTAwMjYgLTEuNDE0MDAyLDAgLTAuMzkwMDI1LDAuMzkwMDM0IC0wLjM5MDAyNSwxLjAyNDAzOCAwLDEuNDE0MDA1IGwgMi4yOTIwMzUsMi4yOTIwMzggLTEwLjU4NjA5MiwwIDAsLTEwLjU4NjA2NCAyLjI5MjAzNCwyLjI5MjAzOCBjIDAuMzg4MDE2LDAuMzkwMDM0IDEuMDI0MDI5LDAuMzkwMDM0IDEuNDEzOTk0LDAgMC4zODgwMTYsLTAuMzkwMDI2IDAuMzg4MDE2LC0xLjAyNDAzIDAsLTEuNDEzOTk3IGwgLTQuMDAwMDMxLC00LjAwMDExMiAtMC4wMSwtMC4wMDYgLTAuMzE0MDEzLC0wLjIwNzk3NyAtMC4zODE5NywtMC4wNzgwMyAtMC4wMDM4LDAgLTAuMzc4MDExLDAuMDc4MDMgLTAuMzE0MDEzLDAuMjA3OTc3IC0wLjAxMiwwLjAwNiAtNC4wMDAwMzEsNC4wMDAwNDUgYyAtMC4zOTAwMjYsMC4zOTAwMzQgLTAuMzkwMDI2LDEuMDI0MDM4IDAsMS40MTQwMDQgMC4zOTAwMjYsMC4zODk5NjYgMS4wMjQwMjksMC4zOTAwMjYgMS40MTM5OTQsMCBsIDIuMjk0MDUyLC0yLjI5MjA0NSAwLDEwLjU4NjEzMSAtMTAuNTg2MDMyLDAgMi4yOTIwMzQsLTIuMjkyMDM4IGMgMC4zOTAwMjYsLTAuMzkwMDM0IDAuMzkwMDI2LC0xLjAyNDAzOCAwLC0xLjQxNDAwNSAtMC4zOTAwMzMsLTAuMzg5OTY2IC0xLjAyNDAzNiwtMC4zOTAwMjYgLTEuNDE0MDAyLDAgbCAtNC4wMDAwOTIsNC4wMDAwNDUgLTAuMDA2LDAuMDEgLTAuMjA3OTc2LDAuMzE0MDEzIC0wLjA3ODAzLDAuMzgyMDM5IDAsMC4wMDM4IDAuMDc4MDMsMC4zNzgwMTEgMC4yMDc5NzYsMC4zMTIwMDMgMC4wMDYsMC4wMTIgNC4wMDAwMzIsNC4wMDAwNDUgYyAwLjM5MDAyNiwwLjM5MDAzNCAxLjAyNDAyOSwwLjM5MDAzNCAxLjQxMzk5NSwwIDAuMzkwMDMzLC0wLjM4ODAxNiAwLjM5MDAzMywtMS4wMjQwMyAwLC0xLjQxNDAwNCBsIC0yLjI5MTk2NywtMi4yOTIwOTggMTAuNTg2MDkyLDAgMCwxMC41ODYxMzEgLTIuMjkyMDM0LC0yLjI5MjA0NiBjIC0wLjM5MDAyNiwtMC4zODgwMTYgLTEuMDI0MDI5LC0wLjM4ODAxNiAtMS40MTM5OTUsMCAtMC4zOTAwMzMsMC4zOTAwMzQgLTAuMzkwMDMzLDEuMDI1OTg4IDAsMS40MTQwMDUgbCA0LjAwMDAzMiw0LjAwMDA0NSAwLjMyNDAxOCwwLjIxNTk2NCAwLjM3ODAwMywwLjA3NjAyIDAuMDAzOCwwIDAuMzgxOTc4LC0wLjA3ODAzIDAuMzI0MDE4LC0wLjIxNDAyMiA0LjAwMDAzMSwtNC4wMDAwNDUgYyAwLjM4ODAwOCwtMC4zOTAwMjYgMC4zODgwMDgsLTEuMDI1OTggMCwtMS40MTM5OTcgLTAuMzkwMDMzLC0wLjM5MDAzMyAtMS4wMjU5ODYsLTAuMzkwMDMzIC0xLjQxNDAwMiwwIGwgLTIuMjkyMDI3LDIuMjkyMDM4IDAsLTEwLjU4NjA2MyAxMC41ODYwOTIsMCAtMi4yOTIwMzQsMi4yOTIwMzggYyAtMC4zODgwMTYsMC4zODgwMTYgLTAuMzg4MDE2LDEuMDI0MDM4IDAsMS40MTQwMDQgMC4zOTAwMjYsMC4zODgwMTYgMS4wMjU5NzksMC4zODgwMTYgMS40MTM5OTUsMCBsIDQuMDAwMDMxLC00LjAwMDA0NSAwLjIxNTk2NCwtMC4zMjQwMTggMC4wNzYwMiwtMC4zNzgwMTEgMCwtMC4wMDM4IC0wLjA3ODAzLC0wLjM4MTk3OSB6XFxcIlxcclxcbiAgICAgICBzdHlsZT1cXFwiZmlsbDojMDEwMDAyXFxcIlxcclxcbiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiAvPjwvZz48L3N2Zz5cXHJcXG5cIjtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBQYW5SZWFjdG9yKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYW5SZWFjdG9yKSkgeyByZXR1cm4gbmV3IFBhblJlYWN0b3Iob3B0aW9ucyk7IH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5wYXBlciB8fCB0eXBlb2Ygb3B0aW9ucy5wYXBlciAhPT0gJ29iamVjdCcgfHwgIShvcHRpb25zLnBhcGVyIGluc3RhbmNlb2Ygam9pbnQuZGlhLlBhcGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnggIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcigneCBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnkgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcigneSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbicpOyB9XHJcblxyXG4gICAgdmFyIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgc3RhcnRMb2NhbCA9IHt4OiBvcHRpb25zLngsIHk6IG9wdGlvbnMueX0sXHJcbiAgICAgICAgbW91c2VvdXQ7XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2Vtb3ZlKGUpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IGVsLm9mZnNldCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgdG9wTGVmdCA9IGpvaW50LmcucG9pbnQobGVmdCwgdG9wKSxcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBqb2ludC5nLnBvaW50KGxlZnQgKyB3aWR0aCwgdG9wICsgaGVpZ2h0KSxcclxuICAgICAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQodG9wTGVmdCksXHJcbiAgICAgICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KSxcclxuICAgICAgICAgICAgc2NhbGUgPSBqb2ludC5nLnBvaW50KHdpZHRoIC8gKG1heExvY2FsLnggLSBtaW5Mb2NhbC54KSwgaGVpZ2h0IC8gKG1heExvY2FsLnkgLSBtaW5Mb2NhbC55KSksXHJcbiAgICAgICAgICAgIG9mZnNldENsaWVudCA9IGpvaW50LmcucG9pbnQoc3RhcnRMb2NhbC54ICogc2NhbGUueCArIGxlZnQsIHN0YXJ0TG9jYWwueSAqIHNjYWxlLnkgKyB0b3ApLFxyXG4gICAgICAgICAgICBvcmlnaW4gPSBqb2ludC5nLnBvaW50KGUuY2xpZW50WCAtIG9mZnNldENsaWVudC54LCBlLmNsaWVudFkgLSBvZmZzZXRDbGllbnQueSk7XHJcblxyXG4gICAgICAgIHBhcGVyLnNldE9yaWdpbihvcmlnaW4ueCwgb3JpZ2luLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBlbC5vZmYoJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlbC5nZXQoMCkpIHtcclxuICAgICAgICAgICAgdGVybWluYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbC5vbignbW91c2V1cCcsIHRlcm1pbmF0ZSk7XHJcbiAgICBlbC5vbignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICBlbC5vbignbW91c2Vtb3ZlIHRvdWNobW92ZScsIG1vdXNlbW92ZSk7XHJcbiAgICBlbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbn1cclxuXHJcbmV4cG9ydHMuUGFuUmVhY3RvciA9IFBhblJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcclxuICAgIGlmICgyID09PSBkaXJlY3Rpb24ubGVuZ3RoKSB7IHJldHVybiB7djogZGlyZWN0aW9uLnN1YnN0cigwLCAxKSwgaDogZGlyZWN0aW9uLnN1YnN0cigtMSl9OyB9XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgY2FzZSAnbic6XHJcbiAgICBjYXNlICdzJzpcclxuICAgICAgICByZXR1cm4ge3Y6IGRpcmVjdGlvbn07XHJcbiAgICBjYXNlICd3JzpcclxuICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgIHJldHVybiB7aDogZGlyZWN0aW9ufTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVzaXplUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzaXplUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBSZXNpemVSZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy52aWV3IHx8IHR5cGVvZiBvcHRpb25zLnZpZXcgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcigndmlldyBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmRpcmVjdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGlvbiBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgtMSA9PT0gWyduZScsICdlJywgJ3NlJywgJ3MnLCAnc3cnLCAndycsICdudycsICduJ10uaW5kZXhPZihvcHRpb25zLmRpcmVjdGlvbikpIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRpcmVjdGlvbiBvcHRpb24nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmdyaWRTaXplICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2dyaWRTaXplIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5ncmlkU2l6ZSA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8nKTsgfVxyXG5cclxuICAgIHZhciBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBncmlkU2l6ZSA9IG9wdGlvbnMuZ3JpZFNpemUsXHJcbiAgICAgICAgZWxlbWVudCA9IG9wdGlvbnMudmlldy5tb2RlbCxcclxuICAgICAgICBkaXJlY3Rpb24gPSBub3JtYWxpemVEaXJlY3Rpb24ob3B0aW9ucy5kaXJlY3Rpb24pLFxyXG4gICAgICAgIG1pbnNpemUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbXNpemUgPSBlbGVtZW50Lm1pbnNpemUsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgZW1iZWRzID0gXy5maWx0ZXIoZWxlbWVudC5nZXRFbWJlZGRlZENlbGxzKCksIGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50LmlzQ29udHJhaW50OyB9KSxcclxuICAgICAgICAgICAgICAgIGJib3gsXHJcbiAgICAgICAgICAgICAgICBlbWJlZHNiYm94LFxyXG4gICAgICAgICAgICAgICAgbWlud2lkdGggPSBtc2l6ZS53aWR0aCxcclxuICAgICAgICAgICAgICAgIG1pbmhlaWdodCA9IG1zaXplLmhlaWdodDtcclxuICAgICAgICAgICAgaWYgKGVtYmVkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGVtYmVkc2Jib3ggPSBtb2RlbC5nZXRCQm94KGVtYmVkcywge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIGJib3ggPSBlbGVtZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmcgPSBlbGVtZW50LnBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbi5oKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdlJzpcclxuICAgICAgICAgICAgICAgICAgICBtaW53aWR0aCA9IGVtYmVkc2Jib3guY29ybmVyKCkueCAtIGJib3gub3JpZ2luKCkueCArIHBhZGRpbmcucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgICAgICAgICAgICBtaW53aWR0aCA9IGJib3guY29ybmVyKCkueCAtIGVtYmVkc2Jib3gub3JpZ2luKCkueCArIHBhZGRpbmcubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uLnYpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmhlaWdodCA9IGVtYmVkc2Jib3guY29ybmVyKCkueSAtIGJib3gub3JpZ2luKCkueSArIHBhZGRpbmcuYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgICAgICAgICAgbWluaGVpZ2h0ID0gYmJveC5jb3JuZXIoKS55IC0gZW1iZWRzYmJveC5vcmlnaW4oKS55ICsgcGFkZGluZy50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiBNYXRoLm1heChtaW53aWR0aCwgbXNpemUud2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KG1pbmhlaWdodCwgbXNpemUuaGVpZ2h0KX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1zaXplO1xyXG4gICAgICAgIH0oKSksXHJcbiAgICAgICAgbW91c2VlbnRlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBmaXhQb2ludChwb2ludCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHggPSBwb2ludC54LFxyXG4gICAgICAgICAgICB5ID0gcG9pbnQueTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbi5oKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICAgIHggLT0gZ3JpZFNpemU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgICB4ICs9IGdyaWRTaXplO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24udikge1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICB5IC09IGdyaWRTaXplO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgeSArPSBncmlkU2l6ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqb2ludC5nLnBvaW50KHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnN0cmFpbihwb2ludCkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBlbGVtZW50LmdldCgncGFyZW50JyksXHJcbiAgICAgICAgICAgIGJib3gsXHJcbiAgICAgICAgICAgIHBhZGRpbmc7XHJcbiAgICAgICAgcG9pbnQgPSBqb2ludC5nLnBvaW50KGpvaW50Lmcuc25hcFRvR3JpZChwb2ludC54LCBncmlkU2l6ZSksIGpvaW50Lmcuc25hcFRvR3JpZChwb2ludC55LCBncmlkU2l6ZSkpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gbW9kZWwuZ2V0Q2VsbChwYXJlbnQpO1xyXG4gICAgICAgICAgICBiYm94ID0gcGFyZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgcGFkZGluZyA9IHBhcmVudC5wYWRkaW5nO1xyXG4gICAgICAgICAgICBwb2ludCA9IGpvaW50LmcucG9pbnQoXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1heChNYXRoLm1pbihwb2ludC54LCBiYm94LmNvcm5lcigpLnggLSBwYWRkaW5nLnJpZ2h0KSwgYmJveC54ICsgcGFkZGluZy5sZWZ0KSxcclxuICAgICAgICAgICAgICAgIE1hdGgubWF4KE1hdGgubWluKHBvaW50LnksIGJib3guY29ybmVyKCkueSAtIHBhZGRpbmcuYm90dG9tKSwgYmJveC55ICsgcGFkZGluZy50b3ApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZW1vdmUoZSkge1xyXG4gICAgICAgIHZhciBjbGllbnQgPSBjb25zdHJhaW4oZml4UG9pbnQocGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHt4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WX0pLCBkaXJlY3Rpb24pKSxcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBlbGVtZW50LmdldCgncG9zaXRpb24nKSxcclxuICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0KCdzaXplJyksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIHB4LFxyXG4gICAgICAgICAgICBweTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbi5oKSB7XHJcbiAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoY2xpZW50LnggLSBwb3NpdGlvbi54LCBtaW5zaXplLndpZHRoKTtcclxuICAgICAgICAgICAgcHggPSBwb3NpdGlvbi54O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heChzaXplLndpZHRoIC0gY2xpZW50LnggKyBwb3NpdGlvbi54LCBtaW5zaXplLndpZHRoKTtcclxuICAgICAgICAgICAgcHggPSBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCAtIHdpZHRoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB3aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIHB4ID0gcG9zaXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24udikge1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChjbGllbnQueSAtIHBvc2l0aW9uLnksIG1pbnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgcHkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoc2l6ZS5oZWlnaHQgLSBjbGllbnQueSArIHBvc2l0aW9uLnksIG1pbnNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgcHkgPSBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICBweSA9IHBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQucG9zaXRpb24ocHgsIHB5KTtcclxuICAgICAgICBlbGVtZW50LnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZWxlYXZlKGUpIHtcclxuICAgICAgICB2YXIgcG9pbnQgPSBqb2ludC5nLnBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSxcclxuICAgICAgICAgICAgYmJveCA9IGpvaW50LmcucmVjdChlbC5vZmZzZXQoKS5sZWZ0LCBlbC5vZmZzZXQoKS50b3AsIGVsLndpZHRoKCksIGVsLmhlaWdodCgpKTtcclxuICAgICAgICBwb2ludCA9IGJib3gucG9pbnROZWFyZXN0VG9Qb2ludChwb2ludCk7XHJcbiAgICAgICAgZS5jbGllbnRYID0gcG9pbnQueDtcclxuICAgICAgICBlLmNsaWVudFkgPSBwb2ludC55O1xyXG4gICAgICAgIHJldHVybiBtb3VzZW1vdmUoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVybWluYXRlKCkge1xyXG4gICAgICAgIGVsLm9mZignbW91c2V1cCcsIHRlcm1pbmF0ZSk7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZWVudGVyJywgbW91c2VlbnRlcik7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VsZWF2ZScsIG1vdXNlbGVhdmUpO1xyXG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRpbmcnKTtcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtcmVzaXppbmctJyArIG9wdGlvbnMuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZWVudGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5idXR0b25zID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWwub24oJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgZWwub24oJ21vdXNlZW50ZXInLCBtb3VzZWVudGVyKTtcclxuICAgIGVsLm9uKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgZWwub24oJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcclxuXHJcbiAgICBlbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbiAgICBlbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtcmVzaXppbmctJyArIG9wdGlvbnMuZGlyZWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0cy5SZXNpemVSZWFjdG9yID0gUmVzaXplUmVhY3RvcjtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gUm90YXRlUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUm90YXRlUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBSb3RhdGVSZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy52aWV3IHx8IHR5cGVvZiBvcHRpb25zLnZpZXcgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcigndmlldyBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuZ2xlU3RlcCAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdhbmdsZVN0ZXAgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLmFuZ2xlU3RlcCA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdhbmdsZVN0ZXAgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuXHJcbiAgICB2YXIgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBlbGVtZW50ID0gb3B0aW9ucy52aWV3Lm1vZGVsLFxyXG4gICAgICAgIGFuZ2xlU3RlcCA9IG9wdGlvbnMuYW5nbGVTdGVwLFxyXG4gICAgICAgIG1vdXNlb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlbW92ZShlKSB7XHJcbiAgICAgICAgdmFyIGNsaWVudCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9KSxcclxuICAgICAgICAgICAgYmJveCA9IGVsZW1lbnQuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pLFxyXG4gICAgICAgICAgICBjZW50ZXIgPSBiYm94LmNlbnRlcigpLFxyXG4gICAgICAgICAgICByYWQgPSBNYXRoLmF0YW4yKGNsaWVudC55IC0gY2VudGVyLnksIGNsaWVudC54IC0gY2VudGVyLngpO1xyXG4gICAgICAgIGVsZW1lbnQucm90YXRlKE1hdGgucm91bmQoam9pbnQuZy50b0RlZyhyYWQpIC8gYW5nbGVTdGVwKSAqIGFuZ2xlU3RlcCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVybWluYXRlKCkge1xyXG4gICAgICAgIGVsLm9mZignbW91c2V1cCcsIHRlcm1pbmF0ZSk7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZW91dCcsIG1vdXNlb3V0KTtcclxuICAgICAgICBlbC5vZmYoJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LW1hbmlwdWxhdGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlb3V0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGVsLmdldCgwKSkge1xyXG4gICAgICAgICAgICB0ZXJtaW5hdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsLm9uKCdtb3VzZXVwJywgdGVybWluYXRlKTtcclxuICAgIGVsLm9uKCdtb3VzZW91dCcsIG1vdXNlb3V0KTtcclxuICAgIGVsLm9uKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG5cclxuICAgIGVsLmFkZENsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRpbmcnKTtcclxufVxyXG5cclxuZXhwb3J0cy5Sb3RhdGVSZWFjdG9yID0gUm90YXRlUmVhY3RvcjtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gaWdub3JlKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XHJcblxyXG5leHBvcnRzLnZhbGlkYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChjZWxsVmlld1MsIG1hZ25ldFMsIGNlbGxWaWV3VCwgbWFnbmV0VCwgZW5kLCBsaW5rVmlldykge1xyXG4gICAgaWdub3JlKG1hZ25ldFMsIG1hZ25ldFQpO1xyXG4gICAgaWYgKGNlbGxWaWV3UyA9PT0gY2VsbFZpZXdUKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgaWYgKGxpbmtWaWV3Lm1vZGVsLnZhbGlkYXRlQ29ubmVjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBsaW5rVmlldy5tb2RlbC52YWxpZGF0ZUNvbm5lY3Rpb24oY2VsbFZpZXdTLCBtYWduZXRTLCBjZWxsVmlld1QsIG1hZ25ldFQsIGVuZCwgbGlua1ZpZXcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuZCA9PT0gJ3NvdXJjZScpIHtcclxuICAgICAgICByZXR1cm4gLTEgIT09IGxpbmtWaWV3Lm1vZGVsLnZhbGlkU291cmNlcy5pbmRleE9mKGNlbGxWaWV3Uy5tb2RlbC5nZXQoJ3R5cGUnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTEgIT09IGxpbmtWaWV3Lm1vZGVsLnZhbGlkVGFyZ2V0cy5pbmRleE9mKGNlbGxWaWV3VC5tb2RlbC5nZXQoJ3R5cGUnKSk7XHJcbn07XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBab29tUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgWm9vbVJlYWN0b3IpKSB7IHJldHVybiBuZXcgWm9vbVJlYWN0b3Iob3B0aW9ucyk7IH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5wYXBlciB8fCB0eXBlb2Ygb3B0aW9ucy5wYXBlciAhPT0gJ29iamVjdCcgfHwgIShvcHRpb25zLnBhcGVyIGluc3RhbmNlb2Ygam9pbnQuZGlhLlBhcGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWluU2NhbGUgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignbWluU2NhbGUgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhTY2FsZSAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdtYXhTY2FsZSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMubWluU2NhbGUgPCAwKSB7IHRocm93IG5ldyBFcnJvcignbWluU2NhbGUgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuICAgIGlmIChvcHRpb25zLm1pblNjYWxlID4gb3B0aW9ucy5tYXhTY2FsZSkgeyB0aHJvdyBuZXcgRXJyb3IoJ21heFNjYWxlIGNhbm5vdCBiZSBsZXNzIHRoZSBtaW5TY2FsZScpOyB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIG1pblNjYWxlID0gb3B0aW9ucy5taW5TY2FsZSxcclxuICAgICAgICBtYXhTY2FsZSA9IG9wdGlvbnMubWF4U2NhbGUsXHJcbiAgICAgICAgcGFkZGluZ1pvb21FID0ge3dpZHRoOiA1MCwgaGVpZ2h0OiA1MH07XHJcblxyXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplU2NhbGUoc2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoc2NhbGUsIG1pblNjYWxlKSwgbWF4U2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNld2hlZWwoZSkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICAgICAgdG9wID0gZWwub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgICAgICB3aWR0aCA9IGVsLndpZHRoKCksXHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsLmhlaWdodCgpLFxyXG4gICAgICAgICAgICB0b3BMZWZ0ID0gam9pbnQuZy5wb2ludChsZWZ0LCB0b3ApLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodCA9IGpvaW50LmcucG9pbnQobGVmdCArIHdpZHRoLCB0b3AgKyBoZWlnaHQpLFxyXG4gICAgICAgICAgICBjdXJyZW50ID0gam9pbnQuZy5wb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXhMb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChib3R0b21SaWdodCksXHJcbiAgICAgICAgICAgIHN0YXJ0TG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoY3VycmVudCksXHJcbiAgICAgICAgICAgIHNjYWxlID0ge3g6IHdpZHRoIC8gKG1heExvY2FsLnggLSBtaW5Mb2NhbC54KSwgeTogaGVpZ2h0IC8gKG1heExvY2FsLnkgLSBtaW5Mb2NhbC55KX0sXHJcbiAgICAgICAgICAgIG9mZnNldENsaWVudCxcclxuICAgICAgICAgICAgb3JpZ2luO1xyXG4gICAgICAgIHNjYWxlID0gbm9ybWFsaXplU2NhbGUoc2NhbGUueCAqIE1hdGgucG93KDEuMSwgZS5kZWx0YVkgKiBlLmRlbHRhRmFjdG9yIC8gMTAwMCkpO1xyXG4gICAgICAgIHBhcGVyLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQodG9wTGVmdCk7XHJcbiAgICAgICAgbWF4TG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoYm90dG9tUmlnaHQpO1xyXG4gICAgICAgIHNjYWxlID0gam9pbnQuZy5wb2ludCh3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSkpO1xyXG4gICAgICAgIG9mZnNldENsaWVudCA9IGpvaW50LmcucG9pbnQoc3RhcnRMb2NhbC54ICogc2NhbGUueCwgc3RhcnRMb2NhbC55ICogc2NhbGUueSk7XHJcbiAgICAgICAgb3JpZ2luID0gam9pbnQuZy5wb2ludChlLmNsaWVudFggLSBvZmZzZXRDbGllbnQueCwgZS5jbGllbnRZIC0gb2Zmc2V0Q2xpZW50LnkpO1xyXG5cclxuICAgICAgICBwYXBlci5zZXRPcmlnaW4ob3JpZ2luLnggLSBsZWZ0LCBvcmlnaW4ueSAtIHRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcG9pbnRlcmRibGNsaWNrKCkge1xyXG4gICAgICAgIGlmIChtb2RlbC5nZXRFbGVtZW50cygpLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cclxuICAgICAgICAvLyBpdCBpcyBzaW1pbGFyIHRvIHBhcGVyLnNjYWxlQ29udGVudFRvRml0KCk7IGJ1dCBpIHJlcXVpcmUgdG8gZG8gaXQgbWFudWFsbHkgdG8gY2hhbmdlIGV2ZW4gdGhlIG9yaWdpblxyXG4gICAgICAgIHZhciB3aWR0aCA9IGVsLndpZHRoKCkgLSBwYWRkaW5nWm9vbUUud2lkdGggKiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSAtIHBhZGRpbmdab29tRS5oZWlnaHQgKiAyLFxyXG4gICAgICAgICAgICBiYm94ID0gbW9kZWwuZ2V0QkJveChtb2RlbC5nZXRFbGVtZW50cygpLCB7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pLFxyXG4gICAgICAgICAgICBzY2FsZVggPSB3aWR0aCAvIGJib3gud2lkdGgsXHJcbiAgICAgICAgICAgIHNjYWxlWSA9IGhlaWdodCAvIGJib3guaGVpZ2h0LFxyXG4gICAgICAgICAgICBzY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHNjYWxlWCwgc2NhbGVZLCBtYXhTY2FsZSksIG1pblNjYWxlKSxcclxuICAgICAgICAgICAgb3ggPSAod2lkdGggLSBiYm94LndpZHRoICogc2NhbGUpIC8gMiAtIGJib3gueCAqIHNjYWxlLFxyXG4gICAgICAgICAgICBveSA9IChoZWlnaHQgLSBiYm94LmhlaWdodCAqIHNjYWxlKSAvIDIgLSBiYm94LnkgKiBzY2FsZTtcclxuXHJcbiAgICAgICAgcGFwZXIuc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICBwYXBlci5zZXRPcmlnaW4ob3ggKyBwYWRkaW5nWm9vbUUud2lkdGgsIG95ICsgcGFkZGluZ1pvb21FLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFwZXIub24oJ2JsYW5rOnBvaW50ZXJkYmxjbGljaycsIHBvaW50ZXJkYmxjbGljayk7XHJcbiAgICBlbC5vbignbW91c2V3aGVlbCcsIG1vdXNld2hlZWwpO1xyXG5cclxuICAgIHNlbGYuem9vbUUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcG9pbnRlcmRibGNsaWNrKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnRzLlpvb21SZWFjdG9yID0gWm9vbVJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gRWxlbWVudHNNZW51KG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFbGVtZW50c01lbnUpKSB7IHJldHVybiBuZXcgRWxlbWVudHNNZW51KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuY29udGFpbmVyKSB7IHRocm93IG5ldyBFcnJvcignY29udGFpbmVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5jb250YWluZXIpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY29udGFpbmVyIG9wdGlvbicpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMudGVtcGxhdGUpIHsgdGhyb3cgbmV3IEVycm9yKCd0ZW1wbGF0ZSBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRlbXBsYXRlIG9wdGlvbicpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLnRlbXBsYXRlKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRlbXBsYXRlIG9wdGlvbicpOyB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucy5idWlsZGVycykpIHsgdGhyb3cgbmV3IEVycm9yKCdidWlsZGVycyBvcHRpb25zIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuY3JlYXRlSXRlbURyYWdnZXIpIHsgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVJdGVtRHJhZ2dlciBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jcmVhdGVJdGVtRHJhZ2dlciAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY3JlYXRlSXRlbURyYWdnZXIgb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53aWR0aCAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCd3aWR0aCBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMud2lkdGggPCAyICogb3B0aW9ucy5wYWRkaW5nKSB7IHRocm93IG5ldyBFcnJvcignd2lkdGggY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvIChvciAyIHRpbWUgcGFkZGluZyknKTsgfVxyXG5cclxuICAgIHZhciBjb250YWluZXIgPSAkKF8uaGVhZCgkKG9wdGlvbnMuY29udGFpbmVyKSkpLFxyXG4gICAgICAgIGJ1aWxkZXJzID0gb3B0aW9ucy5idWlsZGVycyxcclxuICAgICAgICBjcmVhdGVJdGVtRHJhZ2dlciA9IG9wdGlvbnMuY3JlYXRlSXRlbURyYWdnZXIsXHJcbiAgICAgICAgdGVtcGxhdGUgPSAkKG9wdGlvbnMudGVtcGxhdGUpLFxyXG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuXHJcbiAgICBfLmVhY2goYnVpbGRlcnMsIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0ZW1wbGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XHJcbiAgICAgICAgaWYgKCFpdGVtLmhhc0NsYXNzKCdtLXRyYW5zZm9ybS1wbGFjZS1ob2xkZXInKSkge1xyXG4gICAgICAgICAgICBpdGVtID0gaXRlbS5maW5kKCcubS10cmFuc2Zvcm0tcGxhY2UtaG9sZGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUl0ZW1EcmFnZ2VyKHtlbDogaXRlbSwgY3JlYXRlRWxlbWVudHM6IGJ1aWxkZXIsIHdpZHRoOiB3aWR0aCwgbWluSGVpZ2h0OiA1MCwgcGFkZGluZzogMH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHMuRWxlbWVudHNNZW51ID0gRWxlbWVudHNNZW51O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCksXHJcbiAgICBkb2N1bWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydkb2N1bWVudCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnZG9jdW1lbnQnXSA6IG51bGwpO1xyXG5cclxua28uYmluZGluZ0hhbmRsZXJzLmV4ZWN1dGVPbkVudGVyID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCkge1xyXG4gICAgICAgIF8ubm9vcCh2YWx1ZUFjY2Vzc29yKTtcclxuICAgICAgICB2YXIgYWxsQmluZGluZ3MgPSBhbGxCaW5kaW5nc0FjY2Vzc29yKCk7XHJcbiAgICAgICAgJChlbGVtZW50KS5rZXlwcmVzcyhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGtleUNvZGUgPSAoZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZSk7XHJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgYWxsQmluZGluZ3MuZXhlY3V0ZU9uRW50ZXIuY2FsbCh2aWV3TW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFwQmFzZShlLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSB7XHJcbiAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgIHR5cGU6IGYudHlwZSxcclxuICAgICAgICBwcm9wZXJ0eTogZi5wcm9wZXJ0eSxcclxuICAgICAgICB2YWx1ZToga28ub2JzZXJ2YWJsZShlLnByb3AoZi5wcm9wZXJ0eSkpXHJcbiAgICB9O1xyXG4gICAgZmllbGQudmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGUucHJvcChmLnByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxudmFyIG1hcFN0cmluZyA9IG1hcEJhc2U7XHJcbnZhciBtYXBCb29sZWFuID0gbWFwQmFzZTtcclxuXHJcbmZ1bmN0aW9uIG1hcEJvb2xlYW5TZXQoZSwgZikge1xyXG4gICAgdmFyIGZpZWxkID0ge1xyXG4gICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgaXRlbXM6IGYuaXRlbXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBtYXBCb29sZWFuKGUsIHYpOyB9KVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RyaW5nU2V0KGUsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IHtcclxuICAgICAgICBuYW1lOiBmLm5hbWUsXHJcbiAgICAgICAgdHlwZTogZi50eXBlLFxyXG4gICAgICAgIHN0cmluZ3M6IGtvLm9ic2VydmFibGVBcnJheShfKGUuZ2V0KGYucHJvcGVydHkpIHx8IFtdKS5zb3J0KCkudW5pcSh0cnVlKS52YWx1ZSgpKSxcclxuICAgICAgICB2YWx1ZToga28ub2JzZXJ2YWJsZSgnJyksXHJcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSgpLnRyaW0oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnN0cmluZ3MoXyhmaWVsZC5zdHJpbmdzKCkpLmNvbmNhdChmaWVsZC52YWx1ZSgpLnRyaW0oKSkuc29ydCgpLnVuaXEodHJ1ZSkudmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZSgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaWVsZC5zdHJpbmdzLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGZpZWxkLnN0cmluZ3Muc3Vic2NyaWJlKGZ1bmN0aW9uIChzdHJpbmdzKSB7XHJcbiAgICAgICAgZS5wcm9wKGYucHJvcGVydHksIHN0cmluZ3MpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEVudW0oZSwgZikge1xyXG4gICAgdmFyIGZpZWxkID0gbWFwQmFzZShlLCBmKTtcclxuICAgIGZpZWxkLnZhbHVlcyA9IGYudmFsdWVzO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBOdW1iZXIoZSwgZikge1xyXG4gICAgdmFyIGZpZWxkID0gbWFwQmFzZShlLCBmKTtcclxuICAgIGZpZWxkLm1pbiA9IGYubWluO1xyXG4gICAgZmllbGQubWF4ID0gZi5tYXg7XHJcbiAgICBmaWVsZC50ZXh0ID0ga28ucHVyZUNvbXB1dGVkKHtcclxuICAgICAgICByZWFkOiBmaWVsZC52YWx1ZSxcclxuICAgICAgICB3cml0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICctJykgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBmaWVsZC52YWx1ZSgpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudE51bWJlciA9IChmLmludGVnZXIgJiYgcGFyc2VJbnQodmFsdWUsIDEwKSkgfHwgcGFyc2VGbG9hdCh2YWx1ZSwgMTApIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBjdXJyZW50TnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGYubWluID09PSAnbnVtYmVyJykgeyBudW1iZXIgPSBNYXRoLm1heChmLm1pbiwgbnVtYmVyKTsgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGYubWF4ID09PSAnbnVtYmVyJykgeyBudW1iZXIgPSBNYXRoLm1pbihmLm1heCwgbnVtYmVyKTsgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCAhPT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROdW1iZXIgIT09IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlLm5vdGlmeVN1YnNjcmliZXJzKG51bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KS5leHRlbmQoe25vdGlmeTogJ2Fsd2F5cyd9KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwQmluZGluZ3MobCwgZikge1xyXG4gICAgdmFyIGZpZWxkID0ge1xyXG4gICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgYmluZGluZ3M6IGtvLm9ic2VydmFibGVBcnJheSgobC5nZXQoZi5wcm9wZXJ0eSkgfHwgW10pLnNsaWNlKCkpLFxyXG4gICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZSgpLFxyXG4gICAgICAgIGlucHV0OiBrby5vYnNlcnZhYmxlKCksXHJcbiAgICAgICAgYWRkQmluZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQub3V0cHV0KCkgJiYgZmllbGQuaW5wdXQoKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGQuYmluZGluZ3MucHVzaCh7aW5wdXQ6IGZpZWxkLmlucHV0KCksIG91dHB1dDogZmllbGQub3V0cHV0KCl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlQmluZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaWVsZC5iaW5kaW5ncy5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpZWxkLm91dHB1dHMgPSAobC5nZXRTb3VyY2VFbGVtZW50KCkub3V0cHV0cyAmJiBsLmdldFNvdXJjZUVsZW1lbnQoKS5vdXRwdXRzKCkpIHx8XHJcbiAgICAgICAgKGwuZ2V0U291cmNlRWxlbWVudCgpLmdldEFuY2VzdG9ycygpWzBdLm91dHB1dHMgJiYgbC5nZXRTb3VyY2VFbGVtZW50KCkuZ2V0QW5jZXN0b3JzKClbMF0ub3V0cHV0cygpKSB8fFxyXG4gICAgICAgIFtdO1xyXG4gICAgZmllbGQuaW5wdXRzID0ga28uY29tcHV0ZWQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXyhsLmdldFRhcmdldEVsZW1lbnQoKS5pbnB1dHMoKSlcclxuICAgICAgICAgICAgICAgIC5kaWZmZXJlbmNlKF8ubWFwKGZpZWxkLmJpbmRpbmdzKCksIGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLmlucHV0OyB9KSlcclxuICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBmaWVsZC5iaW5kaW5ncy5zdWJzY3JpYmUoZnVuY3Rpb24gKGJpbmRpbmdzKSB7XHJcbiAgICAgICAgbC5zZXQoZi5wcm9wZXJ0eSwgYmluZGluZ3Muc2xpY2UoKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRWxlbWVudHNMaXN0KGwsIGYpIHtcclxuICAgIHZhciBlbGVtZW50cyA9IGwuZ2V0KGYucHJvcGVydHkpLFxyXG4gICAgICAgIGlnbm9yZWQgPSBfLnJlamVjdChlbGVtZW50cywgZi5maWx0ZXIpLFxyXG4gICAgICAgIGZpZWxkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBmLm5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IGYudHlwZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGtvLm9ic2VydmFibGVBcnJheShfLmNoYWluKGVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmLmZpbHRlcilcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiB7aWQ6IGlkLCBkaXNwbGF5OiBmLmRpc3BsYXkoaWQpfTsgfSlcclxuICAgICAgICAgICAgICAgIC52YWx1ZSgpKVxyXG4gICAgICAgIH07XHJcbiAgICBmaWVsZC50b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZmllbGQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnVuc2hpZnQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpZWxkLnVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGZpZWxkLmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5zcGxpY2UoaW5kZXggLSAxLCAyLCB0aGlzLCBmaWVsZC5jaGlsZHJlbigpW2luZGV4IC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmaWVsZC5kb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGZpZWxkLmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgZmllbGQuY2hpbGRyZW4oKS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMiwgZmllbGQuY2hpbGRyZW4oKVtpbmRleCArIDFdLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmllbGQuYm90dG9tID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGZpZWxkLmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgZmllbGQuY2hpbGRyZW4oKS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnB1c2godGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpZWxkLmNoaWxkcmVuLnN1YnNjcmliZShmdW5jdGlvbiAoc29ydGVkKSB7XHJcbiAgICAgICAgbC5zZXQoZi5wcm9wZXJ0eSwgXy5jaGFpbihzb3J0ZWQpLm1hcCgnaWQnKS5jb25jYXQoaWdub3JlZCkudmFsdWUoKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gRWxlbWVudFZpZXdNb2RlbChvcHRpb25zLCBjbG9zZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGNlbGwgPSBvcHRpb25zLmNlbGw7XHJcbiAgICBzZWxmLmlkID0gY2VsbC5pZDtcclxuICAgIHNlbGYuZmllbGRzID0gXy5tYXAob3B0aW9ucy5maWVsZHMsIGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgc3dpdGNoIChmLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwTnVtYmVyKGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBTdHJpbmcoY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnc3RyaW5nc2V0JzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcFN0cmluZ1NldChjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcEJvb2xlYW4oY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnZW51bSc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBFbnVtKGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW5zZXQnOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwQm9vbGVhblNldChjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdiaW5kaW5ncyc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBCaW5kaW5ncyhjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdlbGVtZW50c2xpc3QnOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwRWxlbWVudHNMaXN0KGNlbGwsIGYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbG9zZSA9IGNsb3NlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb2RhbEVkaXQob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1vZGFsRWRpdCkpIHsgcmV0dXJuIG5ldyBNb2RhbEVkaXQob3B0aW9ucyk7IH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jZWxsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ2F0IGxlYXN0IGVsZW1lbnQgb3IgbGluayBzaG91bGQgYmUgcHJvdmlkZWQnKTsgfVxyXG5cclxuICAgIHZhciBjZWxsID0gb3B0aW9ucy5jZWxsLFxyXG4gICAgICAgIGZpZWxkcyA9IGNlbGwuZWRpdGFibGUgJiYgY2VsbC5lZGl0YWJsZSgpLFxyXG4gICAgICAgIGVsID0gJChyZXF1aXJlKCcuL21vZGFsLmh0bWwnKSk7XHJcblxyXG4gICAgaWYgKCFmaWVsZHMpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQoZWwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlYXJEb3duKCkge1xyXG4gICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGtvLmFwcGx5QmluZGluZ3MobmV3IEVsZW1lbnRWaWV3TW9kZWwoe2NlbGw6IGNlbGwsIGZpZWxkczogZmllbGRzfSwgZnVuY3Rpb24gKCkgeyBlbC5tb2RhbCgnaGlkZScpOyB9KSwgZWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVswXSk7XHJcblxyXG4gICAgZWwubW9kYWwoJ3Nob3cnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgdGVhckRvd24pO1xyXG59XHJcblxyXG5leHBvcnRzLk1vZGFsRWRpdCA9IE1vZGFsRWRpdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCI+PHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXQgRWxlbWVudCA8c21hbGw+KGlkOiA8c3BhbiBjbGFzcz1cXFwic2VsZWN0YWJsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBpZFxcXCI+PC9zcGFuPik8L3NtYWxsPjwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBmaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ3N0cmluZycsIHZpc2libGU6IHR5cGUgPT09ICdzdHJpbmcnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZSwgYXR0cjoge2ZvcjogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6IHZhbHVlLCBleGVjdXRlT25FbnRlcjogJHJvb3QuY2xvc2UsIGF0dHI6IHtpZDogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdudW1iZXInLCB2aXNpYmxlOiB0eXBlID09PSAnbnVtYmVyJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWUsIGF0dHI6IHtmb3I6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6IHRleHQsIGV4ZWN1dGVPbkVudGVyOiAkcm9vdC5jbG9zZSwgYXR0cjoge2lkOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHksIG1pbjogbWluLCBtYXg6IG1heH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ2Jvb2xlYW4nLCB2aXNpYmxlOiB0eXBlID09PSAnYm9vbGVhbidcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IHZhbHVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ2VudW0nLCB2aXNpYmxlOiB0eXBlID09PSAnZW51bSdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lLCBhdHRyOiB7Zm9yOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiB2YWx1ZXMsIG9wdGlvbnNUZXh0OiAnbmFtZScsIG9wdGlvbnNWYWx1ZTogJ3ZhbHVlJywgdmFsdWU6IHZhbHVlLCBhdHRyOiB7aWQ6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnYm9vbGVhbnNldCcsIHZpc2libGU6IHR5cGUgPT09ICdib29sZWFuc2V0J1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIiBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IHZhbHVlLCBhdHRyOiB7aWQ6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdzdHJpbmdzZXQnLCB2aXNpYmxlOiB0eXBlID09PSAnc3RyaW5nc2V0J1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+dmFsdWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IHN0cmluZ3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3ByZT1cXFwicm93XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRpbmRleFxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogJGRhdGFcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDogdmFsdWUsIGV4ZWN1dGVPbkVudGVyOiBhZGRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGFkZFxcXCI+YWRkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdiaW5kaW5ncycsIHZpc2libGU6IHR5cGUgPT09ICdiaW5kaW5ncydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+b3V0cHV0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+aW5wdXQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGJpbmRpbmdzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wcmU9XFxcInJvd1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkaW5kZXhcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IG91dHB1dFxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogaW5wdXRcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5yZW1vdmVCaW5kaW5nXFxcIj5yZW1vdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogb3V0cHV0cywgdmFsdWU6IG91dHB1dFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogaW5wdXRzLCB2YWx1ZTogaW5wdXRcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGFkZEJpbmRpbmdcXFwiPmFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnZWxlbWVudHNsaXN0JywgdmlzaWJsZTogdHlwZSA9PT0gJ2VsZW1lbnRzbGlzdCdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTAgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDogY2hpbGRyZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3ByZT1cXFwicm93XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRpbmRleFxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogZGlzcGxheVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnRvcCwgZGlzYWJsZTogJGluZGV4KCkgPT09IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC51cCwgZGlzYWJsZTogJGluZGV4KCkgPT09IDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5kb3duLCBkaXNhYmxlOiAkaW5kZXgoKSArIDEgPT09ICRwYXJlbnQuY2hpbGRyZW4oKS5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtZG93blxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmJvdHRvbSwgZGlzYWJsZTogJGluZGV4KCkgKyAxID09PSAkcGFyZW50LmNoaWxkcmVuKCkubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNsb3NlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnRzLnNvcnRDZWxscyA9IHJlcXVpcmUoJy4vc29ydGNlbGxzJykuc29ydENlbGxzO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlQW5jZXN0b3JzKGlkLCBsb29rdXApIHtcclxuICAgIGlmICghaWQpIHsgcmV0dXJuIF8oW10pOyB9XHJcbiAgICByZXR1cm4gY29tcHV0ZUFuY2VzdG9ycyhsb29rdXBbaWRdLmdldCgncGFyZW50JyksIGxvb2t1cCkuY29uY2F0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydENlbGxzKGNlbGxzKSB7XHJcbiAgICB2YXIgbG9va3VwID0gXy56aXBPYmplY3QoXy5tYXAoY2VsbHMsIGZ1bmN0aW9uIChjZWxsKSB7IHJldHVybiBbY2VsbC5pZCwgY2VsbF07IH0pKSxcclxuICAgICAgICBhbmNlc3RvcnMgPSBfLnppcE9iamVjdChfLm1hcChjZWxscywgZnVuY3Rpb24gKGNlbGwpIHsgcmV0dXJuIFtjZWxsLmlkLCBjb21wdXRlQW5jZXN0b3JzKGNlbGwuaWQsIGxvb2t1cCkudmFsdWUoKV07IH0pKTtcclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVSZWxhdGl2ZXMoY2VsbDEsIGNlbGwyKSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IGxvb2t1cFtjZWxsMS5nZXQoJ3BhcmVudCcpXSxcclxuICAgICAgICAgICAgZW1iZWRzO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgZW1iZWRzID0gcGFyZW50LmdldCgnZW1iZWRzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbWJlZHMuaW5kZXhPZihjZWxsMS5pZCkgLSBlbWJlZHMuaW5kZXhPZihjZWxsMi5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZWxsMS5pZCA8IGNlbGwyLmlkID8gLTEgOiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNlbGxzLnNvcnQoZnVuY3Rpb24gKGNlbGwxLCBjZWxsMikge1xyXG4gICAgICAgIGlmIChjZWxsMS5pc0xpbmsoKSAhPT0gY2VsbDIuaXNMaW5rKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwyLmlzTGluaygpID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2VsbDEuaXNMaW5rKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwxLmlkIDwgY2VsbDIuaWQgPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmNlc3RvcnMxID0gYW5jZXN0b3JzW2NlbGwxLmlkXSxcclxuICAgICAgICAgICAgYW5jZXN0b3JzMiA9IGFuY2VzdG9yc1tjZWxsMi5pZF0sXHJcbiAgICAgICAgICAgIGNvbW1vblVuY2VzdG9ycztcclxuICAgICAgICBpZiAoYW5jZXN0b3JzMS5sZW5ndGggPCBhbmNlc3RvcnMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmNlc3RvcnMxLmxlbmd0aCA+IGFuY2VzdG9yczIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tb25VbmNlc3RvcnMgPSBfLmludGVyc2VjdGlvbihhbmNlc3RvcnMxLCBhbmNlc3RvcnMyKTtcclxuICAgICAgICBhbmNlc3RvcnMxID0gYW5jZXN0b3JzMS5zbGljZShjb21tb25VbmNlc3RvcnMubGVuZ3RoKTtcclxuICAgICAgICBhbmNlc3RvcnMyID0gYW5jZXN0b3JzMi5zbGljZShjb21tb25VbmNlc3RvcnMubGVuZ3RoKTtcclxuICAgICAgICBpZiAoYW5jZXN0b3JzMS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVSZWxhdGl2ZXMoY2VsbDEsIGNlbGwyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVSZWxhdGl2ZXMobG9va3VwW2FuY2VzdG9yczFbMF1dLCBsb29rdXBbYW5jZXN0b3JzMlswXV0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHMuc29ydENlbGxzID0gc29ydENlbGxzO1xyXG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcbiAgICAgICAgICAgICAgICBmb250c1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gUGFzcyB1cmwgcmVnZXgsIHNvIHRoYXQgb25jZSBmb250IGlzIGRvd25sYWRlZCwgd2UgY2FuIHJ1biBgcmVwbGFjZSgpYCBvbiBpdFxuICAgICAgICAgICAgICAgICAgZm9udFVybFJlZ2V4cDogZm9udFVybFJlZ2V4cCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChleHRlcm5hbEZvbnRVcmwpLFxuICAgICAgICAgICAgICAgICAgdXJsOiBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgIGNzcyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyBhbGwgY3NzIGlzIHByb2Nlc3NlZCwgaXQncyB0aW1lIHRvIGhhbmRsZSBzY2hlZHVsZWQgZm9udHNcbiAgICBwcm9jZXNzRm9udFF1ZXVlKGZvbnRzUXVldWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChmb250VXJsKSB7XG4gICAgICB2YXIgc3VwcG9ydGVkRm9ybWF0cyA9IHtcbiAgICAgICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxuICAgICAgICAnd29mZic6ICdmb250L3dvZmYnLFxuICAgICAgICAnb3RmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC1vcGVudHlwZScsXG4gICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24veC1mb250LXR0ZicsXG4gICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAnc2ZudCc6ICdhcHBsaWNhdGlvbi9mb250LXNmbnQnLFxuICAgICAgICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICB9O1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBPYmplY3Qua2V5cyhzdXBwb3J0ZWRGb3JtYXRzKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXTtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgYnVsbGV0IHByb29mLCBpdCBuZWVkcyB0byBoYW5kbGUgZWRnZSBjYXNlcy4uLlxuICAgICAgICBpZiAoZm9udFVybC5pbmRleE9mKCcuJyArIGV4dGVuc2lvbikgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvcm1hdHNbZXh0ZW5zaW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3Ugc2VlIHRoaXMgZXJyb3IgbWVzc2FnZSwgeW91IHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIGNvZGUgYWJvdmUuXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGZvbnQgZm9ybWF0IGZvciAnICsgZm9udFVybCsgJzsgRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseScpO1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb250UXVldWUocXVldWUpIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxvYWQgZm9udHMgb25lIGJ5IG9uZSB1bnRpbCB3ZSBoYXZlIGFueXRoaW5nIGluIHRoZSBxdWV1ZTpcbiAgICAgICAgdmFyIGZvbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgcHJvY2Vzc05leHQoZm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBtb3JlIGZvbnRzIHRvIGxvYWQuXG4gICAgICAgIGNzc0xvYWRlZENhbGxiYWNrKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0KGZvbnQpIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZW5lZml0IGZyb20gY2FjaGluZy5cbiAgICAgICAgdmFyIG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm9udExvYWRlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEub3BlbignR0VUJywgZm9udC51cmwpO1xuICAgICAgICBvUmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIG9SZXEuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGJlIGFsc28gd29ydGggdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQgKVxuICAgICAgICAgIHZhciBmb250Qml0cyA9IG9SZXEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoZm9udEJpdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXJGYWlsZWQoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tOiAnICsgZm9udC51cmwpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKVxuICAgICAgICAgIGNzcyArPSBmb250LnRleHQgKyAnXFxuJztcbiAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KSB7XG4gICAgICAgICAgdmFyIGRhdGFVcmwgPSAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKSc7XG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dC5yZXBsYWNlKGZvbnQuZm9udFVybFJlZ2V4cCwgZGF0YVVybCkgKyAnXFxuJztcblxuICAgICAgICAgIC8vIHNjaGVkdWxlIG5leHQgZm9udCBkb3dubG9hZCBvbiBuZXh0IHRpY2suXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb2Nlc3NGb250UXVldWUocXVldWUpXG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgdmFyIGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gKGVsLnZpZXdCb3ggJiYgZWwudmlld0JveC5iYXNlVmFsICYmIGVsLnZpZXdCb3guYmFzZVZhbFtkaW1dKSB8fFxuICAgICAgKGNsb25lLmdldEF0dHJpYnV0ZShkaW0pICE9PSBudWxsICYmICFjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKS5tYXRjaCgvJSQvKSAmJiBwYXJzZUludChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSkpIHx8XG4gICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8XG4gICAgICBwYXJzZUludChjbG9uZS5zdHlsZVtkaW1dKSB8fFxuICAgICAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoZGltKSk7XG4gICAgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSkgPyAwIDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcrcDEpO1xuICAgICAgcmV0dXJuIGMgPT09ICclJyA/ICclMjUnIDogYztcbiAgICB9KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICB9XG5cbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgMTtcbiAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgZmFsc2U7XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xuXG4gICAgaW5saW5lSW1hZ2VzKGVsLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICAgIGlmKGVsLnRhZ05hbWUgPT0gJ3N2ZycpIHtcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpO1xuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnaGVpZ2h0Jyk7XG4gICAgICB9IGVsc2UgaWYoZWwuZ2V0QkJveCkge1xuICAgICAgICB2YXIgYm94ID0gZWwuZ2V0QkJveCgpO1xuICAgICAgICB3aWR0aCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBib3gueSArIGJveC5oZWlnaHQ7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKVxuICAgICAgICBjbG9uZSA9IHN2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaW5ZTWluIG1lZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBbXG4gICAgICAgIG9wdGlvbnMubGVmdCB8fCAwLFxuICAgICAgICBvcHRpb25zLnRvcCB8fCAwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICBdLmpvaW4oXCIgXCIpKTtcblxuICAgICAgdmFyIGZvcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvcmVpZ25PYmplY3QgPiAqJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWZvc1tpXS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgICBmb3NbaV0uc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBjdXN0b20gZm9udHMgd2UgbmVlZCB0byBmZXRjaCBmb250IGZpcnN0LCBhbmQgdGhlbiBpbmxpbmVcbiAgICAgIC8vIGl0cyB1cmwgaW50byBkYXRhLXVyaSBmb3JtYXQgKGVuY29kZSBhcyBiYXNlNjQpLiBUaGF0J3Mgd2h5IHN0eWxlXG4gICAgICAvLyBwcm9jZXNzaW5nIGlzIGRvbmUgYXN5bmNob25vdXNseS4gT25jZSBhbGwgaW5saW5pbmcgaXMgZmluc2hlZFxuICAgICAgLy8gY3NzTG9hZGVkQ2FsbGJhY2soKSBpcyBjYWxsZWQuXG4gICAgICBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gY3NzTG9hZGVkQ2FsbGJhY2soY3NzKSB7XG4gICAgICAgIC8vIGhlcmUgYWxsIGZvbnRzIGFyZSBpbmxpbmVkLCBzbyB0aGF0IHdlIGNhbiByZW5kZXIgdGhlbSBwcm9wZXJseS5cbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzLmlubmVySFRNTCA9IFwiPCFbQ0RBVEFbXFxuXCIgKyBjc3MgKyBcIlxcbl1dPlwiO1xuICAgICAgICB2YXIgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGRlZnMsIGNsb25lLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHZhciBvdXRIdG1sID0gb3V0ZXIuaW5uZXJIVE1MO1xuICAgICAgICAgIG91dEh0bWwgPSBvdXRIdG1sLnJlcGxhY2UoL05TXFxkKzpocmVmL2dpLCAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZicpO1xuICAgICAgICAgIGNiKG91dEh0bWwsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzRGF0YVVyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgZnVuY3Rpb24oc3ZnKSB7XG4gICAgICB2YXIgdXJpID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzdmcpKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYih1cmkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc1BuZ1VyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZW5jb2RlclR5cGUgPSBvcHRpb25zLmVuY29kZXJUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICAgIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgPSBvcHRpb25zLmVuY29kZXJPcHRpb25zIHx8IDAuODtcblxuICAgIHZhciBjb252ZXJ0VG9QbmcgPSBmdW5jdGlvbihzcmMsIHcsIGgpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgICAgb3B0aW9ucy5jYW52ZyhjYW52YXMsIHNyYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcil7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbmc7XG4gICAgICB0cnkge1xuICAgICAgICBwbmcgPSBjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMuZW5jb2RlclR5cGUsIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvcikgfHwgZS5uYW1lID09IFwiU2VjdXJpdHlFcnJvclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IocG5nKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGNvbnZlcnRUb1BuZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udmVydFRvUG5nKGltYWdlLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBkYXRhIFVSSSBhcyBhbiBpbWFnZSBvbiB0aGUgZm9sbG93aW5nIFNWR1xcbicsXG4gICAgICAgICAgICB3aW5kb3cuYXRvYih1cmkuc2xpY2UoMjYpKSwgJ1xcbicsXG4gICAgICAgICAgICBcIk9wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyJ3MgZGlhZ25vc2lzXFxuXCIsXG4gICAgICAgICAgICB1cmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3V0JC5kb3dubG9hZCA9IGZ1bmN0aW9uKG5hbWUsIHVyaSkge1xuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodXJpVG9CbG9iKHVyaSksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgZG93bmxvYWRTdXBwb3J0ZWQgPSAnZG93bmxvYWQnIGluIHNhdmVMaW5rO1xuICAgICAgaWYgKGRvd25sb2FkU3VwcG9ydGVkKSB7XG4gICAgICAgIHNhdmVMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgc2F2ZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYXZlTGluayk7XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcbiJdfQ==
