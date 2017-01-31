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
    ModalEdit = require('./lib/modaledit').ModelEdit;

// Constructors
exports.Board = Board;
exports.ElementsMenu = ElementsMenu;
exports.ModalEdit = ModalEdit;

// Maker Functions
exports.createBoard = Board;
exports.createElementsMenu = ElementsMenu;
exports.createModalEdit = ModalEdit;

},{"./lib/board":6,"./lib/elementsmenu":27,"./lib/modaledit":28}],3:[function(require,module,exports){
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

},{"save-svg-as-png":30}],17:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJnbG9iYWwuanMiLCJpbmRleC5qcyIsImxpYi9ib2FyZC9kZWxldGUuc3ZnIiwibGliL2JvYXJkL2VkaXQuc3ZnIiwibGliL2JvYXJkL2VtYmVkZGluZ3JlYWN0b3IuanMiLCJsaWIvYm9hcmQvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaXRlbWRyYWdnZXIuaHRtbCIsImxpYi9ib2FyZC9pdGVtZHJhZ2dlci9vdmVybGF5Lmh0bWwiLCJsaWIvYm9hcmQvbGluay5zdmciLCJsaWIvYm9hcmQvbGlua2Nvbm5lY3Rpb25wb2ludC5qcyIsImxpYi9ib2FyZC9tYW5pcHVsYXRpb25yZWFjdG9yLmpzIiwibGliL2JvYXJkL21hbmlwdWxhdG9yLmh0bWwiLCJsaWIvYm9hcmQvbWFwL2luZGV4LmpzIiwibGliL2JvYXJkL21hcC9wcmV2aWV3Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ByZXZpZXcuanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0LmpzIiwibGliL2JvYXJkL21hcC92aWV3cG9ydG91dGxpbmUvaW5kZXguanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0b3V0bGluZS9tYXJrdXAuc3ZnIiwibGliL2JvYXJkL21vdmUuc3ZnIiwibGliL2JvYXJkL3BhbnJlYWN0b3IuanMiLCJsaWIvYm9hcmQvcmVzaXplcmVhY3Rvci5qcyIsImxpYi9ib2FyZC9yb3RhdGVyZWFjdG9yLmpzIiwibGliL2JvYXJkL3ZhbGlkYXRlY29ubmVjdGlvbi5qcyIsImxpYi9ib2FyZC96b29tcmVhY3Rvci5qcyIsImxpYi9lbGVtZW50c21lbnUvaW5kZXguanMiLCJsaWIvbW9kYWxlZGl0L2luZGV4LmpzIiwibGliL21vZGFsZWRpdC9tb2RhbC5odG1sIiwibm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7O0FDREE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdktBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1T0E7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JGQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1RkE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzQkE7QUFDQTs7QUNEQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdE9BO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbXRqb2ludCA9IHJlcXVpcmUoJy4vJyksXHJcbiAgICB3aW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snd2luZG93J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyd3aW5kb3cnXSA6IG51bGwpO1xyXG5cclxud2luZG93Lm10am9pbnQgPSBtdGpvaW50O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL2xpYi9ib2FyZCcpLkJvYXJkLFxyXG4gICAgRWxlbWVudHNNZW51ID0gcmVxdWlyZSgnLi9saWIvZWxlbWVudHNtZW51JykuRWxlbWVudHNNZW51LFxyXG4gICAgTW9kYWxFZGl0ID0gcmVxdWlyZSgnLi9saWIvbW9kYWxlZGl0JykuTW9kZWxFZGl0O1xyXG5cclxuLy8gQ29uc3RydWN0b3JzXHJcbmV4cG9ydHMuQm9hcmQgPSBCb2FyZDtcclxuZXhwb3J0cy5FbGVtZW50c01lbnUgPSBFbGVtZW50c01lbnU7XHJcbmV4cG9ydHMuTW9kYWxFZGl0ID0gTW9kYWxFZGl0O1xyXG5cclxuLy8gTWFrZXIgRnVuY3Rpb25zXHJcbmV4cG9ydHMuY3JlYXRlQm9hcmQgPSBCb2FyZDtcclxuZXhwb3J0cy5jcmVhdGVFbGVtZW50c01lbnUgPSBFbGVtZW50c01lbnU7XHJcbmV4cG9ydHMuY3JlYXRlTW9kYWxFZGl0ID0gTW9kYWxFZGl0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Z1xcclxcbiAgIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCJcXHJcXG4gICB4bWxuczpjYz1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjXFxcIlxcclxcbiAgIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCJcXHJcXG4gICB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiXFxyXFxuICAgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiXFxyXFxuICAgdmVyc2lvbj1cXFwiMS4xXFxcIlxcclxcbiAgIGlkPVxcXCJDYXBhXzFcXFwiXFxyXFxuICAgeD1cXFwiMHB4XFxcIlxcclxcbiAgIHk9XFxcIjBweFxcXCJcXHJcXG4gICB3aWR0aD1cXFwiNDQuMjM4cHhcXFwiXFxyXFxuICAgaGVpZ2h0PVxcXCI0NC4yMzhweFxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM4IDQ0LjIzOFxcXCJcXHJcXG4gICB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcclxcbiAgIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTEgcjEzNzI1XFxcIlxcclxcbiAgIHNvZGlwb2RpOmRvY25hbWU9XFxcImRlbGV0ZS5zdmdcXFwiXFxyXFxuICAgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQuMjM4IDQ0LjIzODtcXFwiPjxtZXRhZGF0YVxcclxcbiAgICAgaWQ9XFxcIm1ldGFkYXRhNTFcXFwiPjxyZGY6UkRGPjxjYzpXb3JrXFxyXFxuICAgICAgICAgcmRmOmFib3V0PVxcXCJcXFwiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlXFxyXFxuICAgICAgICAgICByZGY6cmVzb3VyY2U9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlXFxcIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmc1xcclxcbiAgICAgaWQ9XFxcImRlZnM0OVxcXCIgLz48c29kaXBvZGk6bmFtZWR2aWV3XFxyXFxuICAgICBwYWdlY29sb3I9XFxcIiNmZmZmZmZcXFwiXFxyXFxuICAgICBib3JkZXJjb2xvcj1cXFwiIzY2NjY2NlxcXCJcXHJcXG4gICAgIGJvcmRlcm9wYWNpdHk9XFxcIjFcXFwiXFxyXFxuICAgICBvYmplY3R0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3JpZHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBndWlkZXRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT1cXFwiMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9XFxcIjJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9XFxcIjE2MDBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PVxcXCI4MzdcXFwiXFxyXFxuICAgICBpZD1cXFwibmFtZWR2aWV3NDdcXFwiXFxyXFxuICAgICBzaG93Z3JpZD1cXFwiZmFsc2VcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp6b29tPVxcXCI1LjMzNDc4MDJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeD1cXFwiNjguODc0Mzg3XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3k9XFxcIjIyLjExODk5OVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy14PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy15PVxcXCItOFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9XFxcIjFcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPVxcXCJDYXBhXzFcXFwiXFxyXFxuICAgICBzaG93Z3VpZGVzPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD1cXFwidHJ1ZVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0MjMwXFxcIj48Y2lyY2xlXFxyXFxuICAgICAgIHI9XFxcIjIxXFxcIlxcclxcbiAgICAgICBjeT1cXFwiMjIuMjM3OTk5XFxcIlxcclxcbiAgICAgICBjeD1cXFwiMjJcXFwiXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNDIwOFxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQwMDAwMDAxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGVcXFwiIC8+PGdcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgaWQ9XFxcImc3XFxcIj48cGF0aFxcclxcbiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgc3R5bGU9XFxcImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgICBpZD1cXFwicGF0aDlcXFwiXFxyXFxuICAgICAgICAgZD1cXFwibSAxNS41MzMsMjkuNDU1IGMgLTAuMTkyLDAgLTAuMzg0LC0wLjA3MyAtMC41MywtMC4yMiAtMC4yOTMsLTAuMjkzIC0wLjI5MywtMC43NjkgMCwtMS4wNjIgTCAyOC4xNzQsMTUuMDAyIGMgMC4yOTMsLTAuMjkzIDAuNzY4LC0wLjI5MyAxLjA2MSwwIDAuMjkzLDAuMjkzIDAuMjkzLDAuNzY4IDAsMS4wNjEgTCAxNi4wNjMsMjkuMjM1IGMgLTAuMTQ2LDAuMTQ3IC0wLjMzOCwwLjIyIC0wLjUzLDAuMjIgelxcXCIgLz48L2c+PGdcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgaWQ9XFxcImcxMVxcXCI+PHBhdGhcXHJcXG4gICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIlxcclxcbiAgICAgICAgIHN0eWxlPVxcXCJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjFcXFwiXFxyXFxuICAgICAgICAgaWQ9XFxcInBhdGgxM1xcXCJcXHJcXG4gICAgICAgICBkPVxcXCJtIDI4LjcwNCwyOS40NTUgYyAtMC4xOTIsMCAtMC4zODQsLTAuMDczIC0wLjUzLC0wLjIyIEwgMTUuMDAyLDE2LjA2NCBjIC0wLjI5MywtMC4yOTMgLTAuMjkzLC0wLjc2OCAwLC0xLjA2MSAwLjI5MywtMC4yOTMgMC43NjgsLTAuMjkzIDEuMDYxLDAgbCAxMy4xNzEsMTMuMTcxIGMgMC4yOTMsMC4yOTMgMC4yOTMsMC43NjkgMCwxLjA2MiAtMC4xNDYsMC4xNDYgLTAuMzM4LDAuMjE5IC0wLjUzLDAuMjE5IHpcXFwiIC8+PC9nPjxwYXRoXFxyXFxuICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgIHN0eWxlPVxcXCJmaWxsOiNmZjAwMDA7ZmlsbC1vcGFjaXR5OjFcXFwiXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoMTVcXFwiXFxyXFxuICAgICAgIGQ9XFxcIk0gMjIuMTE5LDQ0LjIzNyBDIDkuOTIyLDQ0LjIzNyAwLDM0LjMxNSAwLDIyLjEyIDAsOS45MjQgOS45MjIsMC4wMDEgMjIuMTE5LDAuMDAxIGMgMTIuMTk3LDAgMjIuMTE5LDkuOTIyIDIyLjExOSwyMi4xMTkgMCwxMi4xOTcgLTkuOTI0LDIyLjExNyAtMjIuMTE5LDIyLjExNyB6IG0gMCwtNDIuNzM2IEMgMTAuNzUsMS41MDEgMS41LDEwLjc1MSAxLjUsMjIuMTIgYyAwLDExLjM2OSA5LjI1LDIwLjYxOSAyMC42MTksMjAuNjE5IDExLjM2OSwwIDIwLjYxOSwtOS4yNSAyMC42MTksLTIwLjYxOSAwLC0xMS4zNjkgLTkuMjUsLTIwLjYxOSAtMjAuNjE5LC0yMC42MTkgelxcXCIgLz48L2c+PGdcXHJcXG4gICAgIGlkPVxcXCJnMTdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMTlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDVcXFwiIC8+PC9zdmc+XFxyXFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2Z1xcclxcbiAgIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCJcXHJcXG4gICB4bWxuczpjYz1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjXFxcIlxcclxcbiAgIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCJcXHJcXG4gICB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiXFxyXFxuICAgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiXFxyXFxuICAgY2xhc3M9XFxcImRldGFpbCBjb252ZXJ0U3ZnSW5saW5lIHJlcGxhY2VkLXN2Z1xcXCJcXHJcXG4gICBpZD1cXFwiaW1nVmlld1xcXCJcXHJcXG4gICBmaWxsPVxcXCIjMDAwMDAwXFxcIlxcclxcbiAgIHZpZXdCb3g9XFxcIjAgMCA0NC4yMzYgNDQuMjM2XFxcIlxcclxcbiAgIHg9XFxcIjBweFxcXCJcXHJcXG4gICB5PVxcXCIwcHhcXFwiXFxyXFxuICAgd2lkdGg9XFxcIjI1NlxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjI1NlxcXCJcXHJcXG4gICB2ZXJzaW9uPVxcXCIxLjFcXFwiXFxyXFxuICAgZGF0YS1rdz1cXFwiY29uZmlndXJhdGlvbjEyXFxcIlxcclxcbiAgIGRhdGEtaWQ9XFxcIjUxODc0XFxcIlxcclxcbiAgIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFxyXFxuICAgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45MSByMTM3MjVcXFwiXFxyXFxuICAgc29kaXBvZGk6ZG9jbmFtZT1cXFwiZWRpdC5zdmdcXFwiPjxtZXRhZGF0YVxcclxcbiAgICAgaWQ9XFxcIm1ldGFkYXRhNTNcXFwiPjxyZGY6UkRGPjxjYzpXb3JrXFxyXFxuICAgICAgICAgcmRmOmFib3V0PVxcXCJcXFwiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlXFxyXFxuICAgICAgICAgICByZGY6cmVzb3VyY2U9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlXFxcIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmc1xcclxcbiAgICAgaWQ9XFxcImRlZnM1MVxcXCIgLz48c29kaXBvZGk6bmFtZWR2aWV3XFxyXFxuICAgICBwYWdlY29sb3I9XFxcIiNmZmZmZmZcXFwiXFxyXFxuICAgICBib3JkZXJjb2xvcj1cXFwiIzY2NjY2NlxcXCJcXHJcXG4gICAgIGJvcmRlcm9wYWNpdHk9XFxcIjFcXFwiXFxyXFxuICAgICBvYmplY3R0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3JpZHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBndWlkZXRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT1cXFwiMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9XFxcIjJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9XFxcIjE5MjBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PVxcXCIxMDE3XFxcIlxcclxcbiAgICAgaWQ9XFxcIm5hbWVkdmlldzQ5XFxcIlxcclxcbiAgICAgc2hvd2dyaWQ9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6em9vbT1cXFwiMi42MDc0NTYzXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3g9XFxcIjIyMS43MDk1MVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN5PVxcXCIxMDYuNzQ1MjNcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteD1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteT1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPVxcXCIxXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cXFwiaW1nVmlld1xcXCIgLz48Y2lyY2xlXFxyXFxuICAgICBzdHlsZT1cXFwiY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMDM0NTU5Mzc7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGVcXFwiXFxyXFxuICAgICBpZD1cXFwicGF0aDQxODFcXFwiXFxyXFxuICAgICBjeD1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgY3k9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgIHI9XFxcIjIxLjI1NDAxNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczXFxcIj48Z1xcclxcbiAgICAgICBpZD1cXFwiZzVcXFwiPjxwYXRoXFxyXFxuICAgICAgICAgZmlsbD1cXFwiXFxcIlxcclxcbiAgICAgICAgIGQ9XFxcIk0gMjIuMTE4IDQ0LjIzNiBDIDkuOTIyIDQ0LjIzNiAwIDM0LjMxNCAwIDIyLjExOSBDIDAgOS45MjMgOS45MjIgMCAyMi4xMTggMCBzIDIyLjExOCA5LjkyMyAyMi4xMTggMjIuMTE5IEMgNDQuMjM2IDM0LjMxNCAzNC4zMTQgNDQuMjM2IDIyLjExOCA0NC4yMzYgWiBNIDIyLjExOCAxLjUgQyAxMC43NSAxLjUgMS41IDEwLjc1IDEuNSAyMi4xMTkgcyA5LjI1IDIwLjYxNyAyMC42MTggMjAuNjE3IHMgMjAuNjE4IC05LjI0OCAyMC42MTggLTIwLjYxNyBTIDMzLjQ4NiAxLjUgMjIuMTE4IDEuNSBaXFxcIlxcclxcbiAgICAgICAgIGlkPVxcXCJwYXRoN1xcXCIgLz48Z1xcclxcbiAgICAgICAgIGlkPVxcXCJnOVxcXCI+PGNpcmNsZVxcclxcbiAgICAgICAgICAgZmlsbD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgY3g9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgICAgICAgIGN5PVxcXCIyMi40MzhcXFwiXFxyXFxuICAgICAgICAgICByPVxcXCIxLjQxXFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcImNpcmNsZTExXFxcIiAvPjxwYXRoXFxyXFxuICAgICAgICAgICBmaWxsPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICBkPVxcXCJNIDIyLjExOCAyNC4wOTggYyAtMC45MTYgMCAtMS42NiAtMC43NDQgLTEuNjYgLTEuNjYgYyAwIC0wLjkxNSAwLjc0NSAtMS42NiAxLjY2IC0xLjY2IHMgMS42NTkgMC43NDUgMS42NTkgMS42NiBDIDIzLjc3NyAyMy4zNTQgMjMuMDM0IDI0LjA5OCAyMi4xMTggMjQuMDk4IFogTSAyMi4xMTggMjEuMjc3IGMgLTAuNjQgMCAtMS4xNiAwLjUyMSAtMS4xNiAxLjE2IHMgMC41MjEgMS4xNjEgMS4xNiAxLjE2MSBjIDAuNjM5IDAgMS4xNTkgLTAuNTIxIDEuMTU5IC0xLjE2MSBTIDIyLjc1OCAyMS4yNzcgMjIuMTE4IDIxLjI3NyBaXFxcIlxcclxcbiAgICAgICAgICAgaWQ9XFxcInBhdGgxM1xcXCIgLz48L2c+PGdcXHJcXG4gICAgICAgICBpZD1cXFwiZzE1XFxcIj48cGF0aFxcclxcbiAgICAgICAgICAgZmlsbD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgZD1cXFwiTSAyMi4xMTggMzIuNDIgYyAtMC42IDAgLTEuMjA4IC0wLjA2MSAtMS44NiAtMC4xODIgYyAtMC40NDYgLTAuMDYyIC0wLjgzIC0wLjQ0NCAtMC44OTggLTAuOTI2IGwgLTAuMzU3IC0xLjgzOCBjIC0wLjQ2MSAtMC4yMDcgLTAuODk2IC0wLjQ1OSAtMS4yODcgLTAuNzQ0IGwgLTEuNzk4IDAuNjIzIGMgLTAuMDg3IDAuMDQxIC0wLjIzMyAwLjA3IC0wLjM4MSAwLjA3IGMgLTAuMzE3IDAgLTAuNjIyIC0wLjE0NiAtMC44MzcgLTAuMzk4IGMgLTAuODM2IC0wLjk1MiAtMS40ODIgLTIuMDc0IC0xLjg2MiAtMy4yMzMgYyAtMC4xODMgLTAuNDE4IC0wLjAyMyAtMC45NzQgMC40MDMgLTEuMjU3IGwgMS4zNTggLTEuMTg2IGMgLTAuMDIzIC0wLjIzIC0wLjAzNSAtMC40NzkgLTAuMDM1IC0wLjc1MiBjIDAgLTAuMjcxIDAuMDExIC0wLjUyIDAuMDM1IC0wLjc1IGwgLTEuNDM1IC0xLjI0NSBjIC0wLjM1IC0wLjIyNiAtMC41MSAtMC43OCAtMC4zMDMgLTEuMjYyIGMgMC4zNTYgLTEuMDk4IDEuMDAzIC0yLjIxOSAxLjg0NyAtMy4xODEgYyAwLjI5OSAtMC4zNTUgMC44MjIgLTAuNDg4IDEuMjYxIC0wLjI5OCBsIDEuNzQ2IDAuNjAzIGMgMC4zOSAtMC4yODQgMC44MjUgLTAuNTM3IDEuMjg3IC0wLjc0NSBsIDAuMzY0IC0xLjg3NCBjIDAuMDYzIC0wLjQ0NyAwLjQ0OSAtMC44MyAwLjkzMiAtMC44OTQgYyAxLjEyNSAtMC4yMzQgMi40NjUgLTAuMjQzIDMuNjkzIDAuMDA5IGMgMC40MzIgMC4wNTUgMC44MTcgMC40MzggMC44ODYgMC45MjEgbCAwLjM1NyAxLjgzOCBjIDAuNDQ3IDAuMjA0IDAuODc1IDAuNDUzIDEuMjgzIDAuNzQ2IGwgMS44MDMgLTAuNjI0IGMgMC4wODcgLTAuMDQgMC4yMzIgLTAuMDcgMC4zODEgLTAuMDcgYyAwLjMxOCAwIDAuNjI0IDAuMTQ2IDAuODM4IDAuNDAxIGMgMC44MzQgMC45NDkgMS40OCAyLjA3IDEuODYxIDMuMjMgYyAwLjE4MyAwLjQxOSAwLjAyMiAwLjk3NCAtMC40MDMgMS4yNTggbCAtMS4zNTggMS4xODUgYyAwLjAyMiAwLjIzMiAwLjAzNCAwLjQ4IDAuMDM0IDAuNzUyIHMgLTAuMDExIDAuNTIgLTAuMDM0IDAuNzUgbCAxLjQzNCAxLjI0NSBjIDAuMzUxIDAuMjI2IDAuNTExIDAuNzggMC4zMDQgMS4yNjEgYyAtMC4zNTYgMS4wOTggLTEuMDAyIDIuMjIgLTEuODQ3IDMuMTgyIGMgLTAuMzAzIDAuMzU3IC0wLjgyNSAwLjQ4NiAtMS4yNjIgMC4yOTkgbCAtMS43NSAtMC42MDQgYyAtMC40MDYgMC4yOTMgLTAuODM2IDAuNTQxIC0xLjI4MSAwLjc0NiBsIC0wLjM2NCAxLjg3MyBjIC0wLjA2MiAwLjQ0NCAtMC40NDYgMC44MjcgLTAuOTI3IDAuODk2IEMgMjMuMzI3IDMyLjM1OSAyMi43MTggMzIuNDIgMjIuMTE4IDMyLjQyIFogTSAyMC43ODkgMzAuODA5IGMgMC45NiAwLjE1MiAxLjczOCAwLjE0NiAyLjY2IDAgbCAwLjM5IC0yLjAxMiBjIDAuMDUgLTAuMjU0IDAuMjI2IC0wLjQ2NCAwLjQ2NiAtMC41NTcgYyAwLjU3IC0wLjIyMSAxLjExMSAtMC41MzUgMS42MDcgLTAuOTM2IGMgMC4yMDEgLTAuMTYyIDAuNDcyIC0wLjIwNyAwLjcxNiAtMC4xMjUgbCAxLjkzOCAwLjY3MiBjIDAuNTggLTAuNzA1IDEuMDMzIC0xLjQ5IDEuMzMgLTIuMzAxIGwgLTEuNTQ5IC0xLjMzNyBjIC0wLjIwMSAtMC4xNzQgLTAuMjk1IC0wLjQ0MiAtMC4yNDYgLTAuNzAzIGMgMC4wNDcgLTAuMjU5IDAuMDcgLTAuNTU4IDAuMDcgLTAuOTE0IHMgLTAuMDIzIC0wLjY1NCAtMC4wNyAtMC45MTMgYyAtMC4wNSAtMC4yNjEgMC4wNDUgLTAuNTI5IDAuMjQ2IC0wLjcwMyBsIDEuNTQ3IC0xLjM0MiBjIC0wLjMxMyAtMC44MzggLTAuNzY0IC0xLjYxMSAtMS4zMyAtMi4yOTcgbCAtMS45MzggMC42NzMgYyAtMC4yNDQgMC4wODMgLTAuNTE2IDAuMDM2IC0wLjcxNyAtMC4xMjUgYyAtMC40OTUgLTAuNCAtMS4wMzUgLTAuNzE1IC0xLjYwNSAtMC45MzYgYyAtMC4yNDIgLTAuMDkzIC0wLjQxOCAtMC4zMDMgLTAuNDY3IC0wLjU1NyBsIC0wLjM5MSAtMi4wMTQgYyAtMC45MjYgLTAuMTU2IC0xLjc5MiAtMC4xNDggLTIuNjU5IDAgbCAtMC4zOSAyLjAxNCBjIC0wLjA0OSAwLjI1NCAtMC4yMjUgMC40NjQgLTAuNDY2IDAuNTU3IGMgLTAuNTk4IDAuMjMxIC0xLjE0OSAwLjU1MiAtMS41OTUgMC45MjYgYyAtMC4yMDIgMC4xNyAtMC40NzggMC4yMiAtMC43MjggMC4xMzUgbCAtMS45MzggLTAuNjcyIGMgLTAuNTgxIDAuNzA3IC0xLjAzNCAxLjQ5MSAtMS4zMyAyLjMwMSBsIDEuNTQ5IDEuMzM3IGMgMC4yMDEgMC4xNzUgMC4yOTQgMC40NDIgMC4yNDYgMC43MDUgYyAtMC4wNDggMC4yNTUgLTAuMDcxIDAuNTUzIC0wLjA3MSAwLjkxMSBzIDAuMDIzIDAuNjU3IDAuMDcxIDAuOTEyIGMgMC4wNDkgMC4yNjMgLTAuMDQ0IDAuNTMgLTAuMjQ2IDAuNzA1IGwgLTEuNTQ3IDEuMzQzIGMgMC4zMTMgMC44MzYgMC43NjMgMS42MDkgMS4zMjkgMi4yOTcgbCAxLjkzOCAtMC42NzQgYyAwLjI1MSAtMC4wODQgMC41MjYgLTAuMDMzIDAuNzI4IDAuMTM1IGMgMC40NDYgMC4zNzUgMC45OTggMC42OTMgMS41OTUgMC45MjYgYyAwLjI0MSAwLjA5MyAwLjQxNyAwLjMwMyAwLjQ2NiAwLjU1NyBMIDIwLjc4OSAzMC44MDkgWlxcXCJcXHJcXG4gICAgICAgICAgIGlkPVxcXCJwYXRoMTdcXFwiIC8+PC9nPjwvZz48L2c+PGdcXHJcXG4gICAgIGlkPVxcXCJnMTlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMjlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzdcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnMzlcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDFcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDNcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnNDdcXFwiIC8+PC9zdmc+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICBjcmVhdGVSZXNpemVSZWFjdG9yID0gcmVxdWlyZSgnLi9yZXNpemVyZWFjdG9yJykuUmVzaXplUmVhY3RvcjtcclxuXHJcbmZ1bmN0aW9uIGlzQ29udGFpbmVyT2YoZWxlbWVudCkge1xyXG4gICAgdmFyIGNvbnRhaW5lcnMgPSBlbGVtZW50LmNvbnRhaW5lcnMgfHwgW107XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gLTEgIT09IGNvbnRhaW5lcnMuaW5kZXhPZihlbGVtZW50LmdldCgndHlwZScpKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1iZWRkYWJsZShlbGVtZW50KSB7XHJcbiAgICBmdW5jdGlvbiBmdWxseUNvbnRhaW5lZChwYXJlbnQpIHtcclxuICAgICAgICB2YXIgYmJveCA9IGVsZW1lbnQuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pLFxyXG4gICAgICAgICAgICBwYWRkaW5nID0gcGFyZW50LnBhZGRpbmcsXHJcbiAgICAgICAgICAgIHBiYm94ID0gcGFyZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgcGludGVybmFsID0gam9pbnQuZy5yZWN0KFxyXG4gICAgICAgICAgICAgICAgcGJib3gueCArIHBhZGRpbmcubGVmdCxcclxuICAgICAgICAgICAgICAgIHBiYm94LnkgKyBwYWRkaW5nLnRvcCxcclxuICAgICAgICAgICAgICAgIHBiYm94LndpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodCxcclxuICAgICAgICAgICAgICAgIHBiYm94LmhlaWdodCAtIHBhZGRpbmcudG9wIC0gcGFkZGluZy5ib3R0b21cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gcGFyZW50LmlkICE9PSBlbGVtZW50LmlkICYmIHBpbnRlcm5hbC5jb250YWluc1JlY3QoYmJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuZnVsbHlDb250YWluZWQpIHtcclxuICAgICAgICByZXR1cm4gZnVsbHlDb250YWluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gRW1iZWRkaW5nUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRW1iZWRkaW5nUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBFbWJlZGRpbmdSZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuXHJcbiAgICB2YXIgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBzdGFydFBvc2l0aW9uO1xyXG5cclxuICAgIHBhcGVyLm9uKCdjZWxsOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGNlbGxWaWV3LCBldnQsIHgsIHkpIHtcclxuICAgICAgICBfLm5vb3AoZXZ0LCB4LCB5KTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGNlbGxWaWV3Lm1vZGVsO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0KCdwb3NpdGlvbicpO1xyXG5cclxuICAgICAgICBlbGVtZW50LnRvRnJvbnQoe2RlZXA6IHRydWV9KTtcclxuXHJcbiAgICAgICAgbW9kZWwuc3RhcnRCYXRjaCgndG8tZnJvbnQnKTtcclxuICAgICAgICBfLmludm9rZShtb2RlbC5nZXRMaW5rcygpLCAndG9Gcm9udCcpO1xyXG4gICAgICAgIG1vZGVsLnN0b3BCYXRjaCgndG8tZnJvbnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhcmVudChlbGVtZW50LCB4LCB5KSB7XHJcbiAgICAgICAgXy5ub29wKHgsIHkpO1xyXG4gICAgICAgIHZhciBlbGVtZW50c0JlbG93ID0gbW9kZWwuZmluZE1vZGVsc0luQXJlYShlbGVtZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50c0JlbG93Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXy5jaGFpbihlbGVtZW50c0JlbG93KVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpc0NvbnRhaW5lck9mKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpc0VtYmVkZGFibGUoZWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgICAuc29ydEJ5KF8ubWV0aG9kKCdnZXQnLCAneicpKVxyXG4gICAgICAgICAgICAgICAgLmxhc3QoKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyhlbGVtZW50LCB4LCB5KSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbWVudC5wb3NpdGlvbigpO1xyXG4gICAgICAgIGVsZW1lbnQudHJhbnNsYXRlKHggLSBwb3NpdGlvbi54LCB5IC0gcG9zaXRpb24ueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFwZXIub24oJ2NlbGw6cG9pbnRlcnVwJywgZnVuY3Rpb24gKGNlbGxWaWV3LCBldnQsIHgsIHkpIHtcclxuICAgICAgICBfLm5vb3AoZXZ0LCB4LCB5KTtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGNlbGxWaWV3Lm1vZGVsLFxyXG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0KCdwb3NpdGlvbicpLFxyXG4gICAgICAgICAgICBvbGRwYXJlbnQsXHJcbiAgICAgICAgICAgIG5ld3BhcmVudDtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNMaW5rKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmIChuZXdQb3NpdGlvbi54ID09PSBzdGFydFBvc2l0aW9uLnggJiYgbmV3UG9zaXRpb24ueSA9PT0gc3RhcnRQb3NpdGlvbi55KSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgbW92ZVRvKGVsZW1lbnQsIHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlcGFyZW50KCkge1xyXG4gICAgICAgICAgICBfLmVhY2goXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXRDb25uZWN0ZWRMaW5rcyhlbGVtZW50LCB7ZGVlcDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGxpbmspIHsgbGluay5yZXBhcmVudCgpOyB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbWVudCwgeCwgeSk7XHJcbiAgICAgICAgaWYgKCFuZXdwYXJlbnQgJiYgZWxlbWVudC5yZXF1aXJlRW1iZWRkaW5nKSB7XHJcbiAgICAgICAgICAgIGFib3J0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9sZHBhcmVudCA9IG1vZGVsLmdldENlbGwoZWxlbWVudC5nZXQoJ3BhcmVudCcpKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld3BhcmVudCkge1xyXG4gICAgICAgICAgICBpZiAob2xkcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkcGFyZW50LmlkICE9PSBuZXdwYXJlbnQuaWQgJiYgZWxlbWVudC5nZXQoJ2ZpeGVkUGFyZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRwYXJlbnQudW5lbWJlZChlbGVtZW50LCB7cmVwYXJlbnRpbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdwYXJlbnQuZW1iZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld3BhcmVudC5lbWJlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJlcGFyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob2xkcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXQoJ2ZpeGVkUGFyZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRwYXJlbnQudW5lbWJlZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kZWwub24oJ2FkZCcsIGZ1bmN0aW9uIChjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuaXNMaW5rKCkpIHsgcmV0dXJuIGNlbGwuZ2V0KCdwYXJlbnQnKSB8fCBjZWxsLnJlcGFyZW50KCk7IH1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IGNlbGwsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwYXJlbnQ7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0KCdwYXJlbnQnKSkge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBtb2RlbC5nZXRDZWxsKGVsZW1lbnQuZ2V0KCdwYXJlbnQnKSk7XHJcbiAgICAgICAgICAgIHBhcmVudC51bmVtYmVkKGVsZW1lbnQsIHtyZXBhcmVudGluZzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBwYXJlbnQuZW1iZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb24gPSBlbGVtZW50LmdldCgncG9zaXRpb24nKTtcclxuICAgICAgICBwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbWVudCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuZW1iZWQoZWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVxdWlyZUVtYmVkZGluZykge1xyXG4gICAgICAgICAgICAgICAgXy5kZWZlcihmdW5jdGlvbiAoKSB7IGVsZW1lbnQucmVtb3ZlKCk7IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXQoJ3BhcmVudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydHMuRW1iZWRkaW5nUmVhY3RvciA9IEVtYmVkZGluZ1JlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgYmFja2JvbmUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snQmFja2JvbmUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0JhY2tib25lJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICB3aW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snd2luZG93J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyd3aW5kb3cnXSA6IG51bGwpLFxyXG4gICAgY3JlYXRlTWFwID0gcmVxdWlyZSgnLi9tYXAnKS5NYXAsXHJcbiAgICBjcmVhdGVJdGVtRHJhZ2dlciA9IHJlcXVpcmUoJy4vaXRlbWRyYWdnZXInKS5JdGVtRHJhZ2dlcixcclxuICAgIGNyZWF0ZVBhblJlYWN0b3IgPSByZXF1aXJlKCcuL3BhbnJlYWN0b3InKS5QYW5SZWFjdG9yLFxyXG4gICAgY3JlYXRlWm9vbVJlYWN0b3IgPSByZXF1aXJlKCcuL3pvb21yZWFjdG9yJykuWm9vbVJlYWN0b3IsXHJcbiAgICBjcmVhdGVNYW5pcHVsYXRpb25SZWFjdG9yID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRpb25yZWFjdG9yJykuTWFuaXB1bGF0aW9uUmVhY3RvcixcclxuICAgIGNyZWF0ZUVtYmVkZGluZ1JlYWN0b3IgPSByZXF1aXJlKCcuL2VtYmVkZGluZ3JlYWN0b3InKS5FbWJlZGRpbmdSZWFjdG9yLFxyXG4gICAgbGlua0Nvbm5lY3Rpb25Qb2ludCA9IHJlcXVpcmUoJy4vbGlua2Nvbm5lY3Rpb25wb2ludCcpLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICB2YWxpZGF0ZUNvbm5lY3Rpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRlY29ubmVjdGlvbicpLnZhbGlkYXRlQ29ubmVjdGlvbjtcclxuXHJcbmZ1bmN0aW9uIEJvYXJkKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCb2FyZCkpIHsgcmV0dXJuIG5ldyBCb2FyZChvcHRpb25zKTsgfVxyXG4gICAgXy5leHRlbmQodGhpcywgYmFja2JvbmUuRXZlbnRzKTtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmIChvcHRpb25zLmFjdGlvbnMgJiYgIUFycmF5LmlzQXJyYXkob3B0aW9ucy5hY3Rpb25zKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ2FjdGlvbnMgb3B0aW9uIHNob3VsZCBiZSBhbiBBcnJheScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdExpbmsgfHwgdHlwZW9mIG9wdGlvbnMuZGVmYXVsdExpbmsgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdkZWZhdWx0TGluayBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKS5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtcGFwZXInKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIGdyaWRTaXplID0gMTAsXHJcbiAgICAgICAgZGVmYXVsdExpbmsgPSBvcHRpb25zLmRlZmF1bHRMaW5rLFxyXG4gICAgICAgIHBhcGVyID0gbmV3IGpvaW50LmRpYS5QYXBlcih7XHJcbiAgICAgICAgICAgIGVsOiBlbCxcclxuICAgICAgICAgICAgd2lkdGg6IGVsLndpZHRoKCksXHJcbiAgICAgICAgICAgIGhlaWdodDogZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgZ3JpZFNpemU6IGdyaWRTaXplLFxyXG4gICAgICAgICAgICBkZWZhdWx0TGluazogZGVmYXVsdExpbmssXHJcbiAgICAgICAgICAgIG11bHRpTGlua3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgICAgICBsaW5rUGlubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlQ29ubmVjdGlvbjogdmFsaWRhdGVDb25uZWN0aW9uLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogIW9wdGlvbnMucmVhZG9ubHlcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYXAgPSBjcmVhdGVNYXAoe1xyXG4gICAgICAgICAgICBwYXBlcjogcGFwZXIsXHJcbiAgICAgICAgICAgIGVsOiBlbCxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgem9vbVJlYWN0b3IgPSBjcmVhdGVab29tUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIG1pblNjYWxlOiBvcHRpb25zLm1pblNjYWxlIHx8IDAuMDEsXHJcbiAgICAgICAgICAgIG1heFNjYWxlOiBvcHRpb25zLm1heFNjYWxlIHx8IDJcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYW5pcHVsYXRpb25SZWFjdG9yID0gY3JlYXRlTWFuaXB1bGF0aW9uUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIGdyaWRTaXplOiBncmlkU2l6ZSxcclxuICAgICAgICAgICAgYWN0aW9uczogb3B0aW9ucy5hY3Rpb25zLFxyXG4gICAgICAgICAgICByZXNpemU6IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgICAgICByb3RhdGU6IG9wdGlvbnMucm90YXRlLFxyXG4gICAgICAgICAgICBtYWduZXRpemU6IG9wdGlvbnMubWFnbmV0aXplXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZW1iZWRkaW5nUmVhY3RvciA9IGNyZWF0ZUVtYmVkZGluZ1JlYWN0b3Ioe1xyXG4gICAgICAgICAgICBwYXBlcjogcGFwZXIsXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIF8ubm9vcChlbWJlZGRpbmdSZWFjdG9yKTtcclxuXHJcbiAgICBtYW5pcHVsYXRpb25SZWFjdG9yLm9uKCdhbGwnLCB0aGlzLnRyaWdnZXIsIHRoaXMpO1xyXG5cclxuICAgIHBhcGVyLm9uKCdhbGwnLCB0aGlzLnRyaWdnZXIsIHRoaXMpO1xyXG5cclxuICAgIHBhcGVyLm9uKCdibGFuazpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChldnQsIHgsIHkpIHtcclxuICAgICAgICBfLm5vb3AoZXZ0KTtcclxuICAgICAgICBjcmVhdGVQYW5SZWFjdG9yKHtwYXBlcjogcGFwZXIsIGVsOiBlbCwgeDogeCwgeTogeX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlld3BvcnQoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0b3AgPSBlbC5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICAgIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHRvcExlZnQgPSBqb2ludC5nLnBvaW50KGxlZnQsIHRvcCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0ID0gam9pbnQuZy5wb2ludChsZWZ0ICsgd2lkdGgsIHRvcCArIGhlaWdodCksXHJcbiAgICAgICAgICAgIG1pbiA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh0b3BMZWZ0KSxcclxuICAgICAgICAgICAgbWF4ID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KTtcclxuICAgICAgICBtYXAuc2V0Vmlld3BvcnQoe3g6IG1pbi54LCB5OiBtaW4ueSwgd2lkdGg6IG1heC54IC0gbWluLngsIGhlaWdodDogbWF4LnkgLSBtaW4ueX0pO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBhcGVyLnNldERpbWVuc2lvbnMoZWwud2lkdGgoKSwgZWwuaGVpZ2h0KCkpO1xyXG4gICAgICAgIHVwZGF0ZVZpZXdwb3J0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYXBlci5vbigndHJhbnNsYXRlJywgdXBkYXRlVmlld3BvcnQpO1xyXG4gICAgcGFwZXIub24oJ3NjYWxlJywgdXBkYXRlVmlld3BvcnQpO1xyXG4gICAgbW9kZWwub25jZSgnYWRkJywgdXBkYXRlVmlld3BvcnQpO1xyXG5cclxuICAgIHNlbGYuem9vbUUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgem9vbVJlYWN0b3Iuem9vbUUoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5wYXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFwZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZG93bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFwLmRvd25sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuY3JlYXRlSXRlbURyYWdnZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVtRHJhZ2dlcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IG9wdGlvbnMuZWwsXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgZ3JpZFNpemU6IGdyaWRTaXplLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50czogb3B0aW9ucy5jcmVhdGVFbGVtZW50cyxcclxuICAgICAgICAgICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogb3B0aW9ucy5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IG9wdGlvbnMucGFkZGluZyxcclxuICAgICAgICAgICAgbGlua0Nvbm5lY3Rpb25Qb2ludDogbGlua0Nvbm5lY3Rpb25Qb2ludFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0cy5Cb2FyZCA9IEJvYXJkO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgIGJhY2tib25lID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ0JhY2tib25lJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydCYWNrYm9uZSddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgZG9jdW1lbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snZG9jdW1lbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RvY3VtZW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIGNsb25lKG1vZGVsLCBpdGVtcykge1xyXG4gICAgdmFyIG1hcHBpbmcgPSBtb2RlbC5jbG9uZUNlbGxzKGl0ZW1zKTtcclxuICAgIHJldHVybiBfLm1hcChpdGVtcywgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIG1hcHBpbmdbaS5pZF07IH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwSXRlbXMoaXRlbXMsIHNpemUsIG1pbkhlaWdodCwgcGFkZGluZykge1xyXG4gICAgdmFyIGJib3ggPSBqb2ludC5kaWEuR3JhcGgucHJvdG90eXBlLmdldEJCb3goaXRlbXMsIHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSksXHJcbiAgICAgICAgbWF4c2l6ZSA9IE1hdGgubWF4KGJib3gud2lkdGgsIGJib3guaGVpZ2h0KSArIHBhZGRpbmcgKiAyLFxyXG4gICAgICAgIHNjYWxlID0gTWF0aC5tYXgoMSwgbWF4c2l6ZSAvIHNpemUpLFxyXG4gICAgICAgIGFjdHVhbHdpZHRoID0gc2l6ZSAqIHNjYWxlLFxyXG4gICAgICAgIGFjdHVhbGhlaWdodCA9IE1hdGgubWF4KGJib3guaGVpZ2h0ICsgcGFkZGluZyAqIDIsIG1pbkhlaWdodCAqIHNjYWxlKSxcclxuICAgICAgICBsZWZ0ID0gKGFjdHVhbHdpZHRoIC0gYmJveC53aWR0aCkgLyAyLFxyXG4gICAgICAgIHRvcCA9IChhY3R1YWxoZWlnaHQgLSBiYm94LmhlaWdodCkgLyAyLFxyXG4gICAgICAgIGNvbnRhaW5lckl0ZW0gPSBuZXcgam9pbnQuc2hhcGVzLmJhc2ljLlJlY3Qoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiBiYm94LnggLSBsZWZ0LCB5OiBiYm94LnkgLSB0b3B9LFxyXG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiBhY3R1YWx3aWR0aCwgaGVpZ2h0OiBhY3R1YWxoZWlnaHR9LFxyXG4gICAgICAgICAgICBhdHRyczogeyByZWN0OiB7IGZpbGw6ICd0cmFuc3BhcmVudCcsIHN0cm9rZTogJ3RyYW5zcGFyZW50JyB9IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVySXRlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcnMocGFwZXIsIGl0ZW1zKSB7XHJcbiAgICBfLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcGFwZXIuZmluZFZpZXdCeU1vZGVsKGl0ZW0pLiRlbC5jc3MoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJdGVtRHJhZ2dlcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSXRlbURyYWdnZXIpKSB7IHJldHVybiBuZXcgSXRlbURyYWdnZXIob3B0aW9ucyk7IH1cclxuICAgIF8uZXh0ZW5kKHRoaXMsIGJhY2tib25lLkV2ZW50cyk7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmNyZWF0ZUVsZW1lbnRzIHx8IHR5cGVvZiBvcHRpb25zLmNyZWF0ZUVsZW1lbnRzICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignY3JlYXRlRWxlbWVudHMgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCB8fCB0eXBlb2Ygb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50ICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignbGlua0Nvbm5lY3Rpb25Qb2ludCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb25zJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ncmlkU2l6ZSAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuZ3JpZFNpemUgPCAwKSB7IHRocm93IG5ldyBFcnJvcignZ3JpZFNpemUgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wYWRkaW5nICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhZGRpbmcgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLnBhZGRpbmcgPCAwKSB7IHRocm93IG5ldyBFcnJvcigncGFkZGluZyBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndpZHRoICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy53aWR0aCA8IDIgKiBvcHRpb25zLnBhZGRpbmcpIHsgdGhyb3cgbmV3IEVycm9yKCd3aWR0aCBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8gKG9yIDIgdGltZSBwYWRkaW5nKScpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5taW5IZWlnaHQgPCAyICogb3B0aW9ucy5wYWRkaW5nKSB7IHRocm93IG5ldyBFcnJvcignbWluSGVpZ2h0IGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybyAob3IgMiB0aW1lIHBhZGRpbmcpJyk7IH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZ3JpZFNpemUgPSBvcHRpb25zLmdyaWRTaXplLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRzID0gb3B0aW9ucy5jcmVhdGVFbGVtZW50cyxcclxuICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50ID0gb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXHJcbiAgICAgICAgbWluSGVpZ2h0ID0gb3B0aW9ucy5taW5IZWlnaHQsXHJcbiAgICAgICAgcGFwZXJXaWR0aCA9IG9wdGlvbnMud2lkdGggLSBwYWRkaW5nICogMixcclxuICAgICAgICBvdmVybGF5aXRlbXMgPSBjcmVhdGVFbGVtZW50cygpLFxyXG4gICAgICAgIG1haW5pdGVtID0gd3JhcEl0ZW1zKG92ZXJsYXlpdGVtcywgcGFwZXJXaWR0aCwgbWluSGVpZ2h0LCBncmlkU2l6ZSksXHJcbiAgICAgICAgbWFpbnBvc2l0aW9uID0gbWFpbml0ZW0ucG9zaXRpb24oKSxcclxuICAgICAgICBzaXplID0gbWFpbml0ZW0uZ2V0KCdzaXplJyksXHJcbiAgICAgICAgcHJldmlldyA9IChmdW5jdGlvbiAoKSB7IHZhciBjb250YWluZXIgPSAkKHJlcXVpcmUoJy4vaXRlbWRyYWdnZXIuaHRtbCcpKS5jc3MoJ3BhZGRpbmcnLCBwYWRkaW5nKTsgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQoY29udGFpbmVyKTsgcmV0dXJuIGNvbnRhaW5lcjsgfSgpKSxcclxuICAgICAgICBiYXNlU2NhbGUgPSBNYXRoLm1pbigxLCBwYXBlcldpZHRoIC8gc2l6ZS53aWR0aCksXHJcbiAgICAgICAgcGFwZXJIZWlnaHQgPSBzaXplLmhlaWdodCAqIGJhc2VTY2FsZSxcclxuICAgICAgICBvdmVybGF5bW9kZWwgPSBuZXcgam9pbnQuZGlhLkdyYXBoKCksXHJcbiAgICAgICAgb3ZlcmxheXBhcGVyID0gbmV3IGpvaW50LmRpYS5QYXBlcih7XHJcbiAgICAgICAgICAgIGVsOiBwcmV2aWV3LFxyXG4gICAgICAgICAgICB3aWR0aDogcGFwZXJXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBwYXBlckhlaWdodCxcclxuICAgICAgICAgICAgbW9kZWw6IG92ZXJsYXltb2RlbCxcclxuICAgICAgICAgICAgbGlua0Nvbm5lY3Rpb25Qb2ludDogbGlua0Nvbm5lY3Rpb25Qb2ludCxcclxuICAgICAgICAgICAgZ3JpZFNpemU6IGdyaWRTaXplXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheXBhcGVyLnNjYWxlKGJhc2VTY2FsZSwgYmFzZVNjYWxlKTtcclxuICAgIG92ZXJsYXltb2RlbC5hZGRDZWxsKG1haW5pdGVtKTtcclxuICAgIG92ZXJsYXltb2RlbC5hZGRDZWxscyhvdmVybGF5aXRlbXMpO1xyXG4gICAgLy9mb3IgcmVuZGVyaW5nXHJcbiAgICBlbC5hcHBlbmQocHJldmlldyk7XHJcbiAgICAvL3JlbW92ZSBoYW5kbGVyc1xyXG4gICAgcmVtb3ZlSGFuZGxlcnMob3ZlcmxheXBhcGVyLCBvdmVybGF5aXRlbXMpO1xyXG4gICAgXy5lYWNoKG92ZXJsYXlpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5nZXQoJ3BhcmVudCcpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIG1haW5pdGVtLmVtYmVkKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICBtYWluaXRlbS50cmFuc2xhdGUoLW1haW5wb3NpdGlvbi54LCAtbWFpbnBvc2l0aW9uLnkpO1xyXG5cclxuICAgIG92ZXJsYXlwYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChjZWxsVmlldywgZSwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcChjZWxsVmlldyk7XHJcbiAgICAgICAgdmFyIG92ZXJsYXkgPSAkKHJlcXVpcmUoJy4vb3ZlcmxheS5odG1sJykpLFxyXG4gICAgICAgICAgICBjb250YWluZXIgPSAkKHBhcGVyLmVsKSxcclxuICAgICAgICAgICAgc3BhY2VyID0gJCgnPGRpdj48L2Rpdj4nKS5jc3MoJ2hlaWdodCcsIHByZXZpZXcuaGVpZ2h0KCkgKyAyICogcGFkZGluZyksXHJcbiAgICAgICAgICAgIGxlZnQgPSBjb250YWluZXIub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICAgICAgdG9wID0gY29udGFpbmVyLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBjb250YWluZXIud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gY29udGFpbmVyLmhlaWdodCgpLFxyXG4gICAgICAgICAgICB0b3BMZWZ0ID0gam9pbnQuZy5wb2ludChsZWZ0LCB0b3ApLFxyXG4gICAgICAgICAgICBib3R0b21SaWdodCA9IGpvaW50LmcucG9pbnQobGVmdCArIHdpZHRoLCB0b3AgKyBoZWlnaHQpLFxyXG4gICAgICAgICAgICBjdXJyZW50ID0gam9pbnQuZy5wb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXhMb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChib3R0b21SaWdodCksXHJcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoY3VycmVudCksXHJcbiAgICAgICAgICAgIHNjYWxlID0gam9pbnQuZy5wb2ludCh3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSkpLFxyXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gam9pbnQuZy5wb2ludChqb2ludC5nLnNuYXBUb0dyaWQoc3RhcnRQb2ludC54IC0geCwgZ3JpZFNpemUpLCBqb2ludC5nLnNuYXBUb0dyaWQoc3RhcnRQb2ludC55IC0geSwgZ3JpZFNpemUpKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChvdmVybGF5KTtcclxuICAgICAgICBvdmVybGF5LmFwcGVuZChwcmV2aWV3KTtcclxuICAgICAgICBlbC5hcHBlbmQoc3BhY2VyKTtcclxuICAgICAgICBwcmV2aWV3LmNzcygncGFkZGluZycsIDApO1xyXG5cclxuICAgICAgICBvdmVybGF5cGFwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBvdmVybGF5cGFwZXIuc2NhbGUoc2NhbGUueCwgc2NhbGUueSk7XHJcbiAgICAgICAgb3ZlcmxheXBhcGVyLnNldE9yaWdpbigtbWluTG9jYWwueCAqIHNjYWxlLngsIC1taW5Mb2NhbC55ICogc2NhbGUueSk7XHJcbiAgICAgICAgbWFpbml0ZW0udHJhbnNsYXRlKHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgb3ZlcmxheXBhcGVyLm9uY2UoJ2NlbGw6cG9pbnRlcm1vdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW5pdGVtLnRyYW5zbGF0ZSgtc3RhcnRQb3NpdGlvbi54LCAtc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3ZlcmxheXBhcGVyLm9uKCdjZWxsOnBvaW50ZXJ1cCcsIGZ1bmN0aW9uIHBvaW50ZXJ1cCgpIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gbWFpbml0ZW0ucG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIG1haW5pZCA9IG1haW5pdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3BpdGVtcyxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXl0b3BpdGVtcyA9IF8uZmlsdGVyKG92ZXJsYXlpdGVtcywgZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuZ2V0KCdwYXJlbnQnKSA9PT0gbWFpbmlkOyB9KTtcclxuICAgICAgICAgICAgXy5lYWNoKG92ZXJsYXl0b3BpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHsgbWFpbml0ZW0udW5lbWJlZChpdGVtKTsgfSk7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gY2xvbmUob3ZlcmxheW1vZGVsLCBvdmVybGF5aXRlbXMpO1xyXG4gICAgICAgICAgICB0b3BpdGVtcyA9IF8uZmlsdGVyKGl0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gIWkuZ2V0KCdwYXJlbnQnKTsgfSk7XHJcbiAgICAgICAgICAgIG1vZGVsLmFkZENlbGxzKGl0ZW1zKTtcclxuICAgICAgICAgICAgXy5lYWNoKG92ZXJsYXl0b3BpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHsgbWFpbml0ZW0uZW1iZWQoaXRlbSk7IH0pO1xyXG4gICAgICAgICAgICBfLmVhY2godG9waXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnRvRnJvbnQoe2RlZXA6IHRydWV9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNwYWNlci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZWwuYXBwZW5kKHByZXZpZXcpO1xyXG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBwcmV2aWV3LmNzcygncGFkZGluZycsIHBhZGRpbmcpO1xyXG5cclxuICAgICAgICAgICAgbWFpbml0ZW0udHJhbnNsYXRlKC1wb3NpdGlvbi54LCAtcG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIG92ZXJsYXlwYXBlci5zZXREaW1lbnNpb25zKHBhcGVyV2lkdGgsIHBhcGVySGVpZ2h0KTtcclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLnNjYWxlKGJhc2VTY2FsZSwgYmFzZVNjYWxlKTtcclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIG92ZXJsYXlwYXBlci5vZmYoJ2NlbGw6cG9pbnRlcnVwJywgcG9pbnRlcnVwKTtcclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdkcmFnOmVuZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnRyaWdnZXIoJ2RyYWc6c3RhcnQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5JdGVtRHJhZ2dlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZW1EcmFnZ2VyLnByb3RvdHlwZSk7XHJcblxyXG5leHBvcnRzLkl0ZW1EcmFnZ2VyID0gSXRlbURyYWdnZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+PC9kaXY+XFxyXFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBzdHlsZT1cXFwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OjA7IHJpZ2h0OjA7IHRvcDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiAxMDAwMDA7XFxcIj48L2Rpdj5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnXFxyXFxuICAgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcbiAgIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiXFxyXFxuICAgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIlxcclxcbiAgIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFxyXFxuICAgdmlld0JveD1cXFwiMCAwIDQ0LjIzNiA0NC4yMzZcXFwiXFxyXFxuICAgaGVpZ2h0PVxcXCI0NC4yMzZcXFwiXFxyXFxuICAgd2lkdGg9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICB5PVxcXCIwcHhcXFwiXFxyXFxuICAgeD1cXFwiMHB4XFxcIlxcclxcbiAgIGlkPVxcXCJDYXBhXzFcXFwiXFxyXFxuICAgdmVyc2lvbj1cXFwiMS4xXFxcIj48bWV0YWRhdGFcXHJcXG4gICAgIGlkPVxcXCJtZXRhZGF0YTUzXFxcIj48cmRmOlJERj48Y2M6V29ya1xcclxcbiAgICAgICAgIHJkZjphYm91dD1cXFwiXFxcIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZVxcclxcbiAgICAgICAgICAgcmRmOnJlc291cmNlPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZVxcXCIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnNcXHJcXG4gICAgIGlkPVxcXCJkZWZzNTFcXFwiIC8+PGNpcmNsZVxcclxcbiAgICAgcj1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgY3k9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgIGN4PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICBpZD1cXFwicGF0aDQxODFcXFwiXFxyXFxuICAgICBzdHlsZT1cXFwiY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNDAwMDAwMDE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZVxcXCIgLz48cGF0aFxcclxcbiAgICAgaWQ9XFxcInBhdGg3XFxcIlxcclxcbiAgICAgZD1cXFwiTSAyMi4xMTgsNDQuMjM2IEMgOS45MjIsNDQuMjM2IDAsMzQuMzE0IDAsMjIuMTE5IDAsOS45MjMgOS45MjIsMCAyMi4xMTgsMCBjIDEyLjE5NiwwIDIyLjExOCw5LjkyMyAyMi4xMTgsMjIuMTE5IDAsMTIuMTk1IC05LjkyMiwyMi4xMTcgLTIyLjExOCwyMi4xMTcgeiBtIDAsLTQyLjczNiBDIDEwLjc1LDEuNSAxLjUsMTAuNzUgMS41LDIyLjExOSBjIDAsMTEuMzY5IDkuMjUsMjAuNjE3IDIwLjYxOCwyMC42MTcgMTEuMzY4LDAgMjAuNjE4LC05LjI0OCAyMC42MTgsLTIwLjYxNyBDIDQyLjczNiwxMC43NSAzMy40ODYsMS41IDIyLjExOCwxLjUgWlxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcxOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0MVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0M1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0NVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0N1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczXFxcIlxcclxcbiAgICAgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMC4wNzg5MDg2MywtMC4wNzg5MDg2MywwLjA3ODkwODYzLDAuMDc4OTA4NjMsMC45MDQ3NjEwNywyMi4xMTgxMjQpXFxcIj48cGF0aFxcclxcbiAgICAgICBpZD1cXFwicGF0aDVcXFwiXFxyXFxuICAgICAgIGQ9XFxcIm0gMjY1LjE3MSwxMjUuNTc3IC04MCwtODAgYyAtNC44ODEsLTQuODgxIC0xMi43OTcsLTQuODgxIC0xNy42NzgsMCAtNC44ODIsNC44ODIgLTQuODgyLDEyLjc5NiAwLDE3LjY3OCBsIDU4LjY2MSw1OC42NjEgLTIxMy42NTQsMCBjIC02LjkwMywwIC0xMi41LDUuNTk3IC0xMi41LDEyLjUgMCw2LjkwMiA1LjU5NywxMi41IDEyLjUsMTIuNSBsIDIxMy42NTQsMCAtNTguNjU5LDU4LjY2MSBjIC00Ljg4Miw0Ljg4MiAtNC44ODIsMTIuNzk2IDAsMTcuNjc4IDIuNDQsMi40MzkgNS42NCwzLjY2MSA4LjgzOSwzLjY2MSAzLjE5OSwwIDYuMzk4LC0xLjIyMiA4LjgzOSwtMy42NjEgbCA3OS45OTgsLTgwIGMgNC44ODIsLTQuODgyIDQuODgyLC0xMi43OTYgMCwtMTcuNjc4IHpcXFwiIC8+PC9nPjwvc3ZnPlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG52YXIgYWxsQm9yZGVycyA9IHt0b3A6IHRydWUsIGxlZnQ6IHRydWUsIGJvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWV9O1xyXG5cclxuZnVuY3Rpb24gZml4Qm9yZGVycyhib3JkZXJzKSB7XHJcbiAgICBpZiAoIWJvcmRlcnMpIHsgcmV0dXJuIGFsbEJvcmRlcnM7IH1cclxuICAgIGlmIChib3JkZXJzLnRvcCB8fCBib3JkZXJzLmxlZnQgfHwgYm9yZGVycy5ib3R0b20gfHwgYm9yZGVycy5yaWdodCkgeyByZXR1cm4gYm9yZGVyczsgfVxyXG4gICAgcmV0dXJuIGFsbEJvcmRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5lYXJlc3RQb2ludE9uQm9yZGVyKG1lLCBvdGhlciwgYm9yZGVycykge1xyXG4gICAgYm9yZGVycyA9IGZpeEJvcmRlcnMoYm9yZGVycyk7XHJcbiAgICB2YXIgbGVmdCA9ICAgYm9yZGVycy5sZWZ0ICAgPyBNYXRoLmFicyhtZS5vcmlnaW4oKS54IC0gb3RoZXIub3JpZ2luKCkueCkgOiBJbmZpbml0eSxcclxuICAgICAgICB0b3AgPSAgICBib3JkZXJzLnRvcCAgICA/IE1hdGguYWJzKG1lLm9yaWdpbigpLnkgLSBvdGhlci5vcmlnaW4oKS55KSA6IEluZmluaXR5LFxyXG4gICAgICAgIHJpZ2h0ID0gIGJvcmRlcnMucmlnaHQgID8gTWF0aC5hYnMobWUuY29ybmVyKCkueCAtIG90aGVyLmNvcm5lcigpLngpIDogSW5maW5pdHksXHJcbiAgICAgICAgYm90dG9tID0gYm9yZGVycy5ib3R0b20gPyBNYXRoLmFicyhtZS5jb3JuZXIoKS55IC0gb3RoZXIuY29ybmVyKCkueSkgOiBJbmZpbml0eSxcclxuICAgICAgICBtaW4gPSBNYXRoLm1pbihsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pLFxyXG4gICAgICAgIGNlbnRlciA9IG1lLmNvbnRhaW5zUmVjdChvdGhlcikgPyBvdGhlci5jZW50ZXIoKSA6IG1lLmNlbnRlcigpO1xyXG4gICAgaWYgKG1pbiA9PT0gdG9wKSB7ICAgIHJldHVybiBqb2ludC5nLnBvaW50KGNlbnRlci54LCAgICAgIG1lLm9yaWdpbigpLnkpOyB9XHJcbiAgICBpZiAobWluID09PSBsZWZ0KSB7ICAgcmV0dXJuIGpvaW50LmcucG9pbnQobWUub3JpZ2luKCkueCwgY2VudGVyLnkpOyB9XHJcbiAgICBpZiAobWluID09PSBib3R0b20pIHsgcmV0dXJuIGpvaW50LmcucG9pbnQoY2VudGVyLngsICAgICAgbWUuY29ybmVyKCkueSk7IH1cclxuICAgIHJldHVybiBqb2ludC5nLnBvaW50KG1lLmNvcm5lcigpLngsIGNlbnRlci55KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVycGVuZGljdWxhcihtZSwgb3RoZXIpIHtcclxuICAgIGlmIChtZS5pbnRlcnNlY3Qob3RoZXIpKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgdmFyIG1pblggPSBNYXRoLm1heChtZS5vcmlnaW4oKS54LCBvdGhlci5vcmlnaW4oKS54KSxcclxuICAgICAgICBtYXhYID0gTWF0aC5taW4obWUuY29ybmVyKCkueCwgb3RoZXIuY29ybmVyKCkueCksXHJcbiAgICAgICAgbWluWSA9IE1hdGgubWF4KG1lLm9yaWdpbigpLnksIG90aGVyLm9yaWdpbigpLnkpLFxyXG4gICAgICAgIG1heFkgPSBNYXRoLm1pbihtZS5jb3JuZXIoKS55LCBvdGhlci5jb3JuZXIoKS55KTtcclxuICAgIGlmIChtaW5YIDw9IG1heFgpIHtcclxuICAgICAgICByZXR1cm4gbWUucG9pbnROZWFyZXN0VG9Qb2ludChqb2ludC5nLnBvaW50KChtaW5YICsgbWF4WCkgLyAyLCBvdGhlci5jZW50ZXIoKS55KSk7XHJcbiAgICB9XHJcbiAgICBpZiAobWluWSA8PSBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lLnBvaW50TmVhcmVzdFRvUG9pbnQoam9pbnQuZy5wb2ludChvdGhlci5jZW50ZXIoKS54LCAobWluWSArIG1heFkpIC8gMikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIHBvaW50KSB7XHJcbiAgICBpZiAoIXBvaW50KSB7IHJldHVybjsgfVxyXG4gICAgYW5nbGUgPSBqb2ludC5nLm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKTtcclxuICAgIGlmIChhbmdsZSAlIDkwID09PSAwKSB7IHJldHVybiBwb2ludDsgfVxyXG4gICAgdmFyIHJiYm94ID0gYmJveC5iYm94KGFuZ2xlKSxcclxuICAgICAgICBjZW50ZXIgPSBiYm94LmNlbnRlcigpLFxyXG4gICAgICAgIHJvcmlnaW4gPSBiYm94Lm9yaWdpbigpLnJvdGF0ZShjZW50ZXIsIGFuZ2xlKSxcclxuICAgICAgICBydG9wUmlnaHQgPSBiYm94LnRvcFJpZ2h0KCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIHJjb3JuZXIgPSBiYm94LmNvcm5lcigpLnJvdGF0ZShjZW50ZXIsIGFuZ2xlKSxcclxuICAgICAgICByYm90dG9tTGVmdCA9IGJib3guYm90dG9tTGVmdCgpLnJvdGF0ZShjZW50ZXIsIGFuZ2xlKSxcclxuICAgICAgICBsZWZ0TGluZSA9IGpvaW50LmcubGluZShyb3JpZ2luLCByYm90dG9tTGVmdCksXHJcbiAgICAgICAgdG9wTGluZSA9IGpvaW50LmcubGluZShydG9wUmlnaHQsIHJvcmlnaW4pLFxyXG4gICAgICAgIGJvdHRvbXRMaW5lID0gam9pbnQuZy5saW5lKHJjb3JuZXIsIHJib3R0b21MZWZ0KSxcclxuICAgICAgICByaWdodExpbmUgPSBqb2ludC5nLmxpbmUocnRvcFJpZ2h0LCByY29ybmVyKSxcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lO1xyXG4gICAgc3dpdGNoIChyYmJveC5zaWRlTmVhcmVzdFRvUG9pbnQocG9pbnQpKSB7XHJcbiAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IGpvaW50LmcubGluZShwb2ludCwgam9pbnQuZy5wb2ludChwb2ludC54LCByYmJveC5jb3JuZXIoKS55KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgIGludGVyc2VjdGlvbkxpbmUgPSBqb2ludC5nLmxpbmUocG9pbnQsIGpvaW50LmcucG9pbnQocmJib3gub3JpZ2luKCkueCwgcG9pbnQueSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IGpvaW50LmcubGluZShwb2ludCwgam9pbnQuZy5wb2ludChyYmJveC5jb3JuZXIoKS54LCBwb2ludC55KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IGpvaW50LmcubGluZShwb2ludCwgam9pbnQuZy5wb2ludChwb2ludC54LCByYmJveC5vcmlnaW4oKS55KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXy5jaGFpbihbbGVmdExpbmUsIHRvcExpbmUsIGJvdHRvbXRMaW5lLCByaWdodExpbmVdKVxyXG4gICAgICAgIC5tYXAoXy5iaW5kKGludGVyc2VjdGlvbkxpbmUuaW50ZXJzZWN0aW9uLCBpbnRlcnNlY3Rpb25MaW5lKSlcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHsgcmV0dXJuIHByZXZpb3VzVmFsdWU7IH1cclxuICAgICAgICAgICAgaWYgKCFwcmV2aW91c1ZhbHVlKSB7IHJldHVybiBjdXJyZW50VmFsdWU7IH1cclxuICAgICAgICAgICAgaWYgKHBvaW50LmRpc3RhbmNlKHByZXZpb3VzVmFsdWUpID4gcG9pbnQuZGlzdGFuY2UoY3VycmVudFZhbHVlKSkgeyByZXR1cm4gY3VycmVudFZhbHVlOyB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIH0pLnZhbHVlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpbmtDb25uZWN0aW9uUG9pbnQobGlua1ZpZXcsIHZpZXcsIG1hZ25ldCwgcmVmZXJlbmNlKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IHZpZXcubW9kZWwsXHJcbiAgICAgICAgZFRhcmdldEJvcmRlcnMsXHJcbiAgICAgICAgZFRhcmdldEFuZ2xlID0gMCxcclxuICAgICAgICBkVGFyZ2V0QkJveCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rID0gbGlua1ZpZXcubW9kZWwsXHJcbiAgICAgICAgICAgICAgICBvdGhlcixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gbGluay5nZXQoJ3ZlcnRpY2VzJyksXHJcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBsaW5rLmdldCgnc291cmNlJykuaWQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBsaW5rLmdldCgndGFyZ2V0JykuaWQ7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IGVsZW1lbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNlcyAmJiB2ZXJ0aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvaW50LmcucmVjdCh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdGhlciA9IGxpbmsuZ2V0VGFyZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRUYXJnZXRBbmdsZSA9IG90aGVyLmdldCgnYW5nbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkVGFyZ2V0Qm9yZGVycyA9IG90aGVyLmdldCgnYm9yZGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlci5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmVydGljZXMgJiYgdmVydGljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqb2ludC5nLnJlY3QodmVydGljZXNbdmVydGljZXMubGVuZ3RoIC0gMV0ueCwgdmVydGljZXNbdmVydGljZXMubGVuZ3RoIC0gMV0ueSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIgPSBsaW5rLmdldFNvdXJjZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBkVGFyZ2V0QW5nbGUgPSBvdGhlci5nZXQoJ2FuZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZFRhcmdldEJvcmRlcnMgPSBvdGhlci5nZXQoJ2JvcmRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBqb2ludC5nLnJlY3QocmVmZXJlbmNlLngsIHJlZmVyZW5jZS55LCAwLCAwKTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgZnVuY3Rpb24gZGVmYXVsdENvbm5lY3Rpb25Qb2ludChiYm94LCB0YXJnZXRCQm94LCBhbmdsZSwgdGFyZ2V0QW5nbGUpIHtcclxuICAgICAgICB0YXJnZXRCQm94ID0gdGFyZ2V0QkJveCB8fCBkVGFyZ2V0QkJveDtcclxuICAgICAgICB0YXJnZXRBbmdsZSA9IHRhcmdldEFuZ2xlIHx8IGRUYXJnZXRBbmdsZTtcclxuICAgICAgICBhbmdsZSA9IGFuZ2xlIHx8IGVsZW1lbnQuZ2V0KCdhbmdsZScpO1xyXG4gICAgICAgIGJib3ggPSBiYm94IHx8IGVsZW1lbnQuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pO1xyXG4gICAgICAgIHZhciByYmJveCA9IGJib3guYmJveChhbmdsZSksXHJcbiAgICAgICAgICAgIHJUYXJnZXRCQm94ID0gdGFyZ2V0QkJveDtcclxuICAgICAgICBpZiAocmJib3guY29udGFpbnNSZWN0KHJUYXJnZXRCQm94KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZml4UG9pbnRCeUFuZ2xlKGJib3gsIGFuZ2xlLCBuZWFyZXN0UG9pbnRPbkJvcmRlcihyYmJveCwgclRhcmdldEJCb3gsIGRUYXJnZXRCb3JkZXJzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyVGFyZ2V0QkJveC5jb250YWluc1JlY3QocmJib3gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIG5lYXJlc3RQb2ludE9uQm9yZGVyKHJiYm94LCByVGFyZ2V0QkJveCwgZWxlbWVudC5nZXQoJ2JvcmRlcnMnKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZml4UG9pbnRCeUFuZ2xlKGJib3gsIGFuZ2xlLCBwZXJwZW5kaWN1bGFyKHJiYm94LCByVGFyZ2V0QkJveCkpIHx8XHJcbiAgICAgICAgICAgICAgICBiYm94LmludGVyc2VjdGlvbldpdGhMaW5lRnJvbUNlbnRlclRvUG9pbnQodGFyZ2V0QkJveC5jZW50ZXIoKSwgYW5nbGUpIHx8XHJcbiAgICAgICAgICAgICAgICBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIHJiYm94LnBvaW50TmVhcmVzdFRvUG9pbnQodGFyZ2V0QkJveC5jZW50ZXIoKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZpZXcubW9kZWwubGlua0Nvbm5lY3Rpb25Qb2ludCkge1xyXG4gICAgICAgIHJldHVybiB2aWV3Lm1vZGVsLmxpbmtDb25uZWN0aW9uUG9pbnQobGlua1ZpZXcsIHZpZXcsIG1hZ25ldCwgcmVmZXJlbmNlLCBkVGFyZ2V0QkJveCwgZFRhcmdldEFuZ2xlLCBkZWZhdWx0Q29ubmVjdGlvblBvaW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0Q29ubmVjdGlvblBvaW50KCk7XHJcbn1cclxuXHJcbmV4cG9ydHMubGlua0Nvbm5lY3Rpb25Qb2ludCA9IGxpbmtDb25uZWN0aW9uUG9pbnQ7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgYmFja2JvbmUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snQmFja2JvbmUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0JhY2tib25lJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICBuYXZpZ2F0b3IgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snbmF2aWdhdG9yJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyduYXZpZ2F0b3InXSA6IG51bGwpLFxyXG4gICAgY3JlYXRlUmVzaXplUmVhY3RvciA9IHJlcXVpcmUoJy4vcmVzaXplcmVhY3RvcicpLlJlc2l6ZVJlYWN0b3IsXHJcbiAgICBjcmVhdGVSb3RhdGVSZWFjdG9yID0gcmVxdWlyZSgnLi9yb3RhdGVyZWFjdG9yJykuUm90YXRlUmVhY3RvcjtcclxuXHJcbmZ1bmN0aW9uIHByb3BlcnR5Q2hlY2tlcihwcm9wZXJ0eSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgaWYgKG1vZGVsW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiBkZWZhdWx0VmFsdWU7IH1cclxuICAgICAgICBpZiAodHlwZW9mIG1vZGVsW3Byb3BlcnR5XSA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gbW9kZWxbcHJvcGVydHldKCk7IH1cclxuICAgICAgICByZXR1cm4gbW9kZWxbcHJvcGVydHldO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNdWx0aXNlbGVjdChlKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLnN1YnN0cigwLCAzKS50b0xvd2VyQ2FzZSgpID09PSAnbWFjJykgeyByZXR1cm4gZS5tZXRhS2V5OyB9XHJcbiAgICByZXR1cm4gZS5jdHJsS2V5O1xyXG59XHJcblxyXG52YXIgY2FuUmVzaXplID0gcHJvcGVydHlDaGVja2VyKCdyZXNpemFibGUnLCBmYWxzZSksXHJcbiAgICBjYW5Sb3RhdGUgPSBwcm9wZXJ0eUNoZWNrZXIoJ3JvdGF0YWJsZScsIGZhbHNlKTtcclxuXHJcbmZ1bmN0aW9uIE1hbmlwdWxhdGlvblJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hbmlwdWxhdGlvblJlYWN0b3IpKSB7IHJldHVybiBuZXcgTWFuaXB1bGF0aW9uUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgXy5leHRlbmQodGhpcywgYmFja2JvbmUuRXZlbnRzKTtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5wYXBlciB8fCB0eXBlb2Ygb3B0aW9ucy5wYXBlciAhPT0gJ29iamVjdCcgfHwgIShvcHRpb25zLnBhcGVyIGluc3RhbmNlb2Ygam9pbnQuZGlhLlBhcGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuYWN0aW9ucyAmJiAhQXJyYXkuaXNBcnJheShvcHRpb25zLmFjdGlvbnMpKSB7IHRocm93IG5ldyBFcnJvcignYWN0aW9ucyBvcHRpb24gc2hvdWxkIGJlIGFuIGFycmF5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmdyaWRTaXplICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2dyaWRTaXplIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5ncmlkU2l6ZSA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBncmlkU2l6ZSA9IG9wdGlvbnMuZ3JpZFNpemUsXHJcbiAgICAgICAgYWN0aW9ucyA9IG9wdGlvbnMuYWN0aW9ucyB8fCBbZXhwb3J0cy5lZGl0LCBleHBvcnRzLmRlbGV0ZV0sXHJcbiAgICAgICAgcmVzaXplID0gb3B0aW9ucy5yZXNpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIW9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgIHJvdGF0ZSA9IG9wdGlvbnMucmVzaXplID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFvcHRpb25zLnJvdGF0ZSxcclxuICAgICAgICBtYWduZXRpemUgPSBvcHRpb25zLm1hZ25ldGl6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhb3B0aW9ucy5tYWduZXRpemUsXHJcbiAgICAgICAgc2VsZWN0ZWRWaWV3cyA9IHt9O1xyXG5cclxuICAgIGVsLmF0dHIoJ3RhYmluZGV4JywgMSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFuaXB1bGF0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmlzTGluaygpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBidW5kbGUgPSBzZWxlY3RlZFZpZXdzW2VsZW1lbnQuaWRdLFxyXG4gICAgICAgICAgICBiYm94LFxyXG4gICAgICAgICAgICBhbmdsZTtcclxuICAgICAgICBpZiAoIWJ1bmRsZSkgeyByZXR1cm47IH1cclxuICAgICAgICBiYm94ID0gYnVuZGxlLnZpZXcuZ2V0QkJveCh7dXNlTW9kZWxHZW9tZXRyeTogdHJ1ZX0pO1xyXG4gICAgICAgIGJ1bmRsZS5lbFxyXG4gICAgICAgICAgICAuY3NzKCdsZWZ0JywgYmJveC54IC0gZ3JpZFNpemUpXHJcbiAgICAgICAgICAgIC5jc3MoJ3RvcCcsIGJib3gueSAtIGdyaWRTaXplKVxyXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsIGJib3gud2lkdGggKyAyICogZ3JpZFNpemUpXHJcbiAgICAgICAgICAgIC5jc3MoJ2hlaWdodCcsIGJib3guaGVpZ2h0ICsgMiAqIGdyaWRTaXplKTtcclxuICAgICAgICBhbmdsZSA9IGVsZW1lbnQuZ2V0KCdhbmdsZScpO1xyXG4gICAgICAgICQoYnVuZGxlLmVsLmZpbmQoJy5tLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItcm90YXRlJykpXHJcbiAgICAgICAgICAgIC5jc3MoJ2xlZnQnLCAoYmJveC53aWR0aCArIDk0KSAvIDIgKiAoMSArIE1hdGguY29zKGpvaW50LmcudG9SYWQoYW5nbGUpKSkgLSAzNilcclxuICAgICAgICAgICAgLmNzcygndG9wJywgKGJib3guaGVpZ2h0ICsgOTQpIC8gMiAqICgxICsgTWF0aC5zaW4oam9pbnQuZy50b1JhZChhbmdsZSkpKSAtIDM2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW5pcHVsYXRvcnMoKSB7XHJcbiAgICAgICAgXy5tYXAoc2VsZWN0ZWRWaWV3cywgZnVuY3Rpb24gKGJ1bmRsZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVNYW5pcHVsYXRvcihidW5kbGUudmlldy5tb2RlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNYW5pcHVsYXRvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGJ1bmRsZSA9IHNlbGVjdGVkVmlld3NbZWxlbWVudC5pZF07XHJcbiAgICAgICAgaWYgKCFidW5kbGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKGJ1bmRsZS52aWV3Lm1vZGVsLmRlYWN0aXZhdGUpIHsgYnVuZGxlLnZpZXcubW9kZWwuZGVhY3RpdmF0ZSgpOyB9XHJcbiAgICAgICAgYnVuZGxlLmVsLnJlbW92ZSgpO1xyXG4gICAgICAgIGJ1bmRsZS52aWV3Lm9mZignY2hhbmdlOnBvc2l0aW9uIGNoYW5nZTpzaXplJywgdXBkYXRlTWFuaXB1bGF0b3IpO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxlY3RlZFZpZXdzW2VsZW1lbnQuaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWFuaXB1bGF0b3JzKGN1cnJlbnRpZCkge1xyXG4gICAgICAgIF8ubWFwKHNlbGVjdGVkVmlld3MsIGZ1bmN0aW9uIChidW5kbGUsIGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gY3VycmVudGlkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBjbG9zZU1hbmlwdWxhdG9yKGJ1bmRsZS52aWV3Lm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNYW5pcHVsYXRvcihjZWxsVmlldywgZXZ0KSB7XHJcbiAgICAgICAgaWYgKGNlbGxWaWV3Lm1vZGVsLmlzTGluaygpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICghaXNNdWx0aXNlbGVjdChldnQpKSB7IGNsb3NlTWFuaXB1bGF0b3JzKGNlbGxWaWV3Lm1vZGVsLmlkKTsgfVxyXG4gICAgICAgIHZhciBidW5kbGUgPSBzZWxlY3RlZFZpZXdzW2NlbGxWaWV3Lm1vZGVsLmlkXSxcclxuICAgICAgICAgICAgdGFiLFxyXG4gICAgICAgICAgICBjb250ZXh0O1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGJ1bmRsZSA9IHNlbGVjdGVkVmlld3NbY2VsbFZpZXcubW9kZWwuaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgZWw6IChmdW5jdGlvbiAoKSB7dmFyIG1hbmlwdWxhdG9yID0gJChyZXF1aXJlKCcuL21hbmlwdWxhdG9yLmh0bWwnKSk7IGVsLmFwcGVuZChtYW5pcHVsYXRvcik7IHJldHVybiBtYW5pcHVsYXRvcjsgfSgpKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGNlbGxWaWV3LFxyXG4gICAgICAgICAgICAgICAga2V5ZG93bjogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnVuZGxlLnZpZXcubW9kZWwub24oJ2NoYW5nZTpwb3NpdGlvbiBjaGFuZ2U6c2l6ZSBjaGFuZ2U6YW5nbGUnLCB1cGRhdGVNYW5pcHVsYXRvcik7XHJcbiAgICAgICAgICAgIHRhYiA9ICQoYnVuZGxlLmVsLmZpbmQoJy5tLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItdGFiJykpO1xyXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xyXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU1hbmlwdWxhdG9yKGJ1bmRsZS52aWV3Lm1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKG1hZ25ldGl6ZSAmJiBidW5kbGUudmlldy5tb2RlbC5tYWduZXRpemUgJiYgYnVuZGxlLnZpZXcubW9kZWwuZGVtYWduZXRpemUpIHtcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmttYXJrZXIgPSAkKF8uZmlyc3QoJChyZXF1aXJlKCcuL2xpbmsuc3ZnJykpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVtYXJrZXIgPSAkKF8uZmlyc3QoJChyZXF1aXJlKCcuL21vdmUuc3ZnJykpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua21hcmtlci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBidW5kbGUudmlldy5tb2RlbC5tYWduZXRpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkIHx8IHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua21hcmtlci5hZnRlcihtb3ZlbWFya2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmttYXJrZXIuZGV0YWNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLnZpZXcubW9kZWwuZGVtYWduZXRpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZW1hcmtlci5hZnRlcihsaW5rbWFya2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZW1hcmtlci5kZXRhY2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGUubWFnbmV0aXplQ3ljbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlbWFya2VyLnBhcmVudCgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZW1hcmtlci5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua21hcmtlci5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0YWIuYXBwZW5kKGxpbmttYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmZvckVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5jaGVja2VyKGNlbGxWaWV3Lm1vZGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uY2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jbGljay5jYWxsKGNvbnRleHQsIGJ1bmRsZS52aWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5hcHBlbmQoJChhY3Rpb24ubWFya2VyKS5jbG9uZSgpLm9uKCdjbGljaycsIGNsaWNrKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmtleWRvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidW5kbGUua2V5ZG93bi5wdXNoKHsgZmlsdGVyOiBhY3Rpb24ua2V5ZG93biwgYWN0aW9uOiBjbGljayB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdjZWxsOicgKyBhY3Rpb24uZXZlbnQsIGJ1bmRsZS52aWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuYXBwZW5kKCQoYWN0aW9uLm1hcmtlcikuY2xvbmUoKS5vbignY2xpY2snLCB0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmtleWRvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidW5kbGUua2V5ZG93bi5wdXNoKHsgZmlsdGVyOiBhY3Rpb24ua2V5ZG93biwgYWN0aW9uOiB0cmlnZ2VyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNpemUgJiYgY2FuUmVzaXplKGNlbGxWaWV3Lm1vZGVsKSkge1xyXG4gICAgICAgICAgICAgICAgYnVuZGxlLmVsLmFkZENsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1yZXNpemFibGUnKTtcclxuICAgICAgICAgICAgICAgIFsnbicsICduZScsICdlJywgJ3NlJywgJ3MnLCAnc3cnLCAndycsICdudyddLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5lbC5maW5kKCcubS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLScgKyBkaXJlY3Rpb24pLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlc2l6ZVJlYWN0b3Ioe3ZpZXc6IGJ1bmRsZS52aWV3LCBwYXBlcjogcGFwZXIsIG1vZGVsOiBtb2RlbCwgZWw6IGVsLCBkaXJlY3Rpb246IGRpcmVjdGlvbiwgZ3JpZFNpemU6IGdyaWRTaXplfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm90YXRlICYmIGNhblJvdGF0ZShjZWxsVmlldy5tb2RlbCkpIHtcclxuICAgICAgICAgICAgICAgIGJ1bmRsZS5lbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtcm90YXRhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBidW5kbGUuZWwuZmluZCgnLm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yb3RhdGUnKS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJvdGF0ZVJlYWN0b3Ioe3ZpZXc6IGJ1bmRsZS52aWV3LCBwYXBlcjogcGFwZXIsIG1vZGVsOiBtb2RlbCwgZWw6IGVsLCBhbmdsZVN0ZXA6IDE1fSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cGRhdGVNYW5pcHVsYXRvcihjZWxsVmlldy5tb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGtleWRvd24oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgY2xvc2VNYW5pcHVsYXRvcnMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF8uZm9yRWFjaChzZWxlY3RlZFZpZXdzLCBmdW5jdGlvbiAoYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIF8uZm9yRWFjaChidW5kbGUua2V5ZG93biB8fCBbXSwgZnVuY3Rpb24gKGtleWRvd24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlkb3duLmZpbHRlci5rZXlDb2RlID09PSBlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgZWwuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIHRvZ2dsZU1hbmlwdWxhdG9yKTtcclxuICAgIHBhcGVyLm9uKCdzY2FsZSB0cmFuc2xhdGUnLCB1cGRhdGVNYW5pcHVsYXRvcnMpO1xyXG4gICAgcGFwZXIub24oJ2NlbGw6cG9pbnRlcm1vdmUnLCBmdW5jdGlvbiAoY2VsbFZpZXcpIHsgdXBkYXRlTWFuaXB1bGF0b3IoY2VsbFZpZXcubW9kZWwpOyB9KTtcclxuICAgIG1vZGVsLm9uKCdjaGFuZ2U6dGFyZ2V0JywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICB2YXIgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tsaW5rLmdldCgnc291cmNlJykuaWRdO1xyXG4gICAgICAgIGxpbmsudG9Gcm9udCgpO1xyXG4gICAgICAgIGlmICghYnVuZGxlIHx8ICFidW5kbGUudmlldy5tb2RlbC5tYWduZXRpemUgfHwgIWJ1bmRsZS52aWV3Lm1vZGVsLmRlbWFnbmV0aXplKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGJ1bmRsZS5tYWduZXRpemVDeWNsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RlbC5vbigncmVtb3ZlJywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBjbG9zZU1hbmlwdWxhdG9yKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBlbC5rZXlkb3duKGtleWRvd24pO1xyXG4gICAgZWwubW91c2VvdmVyKG1vdXNlb3Zlcik7XHJcbn1cclxuXHJcbmV4cG9ydHMuTWFuaXB1bGF0aW9uUmVhY3RvciA9IE1hbmlwdWxhdGlvblJlYWN0b3I7XHJcblxyXG5cclxuZXhwb3J0cy5kZWxldGUgPSB7XHJcbiAgICBtYXJrZXI6IHJlcXVpcmUoJy4vZGVsZXRlLnN2ZycpLFxyXG4gICAgY2hlY2tlcjogcHJvcGVydHlDaGVja2VyKCdkZWxldGFibGUnLCB0cnVlKSxcclxuICAgIGNsaWNrOiBmdW5jdGlvbiAodmlldykge1xyXG4gICAgICAgIHZpZXcubW9kZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIGtleWRvd246IHsga2V5Q29kZTogNDYgfVxyXG59O1xyXG5leHBvcnRzLmVkaXQgPSB7XHJcbiAgICBtYXJrZXI6IHJlcXVpcmUoJy4vZWRpdC5zdmcnKSxcclxuICAgIGNoZWNrZXI6IHByb3BlcnR5Q2hlY2tlcignZWRpdGFibGUnLCBmYWxzZSksXHJcbiAgICBldmVudDogJ2VkaXQnXHJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0b3JcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItdGFiXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLW5lXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLWVcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItc2VcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItc1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1zd1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci13XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLW53XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLW5cXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItcm90YXRlXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIGNyZWF0ZVByZXZpZXcgPSByZXF1aXJlKCcuL3ByZXZpZXcnKS5QcmV2aWV3LFxyXG4gICAgY3JlYXRlVmlld3BvcnQgPSByZXF1aXJlKCcuL3ZpZXdwb3J0JykuVmlld3BvcnQ7XHJcblxyXG5mdW5jdGlvbiBNYXAob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hcCkpIHsgcmV0dXJuIG5ldyBNYXAob3B0aW9ucyk7IH1cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5wYXBlciB8fCB0eXBlb2Ygb3B0aW9ucy5wYXBlciAhPT0gJ29iamVjdCcgfHwgIShvcHRpb25zLnBhcGVyIGluc3RhbmNlb2Ygam9pbnQuZGlhLlBhcGVyKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ3BhcGVyIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQgfHwgdHlwZW9mIG9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2xpbmtDb25uZWN0aW9uUG9pbnQgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50ID0gb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgIG1hcENvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7dmFyIGNvbnRhaW5lciA9ICQocmVxdWlyZSgnLi9wcmV2aWV3Lmh0bWwnKSk7IGVsLmFwcGVuZChjb250YWluZXIpOyByZXR1cm4gY29udGFpbmVyOyB9KCkpLFxyXG4gICAgICAgIHZpZXdwb3J0Q29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHt2YXIgY29udGFpbmVyID0gJChyZXF1aXJlKCcuL3ZpZXdwb3J0Lmh0bWwnKSk7IGVsLmFwcGVuZChjb250YWluZXIpOyByZXR1cm4gY29udGFpbmVyOyB9KCkpLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBwcmV2aWV3ID0gY3JlYXRlUHJldmlldyh7ZWw6IG1hcENvbnRhaW5lciwgbW9kZWw6IG1vZGVsLCBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50fSksXHJcbiAgICAgICAgdmlld3BvcnQgPSBjcmVhdGVWaWV3cG9ydCh7ZWw6IHZpZXdwb3J0Q29udGFpbmVyfSksXHJcbiAgICAgICAgYXV0b1JlZnJlc2hFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICBtb2RlbC5vbignY2hhbmdlOnBvc2l0aW9uIGNoYW5nZTpzaXplIGNoYW5nZTphbmdsZSBjaGFuZ2U6cGFyZW50IGFkZCByZW1vdmUnLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChtb2RlbC5oYXNBY3RpdmVCYXRjaCgnYWRkJykgfHwgbW9kZWwuaGFzQWN0aXZlQmF0Y2goJ2NsZWFyJykpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKCFhdXRvUmVmcmVzaEVuYWJsZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNMaW5rKCkpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0KCdwYXJlbnQnKSkgeyByZXR1cm47IH1cclxuICAgICAgICBfLmRlZmVyKGZ1bmN0aW9uICgpIHsgc2VsZi5yZWZyZXNoKCk7IH0pO1xyXG4gICAgfSk7XHJcbiAgICBtb2RlbC5vbignYmF0Y2g6c3RvcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKChlLmJhdGNoTmFtZSAhPT0gJ2FkZCcgJiYgZS5iYXRjaE5hbWUgIT09ICdjbGVhcicpIHx8IG1vZGVsLmhhc0FjdGl2ZUJhdGNoKCdhZGQnKSB8fCBtb2RlbC5oYXNBY3RpdmVCYXRjaCgnY2xlYXInKSkgeyByZXR1cm47IH1cclxuICAgICAgICBfLmRlZmVyKGZ1bmN0aW9uICgpIHsgc2VsZi5yZWZyZXNoKCk7IH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZi5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiYm94LFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBtaW5Mb2NhbCxcclxuICAgICAgICAgICAgbWF4TG9jYWw7XHJcbiAgICAgICAgaWYgKG1vZGVsLmdldEVsZW1lbnRzKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWwud2lkdGgoKTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGpvaW50LmcucG9pbnQoMCwgMCkpO1xyXG4gICAgICAgICAgICBtYXhMb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChqb2ludC5nLnBvaW50KHdpZHRoLCBoZWlnaHQpKTtcclxuICAgICAgICAgICAgYmJveCA9IGpvaW50LmcucmVjdChtaW5Mb2NhbC54LCBtaW5Mb2NhbC55LCBtYXhMb2NhbC54IC0gbWluTG9jYWwueCwgbWF4TG9jYWwueSAtIG1pbkxvY2FsLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJib3ggPSBtb2RlbC5nZXRCQm94KG1vZGVsLmdldEVsZW1lbnRzKCksIHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGJib3ggPSBqb2ludC5nLnJlY3QoYmJveC54IC0gMTAsIGJib3gueSAtIDEwLCBiYm94LndpZHRoICsgMjAsIGJib3guaGVpZ2h0ICsgMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aWV3LnNldEJCb3goYmJveCk7XHJcbiAgICAgICAgdmlld3BvcnQuc2V0QkJveChiYm94KTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5kaXNhYmxlQXV0b3JlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1JlZnJlc2hFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZW5hYmxlQXV0b3JlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1JlZnJlc2hFbmFibGVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5zZXRWaWV3cG9ydCA9IGZ1bmN0aW9uIChiYm94KSB7XHJcbiAgICAgICAgdmlld3BvcnQuc2V0Vmlld3BvcnQoYmJveCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZG93bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJldmlldy5kb3dubG9hZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnJlZnJlc2goKTtcclxufVxyXG5cclxuZXhwb3J0cy5NYXAgPSBNYXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtLXRyYW5zZm9ybS1qb2ludC1tYXAnPjwvZGl2PlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIGF0b2IgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snYXRvYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnYXRvYiddIDogbnVsbCksXHJcbiAgICBVaW50OEFycmF5ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1VpbnQ4QXJyYXknXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1VpbnQ4QXJyYXknXSA6IG51bGwpLFxyXG4gICAgQmxvYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydCbG9iJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydCbG9iJ10gOiBudWxsKSxcclxuICAgIHNhdmVBcyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydzYXZlQXMnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ3NhdmVBcyddIDogbnVsbCksXHJcbiAgICBzdmcycG5nID0gcmVxdWlyZSgnc2F2ZS1zdmctYXMtcG5nJyk7XHJcblxyXG5mdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XHJcbiAgICB2YXIgZGVsaW1pdGVyID0gJ2Jhc2U2NCwnLFxyXG4gICAgICAgIGluZGV4ID0gdXJpLmluZGV4T2YoZGVsaW1pdGVyKSxcclxuICAgICAgICBiNjREYXRhID0gdXJpLnN1YnN0cihpbmRleCArIGRlbGltaXRlci5sZW5ndGgpLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlID0gdXJpLnN1YnN0cigwLCB1cmkuaW5kZXhPZignOycpKSxcclxuICAgICAgICBzbGljZVNpemUgPSA1MTIsXHJcbiAgICAgICAgYnl0ZUNoYXJhY3RlcnMgPSBhdG9iKGI2NERhdGEpLFxyXG4gICAgICAgIGJ5dGVBcnJheXMgPSBbXSxcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgc2xpY2UsXHJcbiAgICAgICAgYnl0ZU51bWJlcnMsXHJcbiAgICAgICAgaSxcclxuICAgICAgICBieXRlQXJyYXk7XHJcblxyXG4gICAgZm9yIChvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcclxuICAgICAgICBzbGljZSA9IGJ5dGVDaGFyYWN0ZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuXHJcbiAgICAgICAgYnl0ZU51bWJlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xyXG5cclxuICAgICAgICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZpZXcob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByZXZpZXcpKSB7IHJldHVybiBuZXcgUHJldmlldyhvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQgfHwgdHlwZW9mIG9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCAhPT0gJ2Z1bmN0aW9uJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2xpbmtDb25uZWN0aW9uUG9pbnQgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBsYXN0U2NhbGUgPSAxLFxyXG4gICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgcGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICB3aWR0aDogZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBzZWxmLnNldEJCb3ggPSBmdW5jdGlvbiAoYmJveCkge1xyXG4gICAgICAgIC8vIGl0IGlzIHNpbWlsYXIgdG8gcGFwZXIuc2NhbGVDb250ZW50VG9GaXQoKTsgYnV0IGkgcmVxdWlyZSB0byBkbyBpdCBtYW51YWxseSB0byBjaGFuZ2UgZXZlbiB0aGUgb3JpZ2luXHJcbiAgICAgICAgdmFyIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHNjYWxlWCA9IHdpZHRoIC8gYmJveC53aWR0aCxcclxuICAgICAgICAgICAgc2NhbGVZID0gaGVpZ2h0IC8gYmJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLFxyXG4gICAgICAgICAgICBveCA9ICh3aWR0aCAtIGJib3gud2lkdGggKiBzY2FsZSkgLyAyIC0gYmJveC54ICogc2NhbGUsXHJcbiAgICAgICAgICAgIG95ID0gKGhlaWdodCAtIGJib3guaGVpZ2h0ICogc2NhbGUpIC8gMiAtIGJib3gueSAqIHNjYWxlO1xyXG5cclxuICAgICAgICBsYXN0U2NhbGUgPSBzY2FsZTtcclxuICAgICAgICBwYXBlci5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIHBhcGVyLnNldE9yaWdpbihveCwgb3kpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmRvd25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdmcgPSAkKCQoJzxkaXY+JykuYXBwZW5kKCQocGFwZXIuc3ZnKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvJm5ic3A7fHhtbG5zOnhtbD1cImh0dHA6XFwvXFwvd3d3XFwudzNcXC5vcmdcXC9YTUxcXC8xOTk4XFwvbmFtZXNwYWNlXCIvZywgJyAnKSk7XHJcbiAgICAgICAgc3ZnLmZpbmQoJy5lbGVtZW50IConKS5jc3MoJ3ZlY3Rvci1lZmZlY3QnLCAnbm9uZScpO1xyXG4gICAgICAgIHN2ZzJwbmcuc3ZnQXNQbmdVcmkoc3ZnWzBdLCB7c2NhbGU6IDMgLyBsYXN0U2NhbGV9LCBmdW5jdGlvbiAodXJpKSB7XHJcbiAgICAgICAgICAgIHNhdmVBcyh1cmlUb0Jsb2IodXJpKSwgXCJtb2RlbC5wbmdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnRzLlByZXZpZXcgPSBQcmV2aWV3O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbS10cmFuc2Zvcm0tam9pbnQtbWFwLXZpZXdwb3J0Jz48L2Rpdj5cXHJcXG5cIjtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICBWaWV3cG9ydE91dGxpbmUgPSByZXF1aXJlKCcuL3ZpZXdwb3J0b3V0bGluZScpLlZpZXdwb3J0T3V0bGluZTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdwb3J0KG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWV3cG9ydCkpIHsgcmV0dXJuIG5ldyBWaWV3cG9ydChvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9ucyBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb25zJyk7IH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIG1vZGVsID0gbmV3IGpvaW50LmRpYS5HcmFwaCgpLFxyXG4gICAgICAgIHBhcGVyID0gbmV3IGpvaW50LmRpYS5QYXBlcih7XHJcbiAgICAgICAgICAgIGVsOiBlbCxcclxuICAgICAgICAgICAgd2lkdGg6IGVsLndpZHRoKCksXHJcbiAgICAgICAgICAgIGhlaWdodDogZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdmlld3BvcnQgPSBuZXcgVmlld3BvcnRPdXRsaW5lKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGpvaW50LmcucG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgbW9kZWwuYWRkQ2VsbHMoW3ZpZXdwb3J0XSk7XHJcblxyXG4gICAgc2VsZi5zZXRCQm94ID0gZnVuY3Rpb24gKGJib3gpIHtcclxuICAgICAgICAvLyBpdCBpcyBzaW1pbGFyIHRvIHBhcGVyLnNjYWxlQ29udGVudFRvRml0KCk7IGJ1dCBpIHJlcXVpcmUgdG8gZG8gaXQgbWFudWFsbHkgdG8gY2hhbmdlIGV2ZW4gdGhlIG9yaWdpblxyXG4gICAgICAgIHZhciB3aWR0aCA9IGVsLndpZHRoKCksXHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsLmhlaWdodCgpLFxyXG4gICAgICAgICAgICBzY2FsZVggPSB3aWR0aCAvIGJib3gud2lkdGgsXHJcbiAgICAgICAgICAgIHNjYWxlWSA9IGhlaWdodCAvIGJib3guaGVpZ2h0LFxyXG4gICAgICAgICAgICBzY2FsZSA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSxcclxuICAgICAgICAgICAgb3ggPSAod2lkdGggLSBiYm94LndpZHRoICogc2NhbGUpIC8gMiAtIGJib3gueCAqIHNjYWxlLFxyXG4gICAgICAgICAgICBveSA9IChoZWlnaHQgLSBiYm94LmhlaWdodCAqIHNjYWxlKSAvIDIgLSBiYm94LnkgKiBzY2FsZTtcclxuXHJcbiAgICAgICAgcGFwZXIuc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICBwYXBlci5zZXRPcmlnaW4ob3gsIG95KTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5zZXRWaWV3cG9ydCA9IGZ1bmN0aW9uIChiYm94KSB7XHJcbiAgICAgICAgdmlld3BvcnQucG9zaXRpb24oYmJveC54LCBiYm94LnkpO1xyXG4gICAgICAgIHZpZXdwb3J0LnJlc2l6ZShiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnRzLlZpZXdwb3J0ID0gVmlld3BvcnQ7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZXhwb3J0cy5WaWV3cG9ydE91dGxpbmUgPSBqb2ludC5zaGFwZXMuYmFzaWMuR2VuZXJpYy5leHRlbmQoe1xyXG4gICAgbWFya3VwOiByZXF1aXJlKCcuL21hcmt1cC5zdmcnKSxcclxuXHJcbiAgICBkZWZhdWx0czogam9pbnQudXRpbC5kZWVwU3VwcGxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogJ21hcC5WaWV3cG9ydE91dGxpbmUnLFxyXG4gICAgICAgIHNpemU6IHt3aWR0aDogMSwgaGVpZ2h0OiAxfSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICAnLm0tdHJhbnNmb3JtLWpvaW50LXZpZXdwb3J0LWJnLXJlY3QnIDogeydmb2xsb3ctc2NhbGUnOiAnYXV0byd9LFxyXG4gICAgICAgICAgICAnLm0tdHJhbnNmb3JtLWpvaW50LXZpZXdwb3J0LW91dGVyLXJlY3QnOiB7XHJcbiAgICAgICAgICAgICAgICAncmVmLXgnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3JlZi15JzogMCxcclxuICAgICAgICAgICAgICAgICdyZWYtd2lkdGgnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ3JlZi1oZWlnaHQnOiAxLFxyXG4gICAgICAgICAgICAgICAgcmVmOiAnLm0tdHJhbnNmb3JtLWpvaW50LXZpZXdwb3J0LWJnLXJlY3QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBqb2ludC5zaGFwZXMuYmFzaWMuR2VuZXJpYy5wcm90b3R5cGUuZGVmYXVsdHMpXHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGcgY2xhc3M9XFxcInNjYWxhYmxlXFxcIj5cXHJcXG4gICAgPHJlY3QgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LXZpZXdwb3J0LWJnLXJlY3RcXFwiIHdpZHRoPVxcXCIxXFxcIiBoZWlnaHQ9XFxcIjFcXFwiIGZpbGw9XFxcInRyYW5zcGFyZW50XFxcIiAvPlxcclxcbjwvZz5cXHJcXG48cmVjdCBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtb3V0ZXItcmVjdFxcXCIgZmlsbD1cXFwidHJhbnNwYXJlbnRcXFwiIHN0cm9rZT1cXFwiYmx1ZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIiAvPlxcclxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmdcXHJcXG4gICB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiXFxyXFxuICAgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCJcXHJcXG4gICB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiXFxyXFxuICAgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM6c29kaXBvZGk9XFxcImh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkXFxcIlxcclxcbiAgIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIlxcclxcbiAgIHZlcnNpb249XFxcIjEuMVxcXCJcXHJcXG4gICBpZD1cXFwiQ2FwYV8xXFxcIlxcclxcbiAgIHg9XFxcIjBweFxcXCJcXHJcXG4gICB5PVxcXCIwcHhcXFwiXFxyXFxuICAgd2lkdGg9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM2IDQ0LjIzNlxcXCJcXHJcXG4gICB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcclxcbiAgIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTEgcjEzNzI1XFxcIlxcclxcbiAgIHNvZGlwb2RpOmRvY25hbWU9XFxcIm1vdmUuc3ZnXFxcIj48bWV0YWRhdGFcXHJcXG4gICAgIGlkPVxcXCJtZXRhZGF0YTUzXFxcIj48cmRmOlJERj48Y2M6V29ya1xcclxcbiAgICAgICAgIHJkZjphYm91dD1cXFwiXFxcIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZVxcclxcbiAgICAgICAgICAgcmRmOnJlc291cmNlPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZVxcXCIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnNcXHJcXG4gICAgIGlkPVxcXCJkZWZzNTFcXFwiIC8+PHNvZGlwb2RpOm5hbWVkdmlld1xcclxcbiAgICAgcGFnZWNvbG9yPVxcXCIjZmZmZmZmXFxcIlxcclxcbiAgICAgYm9yZGVyY29sb3I9XFxcIiM2NjY2NjZcXFwiXFxyXFxuICAgICBib3JkZXJvcGFjaXR5PVxcXCIxXFxcIlxcclxcbiAgICAgb2JqZWN0dG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGdyaWR0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3VpZGV0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XFxcIjBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PVxcXCIyXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPVxcXCIxNjAwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD1cXFwiODM3XFxcIlxcclxcbiAgICAgaWQ9XFxcIm5hbWVkdmlldzQ5XFxcIlxcclxcbiAgICAgc2hvd2dyaWQ9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6em9vbT1cXFwiNy41NDQ4NTk0XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3g9XFxcIjI4LjUyMDA0OVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN5PVxcXCIzMi4yODQ0MTJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteD1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteT1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPVxcXCIxXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cXFwiQ2FwYV8xXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzE5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxNzdcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgcj1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBjeT1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBjeD1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBpZD1cXFwicGF0aDQxODFcXFwiXFxyXFxuICAgICAgIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40MDAwMDAwMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlXFxcIiAvPjxwYXRoXFxyXFxuICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoN1xcXCJcXHJcXG4gICAgICAgZD1cXFwiTSAyMi4xMTgsNDQuMjM2IEMgOS45MjIsNDQuMjM2IDAsMzQuMzE0IDAsMjIuMTE5IDAsOS45MjMgOS45MjIsMCAyMi4xMTgsMCBjIDEyLjE5NiwwIDIyLjExOCw5LjkyMyAyMi4xMTgsMjIuMTE5IDAsMTIuMTk1IC05LjkyMiwyMi4xMTcgLTIyLjExOCwyMi4xMTcgeiBtIDAsLTQyLjczNiBDIDEwLjc1LDEuNSAxLjUsMTAuNzUgMS41LDIyLjExOSBjIDAsMTEuMzY5IDkuMjUsMjAuNjE3IDIwLjYxOCwyMC42MTcgMTEuMzY4LDAgMjAuNjE4LC05LjI0OCAyMC42MTgsLTIwLjYxNyBDIDQyLjczNiwxMC43NSAzMy40ODYsMS41IDIyLjExOCwxLjUgWlxcXCIgLz48Z1xcclxcbiAgICAgICBpZD1cXFwiZzlcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgICBpZD1cXFwiY2lyY2xlMTFcXFwiXFxyXFxuICAgICAgICAgcj1cXFwiMS40MVxcXCJcXHJcXG4gICAgICAgICBjeT1cXFwiMjIuNDM4XFxcIlxcclxcbiAgICAgICAgIGN4PVxcXCIyMi4xMThcXFwiIC8+PHBhdGhcXHJcXG4gICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIlxcclxcbiAgICAgICAgIGlkPVxcXCJwYXRoMTNcXFwiXFxyXFxuICAgICAgICAgZD1cXFwibSAyMi4xMTgsMjQuMDk4IGMgLTAuOTE2LDAgLTEuNjYsLTAuNzQ0IC0xLjY2LC0xLjY2IDAsLTAuOTE1IDAuNzQ1LC0xLjY2IDEuNjYsLTEuNjYgMC45MTUsMCAxLjY1OSwwLjc0NSAxLjY1OSwxLjY2IDAsMC45MTYgLTAuNzQzLDEuNjYgLTEuNjU5LDEuNjYgeiBtIDAsLTIuODIxIGMgLTAuNjQsMCAtMS4xNiwwLjUyMSAtMS4xNiwxLjE2IDAsMC42MzkgMC41MjEsMS4xNjEgMS4xNiwxLjE2MSAwLjYzOSwwIDEuMTU5LC0wLjUyMSAxLjE1OSwtMS4xNjEgMCwtMC42NCAtMC41MTksLTEuMTYgLTEuMTU5LC0xLjE2IHpcXFwiIC8+PC9nPjxwYXRoXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNy0yXFxcIlxcclxcbiAgICAgICBkPVxcXCJtIDM3LjAzOTk3NCwyMS43MzYxMjcgLTAuMjE0MDIxLC0wLjMyNDAxOSAtNC4wMDAwMjUsLTQuMDAwMDQ1IGMgLTAuMzkwMDMzLC0wLjM5MDAyNiAtMS4wMjU5ODYsLTAuMzkwMDI2IC0xLjQxNDAwMiwwIC0wLjM5MDAyNSwwLjM5MDAzNCAtMC4zOTAwMjUsMS4wMjQwMzggMCwxLjQxNDAwNSBsIDIuMjkyMDM1LDIuMjkyMDM4IC0xMC41ODYwOTIsMCAwLC0xMC41ODYwNjQgMi4yOTIwMzQsMi4yOTIwMzggYyAwLjM4ODAxNiwwLjM5MDAzNCAxLjAyNDAyOSwwLjM5MDAzNCAxLjQxMzk5NCwwIDAuMzg4MDE2LC0wLjM5MDAyNiAwLjM4ODAxNiwtMS4wMjQwMyAwLC0xLjQxMzk5NyBsIC00LjAwMDAzMSwtNC4wMDAxMTIgLTAuMDEsLTAuMDA2IC0wLjMxNDAxMywtMC4yMDc5NzcgLTAuMzgxOTcsLTAuMDc4MDMgLTAuMDAzOCwwIC0wLjM3ODAxMSwwLjA3ODAzIC0wLjMxNDAxMywwLjIwNzk3NyAtMC4wMTIsMC4wMDYgLTQuMDAwMDMxLDQuMDAwMDQ1IGMgLTAuMzkwMDI2LDAuMzkwMDM0IC0wLjM5MDAyNiwxLjAyNDAzOCAwLDEuNDE0MDA0IDAuMzkwMDI2LDAuMzg5OTY2IDEuMDI0MDI5LDAuMzkwMDI2IDEuNDEzOTk0LDAgbCAyLjI5NDA1MiwtMi4yOTIwNDUgMCwxMC41ODYxMzEgLTEwLjU4NjAzMiwwIDIuMjkyMDM0LC0yLjI5MjAzOCBjIDAuMzkwMDI2LC0wLjM5MDAzNCAwLjM5MDAyNiwtMS4wMjQwMzggMCwtMS40MTQwMDUgLTAuMzkwMDMzLC0wLjM4OTk2NiAtMS4wMjQwMzYsLTAuMzkwMDI2IC0xLjQxNDAwMiwwIGwgLTQuMDAwMDkyLDQuMDAwMDQ1IC0wLjAwNiwwLjAxIC0wLjIwNzk3NiwwLjMxNDAxMyAtMC4wNzgwMywwLjM4MjAzOSAwLDAuMDAzOCAwLjA3ODAzLDAuMzc4MDExIDAuMjA3OTc2LDAuMzEyMDAzIDAuMDA2LDAuMDEyIDQuMDAwMDMyLDQuMDAwMDQ1IGMgMC4zOTAwMjYsMC4zOTAwMzQgMS4wMjQwMjksMC4zOTAwMzQgMS40MTM5OTUsMCAwLjM5MDAzMywtMC4zODgwMTYgMC4zOTAwMzMsLTEuMDI0MDMgMCwtMS40MTQwMDQgbCAtMi4yOTE5NjcsLTIuMjkyMDk4IDEwLjU4NjA5MiwwIDAsMTAuNTg2MTMxIC0yLjI5MjAzNCwtMi4yOTIwNDYgYyAtMC4zOTAwMjYsLTAuMzg4MDE2IC0xLjAyNDAyOSwtMC4zODgwMTYgLTEuNDEzOTk1LDAgLTAuMzkwMDMzLDAuMzkwMDM0IC0wLjM5MDAzMywxLjAyNTk4OCAwLDEuNDE0MDA1IGwgNC4wMDAwMzIsNC4wMDAwNDUgMC4zMjQwMTgsMC4yMTU5NjQgMC4zNzgwMDMsMC4wNzYwMiAwLjAwMzgsMCAwLjM4MTk3OCwtMC4wNzgwMyAwLjMyNDAxOCwtMC4yMTQwMjIgNC4wMDAwMzEsLTQuMDAwMDQ1IGMgMC4zODgwMDgsLTAuMzkwMDI2IDAuMzg4MDA4LC0xLjAyNTk4IDAsLTEuNDEzOTk3IC0wLjM5MDAzMywtMC4zOTAwMzMgLTEuMDI1OTg2LC0wLjM5MDAzMyAtMS40MTQwMDIsMCBsIC0yLjI5MjAyNywyLjI5MjAzOCAwLC0xMC41ODYwNjMgMTAuNTg2MDkyLDAgLTIuMjkyMDM0LDIuMjkyMDM4IGMgLTAuMzg4MDE2LDAuMzg4MDE2IC0wLjM4ODAxNiwxLjAyNDAzOCAwLDEuNDE0MDA0IDAuMzkwMDI2LDAuMzg4MDE2IDEuMDI1OTc5LDAuMzg4MDE2IDEuNDEzOTk1LDAgbCA0LjAwMDAzMSwtNC4wMDAwNDUgMC4yMTU5NjQsLTAuMzI0MDE4IDAuMDc2MDIsLTAuMzc4MDExIDAsLTAuMDAzOCAtMC4wNzgwMywtMC4zODE5NzkgelxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6IzAxMDAwMlxcXCJcXHJcXG4gICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgLz48L2c+PC9zdmc+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gUGFuUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUGFuUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBQYW5SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy54ICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy55ICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3kgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIHN0YXJ0TG9jYWwgPSB7eDogb3B0aW9ucy54LCB5OiBvcHRpb25zLnl9LFxyXG4gICAgICAgIG1vdXNlb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlbW92ZShlKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0b3AgPSBlbC5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICAgIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHRvcExlZnQgPSBqb2ludC5nLnBvaW50KGxlZnQsIHRvcCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0ID0gam9pbnQuZy5wb2ludChsZWZ0ICsgd2lkdGgsIHRvcCArIGhlaWdodCksXHJcbiAgICAgICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXhMb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChib3R0b21SaWdodCksXHJcbiAgICAgICAgICAgIHNjYWxlID0gam9pbnQuZy5wb2ludCh3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSkpLFxyXG4gICAgICAgICAgICBvZmZzZXRDbGllbnQgPSBqb2ludC5nLnBvaW50KHN0YXJ0TG9jYWwueCAqIHNjYWxlLnggKyBsZWZ0LCBzdGFydExvY2FsLnkgKiBzY2FsZS55ICsgdG9wKSxcclxuICAgICAgICAgICAgb3JpZ2luID0gam9pbnQuZy5wb2ludChlLmNsaWVudFggLSBvZmZzZXRDbGllbnQueCwgZS5jbGllbnRZIC0gb2Zmc2V0Q2xpZW50LnkpO1xyXG5cclxuICAgICAgICBwYXBlci5zZXRPcmlnaW4ob3JpZ2luLngsIG9yaWdpbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXJtaW5hdGUoKSB7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZXVwJywgdGVybWluYXRlKTtcclxuICAgICAgICBlbC5vZmYoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwuZ2V0KDApKSB7XHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWwub24oJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgZWwub24oJ21vdXNlb3V0JywgbW91c2VvdXQpO1xyXG4gICAgZWwub24oJ21vdXNlbW92ZSB0b3VjaG1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LW1hbmlwdWxhdGluZycpO1xyXG59XHJcblxyXG5leHBvcnRzLlBhblJlYWN0b3IgPSBQYW5SZWFjdG9yO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoMiA9PT0gZGlyZWN0aW9uLmxlbmd0aCkgeyByZXR1cm4ge3Y6IGRpcmVjdGlvbi5zdWJzdHIoMCwgMSksIGg6IGRpcmVjdGlvbi5zdWJzdHIoLTEpfTsgfVxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgJ24nOlxyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgICAgcmV0dXJuIHt2OiBkaXJlY3Rpb259O1xyXG4gICAgY2FzZSAndyc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgICAgICByZXR1cm4ge2g6IGRpcmVjdGlvbn07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc2l6ZVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZVJlYWN0b3IpKSB7IHJldHVybiBuZXcgUmVzaXplUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMudmlldyB8fCB0eXBlb2Ygb3B0aW9ucy52aWV3ICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ZpZXcgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5kaXJlY3Rpb24pIHsgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3Rpb24gb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoLTEgPT09IFsnbmUnLCAnZScsICdzZScsICdzJywgJ3N3JywgJ3cnLCAnbncnLCAnbiddLmluZGV4T2Yob3B0aW9ucy5kaXJlY3Rpb24pKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkaXJlY3Rpb24gb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ncmlkU2l6ZSAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuZ3JpZFNpemUgPCAwKSB7IHRocm93IG5ldyBFcnJvcignZ3JpZFNpemUgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuXHJcbiAgICB2YXIgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgZ3JpZFNpemUgPSBvcHRpb25zLmdyaWRTaXplLFxyXG4gICAgICAgIGVsZW1lbnQgPSBvcHRpb25zLnZpZXcubW9kZWwsXHJcbiAgICAgICAgZGlyZWN0aW9uID0gbm9ybWFsaXplRGlyZWN0aW9uKG9wdGlvbnMuZGlyZWN0aW9uKSxcclxuICAgICAgICBtaW5zaXplID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1zaXplID0gZWxlbWVudC5taW5zaXplLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZyxcclxuICAgICAgICAgICAgICAgIGVtYmVkcyA9IF8uZmlsdGVyKGVsZW1lbnQuZ2V0RW1iZWRkZWRDZWxscygpLCBmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5pc0NvbnRyYWludDsgfSksXHJcbiAgICAgICAgICAgICAgICBiYm94LFxyXG4gICAgICAgICAgICAgICAgZW1iZWRzYmJveCxcclxuICAgICAgICAgICAgICAgIG1pbndpZHRoID0gbXNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQgPSBtc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChlbWJlZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBlbWJlZHNiYm94ID0gbW9kZWwuZ2V0QkJveChlbWJlZHMsIHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBiYm94ID0gZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nID0gZWxlbWVudC5wYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWlud2lkdGggPSBlbWJlZHNiYm94LmNvcm5lcigpLnggLSBiYm94Lm9yaWdpbigpLnggKyBwYWRkaW5nLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWlud2lkdGggPSBiYm94LmNvcm5lcigpLnggLSBlbWJlZHNiYm94Lm9yaWdpbigpLnggKyBwYWRkaW5nLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbi52KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgICAgICBtaW5oZWlnaHQgPSBlbWJlZHNiYm94LmNvcm5lcigpLnkgLSBiYm94Lm9yaWdpbigpLnkgKyBwYWRkaW5nLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmhlaWdodCA9IGJib3guY29ybmVyKCkueSAtIGVtYmVkc2Jib3gub3JpZ2luKCkueSArIHBhZGRpbmcudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogTWF0aC5tYXgobWlud2lkdGgsIG1zaXplLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heChtaW5oZWlnaHQsIG1zaXplLmhlaWdodCl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtc2l6ZTtcclxuICAgICAgICB9KCkpLFxyXG4gICAgICAgIG1vdXNlZW50ZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gZml4UG9pbnQocG9pbnQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciB4ID0gcG9pbnQueCxcclxuICAgICAgICAgICAgeSA9IHBvaW50Lnk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgICB4IC09IGdyaWRTaXplO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgICAgeCArPSBncmlkU2l6ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uLnYpIHtcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgeSAtPSBncmlkU2l6ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgIHkgKz0gZ3JpZFNpemU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gam9pbnQuZy5wb2ludCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25zdHJhaW4ocG9pbnQpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5nZXQoJ3BhcmVudCcpLFxyXG4gICAgICAgICAgICBiYm94LFxyXG4gICAgICAgICAgICBwYWRkaW5nO1xyXG4gICAgICAgIHBvaW50ID0gam9pbnQuZy5wb2ludChqb2ludC5nLnNuYXBUb0dyaWQocG9pbnQueCwgZ3JpZFNpemUpLCBqb2ludC5nLnNuYXBUb0dyaWQocG9pbnQueSwgZ3JpZFNpemUpKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG1vZGVsLmdldENlbGwocGFyZW50KTtcclxuICAgICAgICAgICAgYmJveCA9IHBhcmVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSBwYXJlbnQucGFkZGluZztcclxuICAgICAgICAgICAgcG9pbnQgPSBqb2ludC5nLnBvaW50KFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoTWF0aC5taW4ocG9pbnQueCwgYmJveC5jb3JuZXIoKS54IC0gcGFkZGluZy5yaWdodCksIGJib3gueCArIHBhZGRpbmcubGVmdCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1heChNYXRoLm1pbihwb2ludC55LCBiYm94LmNvcm5lcigpLnkgLSBwYWRkaW5nLmJvdHRvbSksIGJib3gueSArIHBhZGRpbmcudG9wKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2Vtb3ZlKGUpIHtcclxuICAgICAgICB2YXIgY2xpZW50ID0gY29uc3RyYWluKGZpeFBvaW50KHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9KSwgZGlyZWN0aW9uKSksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gZWxlbWVudC5nZXQoJ3Bvc2l0aW9uJyksXHJcbiAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldCgnc2l6ZScpLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBweCxcclxuICAgICAgICAgICAgcHk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KGNsaWVudC54IC0gcG9zaXRpb24ueCwgbWluc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHB4ID0gcG9zaXRpb24ueDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoc2l6ZS53aWR0aCAtIGNsaWVudC54ICsgcG9zaXRpb24ueCwgbWluc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHB4ID0gcG9zaXRpb24ueCArIHNpemUud2lkdGggLSB3aWR0aDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgd2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICBweCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uLnYpIHtcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoY2xpZW50LnkgLSBwb3NpdGlvbi55LCBtaW5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHB5ID0gcG9zaXRpb24ueTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KHNpemUuaGVpZ2h0IC0gY2xpZW50LnkgKyBwb3NpdGlvbi55LCBtaW5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHB5ID0gcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBoZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgcHkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnBvc2l0aW9uKHB4LCBweSk7XHJcbiAgICAgICAgZWxlbWVudC5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VsZWF2ZShlKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gam9pbnQuZy5wb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgIGJib3ggPSBqb2ludC5nLnJlY3QoZWwub2Zmc2V0KCkubGVmdCwgZWwub2Zmc2V0KCkudG9wLCBlbC53aWR0aCgpLCBlbC5oZWlnaHQoKSk7XHJcbiAgICAgICAgcG9pbnQgPSBiYm94LnBvaW50TmVhcmVzdFRvUG9pbnQocG9pbnQpO1xyXG4gICAgICAgIGUuY2xpZW50WCA9IHBvaW50Lng7XHJcbiAgICAgICAgZS5jbGllbnRZID0gcG9pbnQueTtcclxuICAgICAgICByZXR1cm4gbW91c2Vtb3ZlKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBlbC5vZmYoJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VlbnRlcicsIG1vdXNlZW50ZXIpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgICAgICBlbC5vZmYoJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6aW5nLScgKyBvcHRpb25zLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VlbnRlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9ucyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0ZXJtaW5hdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsLm9uKCdtb3VzZXVwJywgdGVybWluYXRlKTtcclxuICAgIGVsLm9uKCdtb3VzZWVudGVyJywgbW91c2VlbnRlcik7XHJcbiAgICBlbC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgIGVsLm9uKCdtb3VzZWxlYXZlJywgbW91c2VsZWF2ZSk7XHJcblxyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LW1hbmlwdWxhdGluZycpO1xyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6aW5nLScgKyBvcHRpb25zLmRpcmVjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydHMuUmVzaXplUmVhY3RvciA9IFJlc2l6ZVJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFJvdGF0ZVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJvdGF0ZVJlYWN0b3IpKSB7IHJldHVybiBuZXcgUm90YXRlUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMudmlldyB8fCB0eXBlb2Ygb3B0aW9ucy52aWV3ICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ZpZXcgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmdsZVN0ZXAgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignYW5nbGVTdGVwIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5hbmdsZVN0ZXAgPCAwKSB7IHRocm93IG5ldyBFcnJvcignYW5nbGVTdGVwIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcblxyXG4gICAgdmFyIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgZWxlbWVudCA9IG9wdGlvbnMudmlldy5tb2RlbCxcclxuICAgICAgICBhbmdsZVN0ZXAgPSBvcHRpb25zLmFuZ2xlU3RlcCxcclxuICAgICAgICBtb3VzZW91dDtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZW1vdmUoZSkge1xyXG4gICAgICAgIHZhciBjbGllbnQgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoe3g6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZfSksXHJcbiAgICAgICAgICAgIGJib3ggPSBlbGVtZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgY2VudGVyID0gYmJveC5jZW50ZXIoKSxcclxuICAgICAgICAgICAgcmFkID0gTWF0aC5hdGFuMihjbGllbnQueSAtIGNlbnRlci55LCBjbGllbnQueCAtIGNlbnRlci54KTtcclxuICAgICAgICBlbGVtZW50LnJvdGF0ZShNYXRoLnJvdW5kKGpvaW50LmcudG9EZWcocmFkKSAvIGFuZ2xlU3RlcCkgKiBhbmdsZVN0ZXAsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBlbC5vZmYoJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlbC5nZXQoMCkpIHtcclxuICAgICAgICAgICAgdGVybWluYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbC5vbignbW91c2V1cCcsIHRlcm1pbmF0ZSk7XHJcbiAgICBlbC5vbignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICBlbC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuXHJcbiAgICBlbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbn1cclxuXHJcbmV4cG9ydHMuUm90YXRlUmVhY3RvciA9IFJvdGF0ZVJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIGlnbm9yZSgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG5cclxuZXhwb3J0cy52YWxpZGF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY2VsbFZpZXdTLCBtYWduZXRTLCBjZWxsVmlld1QsIG1hZ25ldFQsIGVuZCwgbGlua1ZpZXcpIHtcclxuICAgIGlnbm9yZShtYWduZXRTLCBtYWduZXRUKTtcclxuICAgIGlmIChjZWxsVmlld1MgPT09IGNlbGxWaWV3VCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGlmIChsaW5rVmlldy5tb2RlbC52YWxpZGF0ZUNvbm5lY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gbGlua1ZpZXcubW9kZWwudmFsaWRhdGVDb25uZWN0aW9uKGNlbGxWaWV3UywgbWFnbmV0UywgY2VsbFZpZXdULCBtYWduZXRULCBlbmQsIGxpbmtWaWV3KTtcclxuICAgIH1cclxuICAgIGlmIChlbmQgPT09ICdzb3VyY2UnKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xICE9PSBsaW5rVmlldy5tb2RlbC52YWxpZFNvdXJjZXMuaW5kZXhPZihjZWxsVmlld1MubW9kZWwuZ2V0KCd0eXBlJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xICE9PSBsaW5rVmlldy5tb2RlbC52YWxpZFRhcmdldHMuaW5kZXhPZihjZWxsVmlld1QubW9kZWwuZ2V0KCd0eXBlJykpO1xyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gWm9vbVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFpvb21SZWFjdG9yKSkgeyByZXR1cm4gbmV3IFpvb21SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm1pblNjYWxlICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ21pblNjYWxlIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4U2NhbGUgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignbWF4U2NhbGUgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLm1pblNjYWxlIDwgMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ21pblNjYWxlIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5taW5TY2FsZSA+IG9wdGlvbnMubWF4U2NhbGUpIHsgdGhyb3cgbmV3IEVycm9yKCdtYXhTY2FsZSBjYW5ub3QgYmUgbGVzcyB0aGUgbWluU2NhbGUnKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBtaW5TY2FsZSA9IG9wdGlvbnMubWluU2NhbGUsXHJcbiAgICAgICAgbWF4U2NhbGUgPSBvcHRpb25zLm1heFNjYWxlLFxyXG4gICAgICAgIHBhZGRpbmdab29tRSA9IHt3aWR0aDogNTAsIGhlaWdodDogNTB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVNjYWxlKHNjYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHNjYWxlLCBtaW5TY2FsZSksIG1heFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZXdoZWVsKGUpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IGVsLm9mZnNldCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgdG9wTGVmdCA9IGpvaW50LmcucG9pbnQobGVmdCwgdG9wKSxcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBqb2ludC5nLnBvaW50KGxlZnQgKyB3aWR0aCwgdG9wICsgaGVpZ2h0KSxcclxuICAgICAgICAgICAgY3VycmVudCA9IGpvaW50LmcucG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICBtaW5Mb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh0b3BMZWZ0KSxcclxuICAgICAgICAgICAgbWF4TG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoYm90dG9tUmlnaHQpLFxyXG4gICAgICAgICAgICBzdGFydExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGN1cnJlbnQpLFxyXG4gICAgICAgICAgICBzY2FsZSA9IHt4OiB3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIHk6IGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSl9LFxyXG4gICAgICAgICAgICBvZmZzZXRDbGllbnQsXHJcbiAgICAgICAgICAgIG9yaWdpbjtcclxuICAgICAgICBzY2FsZSA9IG5vcm1hbGl6ZVNjYWxlKHNjYWxlLnggKiBNYXRoLnBvdygxLjEsIGUuZGVsdGFZICogZS5kZWx0YUZhY3RvciAvIDEwMDApKTtcclxuICAgICAgICBwYXBlci5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpO1xyXG4gICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KTtcclxuICAgICAgICBzY2FsZSA9IGpvaW50LmcucG9pbnQod2lkdGggLyAobWF4TG9jYWwueCAtIG1pbkxvY2FsLngpLCBoZWlnaHQgLyAobWF4TG9jYWwueSAtIG1pbkxvY2FsLnkpKTtcclxuICAgICAgICBvZmZzZXRDbGllbnQgPSBqb2ludC5nLnBvaW50KHN0YXJ0TG9jYWwueCAqIHNjYWxlLngsIHN0YXJ0TG9jYWwueSAqIHNjYWxlLnkpO1xyXG4gICAgICAgIG9yaWdpbiA9IGpvaW50LmcucG9pbnQoZS5jbGllbnRYIC0gb2Zmc2V0Q2xpZW50LngsIGUuY2xpZW50WSAtIG9mZnNldENsaWVudC55KTtcclxuXHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG9yaWdpbi54IC0gbGVmdCwgb3JpZ2luLnkgLSB0b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvaW50ZXJkYmxjbGljaygpIHtcclxuICAgICAgICBpZiAobW9kZWwuZ2V0RWxlbWVudHMoKS5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy8gaXQgaXMgc2ltaWxhciB0byBwYXBlci5zY2FsZUNvbnRlbnRUb0ZpdCgpOyBidXQgaSByZXF1aXJlIHRvIGRvIGl0IG1hbnVhbGx5IHRvIGNoYW5nZSBldmVuIHRoZSBvcmlnaW5cclxuICAgICAgICB2YXIgd2lkdGggPSBlbC53aWR0aCgpIC0gcGFkZGluZ1pvb21FLndpZHRoICogMixcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCkgLSBwYWRkaW5nWm9vbUUuaGVpZ2h0ICogMixcclxuICAgICAgICAgICAgYmJveCA9IG1vZGVsLmdldEJCb3gobW9kZWwuZ2V0RWxlbWVudHMoKSwge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgc2NhbGVYID0gd2lkdGggLyBiYm94LndpZHRoLFxyXG4gICAgICAgICAgICBzY2FsZVkgPSBoZWlnaHQgLyBiYm94LmhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSwgbWF4U2NhbGUpLCBtaW5TY2FsZSksXHJcbiAgICAgICAgICAgIG94ID0gKHdpZHRoIC0gYmJveC53aWR0aCAqIHNjYWxlKSAvIDIgLSBiYm94LnggKiBzY2FsZSxcclxuICAgICAgICAgICAgb3kgPSAoaGVpZ2h0IC0gYmJveC5oZWlnaHQgKiBzY2FsZSkgLyAyIC0gYmJveC55ICogc2NhbGU7XHJcblxyXG4gICAgICAgIHBhcGVyLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG94ICsgcGFkZGluZ1pvb21FLndpZHRoLCBveSArIHBhZGRpbmdab29tRS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcGVyLm9uKCdibGFuazpwb2ludGVyZGJsY2xpY2snLCBwb2ludGVyZGJsY2xpY2spO1xyXG4gICAgZWwub24oJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsKTtcclxuXHJcbiAgICBzZWxmLnpvb21FID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBvaW50ZXJkYmxjbGljaygpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0cy5ab29tUmVhY3RvciA9IFpvb21SZWFjdG9yO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnRzTWVudShvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudHNNZW51KSkgeyByZXR1cm4gbmV3IEVsZW1lbnRzTWVudShvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLmNvbnRhaW5lcikgeyB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuY29udGFpbmVyKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbnRhaW5lciBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLnRlbXBsYXRlKSB7IHRocm93IG5ldyBFcnJvcigndGVtcGxhdGUgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy50ZW1wbGF0ZSkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuYnVpbGRlcnMpKSB7IHRocm93IG5ldyBFcnJvcignYnVpbGRlcnMgb3B0aW9ucyBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmNyZWF0ZUl0ZW1EcmFnZ2VyKSB7IHRocm93IG5ldyBFcnJvcignY3JlYXRlSXRlbURyYWdnZXIgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY3JlYXRlSXRlbURyYWdnZXIgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNyZWF0ZUl0ZW1EcmFnZ2VyIG9wdGlvbicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud2lkdGggIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignd2lkdGggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLndpZHRoIDwgMiAqIG9wdGlvbnMucGFkZGluZykgeyB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybyAob3IgMiB0aW1lIHBhZGRpbmcpJyk7IH1cclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0gJChfLmhlYWQoJChvcHRpb25zLmNvbnRhaW5lcikpKSxcclxuICAgICAgICBidWlsZGVycyA9IG9wdGlvbnMuYnVpbGRlcnMsXHJcbiAgICAgICAgY3JlYXRlSXRlbURyYWdnZXIgPSBvcHRpb25zLmNyZWF0ZUl0ZW1EcmFnZ2VyLFxyXG4gICAgICAgIHRlbXBsYXRlID0gJChvcHRpb25zLnRlbXBsYXRlKSxcclxuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgXy5lYWNoKGJ1aWxkZXJzLCBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGVtcGxhdGUuY2xvbmUoKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGl0ZW0pO1xyXG4gICAgICAgIGlmICghaXRlbS5oYXNDbGFzcygnbS10cmFuc2Zvcm0tcGxhY2UtaG9sZGVyJykpIHtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZmluZCgnLm0tdHJhbnNmb3JtLXBsYWNlLWhvbGRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVJdGVtRHJhZ2dlcih7ZWw6IGl0ZW0sIGNyZWF0ZUVsZW1lbnRzOiBidWlsZGVyLCB3aWR0aDogd2lkdGgsIG1pbkhlaWdodDogNTAsIHBhZGRpbmc6IDB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnRzLkVsZW1lbnRzTWVudSA9IEVsZW1lbnRzTWVudTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpLFxyXG4gICAgZG9jdW1lbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snZG9jdW1lbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RvY3VtZW50J10gOiBudWxsKTtcclxuXHJcbmtvLmJpbmRpbmdIYW5kbGVycy5leGVjdXRlT25FbnRlciA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yLCB2aWV3TW9kZWwpIHtcclxuICAgICAgICBfLm5vb3AodmFsdWVBY2Nlc3Nvcik7XHJcbiAgICAgICAgdmFyIGFsbEJpbmRpbmdzID0gYWxsQmluZGluZ3NBY2Nlc3NvcigpO1xyXG4gICAgICAgICQoZWxlbWVudCkua2V5cHJlc3MoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpO1xyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGFsbEJpbmRpbmdzLmV4ZWN1dGVPbkVudGVyLmNhbGwodmlld01vZGVsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1hcEJhc2UoZSwgZikge1xyXG4gICAgdmFyIGZpZWxkID0ge1xyXG4gICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgcHJvcGVydHk6IGYucHJvcGVydHksXHJcbiAgICAgICAgdmFsdWU6IGtvLm9ic2VydmFibGUoZS5wcm9wKGYucHJvcGVydHkpKVxyXG4gICAgfTtcclxuICAgIGZpZWxkLnZhbHVlLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBlLnByb3AoZi5wcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbnZhciBtYXBTdHJpbmcgPSBtYXBCYXNlO1xyXG52YXIgbWFwQm9vbGVhbiA9IG1hcEJhc2U7XHJcblxyXG5mdW5jdGlvbiBtYXBCb29sZWFuU2V0KGUsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IHtcclxuICAgICAgICBuYW1lOiBmLm5hbWUsXHJcbiAgICAgICAgdHlwZTogZi50eXBlLFxyXG4gICAgICAgIGl0ZW1zOiBmLml0ZW1zLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gbWFwQm9vbGVhbihlLCB2KTsgfSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0cmluZ1NldChlLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSB7XHJcbiAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgIHR5cGU6IGYudHlwZSxcclxuICAgICAgICBzdHJpbmdzOiBrby5vYnNlcnZhYmxlQXJyYXkoXyhlLmdldChmLnByb3BlcnR5KSB8fCBbXSkuc29ydCgpLnVuaXEodHJ1ZSkudmFsdWUoKSksXHJcbiAgICAgICAgdmFsdWU6IGtvLm9ic2VydmFibGUoJycpLFxyXG4gICAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQudmFsdWUoKS50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5zdHJpbmdzKF8oZmllbGQuc3RyaW5ncygpKS5jb25jYXQoZmllbGQudmFsdWUoKS50cmltKCkpLnNvcnQoKS51bmlxKHRydWUpLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgZmllbGQudmFsdWUoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmllbGQuc3RyaW5ncy5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBmaWVsZC5zdHJpbmdzLnN1YnNjcmliZShmdW5jdGlvbiAoc3RyaW5ncykge1xyXG4gICAgICAgIGUucHJvcChmLnByb3BlcnR5LCBzdHJpbmdzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBFbnVtKGUsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IG1hcEJhc2UoZSwgZik7XHJcbiAgICBmaWVsZC52YWx1ZXMgPSBmLnZhbHVlcztcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwTnVtYmVyKGUsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IG1hcEJhc2UoZSwgZik7XHJcbiAgICBmaWVsZC5taW4gPSBmLm1pbjtcclxuICAgIGZpZWxkLm1heCA9IGYubWF4O1xyXG4gICAgZmllbGQudGV4dCA9IGtvLnB1cmVDb21wdXRlZCh7XHJcbiAgICAgICAgcmVhZDogZmllbGQudmFsdWUsXHJcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnLScpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gZmllbGQudmFsdWUoKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROdW1iZXIgPSAoZi5pbnRlZ2VyICYmIHBhcnNlSW50KHZhbHVlLCAxMCkpIHx8IHBhcnNlRmxvYXQodmFsdWUsIDEwKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gY3VycmVudE51bWJlcjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmLm1pbiA9PT0gJ251bWJlcicpIHsgbnVtYmVyID0gTWF0aC5tYXgoZi5taW4sIG51bWJlcik7IH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmLm1heCA9PT0gJ251bWJlcicpIHsgbnVtYmVyID0gTWF0aC5taW4oZi5tYXgsIG51bWJlcik7IH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgIT09IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgZmllbGQudmFsdWUobnVtYmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TnVtYmVyICE9PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZS5ub3RpZnlTdWJzY3JpYmVycyhudW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSkuZXh0ZW5kKHtub3RpZnk6ICdhbHdheXMnfSk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEJpbmRpbmdzKGwsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IHtcclxuICAgICAgICBuYW1lOiBmLm5hbWUsXHJcbiAgICAgICAgdHlwZTogZi50eXBlLFxyXG4gICAgICAgIGJpbmRpbmdzOiBrby5vYnNlcnZhYmxlQXJyYXkoKGwuZ2V0KGYucHJvcGVydHkpIHx8IFtdKS5zbGljZSgpKSxcclxuICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGUoKSxcclxuICAgICAgICBpbnB1dDoga28ub2JzZXJ2YWJsZSgpLFxyXG4gICAgICAgIGFkZEJpbmRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLm91dHB1dCgpICYmIGZpZWxkLmlucHV0KCkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmJpbmRpbmdzLnB1c2goe2lucHV0OiBmaWVsZC5pbnB1dCgpLCBvdXRwdXQ6IGZpZWxkLm91dHB1dCgpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUJpbmRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmllbGQuYmluZGluZ3MucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmaWVsZC5vdXRwdXRzID0gKGwuZ2V0U291cmNlRWxlbWVudCgpLm91dHB1dHMgJiYgbC5nZXRTb3VyY2VFbGVtZW50KCkub3V0cHV0cygpKSB8fFxyXG4gICAgICAgIChsLmdldFNvdXJjZUVsZW1lbnQoKS5nZXRBbmNlc3RvcnMoKVswXS5vdXRwdXRzICYmIGwuZ2V0U291cmNlRWxlbWVudCgpLmdldEFuY2VzdG9ycygpWzBdLm91dHB1dHMoKSkgfHxcclxuICAgICAgICBbXTtcclxuICAgIGZpZWxkLmlucHV0cyA9IGtvLmNvbXB1dGVkKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF8obC5nZXRUYXJnZXRFbGVtZW50KCkuaW5wdXRzKCkpXHJcbiAgICAgICAgICAgICAgICAuZGlmZmVyZW5jZShfLm1hcChmaWVsZC5iaW5kaW5ncygpLCBmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5pbnB1dDsgfSkpXHJcbiAgICAgICAgICAgICAgICAudmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgZmllbGQuYmluZGluZ3Muc3Vic2NyaWJlKGZ1bmN0aW9uIChiaW5kaW5ncykge1xyXG4gICAgICAgIGwuc2V0KGYucHJvcGVydHksIGJpbmRpbmdzLnNsaWNlKCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEVsZW1lbnRzTGlzdChsLCBmKSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBsLmdldChmLnByb3BlcnR5KSxcclxuICAgICAgICBpZ25vcmVkID0gXy5yZWplY3QoZWxlbWVudHMsIGYuZmlsdGVyKSxcclxuICAgICAgICBmaWVsZCA9IHtcclxuICAgICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBrby5vYnNlcnZhYmxlQXJyYXkoXy5jaGFpbihlbGVtZW50cylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZi5maWx0ZXIpXHJcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4ge2lkOiBpZCwgZGlzcGxheTogZi5kaXNwbGF5KGlkKX07IH0pXHJcbiAgICAgICAgICAgICAgICAudmFsdWUoKSlcclxuICAgICAgICB9O1xyXG4gICAgZmllbGQudG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGZpZWxkLmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi51bnNoaWZ0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmaWVsZC51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBmaWVsZC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4uc3BsaWNlKGluZGV4IC0gMSwgMiwgdGhpcywgZmllbGQuY2hpbGRyZW4oKVtpbmRleCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmllbGQuZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBmaWVsZC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IGZpZWxkLmNoaWxkcmVuKCkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDIsIGZpZWxkLmNoaWxkcmVuKClbaW5kZXggKyAxXSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpZWxkLmJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBmaWVsZC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IGZpZWxkLmNoaWxkcmVuKCkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmaWVsZC5jaGlsZHJlbi5zdWJzY3JpYmUoZnVuY3Rpb24gKHNvcnRlZCkge1xyXG4gICAgICAgIGwuc2V0KGYucHJvcGVydHksIF8uY2hhaW4oc29ydGVkKS5tYXAoJ2lkJykuY29uY2F0KGlnbm9yZWQpLnZhbHVlKCkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnRWaWV3TW9kZWwob3B0aW9ucywgY2xvc2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBjZWxsID0gb3B0aW9ucy5jZWxsO1xyXG4gICAgc2VsZi5pZCA9IGNlbGwuaWQ7XHJcbiAgICBzZWxmLmZpZWxkcyA9IF8ubWFwKG9wdGlvbnMuZmllbGRzLCBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHN3aXRjaCAoZi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcE51bWJlcihjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwU3RyaW5nKGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ3N0cmluZ3NldCc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBTdHJpbmdTZXQoY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBCb29sZWFuKGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ2VudW0nOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwRW51bShjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdib29sZWFuc2V0JzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcEJvb2xlYW5TZXQoY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnYmluZGluZ3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwQmluZGluZ3MoY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnZWxlbWVudHNsaXN0JzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcEVsZW1lbnRzTGlzdChjZWxsLCBmKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcclxufVxyXG5cclxuZnVuY3Rpb24gTW9kYWxFZGl0KG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNb2RhbEVkaXQpKSB7IHJldHVybiBuZXcgTW9kYWxFZGl0KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2VsbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdhdCBsZWFzdCBlbGVtZW50IG9yIGxpbmsgc2hvdWxkIGJlIHByb3ZpZGVkJyk7IH1cclxuXHJcbiAgICB2YXIgY2VsbCA9IG9wdGlvbnMuY2VsbCxcclxuICAgICAgICBmaWVsZHMgPSBjZWxsLmVkaXRhYmxlICYmIGNlbGwuZWRpdGFibGUoKSxcclxuICAgICAgICBlbCA9ICQocmVxdWlyZSgnLi9tb2RhbC5odG1sJykpO1xyXG5cclxuICAgIGlmICghZmllbGRzKSB7IHJldHVybjsgfVxyXG5cclxuICAgICQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKGVsKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZWFyRG93bigpIHtcclxuICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBrby5hcHBseUJpbmRpbmdzKG5ldyBFbGVtZW50Vmlld01vZGVsKHtjZWxsOiBjZWxsLCBmaWVsZHM6IGZpZWxkc30sIGZ1bmN0aW9uICgpIHsgZWwubW9kYWwoJ2hpZGUnKTsgfSksIGVsLmZpbmQoJy5tb2RhbC1jb250ZW50JylbMF0pO1xyXG5cclxuICAgIGVsLm1vZGFsKCdzaG93Jykub24oJ2hpZGRlbi5icy5tb2RhbCcsIHRlYXJEb3duKTtcclxufVxyXG5cclxuZXhwb3J0cy5Nb2RhbEVkaXQgPSBNb2RhbEVkaXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2VcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5FZGl0IEVsZW1lbnQgPHNtYWxsPihpZDogPHNwYW4gY2xhc3M9XFxcInNlbGVjdGFibGVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogaWRcXFwiPjwvc3Bhbj4pPC9zbWFsbD48L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDogZmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdzdHJpbmcnLCB2aXNpYmxlOiB0eXBlID09PSAnc3RyaW5nJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWUsIGF0dHI6IHtmb3I6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiB2YWx1ZSwgZXhlY3V0ZU9uRW50ZXI6ICRyb290LmNsb3NlLCBhdHRyOiB7aWQ6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnbnVtYmVyJywgdmlzaWJsZTogdHlwZSA9PT0gJ251bWJlcidcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lLCBhdHRyOiB7Zm9yOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiB0ZXh0LCBleGVjdXRlT25FbnRlcjogJHJvb3QuY2xvc2UsIGF0dHI6IHtpZDogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5LCBtaW46IG1pbiwgbWF4OiBtYXh9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdib29sZWFuJywgdmlzaWJsZTogdHlwZSA9PT0gJ2Jvb2xlYW4nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiB2YWx1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdlbnVtJywgdmlzaWJsZTogdHlwZSA9PT0gJ2VudW0nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZSwgYXR0cjoge2ZvcjogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogdmFsdWVzLCBvcHRpb25zVGV4dDogJ25hbWUnLCBvcHRpb25zVmFsdWU6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSwgYXR0cjoge2lkOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ2Jvb2xlYW5zZXQnLCB2aXNpYmxlOiB0eXBlID09PSAnYm9vbGVhbnNldCdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCIgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBpdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiB2YWx1ZSwgYXR0cjoge2lkOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnc3RyaW5nc2V0JywgdmlzaWJsZTogdHlwZSA9PT0gJ3N0cmluZ3NldCdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnZhbHVlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBzdHJpbmdzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wcmU9XFxcInJvd1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkaW5kZXhcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRkYXRhXFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQucmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0SW5wdXQ6IHZhbHVlLCBleGVjdXRlT25FbnRlcjogYWRkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBhZGRcXFwiPmFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnYmluZGluZ3MnLCB2aXNpYmxlOiB0eXBlID09PSAnYmluZGluZ3MnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xzLXNtLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPm91dHB1dDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmlucHV0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBiaW5kaW5nc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcHJlPVxcXCJyb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJGluZGV4XFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBvdXRwdXRcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IGlucHV0XFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQucmVtb3ZlQmluZGluZ1xcXCI+cmVtb3ZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3I+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IG91dHB1dHMsIHZhbHVlOiBvdXRwdXRcXFwiPjwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IGlucHV0cywgdmFsdWU6IGlucHV0XFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBhZGRCaW5kaW5nXFxcIj5hZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ2VsZW1lbnRzbGlzdCcsIHZpc2libGU6IHR5cGUgPT09ICdlbGVtZW50c2xpc3QnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xzLXNtLTEwIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGNoaWxkcmVuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wcmU9XFxcInJvd1xcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkaW5kZXhcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IGRpc3BsYXlcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC50b3AsIGRpc2FibGU6ICRpbmRleCgpID09PSAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQudXAsIGRpc2FibGU6ICRpbmRleCgpID09PSAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LXVwXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuZG93biwgZGlzYWJsZTogJGluZGV4KCkgKyAxID09PSAkcGFyZW50LmNoaWxkcmVuKCkubGVuZ3RoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1tZW51LWRvd25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5ib3R0b20sIGRpc2FibGU6ICRpbmRleCgpICsgMSA9PT0gJHBhcmVudC5jaGlsZHJlbigpLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DbG9zZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub3Blbih1cmksICdfdGVtcCcsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8sc3RhdHVzPW5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBtaW1lU3RyaW5nfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2Z0FzUG5nID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzUG5nVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIGRlZmluZSBpcyBkZWZpbmVkIGNyZWF0ZSBhcyBhbiBBTUQgbW9kdWxlXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvdXQkO1xuICAgIH0pO1xuICB9XG5cbn0pKCk7XG4iXX0=
