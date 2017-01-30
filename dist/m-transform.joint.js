(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true*/
"use strict";

var global = require('./'),
    window = (typeof window !== "undefined" ? window['window'] : typeof global !== "undefined" ? global['window'] : null);

window.MTransform = {
    joint: global
};

},{"./":2}],2:[function(require,module,exports){
// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true*/
"use strict";

var Board = require('./lib/board'),
    ElementsMenu = require('./lib/elementsmenu'),
    ModalEdit = require('./lib/modaledit');

// Constructors
exports.Board = Board;
exports.ElementsMenu = ElementsMenu;
exports.ModalEdit = ModalEdit;

// Maker Functions
exports.createBoard = Board;
exports.createElementsMenu = ElementsMenu;
exports.createModalEdit = ModalEdit;

},{"./lib/board":6,"./lib/elementsmenu":27,"./lib/modaledit":28}],3:[function(require,module,exports){
module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   version=\"1.1\"\r\n   id=\"Capa_1\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"44.238px\"\r\n   height=\"44.238px\"\r\n   viewBox=\"0 0 44.238 44.238\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"delete.svg\"\r\n   style=\"enable-background:new 0 0 44.238 44.238;\"><metadata\r\n     id=\"metadata51\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs49\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1600\"\r\n     inkscape:window-height=\"837\"\r\n     id=\"namedview47\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"5.3347802\"\r\n     inkscape:cx=\"68.874387\"\r\n     inkscape:cy=\"22.118999\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"Capa_1\"\r\n     showguides=\"true\"\r\n     inkscape:guide-bbox=\"true\" /><g\r\n     id=\"g4230\"><circle\r\n       r=\"21\"\r\n       cy=\"22.237999\"\r\n       cx=\"22\"\r\n       id=\"path4208\"\r\n       style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><g\r\n       style=\"fill:#000000;fill-opacity:1\"\r\n       id=\"g7\"><path\r\n         inkscape:connector-curvature=\"0\"\r\n         style=\"fill:#000000;fill-opacity:1\"\r\n         id=\"path9\"\r\n         d=\"m 15.533,29.455 c -0.192,0 -0.384,-0.073 -0.53,-0.22 -0.293,-0.293 -0.293,-0.769 0,-1.062 L 28.174,15.002 c 0.293,-0.293 0.768,-0.293 1.061,0 0.293,0.293 0.293,0.768 0,1.061 L 16.063,29.235 c -0.146,0.147 -0.338,0.22 -0.53,0.22 z\" /></g><g\r\n       style=\"fill:#000000;fill-opacity:1\"\r\n       id=\"g11\"><path\r\n         inkscape:connector-curvature=\"0\"\r\n         style=\"fill:#000000;fill-opacity:1\"\r\n         id=\"path13\"\r\n         d=\"m 28.704,29.455 c -0.192,0 -0.384,-0.073 -0.53,-0.22 L 15.002,16.064 c -0.293,-0.293 -0.293,-0.768 0,-1.061 0.293,-0.293 0.768,-0.293 1.061,0 l 13.171,13.171 c 0.293,0.293 0.293,0.769 0,1.062 -0.146,0.146 -0.338,0.219 -0.53,0.219 z\" /></g><path\r\n       inkscape:connector-curvature=\"0\"\r\n       style=\"fill:#ff0000;fill-opacity:1\"\r\n       id=\"path15\"\r\n       d=\"M 22.119,44.237 C 9.922,44.237 0,34.315 0,22.12 0,9.924 9.922,0.001 22.119,0.001 c 12.197,0 22.119,9.922 22.119,22.119 0,12.197 -9.924,22.117 -22.119,22.117 z m 0,-42.736 C 10.75,1.501 1.5,10.751 1.5,22.12 c 0,11.369 9.25,20.619 20.619,20.619 11.369,0 20.619,-9.25 20.619,-20.619 0,-11.369 -9.25,-20.619 -20.619,-20.619 z\" /></g><g\r\n     id=\"g17\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /></svg>\r\n";

},{}],4:[function(require,module,exports){
module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   class=\"detail convertSvgInline replaced-svg\"\r\n   id=\"imgView\"\r\n   style=\"display: block;\"\r\n   fill=\"#000000\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"256\"\r\n   height=\"256\"\r\n   version=\"1.1\"\r\n   data-kw=\"configuration12\"\r\n   data-id=\"51874\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"edit.svg\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1920\"\r\n     inkscape:window-height=\"1017\"\r\n     id=\"namedview49\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"2.6074563\"\r\n     inkscape:cx=\"221.70951\"\r\n     inkscape:cy=\"106.74523\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"imgView\" /><circle\r\n     style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03455937;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:0;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;enable-background:accumulate\"\r\n     id=\"path4181\"\r\n     cx=\"22.118\"\r\n     cy=\"22.118\"\r\n     r=\"21.254015\" /><g\r\n     id=\"g3\"><g\r\n       id=\"g5\"><path\r\n         fill=\"\"\r\n         d=\"M 22.118 44.236 C 9.922 44.236 0 34.314 0 22.119 C 0 9.923 9.922 0 22.118 0 s 22.118 9.923 22.118 22.119 C 44.236 34.314 34.314 44.236 22.118 44.236 Z M 22.118 1.5 C 10.75 1.5 1.5 10.75 1.5 22.119 s 9.25 20.617 20.618 20.617 s 20.618 -9.248 20.618 -20.617 S 33.486 1.5 22.118 1.5 Z\"\r\n         id=\"path7\" /><g\r\n         id=\"g9\"><circle\r\n           fill=\"\"\r\n           cx=\"22.118\"\r\n           cy=\"22.438\"\r\n           r=\"1.41\"\r\n           id=\"circle11\" /><path\r\n           fill=\"\"\r\n           d=\"M 22.118 24.098 c -0.916 0 -1.66 -0.744 -1.66 -1.66 c 0 -0.915 0.745 -1.66 1.66 -1.66 s 1.659 0.745 1.659 1.66 C 23.777 23.354 23.034 24.098 22.118 24.098 Z M 22.118 21.277 c -0.64 0 -1.16 0.521 -1.16 1.16 s 0.521 1.161 1.16 1.161 c 0.639 0 1.159 -0.521 1.159 -1.161 S 22.758 21.277 22.118 21.277 Z\"\r\n           id=\"path13\" /></g><g\r\n         id=\"g15\"><path\r\n           fill=\"\"\r\n           d=\"M 22.118 32.42 c -0.6 0 -1.208 -0.061 -1.86 -0.182 c -0.446 -0.062 -0.83 -0.444 -0.898 -0.926 l -0.357 -1.838 c -0.461 -0.207 -0.896 -0.459 -1.287 -0.744 l -1.798 0.623 c -0.087 0.041 -0.233 0.07 -0.381 0.07 c -0.317 0 -0.622 -0.146 -0.837 -0.398 c -0.836 -0.952 -1.482 -2.074 -1.862 -3.233 c -0.183 -0.418 -0.023 -0.974 0.403 -1.257 l 1.358 -1.186 c -0.023 -0.23 -0.035 -0.479 -0.035 -0.752 c 0 -0.271 0.011 -0.52 0.035 -0.75 l -1.435 -1.245 c -0.35 -0.226 -0.51 -0.78 -0.303 -1.262 c 0.356 -1.098 1.003 -2.219 1.847 -3.181 c 0.299 -0.355 0.822 -0.488 1.261 -0.298 l 1.746 0.603 c 0.39 -0.284 0.825 -0.537 1.287 -0.745 l 0.364 -1.874 c 0.063 -0.447 0.449 -0.83 0.932 -0.894 c 1.125 -0.234 2.465 -0.243 3.693 0.009 c 0.432 0.055 0.817 0.438 0.886 0.921 l 0.357 1.838 c 0.447 0.204 0.875 0.453 1.283 0.746 l 1.803 -0.624 c 0.087 -0.04 0.232 -0.07 0.381 -0.07 c 0.318 0 0.624 0.146 0.838 0.401 c 0.834 0.949 1.48 2.07 1.861 3.23 c 0.183 0.419 0.022 0.974 -0.403 1.258 l -1.358 1.185 c 0.022 0.232 0.034 0.48 0.034 0.752 s -0.011 0.52 -0.034 0.75 l 1.434 1.245 c 0.351 0.226 0.511 0.78 0.304 1.261 c -0.356 1.098 -1.002 2.22 -1.847 3.182 c -0.303 0.357 -0.825 0.486 -1.262 0.299 l -1.75 -0.604 c -0.406 0.293 -0.836 0.541 -1.281 0.746 l -0.364 1.873 c -0.062 0.444 -0.446 0.827 -0.927 0.896 C 23.327 32.359 22.718 32.42 22.118 32.42 Z M 20.789 30.809 c 0.96 0.152 1.738 0.146 2.66 0 l 0.39 -2.012 c 0.05 -0.254 0.226 -0.464 0.466 -0.557 c 0.57 -0.221 1.111 -0.535 1.607 -0.936 c 0.201 -0.162 0.472 -0.207 0.716 -0.125 l 1.938 0.672 c 0.58 -0.705 1.033 -1.49 1.33 -2.301 l -1.549 -1.337 c -0.201 -0.174 -0.295 -0.442 -0.246 -0.703 c 0.047 -0.259 0.07 -0.558 0.07 -0.914 s -0.023 -0.654 -0.07 -0.913 c -0.05 -0.261 0.045 -0.529 0.246 -0.703 l 1.547 -1.342 c -0.313 -0.838 -0.764 -1.611 -1.33 -2.297 l -1.938 0.673 c -0.244 0.083 -0.516 0.036 -0.717 -0.125 c -0.495 -0.4 -1.035 -0.715 -1.605 -0.936 c -0.242 -0.093 -0.418 -0.303 -0.467 -0.557 l -0.391 -2.014 c -0.926 -0.156 -1.792 -0.148 -2.659 0 l -0.39 2.014 c -0.049 0.254 -0.225 0.464 -0.466 0.557 c -0.598 0.231 -1.149 0.552 -1.595 0.926 c -0.202 0.17 -0.478 0.22 -0.728 0.135 l -1.938 -0.672 c -0.581 0.707 -1.034 1.491 -1.33 2.301 l 1.549 1.337 c 0.201 0.175 0.294 0.442 0.246 0.705 c -0.048 0.255 -0.071 0.553 -0.071 0.911 s 0.023 0.657 0.071 0.912 c 0.049 0.263 -0.044 0.53 -0.246 0.705 l -1.547 1.343 c 0.313 0.836 0.763 1.609 1.329 2.297 l 1.938 -0.674 c 0.251 -0.084 0.526 -0.033 0.728 0.135 c 0.446 0.375 0.998 0.693 1.595 0.926 c 0.241 0.093 0.417 0.303 0.466 0.557 L 20.789 30.809 Z\"\r\n           id=\"path17\" /></g></g></g><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /></svg>";

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
    if (!options.manipulators || typeof options.manipulators !== 'object') { throw new Error('manipulators option is mandatory'); }
    if (!options.defaultLink || typeof options.defaultLink !== 'function') { throw new Error('defaultLink option is mandatory'); }
    if (!options.el) { throw new Error('el option is mandatory'); }
    if ($(options.el).length === 0) { throw new Error('invalid el option'); }

    var self = this,
        el = $($(options.el)[0]),
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
            actions: options.manipulators
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
module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xml:space=\"preserve\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   height=\"44.236\"\r\n   width=\"44.236\"\r\n   y=\"0px\"\r\n   x=\"0px\"\r\n   id=\"Capa_1\"\r\n   version=\"1.1\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><circle\r\n     r=\"22.118\"\r\n     cy=\"22.118\"\r\n     cx=\"22.118\"\r\n     id=\"path4181\"\r\n     style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><path\r\n     id=\"path7\"\r\n     d=\"M 22.118,44.236 C 9.922,44.236 0,34.314 0,22.119 0,9.923 9.922,0 22.118,0 c 12.196,0 22.118,9.923 22.118,22.119 0,12.195 -9.922,22.117 -22.118,22.117 z m 0,-42.736 C 10.75,1.5 1.5,10.75 1.5,22.119 c 0,11.369 9.25,20.617 20.618,20.617 11.368,0 20.618,-9.248 20.618,-20.617 C 42.736,10.75 33.486,1.5 22.118,1.5 Z\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /><g\r\n     id=\"g3\"\r\n     transform=\"matrix(0.07890863,-0.07890863,0.07890863,0.07890863,0.90476107,22.118124)\"><path\r\n       id=\"path5\"\r\n       d=\"m 265.171,125.577 -80,-80 c -4.881,-4.881 -12.797,-4.881 -17.678,0 -4.882,4.882 -4.882,12.796 0,17.678 l 58.661,58.661 -213.654,0 c -6.903,0 -12.5,5.597 -12.5,12.5 0,6.902 5.597,12.5 12.5,12.5 l 213.654,0 -58.659,58.661 c -4.882,4.882 -4.882,12.796 0,17.678 2.44,2.439 5.64,3.661 8.839,3.661 3.199,0 6.398,-1.222 8.839,-3.661 l 79.998,-80 c 4.882,-4.882 4.882,-12.796 0,-17.678 z\" /></g></svg>\r\n";

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./delete.svg":3,"./edit.svg":4,"./link.svg":10,"./manipulator.html":13,"./move.svg":21,"./resizereactor":23,"./rotatereactor":24}],13:[function(require,module,exports){
module.exports = "<div class=\"m-transform-joint-manipulator\">\r\n    <div class=\"m-transform-joint-marker-tab\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-ne\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-e\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-se\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-s\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-sw\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-w\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-nw\"></div>\r\n    <div class=\"m-transform-joint-marker-resize-n\"></div>\r\n    <div class=\"m-transform-joint-marker-rotate\"></div>\r\n</div>\r\n";

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
module.exports = "<div class='m-transform-map-viewport'></div>\r\n";

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
module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\r\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\r\n   version=\"1.1\"\r\n   id=\"Capa_1\"\r\n   x=\"0px\"\r\n   y=\"0px\"\r\n   width=\"44.236\"\r\n   height=\"44.236\"\r\n   viewBox=\"0 0 44.236 44.236\"\r\n   xml:space=\"preserve\"\r\n   inkscape:version=\"0.91 r13725\"\r\n   sodipodi:docname=\"move.svg\"><metadata\r\n     id=\"metadata53\"><rdf:RDF><cc:Work\r\n         rdf:about=\"\"><dc:format>image/svg+xml</dc:format><dc:type\r\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" /><dc:title /></cc:Work></rdf:RDF></metadata><defs\r\n     id=\"defs51\" /><sodipodi:namedview\r\n     pagecolor=\"#ffffff\"\r\n     bordercolor=\"#666666\"\r\n     borderopacity=\"1\"\r\n     objecttolerance=\"10\"\r\n     gridtolerance=\"10\"\r\n     guidetolerance=\"10\"\r\n     inkscape:pageopacity=\"0\"\r\n     inkscape:pageshadow=\"2\"\r\n     inkscape:window-width=\"1600\"\r\n     inkscape:window-height=\"837\"\r\n     id=\"namedview49\"\r\n     showgrid=\"false\"\r\n     inkscape:zoom=\"7.5448594\"\r\n     inkscape:cx=\"28.520049\"\r\n     inkscape:cy=\"32.284412\"\r\n     inkscape:window-x=\"-8\"\r\n     inkscape:window-y=\"-8\"\r\n     inkscape:window-maximized=\"1\"\r\n     inkscape:current-layer=\"Capa_1\" /><g\r\n     id=\"g19\" /><g\r\n     id=\"g21\" /><g\r\n     id=\"g23\" /><g\r\n     id=\"g25\" /><g\r\n     id=\"g27\" /><g\r\n     id=\"g29\" /><g\r\n     id=\"g31\" /><g\r\n     id=\"g33\" /><g\r\n     id=\"g35\" /><g\r\n     id=\"g37\" /><g\r\n     id=\"g39\" /><g\r\n     id=\"g41\" /><g\r\n     id=\"g43\" /><g\r\n     id=\"g45\" /><g\r\n     id=\"g47\" /><g\r\n     id=\"g4177\"><circle\r\n       r=\"22.118\"\r\n       cy=\"22.118\"\r\n       cx=\"22.118\"\r\n       id=\"path4181\"\r\n       style=\"color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate\" /><path\r\n       inkscape:connector-curvature=\"0\"\r\n       id=\"path7\"\r\n       d=\"M 22.118,44.236 C 9.922,44.236 0,34.314 0,22.119 0,9.923 9.922,0 22.118,0 c 12.196,0 22.118,9.923 22.118,22.119 0,12.195 -9.922,22.117 -22.118,22.117 z m 0,-42.736 C 10.75,1.5 1.5,10.75 1.5,22.119 c 0,11.369 9.25,20.617 20.618,20.617 11.368,0 20.618,-9.248 20.618,-20.617 C 42.736,10.75 33.486,1.5 22.118,1.5 Z\" /><g\r\n       id=\"g9\"><circle\r\n         id=\"circle11\"\r\n         r=\"1.41\"\r\n         cy=\"22.438\"\r\n         cx=\"22.118\" /><path\r\n         inkscape:connector-curvature=\"0\"\r\n         id=\"path13\"\r\n         d=\"m 22.118,24.098 c -0.916,0 -1.66,-0.744 -1.66,-1.66 0,-0.915 0.745,-1.66 1.66,-1.66 0.915,0 1.659,0.745 1.659,1.66 0,0.916 -0.743,1.66 -1.659,1.66 z m 0,-2.821 c -0.64,0 -1.16,0.521 -1.16,1.16 0,0.639 0.521,1.161 1.16,1.161 0.639,0 1.159,-0.521 1.159,-1.161 0,-0.64 -0.519,-1.16 -1.159,-1.16 z\" /></g><path\r\n       id=\"path7-2\"\r\n       d=\"m 37.039974,21.736127 -0.214021,-0.324019 -4.000025,-4.000045 c -0.390033,-0.390026 -1.025986,-0.390026 -1.414002,0 -0.390025,0.390034 -0.390025,1.024038 0,1.414005 l 2.292035,2.292038 -10.586092,0 0,-10.586064 2.292034,2.292038 c 0.388016,0.390034 1.024029,0.390034 1.413994,0 0.388016,-0.390026 0.388016,-1.02403 0,-1.413997 l -4.000031,-4.000112 -0.01,-0.006 -0.314013,-0.207977 -0.38197,-0.07803 -0.0038,0 -0.378011,0.07803 -0.314013,0.207977 -0.012,0.006 -4.000031,4.000045 c -0.390026,0.390034 -0.390026,1.024038 0,1.414004 0.390026,0.389966 1.024029,0.390026 1.413994,0 l 2.294052,-2.292045 0,10.586131 -10.586032,0 2.292034,-2.292038 c 0.390026,-0.390034 0.390026,-1.024038 0,-1.414005 -0.390033,-0.389966 -1.024036,-0.390026 -1.414002,0 l -4.000092,4.000045 -0.006,0.01 -0.207976,0.314013 -0.07803,0.382039 0,0.0038 0.07803,0.378011 0.207976,0.312003 0.006,0.012 4.000032,4.000045 c 0.390026,0.390034 1.024029,0.390034 1.413995,0 0.390033,-0.388016 0.390033,-1.02403 0,-1.414004 l -2.291967,-2.292098 10.586092,0 0,10.586131 -2.292034,-2.292046 c -0.390026,-0.388016 -1.024029,-0.388016 -1.413995,0 -0.390033,0.390034 -0.390033,1.025988 0,1.414005 l 4.000032,4.000045 0.324018,0.215964 0.378003,0.07602 0.0038,0 0.381978,-0.07803 0.324018,-0.214022 4.000031,-4.000045 c 0.388008,-0.390026 0.388008,-1.02598 0,-1.413997 -0.390033,-0.390033 -1.025986,-0.390033 -1.414002,0 l -2.292027,2.292038 0,-10.586063 10.586092,0 -2.292034,2.292038 c -0.388016,0.388016 -0.388016,1.024038 0,1.414004 0.390026,0.388016 1.025979,0.388016 1.413995,0 l 4.000031,-4.000045 0.215964,-0.324018 0.07602,-0.378011 0,-0.0038 -0.07803,-0.381979 z\"\r\n       style=\"fill:#010002\"\r\n       inkscape:connector-curvature=\"0\" /></g></svg>\r\n";

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
    if ($(options.template).length !== 1) { throw new Error('invalid template option'); }
    if (!Array.isArray(options.builders)) { throw new Error('builders options is mandatory'); }
    if (!options.createItemDragger) { throw new Error('createItemDragger option is Mandatory'); }
    if (typeof options.createItemDragger !== 'function') { throw new Error('invalid createItemDragger option'); }
    if (typeof options.width !== 'number') { throw new Error('width option is mandatory and has to be a number'); }
    if (options.width < 2 * options.padding) { throw new Error('width cannot be less than zero (or 2 time padding)'); }

    var container = $(_.head($(options.container))),
        builders = options.builders,
        createItemDragger = options.createItemDragger,
        template = options.teamplate,
        width = options.width;

    _.each(builders, function (builder) {
        var item = $(template);
        container.append(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJnbG9iYWwuanMiLCJpbmRleC5qcyIsImxpYi9ib2FyZC9kZWxldGUuc3ZnIiwibGliL2JvYXJkL2VkaXQuc3ZnIiwibGliL2JvYXJkL2VtYmVkZGluZ3JlYWN0b3IuanMiLCJsaWIvYm9hcmQvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaW5kZXguanMiLCJsaWIvYm9hcmQvaXRlbWRyYWdnZXIvaXRlbWRyYWdnZXIuaHRtbCIsImxpYi9ib2FyZC9pdGVtZHJhZ2dlci9vdmVybGF5Lmh0bWwiLCJsaWIvYm9hcmQvbGluay5zdmciLCJsaWIvYm9hcmQvbGlua2Nvbm5lY3Rpb25wb2ludC5qcyIsImxpYi9ib2FyZC9tYW5pcHVsYXRpb25yZWFjdG9yLmpzIiwibGliL2JvYXJkL21hbmlwdWxhdG9yLmh0bWwiLCJsaWIvYm9hcmQvbWFwL2luZGV4LmpzIiwibGliL2JvYXJkL21hcC9wcmV2aWV3Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ByZXZpZXcuanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0Lmh0bWwiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0LmpzIiwibGliL2JvYXJkL21hcC92aWV3cG9ydG91dGxpbmUvaW5kZXguanMiLCJsaWIvYm9hcmQvbWFwL3ZpZXdwb3J0b3V0bGluZS9tYXJrdXAuc3ZnIiwibGliL2JvYXJkL21vdmUuc3ZnIiwibGliL2JvYXJkL3BhbnJlYWN0b3IuanMiLCJsaWIvYm9hcmQvcmVzaXplcmVhY3Rvci5qcyIsImxpYi9ib2FyZC9yb3RhdGVyZWFjdG9yLmpzIiwibGliL2JvYXJkL3ZhbGlkYXRlY29ubmVjdGlvbi5qcyIsImxpYi9ib2FyZC96b29tcmVhY3Rvci5qcyIsImxpYi9lbGVtZW50c21lbnUvaW5kZXguanMiLCJsaWIvbW9kYWxlZGl0L2luZGV4LmpzIiwibGliL21vZGFsZWRpdC9tb2RhbC5odG1sIiwibm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBOztBQ0RBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZLQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hPQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDckZBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVGQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNCQTtBQUNBOztBQ0RBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0T0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLycpLFxyXG4gICAgd2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ3dpbmRvdyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnd2luZG93J10gOiBudWxsKTtcclxuXHJcbndpbmRvdy5NVHJhbnNmb3JtID0ge1xyXG4gICAgam9pbnQ6IGdsb2JhbFxyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL2xpYi9ib2FyZCcpLFxyXG4gICAgRWxlbWVudHNNZW51ID0gcmVxdWlyZSgnLi9saWIvZWxlbWVudHNtZW51JyksXHJcbiAgICBNb2RhbEVkaXQgPSByZXF1aXJlKCcuL2xpYi9tb2RhbGVkaXQnKTtcclxuXHJcbi8vIENvbnN0cnVjdG9yc1xyXG5leHBvcnRzLkJvYXJkID0gQm9hcmQ7XHJcbmV4cG9ydHMuRWxlbWVudHNNZW51ID0gRWxlbWVudHNNZW51O1xyXG5leHBvcnRzLk1vZGFsRWRpdCA9IE1vZGFsRWRpdDtcclxuXHJcbi8vIE1ha2VyIEZ1bmN0aW9uc1xyXG5leHBvcnRzLmNyZWF0ZUJvYXJkID0gQm9hcmQ7XHJcbmV4cG9ydHMuY3JlYXRlRWxlbWVudHNNZW51ID0gRWxlbWVudHNNZW51O1xyXG5leHBvcnRzLmNyZWF0ZU1vZGFsRWRpdCA9IE1vZGFsRWRpdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcIlVURi04XFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/PlxcclxcbjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT5cXHJcXG5cXHJcXG48c3ZnXFxyXFxuICAgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcbiAgIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiXFxyXFxuICAgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIlxcclxcbiAgIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCJcXHJcXG4gICB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCJcXHJcXG4gICB2ZXJzaW9uPVxcXCIxLjFcXFwiXFxyXFxuICAgaWQ9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICB4PVxcXCIwcHhcXFwiXFxyXFxuICAgeT1cXFwiMHB4XFxcIlxcclxcbiAgIHdpZHRoPVxcXCI0NC4yMzhweFxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzOHB4XFxcIlxcclxcbiAgIHZpZXdCb3g9XFxcIjAgMCA0NC4yMzggNDQuMjM4XFxcIlxcclxcbiAgIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFxyXFxuICAgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45MSByMTM3MjVcXFwiXFxyXFxuICAgc29kaXBvZGk6ZG9jbmFtZT1cXFwiZGVsZXRlLnN2Z1xcXCJcXHJcXG4gICBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NC4yMzggNDQuMjM4O1xcXCI+PG1ldGFkYXRhXFxyXFxuICAgICBpZD1cXFwibWV0YWRhdGE1MVxcXCI+PHJkZjpSREY+PGNjOldvcmtcXHJcXG4gICAgICAgICByZGY6YWJvdXQ9XFxcIlxcXCI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGVcXHJcXG4gICAgICAgICAgIHJkZjpyZXNvdXJjZT1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2VcXFwiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzXFxyXFxuICAgICBpZD1cXFwiZGVmczQ5XFxcIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXdcXHJcXG4gICAgIHBhZ2Vjb2xvcj1cXFwiI2ZmZmZmZlxcXCJcXHJcXG4gICAgIGJvcmRlcmNvbG9yPVxcXCIjNjY2NjY2XFxcIlxcclxcbiAgICAgYm9yZGVyb3BhY2l0eT1cXFwiMVxcXCJcXHJcXG4gICAgIG9iamVjdHRvbGVyYW5jZT1cXFwiMTBcXFwiXFxyXFxuICAgICBncmlkdG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGd1aWRldG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PVxcXCIwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz1cXFwiMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD1cXFwiMTYwMFxcXCJcXHJcXG4gICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9XFxcIjgzN1xcXCJcXHJcXG4gICAgIGlkPVxcXCJuYW1lZHZpZXc0N1xcXCJcXHJcXG4gICAgIHNob3dncmlkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnpvb209XFxcIjUuMzM0NzgwMlxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN4PVxcXCI2OC44NzQzODdcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeT1cXFwiMjIuMTE4OTk5XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXg9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXk9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD1cXFwiMVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICAgIHNob3dndWlkZXM9XFxcInRydWVcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpndWlkZS1iYm94PVxcXCJ0cnVlXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQyMzBcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgcj1cXFwiMjFcXFwiXFxyXFxuICAgICAgIGN5PVxcXCIyMi4yMzc5OTlcXFwiXFxyXFxuICAgICAgIGN4PVxcXCIyMlxcXCJcXHJcXG4gICAgICAgaWQ9XFxcInBhdGg0MjA4XFxcIlxcclxcbiAgICAgICBzdHlsZT1cXFwiY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNDAwMDAwMDE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjE7bWFya2VyOm5vbmU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZVxcXCIgLz48Z1xcclxcbiAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICBpZD1cXFwiZzdcXFwiPjxwYXRoXFxyXFxuICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCJcXHJcXG4gICAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICAgIGlkPVxcXCJwYXRoOVxcXCJcXHJcXG4gICAgICAgICBkPVxcXCJtIDE1LjUzMywyOS40NTUgYyAtMC4xOTIsMCAtMC4zODQsLTAuMDczIC0wLjUzLC0wLjIyIC0wLjI5MywtMC4yOTMgLTAuMjkzLC0wLjc2OSAwLC0xLjA2MiBMIDI4LjE3NCwxNS4wMDIgYyAwLjI5MywtMC4yOTMgMC43NjgsLTAuMjkzIDEuMDYxLDAgMC4yOTMsMC4yOTMgMC4yOTMsMC43NjggMCwxLjA2MSBMIDE2LjA2MywyOS4yMzUgYyAtMC4xNDYsMC4xNDcgLTAuMzM4LDAuMjIgLTAuNTMsMC4yMiB6XFxcIiAvPjwvZz48Z1xcclxcbiAgICAgICBzdHlsZT1cXFwiZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxXFxcIlxcclxcbiAgICAgICBpZD1cXFwiZzExXFxcIj48cGF0aFxcclxcbiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgc3R5bGU9XFxcImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgICBpZD1cXFwicGF0aDEzXFxcIlxcclxcbiAgICAgICAgIGQ9XFxcIm0gMjguNzA0LDI5LjQ1NSBjIC0wLjE5MiwwIC0wLjM4NCwtMC4wNzMgLTAuNTMsLTAuMjIgTCAxNS4wMDIsMTYuMDY0IGMgLTAuMjkzLC0wLjI5MyAtMC4yOTMsLTAuNzY4IDAsLTEuMDYxIDAuMjkzLC0wLjI5MyAwLjc2OCwtMC4yOTMgMS4wNjEsMCBsIDEzLjE3MSwxMy4xNzEgYyAwLjI5MywwLjI5MyAwLjI5MywwLjc2OSAwLDEuMDYyIC0wLjE0NiwwLjE0NiAtMC4zMzgsMC4yMTkgLTAuNTMsMC4yMTkgelxcXCIgLz48L2c+PHBhdGhcXHJcXG4gICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6I2ZmMDAwMDtmaWxsLW9wYWNpdHk6MVxcXCJcXHJcXG4gICAgICAgaWQ9XFxcInBhdGgxNVxcXCJcXHJcXG4gICAgICAgZD1cXFwiTSAyMi4xMTksNDQuMjM3IEMgOS45MjIsNDQuMjM3IDAsMzQuMzE1IDAsMjIuMTIgMCw5LjkyNCA5LjkyMiwwLjAwMSAyMi4xMTksMC4wMDEgYyAxMi4xOTcsMCAyMi4xMTksOS45MjIgMjIuMTE5LDIyLjExOSAwLDEyLjE5NyAtOS45MjQsMjIuMTE3IC0yMi4xMTksMjIuMTE3IHogbSAwLC00Mi43MzYgQyAxMC43NSwxLjUwMSAxLjUsMTAuNzUxIDEuNSwyMi4xMiBjIDAsMTEuMzY5IDkuMjUsMjAuNjE5IDIwLjYxOSwyMC42MTkgMTEuMzY5LDAgMjAuNjE5LC05LjI1IDIwLjYxOSwtMjAuNjE5IDAsLTExLjM2OSAtOS4yNSwtMjAuNjE5IC0yMC42MTksLTIwLjYxOSB6XFxcIiAvPjwvZz48Z1xcclxcbiAgICAgaWQ9XFxcImcxN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcxOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImcyOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczMVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczM1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczNVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczN1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImczOVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0MVxcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0M1xcXCIgLz48Z1xcclxcbiAgICAgaWQ9XFxcImc0NVxcXCIgLz48L3N2Zz5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJVVEYtOFxcXCIgc3RhbmRhbG9uZT1cXFwibm9cXFwiPz5cXHJcXG48c3ZnXFxyXFxuICAgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcbiAgIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiXFxyXFxuICAgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIlxcclxcbiAgIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCJcXHJcXG4gICB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCJcXHJcXG4gICBjbGFzcz1cXFwiZGV0YWlsIGNvbnZlcnRTdmdJbmxpbmUgcmVwbGFjZWQtc3ZnXFxcIlxcclxcbiAgIGlkPVxcXCJpbWdWaWV3XFxcIlxcclxcbiAgIHN0eWxlPVxcXCJkaXNwbGF5OiBibG9jaztcXFwiXFxyXFxuICAgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM2IDQ0LjIzNlxcXCJcXHJcXG4gICB4PVxcXCIwcHhcXFwiXFxyXFxuICAgeT1cXFwiMHB4XFxcIlxcclxcbiAgIHdpZHRoPVxcXCIyNTZcXFwiXFxyXFxuICAgaGVpZ2h0PVxcXCIyNTZcXFwiXFxyXFxuICAgdmVyc2lvbj1cXFwiMS4xXFxcIlxcclxcbiAgIGRhdGEta3c9XFxcImNvbmZpZ3VyYXRpb24xMlxcXCJcXHJcXG4gICBkYXRhLWlkPVxcXCI1MTg3NFxcXCJcXHJcXG4gICB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcclxcbiAgIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTEgcjEzNzI1XFxcIlxcclxcbiAgIHNvZGlwb2RpOmRvY25hbWU9XFxcImVkaXQuc3ZnXFxcIj48bWV0YWRhdGFcXHJcXG4gICAgIGlkPVxcXCJtZXRhZGF0YTUzXFxcIj48cmRmOlJERj48Y2M6V29ya1xcclxcbiAgICAgICAgIHJkZjphYm91dD1cXFwiXFxcIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZVxcclxcbiAgICAgICAgICAgcmRmOnJlc291cmNlPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZVxcXCIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnNcXHJcXG4gICAgIGlkPVxcXCJkZWZzNTFcXFwiIC8+PHNvZGlwb2RpOm5hbWVkdmlld1xcclxcbiAgICAgcGFnZWNvbG9yPVxcXCIjZmZmZmZmXFxcIlxcclxcbiAgICAgYm9yZGVyY29sb3I9XFxcIiM2NjY2NjZcXFwiXFxyXFxuICAgICBib3JkZXJvcGFjaXR5PVxcXCIxXFxcIlxcclxcbiAgICAgb2JqZWN0dG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGdyaWR0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3VpZGV0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XFxcIjBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PVxcXCIyXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPVxcXCIxOTIwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD1cXFwiMTAxN1xcXCJcXHJcXG4gICAgIGlkPVxcXCJuYW1lZHZpZXc0OVxcXCJcXHJcXG4gICAgIHNob3dncmlkPVxcXCJmYWxzZVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOnpvb209XFxcIjIuNjA3NDU2M1xcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN4PVxcXCIyMjEuNzA5NTFcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpjeT1cXFwiMTA2Ljc0NTIzXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXg9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXk9XFxcIi04XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD1cXFwiMVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9XFxcImltZ1ZpZXdcXFwiIC8+PGNpcmNsZVxcclxcbiAgICAgc3R5bGU9XFxcImNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjAzNDU1OTM3O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlXFxcIlxcclxcbiAgICAgaWQ9XFxcInBhdGg0MTgxXFxcIlxcclxcbiAgICAgY3g9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgIGN5PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICByPVxcXCIyMS4yNTQwMTVcXFwiIC8+PGdcXHJcXG4gICAgIGlkPVxcXCJnM1xcXCI+PGdcXHJcXG4gICAgICAgaWQ9XFxcImc1XFxcIj48cGF0aFxcclxcbiAgICAgICAgIGZpbGw9XFxcIlxcXCJcXHJcXG4gICAgICAgICBkPVxcXCJNIDIyLjExOCA0NC4yMzYgQyA5LjkyMiA0NC4yMzYgMCAzNC4zMTQgMCAyMi4xMTkgQyAwIDkuOTIzIDkuOTIyIDAgMjIuMTE4IDAgcyAyMi4xMTggOS45MjMgMjIuMTE4IDIyLjExOSBDIDQ0LjIzNiAzNC4zMTQgMzQuMzE0IDQ0LjIzNiAyMi4xMTggNDQuMjM2IFogTSAyMi4xMTggMS41IEMgMTAuNzUgMS41IDEuNSAxMC43NSAxLjUgMjIuMTE5IHMgOS4yNSAyMC42MTcgMjAuNjE4IDIwLjYxNyBzIDIwLjYxOCAtOS4yNDggMjAuNjE4IC0yMC42MTcgUyAzMy40ODYgMS41IDIyLjExOCAxLjUgWlxcXCJcXHJcXG4gICAgICAgICBpZD1cXFwicGF0aDdcXFwiIC8+PGdcXHJcXG4gICAgICAgICBpZD1cXFwiZzlcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgICAgIGZpbGw9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgIGN4PVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICAgICAgICBjeT1cXFwiMjIuNDM4XFxcIlxcclxcbiAgICAgICAgICAgcj1cXFwiMS40MVxcXCJcXHJcXG4gICAgICAgICAgIGlkPVxcXCJjaXJjbGUxMVxcXCIgLz48cGF0aFxcclxcbiAgICAgICAgICAgZmlsbD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgZD1cXFwiTSAyMi4xMTggMjQuMDk4IGMgLTAuOTE2IDAgLTEuNjYgLTAuNzQ0IC0xLjY2IC0xLjY2IGMgMCAtMC45MTUgMC43NDUgLTEuNjYgMS42NiAtMS42NiBzIDEuNjU5IDAuNzQ1IDEuNjU5IDEuNjYgQyAyMy43NzcgMjMuMzU0IDIzLjAzNCAyNC4wOTggMjIuMTE4IDI0LjA5OCBaIE0gMjIuMTE4IDIxLjI3NyBjIC0wLjY0IDAgLTEuMTYgMC41MjEgLTEuMTYgMS4xNiBzIDAuNTIxIDEuMTYxIDEuMTYgMS4xNjEgYyAwLjYzOSAwIDEuMTU5IC0wLjUyMSAxLjE1OSAtMS4xNjEgUyAyMi43NTggMjEuMjc3IDIyLjExOCAyMS4yNzcgWlxcXCJcXHJcXG4gICAgICAgICAgIGlkPVxcXCJwYXRoMTNcXFwiIC8+PC9nPjxnXFxyXFxuICAgICAgICAgaWQ9XFxcImcxNVxcXCI+PHBhdGhcXHJcXG4gICAgICAgICAgIGZpbGw9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgIGQ9XFxcIk0gMjIuMTE4IDMyLjQyIGMgLTAuNiAwIC0xLjIwOCAtMC4wNjEgLTEuODYgLTAuMTgyIGMgLTAuNDQ2IC0wLjA2MiAtMC44MyAtMC40NDQgLTAuODk4IC0wLjkyNiBsIC0wLjM1NyAtMS44MzggYyAtMC40NjEgLTAuMjA3IC0wLjg5NiAtMC40NTkgLTEuMjg3IC0wLjc0NCBsIC0xLjc5OCAwLjYyMyBjIC0wLjA4NyAwLjA0MSAtMC4yMzMgMC4wNyAtMC4zODEgMC4wNyBjIC0wLjMxNyAwIC0wLjYyMiAtMC4xNDYgLTAuODM3IC0wLjM5OCBjIC0wLjgzNiAtMC45NTIgLTEuNDgyIC0yLjA3NCAtMS44NjIgLTMuMjMzIGMgLTAuMTgzIC0wLjQxOCAtMC4wMjMgLTAuOTc0IDAuNDAzIC0xLjI1NyBsIDEuMzU4IC0xLjE4NiBjIC0wLjAyMyAtMC4yMyAtMC4wMzUgLTAuNDc5IC0wLjAzNSAtMC43NTIgYyAwIC0wLjI3MSAwLjAxMSAtMC41MiAwLjAzNSAtMC43NSBsIC0xLjQzNSAtMS4yNDUgYyAtMC4zNSAtMC4yMjYgLTAuNTEgLTAuNzggLTAuMzAzIC0xLjI2MiBjIDAuMzU2IC0xLjA5OCAxLjAwMyAtMi4yMTkgMS44NDcgLTMuMTgxIGMgMC4yOTkgLTAuMzU1IDAuODIyIC0wLjQ4OCAxLjI2MSAtMC4yOTggbCAxLjc0NiAwLjYwMyBjIDAuMzkgLTAuMjg0IDAuODI1IC0wLjUzNyAxLjI4NyAtMC43NDUgbCAwLjM2NCAtMS44NzQgYyAwLjA2MyAtMC40NDcgMC40NDkgLTAuODMgMC45MzIgLTAuODk0IGMgMS4xMjUgLTAuMjM0IDIuNDY1IC0wLjI0MyAzLjY5MyAwLjAwOSBjIDAuNDMyIDAuMDU1IDAuODE3IDAuNDM4IDAuODg2IDAuOTIxIGwgMC4zNTcgMS44MzggYyAwLjQ0NyAwLjIwNCAwLjg3NSAwLjQ1MyAxLjI4MyAwLjc0NiBsIDEuODAzIC0wLjYyNCBjIDAuMDg3IC0wLjA0IDAuMjMyIC0wLjA3IDAuMzgxIC0wLjA3IGMgMC4zMTggMCAwLjYyNCAwLjE0NiAwLjgzOCAwLjQwMSBjIDAuODM0IDAuOTQ5IDEuNDggMi4wNyAxLjg2MSAzLjIzIGMgMC4xODMgMC40MTkgMC4wMjIgMC45NzQgLTAuNDAzIDEuMjU4IGwgLTEuMzU4IDEuMTg1IGMgMC4wMjIgMC4yMzIgMC4wMzQgMC40OCAwLjAzNCAwLjc1MiBzIC0wLjAxMSAwLjUyIC0wLjAzNCAwLjc1IGwgMS40MzQgMS4yNDUgYyAwLjM1MSAwLjIyNiAwLjUxMSAwLjc4IDAuMzA0IDEuMjYxIGMgLTAuMzU2IDEuMDk4IC0xLjAwMiAyLjIyIC0xLjg0NyAzLjE4MiBjIC0wLjMwMyAwLjM1NyAtMC44MjUgMC40ODYgLTEuMjYyIDAuMjk5IGwgLTEuNzUgLTAuNjA0IGMgLTAuNDA2IDAuMjkzIC0wLjgzNiAwLjU0MSAtMS4yODEgMC43NDYgbCAtMC4zNjQgMS44NzMgYyAtMC4wNjIgMC40NDQgLTAuNDQ2IDAuODI3IC0wLjkyNyAwLjg5NiBDIDIzLjMyNyAzMi4zNTkgMjIuNzE4IDMyLjQyIDIyLjExOCAzMi40MiBaIE0gMjAuNzg5IDMwLjgwOSBjIDAuOTYgMC4xNTIgMS43MzggMC4xNDYgMi42NiAwIGwgMC4zOSAtMi4wMTIgYyAwLjA1IC0wLjI1NCAwLjIyNiAtMC40NjQgMC40NjYgLTAuNTU3IGMgMC41NyAtMC4yMjEgMS4xMTEgLTAuNTM1IDEuNjA3IC0wLjkzNiBjIDAuMjAxIC0wLjE2MiAwLjQ3MiAtMC4yMDcgMC43MTYgLTAuMTI1IGwgMS45MzggMC42NzIgYyAwLjU4IC0wLjcwNSAxLjAzMyAtMS40OSAxLjMzIC0yLjMwMSBsIC0xLjU0OSAtMS4zMzcgYyAtMC4yMDEgLTAuMTc0IC0wLjI5NSAtMC40NDIgLTAuMjQ2IC0wLjcwMyBjIDAuMDQ3IC0wLjI1OSAwLjA3IC0wLjU1OCAwLjA3IC0wLjkxNCBzIC0wLjAyMyAtMC42NTQgLTAuMDcgLTAuOTEzIGMgLTAuMDUgLTAuMjYxIDAuMDQ1IC0wLjUyOSAwLjI0NiAtMC43MDMgbCAxLjU0NyAtMS4zNDIgYyAtMC4zMTMgLTAuODM4IC0wLjc2NCAtMS42MTEgLTEuMzMgLTIuMjk3IGwgLTEuOTM4IDAuNjczIGMgLTAuMjQ0IDAuMDgzIC0wLjUxNiAwLjAzNiAtMC43MTcgLTAuMTI1IGMgLTAuNDk1IC0wLjQgLTEuMDM1IC0wLjcxNSAtMS42MDUgLTAuOTM2IGMgLTAuMjQyIC0wLjA5MyAtMC40MTggLTAuMzAzIC0wLjQ2NyAtMC41NTcgbCAtMC4zOTEgLTIuMDE0IGMgLTAuOTI2IC0wLjE1NiAtMS43OTIgLTAuMTQ4IC0yLjY1OSAwIGwgLTAuMzkgMi4wMTQgYyAtMC4wNDkgMC4yNTQgLTAuMjI1IDAuNDY0IC0wLjQ2NiAwLjU1NyBjIC0wLjU5OCAwLjIzMSAtMS4xNDkgMC41NTIgLTEuNTk1IDAuOTI2IGMgLTAuMjAyIDAuMTcgLTAuNDc4IDAuMjIgLTAuNzI4IDAuMTM1IGwgLTEuOTM4IC0wLjY3MiBjIC0wLjU4MSAwLjcwNyAtMS4wMzQgMS40OTEgLTEuMzMgMi4zMDEgbCAxLjU0OSAxLjMzNyBjIDAuMjAxIDAuMTc1IDAuMjk0IDAuNDQyIDAuMjQ2IDAuNzA1IGMgLTAuMDQ4IDAuMjU1IC0wLjA3MSAwLjU1MyAtMC4wNzEgMC45MTEgcyAwLjAyMyAwLjY1NyAwLjA3MSAwLjkxMiBjIDAuMDQ5IDAuMjYzIC0wLjA0NCAwLjUzIC0wLjI0NiAwLjcwNSBsIC0xLjU0NyAxLjM0MyBjIDAuMzEzIDAuODM2IDAuNzYzIDEuNjA5IDEuMzI5IDIuMjk3IGwgMS45MzggLTAuNjc0IGMgMC4yNTEgLTAuMDg0IDAuNTI2IC0wLjAzMyAwLjcyOCAwLjEzNSBjIDAuNDQ2IDAuMzc1IDAuOTk4IDAuNjkzIDEuNTk1IDAuOTI2IGMgMC4yNDEgMC4wOTMgMC40MTcgMC4zMDMgMC40NjYgMC41NTcgTCAyMC43ODkgMzAuODA5IFpcXFwiXFxyXFxuICAgICAgICAgICBpZD1cXFwicGF0aDE3XFxcIiAvPjwvZz48L2c+PC9nPjxnXFxyXFxuICAgICBpZD1cXFwiZzE5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ3XFxcIiAvPjwvc3ZnPlwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgY3JlYXRlUmVzaXplUmVhY3RvciA9IHJlcXVpcmUoJy4vcmVzaXplcmVhY3RvcicpLlJlc2l6ZVJlYWN0b3I7XHJcblxyXG5mdW5jdGlvbiBpc0NvbnRhaW5lck9mKGVsZW1lbnQpIHtcclxuICAgIHZhciBjb250YWluZXJzID0gZWxlbWVudC5jb250YWluZXJzIHx8IFtdO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIC0xICE9PSBjb250YWluZXJzLmluZGV4T2YoZWxlbWVudC5nZXQoJ3R5cGUnKSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtYmVkZGFibGUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gZnVsbHlDb250YWluZWQocGFyZW50KSB7XHJcbiAgICAgICAgdmFyIGJib3ggPSBlbGVtZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgcGFkZGluZyA9IHBhcmVudC5wYWRkaW5nLFxyXG4gICAgICAgICAgICBwYmJveCA9IHBhcmVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSksXHJcbiAgICAgICAgICAgIHBpbnRlcm5hbCA9IGpvaW50LmcucmVjdChcclxuICAgICAgICAgICAgICAgIHBiYm94LnggKyBwYWRkaW5nLmxlZnQsXHJcbiAgICAgICAgICAgICAgICBwYmJveC55ICsgcGFkZGluZy50b3AsXHJcbiAgICAgICAgICAgICAgICBwYmJveC53aWR0aCAtIHBhZGRpbmcubGVmdCAtIHBhZGRpbmcucmlnaHQsXHJcbiAgICAgICAgICAgICAgICBwYmJveC5oZWlnaHQgLSBwYWRkaW5nLnRvcCAtIHBhZGRpbmcuYm90dG9tXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5pZCAhPT0gZWxlbWVudC5pZCAmJiBwaW50ZXJuYWwuY29udGFpbnNSZWN0KGJib3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGVtZW50LmZ1bGx5Q29udGFpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bGx5Q29udGFpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVtYmVkZGluZ1JlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVtYmVkZGluZ1JlYWN0b3IpKSB7IHJldHVybiBuZXcgRW1iZWRkaW5nUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcblxyXG4gICAgdmFyIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbjtcclxuXHJcbiAgICBwYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChjZWxsVmlldywgZXZ0LCB4LCB5KSB7XHJcbiAgICAgICAgXy5ub29wKGV2dCwgeCwgeSk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjZWxsVmlldy5tb2RlbDtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNMaW5rKCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBlbGVtZW50LmdldCgncG9zaXRpb24nKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC50b0Zyb250KHtkZWVwOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIG1vZGVsLnN0YXJ0QmF0Y2goJ3RvLWZyb250Jyk7XHJcbiAgICAgICAgXy5pbnZva2UobW9kZWwuZ2V0TGlua3MoKSwgJ3RvRnJvbnQnKTtcclxuICAgICAgICBtb2RlbC5zdG9wQmF0Y2goJ3RvLWZyb250Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnQoZWxlbWVudCwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcCh4LCB5KTtcclxuICAgICAgICB2YXIgZWxlbWVudHNCZWxvdyA9IG1vZGVsLmZpbmRNb2RlbHNJbkFyZWEoZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSkpO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudHNCZWxvdy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF8uY2hhaW4oZWxlbWVudHNCZWxvdylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXNDb250YWluZXJPZihlbGVtZW50KSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXNFbWJlZGRhYmxlKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgLnNvcnRCeShfLm1ldGhvZCgnZ2V0JywgJ3onKSlcclxuICAgICAgICAgICAgICAgIC5sYXN0KClcclxuICAgICAgICAgICAgICAgIC52YWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlVG8oZWxlbWVudCwgeCwgeSkge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IGVsZW1lbnQucG9zaXRpb24oKTtcclxuICAgICAgICBlbGVtZW50LnRyYW5zbGF0ZSh4IC0gcG9zaXRpb24ueCwgeSAtIHBvc2l0aW9uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcGVyLm9uKCdjZWxsOnBvaW50ZXJ1cCcsIGZ1bmN0aW9uIChjZWxsVmlldywgZXZ0LCB4LCB5KSB7XHJcbiAgICAgICAgXy5ub29wKGV2dCwgeCwgeSk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjZWxsVmlldy5tb2RlbCxcclxuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBlbGVtZW50LmdldCgncG9zaXRpb24nKSxcclxuICAgICAgICAgICAgb2xkcGFyZW50LFxyXG4gICAgICAgICAgICBuZXdwYXJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmlzTGluaygpKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAobmV3UG9zaXRpb24ueCA9PT0gc3RhcnRQb3NpdGlvbi54ICYmIG5ld1Bvc2l0aW9uLnkgPT09IHN0YXJ0UG9zaXRpb24ueSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgIG1vdmVUbyhlbGVtZW50LCBzdGFydFBvc2l0aW9uLngsIHN0YXJ0UG9zaXRpb24ueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXBhcmVudCgpIHtcclxuICAgICAgICAgICAgXy5lYWNoKFxyXG4gICAgICAgICAgICAgICAgbW9kZWwuZ2V0Q29ubmVjdGVkTGlua3MoZWxlbWVudCwge2RlZXA6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChsaW5rKSB7IGxpbmsucmVwYXJlbnQoKTsgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3cGFyZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQsIHgsIHkpO1xyXG4gICAgICAgIGlmICghbmV3cGFyZW50ICYmIGVsZW1lbnQucmVxdWlyZUVtYmVkZGluZykge1xyXG4gICAgICAgICAgICBhYm9ydCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbGRwYXJlbnQgPSBtb2RlbC5nZXRDZWxsKGVsZW1lbnQuZ2V0KCdwYXJlbnQnKSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG9sZHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZHBhcmVudC5pZCAhPT0gbmV3cGFyZW50LmlkICYmIGVsZW1lbnQuZ2V0KCdmaXhlZFBhcmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkcGFyZW50LnVuZW1iZWQoZWxlbWVudCwge3JlcGFyZW50aW5nOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3cGFyZW50LmVtYmVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdwYXJlbnQuZW1iZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICByZXBhcmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG9sZHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0KCdmaXhlZFBhcmVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkcGFyZW50LnVuZW1iZWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGVsLm9uKCdhZGQnLCBmdW5jdGlvbiAoY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmlzTGluaygpKSB7IHJldHVybiBjZWxsLmdldCgncGFyZW50JykgfHwgY2VsbC5yZXBhcmVudCgpOyB9XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjZWxsLFxyXG4gICAgICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICAgICAgcGFyZW50O1xyXG4gICAgICAgIGlmIChlbGVtZW50LmdldCgncGFyZW50JykpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gbW9kZWwuZ2V0Q2VsbChlbGVtZW50LmdldCgncGFyZW50JykpO1xyXG4gICAgICAgICAgICBwYXJlbnQudW5lbWJlZChlbGVtZW50LCB7cmVwYXJlbnRpbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgcGFyZW50LmVtYmVkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc2l0aW9uID0gZWxlbWVudC5nZXQoJ3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgcGFyZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50LmVtYmVkKGVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnJlcXVpcmVFbWJlZGRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF8uZGVmZXIoZnVuY3Rpb24gKCkgeyBlbGVtZW50LnJlbW92ZSgpOyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0KCdwYXJlbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnRzLkVtYmVkZGluZ1JlYWN0b3IgPSBFbWJlZGRpbmdSZWFjdG9yO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGJhY2tib25lID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ0JhY2tib25lJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydCYWNrYm9uZSddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgd2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ3dpbmRvdyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnd2luZG93J10gOiBudWxsKSxcclxuICAgIGNyZWF0ZU1hcCA9IHJlcXVpcmUoJy4vbWFwJykuTWFwLFxyXG4gICAgY3JlYXRlSXRlbURyYWdnZXIgPSByZXF1aXJlKCcuL2l0ZW1kcmFnZ2VyJykuSXRlbURyYWdnZXIsXHJcbiAgICBjcmVhdGVQYW5SZWFjdG9yID0gcmVxdWlyZSgnLi9wYW5yZWFjdG9yJykuUGFuUmVhY3RvcixcclxuICAgIGNyZWF0ZVpvb21SZWFjdG9yID0gcmVxdWlyZSgnLi96b29tcmVhY3RvcicpLlpvb21SZWFjdG9yLFxyXG4gICAgY3JlYXRlTWFuaXB1bGF0aW9uUmVhY3RvciA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0aW9ucmVhY3RvcicpLk1hbmlwdWxhdGlvblJlYWN0b3IsXHJcbiAgICBjcmVhdGVFbWJlZGRpbmdSZWFjdG9yID0gcmVxdWlyZSgnLi9lbWJlZGRpbmdyZWFjdG9yJykuRW1iZWRkaW5nUmVhY3RvcixcclxuICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSByZXF1aXJlKCcuL2xpbmtjb25uZWN0aW9ucG9pbnQnKS5saW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgdmFsaWRhdGVDb25uZWN0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0ZWNvbm5lY3Rpb24nKS52YWxpZGF0ZUNvbm5lY3Rpb247XHJcblxyXG5mdW5jdGlvbiBCb2FyZChvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQm9hcmQpKSB7IHJldHVybiBuZXcgQm9hcmQob3B0aW9ucyk7IH1cclxuICAgIF8uZXh0ZW5kKHRoaXMsIGJhY2tib25lLkV2ZW50cyk7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubWFuaXB1bGF0b3JzIHx8IHR5cGVvZiBvcHRpb25zLm1hbmlwdWxhdG9ycyAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtYW5pcHVsYXRvcnMgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdExpbmsgfHwgdHlwZW9mIG9wdGlvbnMuZGVmYXVsdExpbmsgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdkZWZhdWx0TGluayBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIGdyaWRTaXplID0gMTAsXHJcbiAgICAgICAgZGVmYXVsdExpbmsgPSBvcHRpb25zLmRlZmF1bHRMaW5rLFxyXG4gICAgICAgIHBhcGVyID0gbmV3IGpvaW50LmRpYS5QYXBlcih7XHJcbiAgICAgICAgICAgIGVsOiBlbCxcclxuICAgICAgICAgICAgd2lkdGg6IGVsLndpZHRoKCksXHJcbiAgICAgICAgICAgIGhlaWdodDogZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcclxuICAgICAgICAgICAgZ3JpZFNpemU6IGdyaWRTaXplLFxyXG4gICAgICAgICAgICBkZWZhdWx0TGluazogZGVmYXVsdExpbmssXHJcbiAgICAgICAgICAgIG11bHRpTGlua3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgICAgICBsaW5rUGlubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlQ29ubmVjdGlvbjogdmFsaWRhdGVDb25uZWN0aW9uLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogIW9wdGlvbnMucmVhZG9ubHlcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYXAgPSBjcmVhdGVNYXAoe1xyXG4gICAgICAgICAgICBwYXBlcjogcGFwZXIsXHJcbiAgICAgICAgICAgIGVsOiBlbCxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgem9vbVJlYWN0b3IgPSBjcmVhdGVab29tUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIG1pblNjYWxlOiBvcHRpb25zLm1pblNjYWxlIHx8IDAuMDEsXHJcbiAgICAgICAgICAgIG1heFNjYWxlOiBvcHRpb25zLm1heFNjYWxlIHx8IDJcclxuICAgICAgICB9KSxcclxuICAgICAgICBtYW5pcHVsYXRpb25SZWFjdG9yID0gY3JlYXRlTWFuaXB1bGF0aW9uUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIGdyaWRTaXplOiBncmlkU2l6ZSxcclxuICAgICAgICAgICAgYWN0aW9uczogb3B0aW9ucy5tYW5pcHVsYXRvcnNcclxuICAgICAgICB9KSxcclxuICAgICAgICBlbWJlZGRpbmdSZWFjdG9yID0gY3JlYXRlRW1iZWRkaW5nUmVhY3Rvcih7XHJcbiAgICAgICAgICAgIHBhcGVyOiBwYXBlcixcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgXy5ub29wKGVtYmVkZGluZ1JlYWN0b3IpO1xyXG5cclxuICAgIG1hbmlwdWxhdGlvblJlYWN0b3Iub24oJ2FsbCcsIHRoaXMudHJpZ2dlciwgdGhpcyk7XHJcblxyXG4gICAgcGFwZXIub24oJ2FsbCcsIHRoaXMudHJpZ2dlciwgdGhpcyk7XHJcblxyXG4gICAgcGFwZXIub24oJ2JsYW5rOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGV2dCwgeCwgeSkge1xyXG4gICAgICAgIF8ubm9vcChldnQpO1xyXG4gICAgICAgIGNyZWF0ZVBhblJlYWN0b3Ioe3BhcGVyOiBwYXBlciwgZWw6IGVsLCB4OiB4LCB5OiB5fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3cG9ydCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IGVsLm9mZnNldCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgdG9wTGVmdCA9IGpvaW50LmcucG9pbnQobGVmdCwgdG9wKSxcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBqb2ludC5nLnBvaW50KGxlZnQgKyB3aWR0aCwgdG9wICsgaGVpZ2h0KSxcclxuICAgICAgICAgICAgbWluID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXggPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoYm90dG9tUmlnaHQpO1xyXG4gICAgICAgIG1hcC5zZXRWaWV3cG9ydCh7eDogbWluLngsIHk6IG1pbi55LCB3aWR0aDogbWF4LnggLSBtaW4ueCwgaGVpZ2h0OiBtYXgueSAtIG1pbi55fSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGFwZXIuc2V0RGltZW5zaW9ucyhlbC53aWR0aCgpLCBlbC5oZWlnaHQoKSk7XHJcbiAgICAgICAgdXBkYXRlVmlld3BvcnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBhcGVyLm9uKCd0cmFuc2xhdGUnLCB1cGRhdGVWaWV3cG9ydCk7XHJcbiAgICBwYXBlci5vbignc2NhbGUnLCB1cGRhdGVWaWV3cG9ydCk7XHJcbiAgICBtb2RlbC5vbmNlKCdhZGQnLCB1cGRhdGVWaWV3cG9ydCk7XHJcblxyXG4gICAgc2VsZi56b29tRSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB6b29tUmVhY3Rvci56b29tRSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnBhcGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXBlcjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5kb3dubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXAuZG93bmxvYWQoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5jcmVhdGVJdGVtRHJhZ2dlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1EcmFnZ2VyKHtcclxuICAgICAgICAgICAgcGFwZXI6IHBhcGVyLFxyXG4gICAgICAgICAgICBlbDogb3B0aW9ucy5lbCxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogZ3JpZFNpemUsXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzOiBvcHRpb25zLmNyZWF0ZUVsZW1lbnRzLFxyXG4gICAgICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBvcHRpb25zLm1pbkhlaWdodCxcclxuICAgICAgICAgICAgcGFkZGluZzogb3B0aW9ucy5wYWRkaW5nLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnRzLkJvYXJkID0gQm9hcmQ7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgYmFja2JvbmUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snQmFja2JvbmUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0JhY2tib25lJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCksXHJcbiAgICBkb2N1bWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydkb2N1bWVudCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnZG9jdW1lbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gY2xvbmUobW9kZWwsIGl0ZW1zKSB7XHJcbiAgICB2YXIgbWFwcGluZyA9IG1vZGVsLmNsb25lQ2VsbHMoaXRlbXMpO1xyXG4gICAgcmV0dXJuIF8ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gbWFwcGluZ1tpLmlkXTsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBJdGVtcyhpdGVtcywgc2l6ZSwgbWluSGVpZ2h0LCBwYWRkaW5nKSB7XHJcbiAgICB2YXIgYmJveCA9IGpvaW50LmRpYS5HcmFwaC5wcm90b3R5cGUuZ2V0QkJveChpdGVtcywge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICBtYXhzaXplID0gTWF0aC5tYXgoYmJveC53aWR0aCwgYmJveC5oZWlnaHQpICsgcGFkZGluZyAqIDIsXHJcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBtYXhzaXplIC8gc2l6ZSksXHJcbiAgICAgICAgYWN0dWFsd2lkdGggPSBzaXplICogc2NhbGUsXHJcbiAgICAgICAgYWN0dWFsaGVpZ2h0ID0gTWF0aC5tYXgoYmJveC5oZWlnaHQgKyBwYWRkaW5nICogMiwgbWluSGVpZ2h0ICogc2NhbGUpLFxyXG4gICAgICAgIGxlZnQgPSAoYWN0dWFsd2lkdGggLSBiYm94LndpZHRoKSAvIDIsXHJcbiAgICAgICAgdG9wID0gKGFjdHVhbGhlaWdodCAtIGJib3guaGVpZ2h0KSAvIDIsXHJcbiAgICAgICAgY29udGFpbmVySXRlbSA9IG5ldyBqb2ludC5zaGFwZXMuYmFzaWMuUmVjdCh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IGJib3gueCAtIGxlZnQsIHk6IGJib3gueSAtIHRvcH0sXHJcbiAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IGFjdHVhbHdpZHRoLCBoZWlnaHQ6IGFjdHVhbGhlaWdodH0sXHJcbiAgICAgICAgICAgIGF0dHJzOiB7IHJlY3Q6IHsgZmlsbDogJ3RyYW5zcGFyZW50Jywgc3Ryb2tlOiAndHJhbnNwYXJlbnQnIH0gfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXJJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVycyhwYXBlciwgaXRlbXMpIHtcclxuICAgIF8uZWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBwYXBlci5maW5kVmlld0J5TW9kZWwoaXRlbSkuJGVsLmNzcygncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEl0ZW1EcmFnZ2VyKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJdGVtRHJhZ2dlcikpIHsgcmV0dXJuIG5ldyBJdGVtRHJhZ2dlcihvcHRpb25zKTsgfVxyXG4gICAgXy5leHRlbmQodGhpcywgYmFja2JvbmUuRXZlbnRzKTtcclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuY3JlYXRlRWxlbWVudHMgfHwgdHlwZW9mIG9wdGlvbnMuY3JlYXRlRWxlbWVudHMgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVFbGVtZW50cyBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50IHx8IHR5cGVvZiBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdsaW5rQ29ubmVjdGlvblBvaW50IG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmVsKSB7IHRocm93IG5ldyBFcnJvcignZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbnMnKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmdyaWRTaXplICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ2dyaWRTaXplIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5ncmlkU2l6ZSA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBjYW5ub3QgYmUgbGVzcyB0aGFuIHplcm8nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBhZGRpbmcgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcigncGFkZGluZyBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMucGFkZGluZyA8IDApIHsgdGhyb3cgbmV3IEVycm9yKCdwYWRkaW5nIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud2lkdGggIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignd2lkdGggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLndpZHRoIDwgMiAqIG9wdGlvbnMucGFkZGluZykgeyB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybyAob3IgMiB0aW1lIHBhZGRpbmcpJyk7IH1cclxuICAgIGlmIChvcHRpb25zLm1pbkhlaWdodCA8IDIgKiBvcHRpb25zLnBhZGRpbmcpIHsgdGhyb3cgbmV3IEVycm9yKCdtaW5IZWlnaHQgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvIChvciAyIHRpbWUgcGFkZGluZyknKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBncmlkU2l6ZSA9IG9wdGlvbnMuZ3JpZFNpemUsXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHMgPSBvcHRpb25zLmNyZWF0ZUVsZW1lbnRzLFxyXG4gICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcclxuICAgICAgICBtaW5IZWlnaHQgPSBvcHRpb25zLm1pbkhlaWdodCxcclxuICAgICAgICBwYXBlcldpZHRoID0gb3B0aW9ucy53aWR0aCAtIHBhZGRpbmcgKiAyLFxyXG4gICAgICAgIG92ZXJsYXlpdGVtcyA9IGNyZWF0ZUVsZW1lbnRzKCksXHJcbiAgICAgICAgbWFpbml0ZW0gPSB3cmFwSXRlbXMob3ZlcmxheWl0ZW1zLCBwYXBlcldpZHRoLCBtaW5IZWlnaHQsIGdyaWRTaXplKSxcclxuICAgICAgICBtYWlucG9zaXRpb24gPSBtYWluaXRlbS5wb3NpdGlvbigpLFxyXG4gICAgICAgIHNpemUgPSBtYWluaXRlbS5nZXQoJ3NpemUnKSxcclxuICAgICAgICBwcmV2aWV3ID0gKGZ1bmN0aW9uICgpIHsgdmFyIGNvbnRhaW5lciA9ICQocmVxdWlyZSgnLi9pdGVtZHJhZ2dlci5odG1sJykpLmNzcygncGFkZGluZycsIHBhZGRpbmcpOyAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZChjb250YWluZXIpOyByZXR1cm4gY29udGFpbmVyOyB9KCkpLFxyXG4gICAgICAgIGJhc2VTY2FsZSA9IE1hdGgubWluKDEsIHBhcGVyV2lkdGggLyBzaXplLndpZHRoKSxcclxuICAgICAgICBwYXBlckhlaWdodCA9IHNpemUuaGVpZ2h0ICogYmFzZVNjYWxlLFxyXG4gICAgICAgIG92ZXJsYXltb2RlbCA9IG5ldyBqb2ludC5kaWEuR3JhcGgoKSxcclxuICAgICAgICBvdmVybGF5cGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IHByZXZpZXcsXHJcbiAgICAgICAgICAgIHdpZHRoOiBwYXBlcldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHBhcGVySGVpZ2h0LFxyXG4gICAgICAgICAgICBtb2RlbDogb3ZlcmxheW1vZGVsLFxyXG4gICAgICAgICAgICBsaW5rQ29ubmVjdGlvblBvaW50OiBsaW5rQ29ubmVjdGlvblBvaW50LFxyXG4gICAgICAgICAgICBncmlkU2l6ZTogZ3JpZFNpemVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5cGFwZXIuc2NhbGUoYmFzZVNjYWxlLCBiYXNlU2NhbGUpO1xyXG4gICAgb3ZlcmxheW1vZGVsLmFkZENlbGwobWFpbml0ZW0pO1xyXG4gICAgb3ZlcmxheW1vZGVsLmFkZENlbGxzKG92ZXJsYXlpdGVtcyk7XHJcbiAgICAvL2ZvciByZW5kZXJpbmdcclxuICAgIGVsLmFwcGVuZChwcmV2aWV3KTtcclxuICAgIC8vcmVtb3ZlIGhhbmRsZXJzXHJcbiAgICByZW1vdmVIYW5kbGVycyhvdmVybGF5cGFwZXIsIG92ZXJsYXlpdGVtcyk7XHJcbiAgICBfLmVhY2gob3ZlcmxheWl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLmdldCgncGFyZW50JykpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgbWFpbml0ZW0uZW1iZWQoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIG1haW5pdGVtLnRyYW5zbGF0ZSgtbWFpbnBvc2l0aW9uLngsIC1tYWlucG9zaXRpb24ueSk7XHJcblxyXG4gICAgb3ZlcmxheXBhcGVyLm9uKCdjZWxsOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGNlbGxWaWV3LCBlLCB4LCB5KSB7XHJcbiAgICAgICAgXy5ub29wKGNlbGxWaWV3KTtcclxuICAgICAgICB2YXIgb3ZlcmxheSA9ICQocmVxdWlyZSgnLi9vdmVybGF5Lmh0bWwnKSksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICQocGFwZXIuZWwpLFxyXG4gICAgICAgICAgICBzcGFjZXIgPSAkKCc8ZGl2PjwvZGl2PicpLmNzcygnaGVpZ2h0JywgcHJldmlldy5oZWlnaHQoKSArIDIgKiBwYWRkaW5nKSxcclxuICAgICAgICAgICAgbGVmdCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0b3AgPSBjb250YWluZXIub2Zmc2V0KCkudG9wLFxyXG4gICAgICAgICAgICB3aWR0aCA9IGNvbnRhaW5lci53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHRvcExlZnQgPSBqb2ludC5nLnBvaW50KGxlZnQsIHRvcCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0ID0gam9pbnQuZy5wb2ludChsZWZ0ICsgd2lkdGgsIHRvcCArIGhlaWdodCksXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBqb2ludC5nLnBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSxcclxuICAgICAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQodG9wTGVmdCksXHJcbiAgICAgICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KSxcclxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChjdXJyZW50KSxcclxuICAgICAgICAgICAgc2NhbGUgPSBqb2ludC5nLnBvaW50KHdpZHRoIC8gKG1heExvY2FsLnggLSBtaW5Mb2NhbC54KSwgaGVpZ2h0IC8gKG1heExvY2FsLnkgLSBtaW5Mb2NhbC55KSksXHJcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBqb2ludC5nLnBvaW50KGpvaW50Lmcuc25hcFRvR3JpZChzdGFydFBvaW50LnggLSB4LCBncmlkU2l6ZSksIGpvaW50Lmcuc25hcFRvR3JpZChzdGFydFBvaW50LnkgLSB5LCBncmlkU2l6ZSkpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG92ZXJsYXkpO1xyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKHByZXZpZXcpO1xyXG4gICAgICAgIGVsLmFwcGVuZChzcGFjZXIpO1xyXG4gICAgICAgIHByZXZpZXcuY3NzKCdwYWRkaW5nJywgMCk7XHJcblxyXG4gICAgICAgIG92ZXJsYXlwYXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIG92ZXJsYXlwYXBlci5zY2FsZShzY2FsZS54LCBzY2FsZS55KTtcclxuICAgICAgICBvdmVybGF5cGFwZXIuc2V0T3JpZ2luKC1taW5Mb2NhbC54ICogc2NhbGUueCwgLW1pbkxvY2FsLnkgKiBzY2FsZS55KTtcclxuICAgICAgICBtYWluaXRlbS50cmFuc2xhdGUoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBvdmVybGF5cGFwZXIub25jZSgnY2VsbDpwb2ludGVybW92ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbml0ZW0udHJhbnNsYXRlKC1zdGFydFBvc2l0aW9uLngsIC1zdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvdmVybGF5cGFwZXIub24oJ2NlbGw6cG9pbnRlcnVwJywgZnVuY3Rpb24gcG9pbnRlcnVwKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBtYWluaXRlbS5wb3NpdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgbWFpbmlkID0gbWFpbml0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBpdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvcGl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheXRvcGl0ZW1zID0gXy5maWx0ZXIob3ZlcmxheWl0ZW1zLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5nZXQoJ3BhcmVudCcpID09PSBtYWluaWQ7IH0pO1xyXG4gICAgICAgICAgICBfLmVhY2gob3ZlcmxheXRvcGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkgeyBtYWluaXRlbS51bmVtYmVkKGl0ZW0pOyB9KTtcclxuICAgICAgICAgICAgaXRlbXMgPSBjbG9uZShvdmVybGF5bW9kZWwsIG92ZXJsYXlpdGVtcyk7XHJcbiAgICAgICAgICAgIHRvcGl0ZW1zID0gXy5maWx0ZXIoaXRlbXMsIGZ1bmN0aW9uIChpKSB7IHJldHVybiAhaS5nZXQoJ3BhcmVudCcpOyB9KTtcclxuICAgICAgICAgICAgbW9kZWwuYWRkQ2VsbHMoaXRlbXMpO1xyXG4gICAgICAgICAgICBfLmVhY2gob3ZlcmxheXRvcGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkgeyBtYWluaXRlbS5lbWJlZChpdGVtKTsgfSk7XHJcbiAgICAgICAgICAgIF8uZWFjaCh0b3BpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udG9Gcm9udCh7ZGVlcDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmQocHJldmlldyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHByZXZpZXcuY3NzKCdwYWRkaW5nJywgcGFkZGluZyk7XHJcblxyXG4gICAgICAgICAgICBtYWluaXRlbS50cmFuc2xhdGUoLXBvc2l0aW9uLngsIC1wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLnNldERpbWVuc2lvbnMocGFwZXJXaWR0aCwgcGFwZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICBvdmVybGF5cGFwZXIuc2NhbGUoYmFzZVNjYWxlLCBiYXNlU2NhbGUpO1xyXG4gICAgICAgICAgICBvdmVybGF5cGFwZXIuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgb3ZlcmxheXBhcGVyLm9mZignY2VsbDpwb2ludGVydXAnLCBwb2ludGVydXApO1xyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2RyYWc6ZW5kJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYudHJpZ2dlcignZHJhZzpzdGFydCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbkl0ZW1EcmFnZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlbURyYWdnZXIucHJvdG90eXBlKTtcclxuXHJcbmV4cG9ydHMuSXRlbURyYWdnZXIgPSBJdGVtRHJhZ2dlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj48L2Rpdj5cXHJcXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6MDsgcmlnaHQ6MDsgdG9wOiAwOyBib3R0b206IDA7IHotaW5kZXg6IDEwMDAwMDtcXFwiPjwvZGl2PlxcclxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcIlVURi04XFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/PlxcclxcbjxzdmdcXHJcXG4gICB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiXFxyXFxuICAgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCJcXHJcXG4gICB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiXFxyXFxuICAgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM2IDQ0LjIzNlxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICB3aWR0aD1cXFwiNDQuMjM2XFxcIlxcclxcbiAgIHk9XFxcIjBweFxcXCJcXHJcXG4gICB4PVxcXCIwcHhcXFwiXFxyXFxuICAgaWQ9XFxcIkNhcGFfMVxcXCJcXHJcXG4gICB2ZXJzaW9uPVxcXCIxLjFcXFwiPjxtZXRhZGF0YVxcclxcbiAgICAgaWQ9XFxcIm1ldGFkYXRhNTNcXFwiPjxyZGY6UkRGPjxjYzpXb3JrXFxyXFxuICAgICAgICAgcmRmOmFib3V0PVxcXCJcXFwiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlXFxyXFxuICAgICAgICAgICByZGY6cmVzb3VyY2U9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlXFxcIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmc1xcclxcbiAgICAgaWQ9XFxcImRlZnM1MVxcXCIgLz48Y2lyY2xlXFxyXFxuICAgICByPVxcXCIyMi4xMThcXFwiXFxyXFxuICAgICBjeT1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgY3g9XFxcIjIyLjExOFxcXCJcXHJcXG4gICAgIGlkPVxcXCJwYXRoNDE4MVxcXCJcXHJcXG4gICAgIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40MDAwMDAwMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlXFxcIiAvPjxwYXRoXFxyXFxuICAgICBpZD1cXFwicGF0aDdcXFwiXFxyXFxuICAgICBkPVxcXCJNIDIyLjExOCw0NC4yMzYgQyA5LjkyMiw0NC4yMzYgMCwzNC4zMTQgMCwyMi4xMTkgMCw5LjkyMyA5LjkyMiwwIDIyLjExOCwwIGMgMTIuMTk2LDAgMjIuMTE4LDkuOTIzIDIyLjExOCwyMi4xMTkgMCwxMi4xOTUgLTkuOTIyLDIyLjExNyAtMjIuMTE4LDIyLjExNyB6IG0gMCwtNDIuNzM2IEMgMTAuNzUsMS41IDEuNSwxMC43NSAxLjUsMjIuMTE5IGMgMCwxMS4zNjkgOS4yNSwyMC42MTcgMjAuNjE4LDIwLjYxNyAxMS4zNjgsMCAyMC42MTgsLTkuMjQ4IDIwLjYxOCwtMjAuNjE3IEMgNDIuNzM2LDEwLjc1IDMzLjQ4NiwxLjUgMjIuMTE4LDEuNSBaXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzE5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzNcXFwiXFxyXFxuICAgICB0cmFuc2Zvcm09XFxcIm1hdHJpeCgwLjA3ODkwODYzLC0wLjA3ODkwODYzLDAuMDc4OTA4NjMsMC4wNzg5MDg2MywwLjkwNDc2MTA3LDIyLjExODEyNClcXFwiPjxwYXRoXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNVxcXCJcXHJcXG4gICAgICAgZD1cXFwibSAyNjUuMTcxLDEyNS41NzcgLTgwLC04MCBjIC00Ljg4MSwtNC44ODEgLTEyLjc5NywtNC44ODEgLTE3LjY3OCwwIC00Ljg4Miw0Ljg4MiAtNC44ODIsMTIuNzk2IDAsMTcuNjc4IGwgNTguNjYxLDU4LjY2MSAtMjEzLjY1NCwwIGMgLTYuOTAzLDAgLTEyLjUsNS41OTcgLTEyLjUsMTIuNSAwLDYuOTAyIDUuNTk3LDEyLjUgMTIuNSwxMi41IGwgMjEzLjY1NCwwIC01OC42NTksNTguNjYxIGMgLTQuODgyLDQuODgyIC00Ljg4MiwxMi43OTYgMCwxNy42NzggMi40NCwyLjQzOSA1LjY0LDMuNjYxIDguODM5LDMuNjYxIDMuMTk5LDAgNi4zOTgsLTEuMjIyIDguODM5LC0zLjY2MSBsIDc5Ljk5OCwtODAgYyA0Ljg4MiwtNC44ODIgNC44ODIsLTEyLjc5NiAwLC0xNy42NzggelxcXCIgLz48L2c+PC9zdmc+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbnZhciBhbGxCb3JkZXJzID0ge3RvcDogdHJ1ZSwgbGVmdDogdHJ1ZSwgYm90dG9tOiB0cnVlLCByaWdodDogdHJ1ZX07XHJcblxyXG5mdW5jdGlvbiBmaXhCb3JkZXJzKGJvcmRlcnMpIHtcclxuICAgIGlmICghYm9yZGVycykgeyByZXR1cm4gYWxsQm9yZGVyczsgfVxyXG4gICAgaWYgKGJvcmRlcnMudG9wIHx8IGJvcmRlcnMubGVmdCB8fCBib3JkZXJzLmJvdHRvbSB8fCBib3JkZXJzLnJpZ2h0KSB7IHJldHVybiBib3JkZXJzOyB9XHJcbiAgICByZXR1cm4gYWxsQm9yZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gbmVhcmVzdFBvaW50T25Cb3JkZXIobWUsIG90aGVyLCBib3JkZXJzKSB7XHJcbiAgICBib3JkZXJzID0gZml4Qm9yZGVycyhib3JkZXJzKTtcclxuICAgIHZhciBsZWZ0ID0gICBib3JkZXJzLmxlZnQgICA/IE1hdGguYWJzKG1lLm9yaWdpbigpLnggLSBvdGhlci5vcmlnaW4oKS54KSA6IEluZmluaXR5LFxyXG4gICAgICAgIHRvcCA9ICAgIGJvcmRlcnMudG9wICAgID8gTWF0aC5hYnMobWUub3JpZ2luKCkueSAtIG90aGVyLm9yaWdpbigpLnkpIDogSW5maW5pdHksXHJcbiAgICAgICAgcmlnaHQgPSAgYm9yZGVycy5yaWdodCAgPyBNYXRoLmFicyhtZS5jb3JuZXIoKS54IC0gb3RoZXIuY29ybmVyKCkueCkgOiBJbmZpbml0eSxcclxuICAgICAgICBib3R0b20gPSBib3JkZXJzLmJvdHRvbSA/IE1hdGguYWJzKG1lLmNvcm5lcigpLnkgLSBvdGhlci5jb3JuZXIoKS55KSA6IEluZmluaXR5LFxyXG4gICAgICAgIG1pbiA9IE1hdGgubWluKGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSksXHJcbiAgICAgICAgY2VudGVyID0gbWUuY29udGFpbnNSZWN0KG90aGVyKSA/IG90aGVyLmNlbnRlcigpIDogbWUuY2VudGVyKCk7XHJcbiAgICBpZiAobWluID09PSB0b3ApIHsgICAgcmV0dXJuIGpvaW50LmcucG9pbnQoY2VudGVyLngsICAgICAgbWUub3JpZ2luKCkueSk7IH1cclxuICAgIGlmIChtaW4gPT09IGxlZnQpIHsgICByZXR1cm4gam9pbnQuZy5wb2ludChtZS5vcmlnaW4oKS54LCBjZW50ZXIueSk7IH1cclxuICAgIGlmIChtaW4gPT09IGJvdHRvbSkgeyByZXR1cm4gam9pbnQuZy5wb2ludChjZW50ZXIueCwgICAgICBtZS5jb3JuZXIoKS55KTsgfVxyXG4gICAgcmV0dXJuIGpvaW50LmcucG9pbnQobWUuY29ybmVyKCkueCwgY2VudGVyLnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJwZW5kaWN1bGFyKG1lLCBvdGhlcikge1xyXG4gICAgaWYgKG1lLmludGVyc2VjdChvdGhlcikpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB2YXIgbWluWCA9IE1hdGgubWF4KG1lLm9yaWdpbigpLngsIG90aGVyLm9yaWdpbigpLngpLFxyXG4gICAgICAgIG1heFggPSBNYXRoLm1pbihtZS5jb3JuZXIoKS54LCBvdGhlci5jb3JuZXIoKS54KSxcclxuICAgICAgICBtaW5ZID0gTWF0aC5tYXgobWUub3JpZ2luKCkueSwgb3RoZXIub3JpZ2luKCkueSksXHJcbiAgICAgICAgbWF4WSA9IE1hdGgubWluKG1lLmNvcm5lcigpLnksIG90aGVyLmNvcm5lcigpLnkpO1xyXG4gICAgaWYgKG1pblggPD0gbWF4WCkge1xyXG4gICAgICAgIHJldHVybiBtZS5wb2ludE5lYXJlc3RUb1BvaW50KGpvaW50LmcucG9pbnQoKG1pblggKyBtYXhYKSAvIDIsIG90aGVyLmNlbnRlcigpLnkpKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5ZIDw9IG1heFkpIHtcclxuICAgICAgICByZXR1cm4gbWUucG9pbnROZWFyZXN0VG9Qb2ludChqb2ludC5nLnBvaW50KG90aGVyLmNlbnRlcigpLngsIChtaW5ZICsgbWF4WSkgLyAyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgcG9pbnQpIHtcclxuICAgIGlmICghcG9pbnQpIHsgcmV0dXJuOyB9XHJcbiAgICBhbmdsZSA9IGpvaW50Lmcubm9ybWFsaXplQW5nbGUoYW5nbGUpO1xyXG4gICAgaWYgKGFuZ2xlICUgOTAgPT09IDApIHsgcmV0dXJuIHBvaW50OyB9XHJcbiAgICB2YXIgcmJib3ggPSBiYm94LmJib3goYW5nbGUpLFxyXG4gICAgICAgIGNlbnRlciA9IGJib3guY2VudGVyKCksXHJcbiAgICAgICAgcm9yaWdpbiA9IGJib3gub3JpZ2luKCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIHJ0b3BSaWdodCA9IGJib3gudG9wUmlnaHQoKS5yb3RhdGUoY2VudGVyLCBhbmdsZSksXHJcbiAgICAgICAgcmNvcm5lciA9IGJib3guY29ybmVyKCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIHJib3R0b21MZWZ0ID0gYmJveC5ib3R0b21MZWZ0KCkucm90YXRlKGNlbnRlciwgYW5nbGUpLFxyXG4gICAgICAgIGxlZnRMaW5lID0gam9pbnQuZy5saW5lKHJvcmlnaW4sIHJib3R0b21MZWZ0KSxcclxuICAgICAgICB0b3BMaW5lID0gam9pbnQuZy5saW5lKHJ0b3BSaWdodCwgcm9yaWdpbiksXHJcbiAgICAgICAgYm90dG9tdExpbmUgPSBqb2ludC5nLmxpbmUocmNvcm5lciwgcmJvdHRvbUxlZnQpLFxyXG4gICAgICAgIHJpZ2h0TGluZSA9IGpvaW50LmcubGluZShydG9wUmlnaHQsIHJjb3JuZXIpLFxyXG4gICAgICAgIGludGVyc2VjdGlvbkxpbmU7XHJcbiAgICBzd2l0Y2ggKHJiYm94LnNpZGVOZWFyZXN0VG9Qb2ludChwb2ludCkpIHtcclxuICAgIGNhc2UgXCJ0b3BcIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHBvaW50LngsIHJiYm94LmNvcm5lcigpLnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IGpvaW50LmcubGluZShwb2ludCwgam9pbnQuZy5wb2ludChyYmJveC5vcmlnaW4oKS54LCBwb2ludC55KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHJiYm94LmNvcm5lcigpLngsIHBvaW50LnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICBpbnRlcnNlY3Rpb25MaW5lID0gam9pbnQuZy5saW5lKHBvaW50LCBqb2ludC5nLnBvaW50KHBvaW50LngsIHJiYm94Lm9yaWdpbigpLnkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBfLmNoYWluKFtsZWZ0TGluZSwgdG9wTGluZSwgYm90dG9tdExpbmUsIHJpZ2h0TGluZV0pXHJcbiAgICAgICAgLm1hcChfLmJpbmQoaW50ZXJzZWN0aW9uTGluZS5pbnRlcnNlY3Rpb24sIGludGVyc2VjdGlvbkxpbmUpKVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgeyByZXR1cm4gcHJldmlvdXNWYWx1ZTsgfVxyXG4gICAgICAgICAgICBpZiAoIXByZXZpb3VzVmFsdWUpIHsgcmV0dXJuIGN1cnJlbnRWYWx1ZTsgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQuZGlzdGFuY2UocHJldmlvdXNWYWx1ZSkgPiBwb2ludC5kaXN0YW5jZShjdXJyZW50VmFsdWUpKSB7IHJldHVybiBjdXJyZW50VmFsdWU7IH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgfSkudmFsdWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlua0Nvbm5lY3Rpb25Qb2ludChsaW5rVmlldywgdmlldywgbWFnbmV0LCByZWZlcmVuY2UpIHtcclxuICAgIHZhciBlbGVtZW50ID0gdmlldy5tb2RlbCxcclxuICAgICAgICBkVGFyZ2V0Qm9yZGVycyxcclxuICAgICAgICBkVGFyZ2V0QW5nbGUgPSAwLFxyXG4gICAgICAgIGRUYXJnZXRCQm94ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmsgPSBsaW5rVmlldy5tb2RlbCxcclxuICAgICAgICAgICAgICAgIG90aGVyLFxyXG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSBsaW5rLmdldCgndmVydGljZXMnKSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGxpbmsuZ2V0KCdzb3VyY2UnKS5pZCxcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGxpbmsuZ2V0KCd0YXJnZXQnKS5pZDtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZlcnRpY2VzICYmIHZlcnRpY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9pbnQuZy5yZWN0KHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnksIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyID0gbGluay5nZXRUYXJnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZFRhcmdldEFuZ2xlID0gb3RoZXIuZ2V0KCdhbmdsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRUYXJnZXRCb3JkZXJzID0gb3RoZXIuZ2V0KCdib3JkZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyLmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNlcyAmJiB2ZXJ0aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvaW50LmcucmVjdCh2ZXJ0aWNlc1t2ZXJ0aWNlcy5sZW5ndGggLSAxXS54LCB2ZXJ0aWNlc1t2ZXJ0aWNlcy5sZW5ndGggLSAxXS55LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdGhlciA9IGxpbmsuZ2V0U291cmNlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRUYXJnZXRBbmdsZSA9IG90aGVyLmdldCgnYW5nbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkVGFyZ2V0Qm9yZGVycyA9IG90aGVyLmdldCgnYm9yZGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlci5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGpvaW50LmcucmVjdChyZWZlcmVuY2UueCwgcmVmZXJlbmNlLnksIDAsIDApO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0Q29ubmVjdGlvblBvaW50KGJib3gsIHRhcmdldEJCb3gsIGFuZ2xlLCB0YXJnZXRBbmdsZSkge1xyXG4gICAgICAgIHRhcmdldEJCb3ggPSB0YXJnZXRCQm94IHx8IGRUYXJnZXRCQm94O1xyXG4gICAgICAgIHRhcmdldEFuZ2xlID0gdGFyZ2V0QW5nbGUgfHwgZFRhcmdldEFuZ2xlO1xyXG4gICAgICAgIGFuZ2xlID0gYW5nbGUgfHwgZWxlbWVudC5nZXQoJ2FuZ2xlJyk7XHJcbiAgICAgICAgYmJveCA9IGJib3ggfHwgZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgdmFyIHJiYm94ID0gYmJveC5iYm94KGFuZ2xlKSxcclxuICAgICAgICAgICAgclRhcmdldEJCb3ggPSB0YXJnZXRCQm94O1xyXG4gICAgICAgIGlmIChyYmJveC5jb250YWluc1JlY3QoclRhcmdldEJCb3gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIG5lYXJlc3RQb2ludE9uQm9yZGVyKHJiYm94LCByVGFyZ2V0QkJveCwgZFRhcmdldEJvcmRlcnMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJUYXJnZXRCQm94LmNvbnRhaW5zUmVjdChyYmJveCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgbmVhcmVzdFBvaW50T25Cb3JkZXIocmJib3gsIHJUYXJnZXRCQm94LCBlbGVtZW50LmdldCgnYm9yZGVycycpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXhQb2ludEJ5QW5nbGUoYmJveCwgYW5nbGUsIHBlcnBlbmRpY3VsYXIocmJib3gsIHJUYXJnZXRCQm94KSkgfHxcclxuICAgICAgICAgICAgICAgIGJib3guaW50ZXJzZWN0aW9uV2l0aExpbmVGcm9tQ2VudGVyVG9Qb2ludCh0YXJnZXRCQm94LmNlbnRlcigpLCBhbmdsZSkgfHxcclxuICAgICAgICAgICAgICAgIGZpeFBvaW50QnlBbmdsZShiYm94LCBhbmdsZSwgcmJib3gucG9pbnROZWFyZXN0VG9Qb2ludCh0YXJnZXRCQm94LmNlbnRlcigpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmlldy5tb2RlbC5saW5rQ29ubmVjdGlvblBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHZpZXcubW9kZWwubGlua0Nvbm5lY3Rpb25Qb2ludChsaW5rVmlldywgdmlldywgbWFnbmV0LCByZWZlcmVuY2UsIGRUYXJnZXRCQm94LCBkVGFyZ2V0QW5nbGUsIGRlZmF1bHRDb25uZWN0aW9uUG9pbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZmF1bHRDb25uZWN0aW9uUG9pbnQoKTtcclxufVxyXG5cclxuZXhwb3J0cy5saW5rQ29ubmVjdGlvblBvaW50ID0gbGlua0Nvbm5lY3Rpb25Qb2ludDtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBiYWNrYm9uZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydCYWNrYm9uZSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnQmFja2JvbmUnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIG5hdmlnYXRvciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyduYXZpZ2F0b3InXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ25hdmlnYXRvciddIDogbnVsbCksXHJcbiAgICBjcmVhdGVSZXNpemVSZWFjdG9yID0gcmVxdWlyZSgnLi9yZXNpemVyZWFjdG9yJykuUmVzaXplUmVhY3RvcixcclxuICAgIGNyZWF0ZVJvdGF0ZVJlYWN0b3IgPSByZXF1aXJlKCcuL3JvdGF0ZXJlYWN0b3InKS5Sb3RhdGVSZWFjdG9yO1xyXG5cclxuZnVuY3Rpb24gcHJvcGVydHlDaGVja2VyKHByb3BlcnR5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICBpZiAobW9kZWxbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIGRlZmF1bHRWYWx1ZTsgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxbcHJvcGVydHldID09PSAnZnVuY3Rpb24nKSB7IHJldHVybiBtb2RlbFtwcm9wZXJ0eV0oKTsgfVxyXG4gICAgICAgIHJldHVybiBtb2RlbFtwcm9wZXJ0eV07XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc011bHRpc2VsZWN0KGUpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0uc3Vic3RyKDAsIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdtYWMnKSB7IHJldHVybiBlLm1ldGFLZXk7IH1cclxuICAgIHJldHVybiBlLmN0cmxLZXk7XHJcbn1cclxuXHJcbnZhciBjYW5SZXNpemUgPSBwcm9wZXJ0eUNoZWNrZXIoJ3Jlc2l6YWJsZScsIGZhbHNlKSxcclxuICAgIGNhblJvdGF0ZSA9IHByb3BlcnR5Q2hlY2tlcigncm90YXRhYmxlJywgZmFsc2UpO1xyXG5cclxuZnVuY3Rpb24gTWFuaXB1bGF0aW9uUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFuaXB1bGF0aW9uUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBNYW5pcHVsYXRpb25SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBfLmV4dGVuZCh0aGlzLCBiYWNrYm9uZS5FdmVudHMpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuYWN0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucy5hY3Rpb25zICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ2FjdGlvbnMgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ncmlkU2l6ZSAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuZ3JpZFNpemUgPCAwKSB7IHRocm93IG5ldyBFcnJvcignZ3JpZFNpemUgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgZ3JpZFNpemUgPSBvcHRpb25zLmdyaWRTaXplLFxyXG4gICAgICAgIGFjdGlvbnMgPSBvcHRpb25zLmFjdGlvbnMgfHwgW2V4cG9ydHMuZWRpdCwgZXhwb3J0cy5kZWxldGVdLFxyXG4gICAgICAgIHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFvcHRpb25zLnJlc2l6ZSxcclxuICAgICAgICByb3RhdGUgPSBvcHRpb25zLnJlc2l6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhb3B0aW9ucy5yb3RhdGUsXHJcbiAgICAgICAgbWFnbmV0aXplID0gb3B0aW9ucy5tYWduZXRpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIW9wdGlvbnMubWFnbmV0aXplLFxyXG4gICAgICAgIHNlbGVjdGVkVmlld3MgPSB7fTtcclxuXHJcbiAgICBlbC5hdHRyKCd0YWJpbmRleCcsIDEpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbmlwdWxhdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuICAgICAgICB2YXIgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tlbGVtZW50LmlkXSxcclxuICAgICAgICAgICAgYmJveCxcclxuICAgICAgICAgICAgYW5nbGU7XHJcbiAgICAgICAgaWYgKCFidW5kbGUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgYmJveCA9IGJ1bmRsZS52aWV3LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICBidW5kbGUuZWxcclxuICAgICAgICAgICAgLmNzcygnbGVmdCcsIGJib3gueCAtIGdyaWRTaXplKVxyXG4gICAgICAgICAgICAuY3NzKCd0b3AnLCBiYm94LnkgLSBncmlkU2l6ZSlcclxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCBiYm94LndpZHRoICsgMiAqIGdyaWRTaXplKVxyXG4gICAgICAgICAgICAuY3NzKCdoZWlnaHQnLCBiYm94LmhlaWdodCArIDIgKiBncmlkU2l6ZSk7XHJcbiAgICAgICAgYW5nbGUgPSBlbGVtZW50LmdldCgnYW5nbGUnKTtcclxuICAgICAgICAkKGJ1bmRsZS5lbC5maW5kKCcubS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJvdGF0ZScpKVxyXG4gICAgICAgICAgICAuY3NzKCdsZWZ0JywgKGJib3gud2lkdGggKyA5NCkgLyAyICogKDEgKyBNYXRoLmNvcyhqb2ludC5nLnRvUmFkKGFuZ2xlKSkpIC0gMzYpXHJcbiAgICAgICAgICAgIC5jc3MoJ3RvcCcsIChiYm94LmhlaWdodCArIDk0KSAvIDIgKiAoMSArIE1hdGguc2luKGpvaW50LmcudG9SYWQoYW5nbGUpKSkgLSAzNik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFuaXB1bGF0b3JzKCkge1xyXG4gICAgICAgIF8ubWFwKHNlbGVjdGVkVmlld3MsIGZ1bmN0aW9uIChidW5kbGUpIHtcclxuICAgICAgICAgICAgdXBkYXRlTWFuaXB1bGF0b3IoYnVuZGxlLnZpZXcubW9kZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWFuaXB1bGF0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBidW5kbGUgPSBzZWxlY3RlZFZpZXdzW2VsZW1lbnQuaWRdO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmIChidW5kbGUudmlldy5tb2RlbC5kZWFjdGl2YXRlKSB7IGJ1bmRsZS52aWV3Lm1vZGVsLmRlYWN0aXZhdGUoKTsgfVxyXG4gICAgICAgIGJ1bmRsZS5lbC5yZW1vdmUoKTtcclxuICAgICAgICBidW5kbGUudmlldy5vZmYoJ2NoYW5nZTpwb3NpdGlvbiBjaGFuZ2U6c2l6ZScsIHVwZGF0ZU1hbmlwdWxhdG9yKTtcclxuICAgICAgICBkZWxldGUgc2VsZWN0ZWRWaWV3c1tlbGVtZW50LmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1hbmlwdWxhdG9ycyhjdXJyZW50aWQpIHtcclxuICAgICAgICBfLm1hcChzZWxlY3RlZFZpZXdzLCBmdW5jdGlvbiAoYnVuZGxlLCBpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IGN1cnJlbnRpZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgY2xvc2VNYW5pcHVsYXRvcihidW5kbGUudmlldy5tb2RlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWFuaXB1bGF0b3IoY2VsbFZpZXcsIGV2dCkge1xyXG4gICAgICAgIGlmIChjZWxsVmlldy5tb2RlbC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoIWlzTXVsdGlzZWxlY3QoZXZ0KSkgeyBjbG9zZU1hbmlwdWxhdG9ycyhjZWxsVmlldy5tb2RlbC5pZCk7IH1cclxuICAgICAgICB2YXIgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tjZWxsVmlldy5tb2RlbC5pZF0sXHJcbiAgICAgICAgICAgIHRhYixcclxuICAgICAgICAgICAgY29udGV4dDtcclxuICAgICAgICBpZiAoIWJ1bmRsZSkge1xyXG4gICAgICAgICAgICBidW5kbGUgPSBzZWxlY3RlZFZpZXdzW2NlbGxWaWV3Lm1vZGVsLmlkXSA9IHtcclxuICAgICAgICAgICAgICAgIGVsOiAoZnVuY3Rpb24gKCkge3ZhciBtYW5pcHVsYXRvciA9ICQocmVxdWlyZSgnLi9tYW5pcHVsYXRvci5odG1sJykpOyBlbC5hcHBlbmQobWFuaXB1bGF0b3IpOyByZXR1cm4gbWFuaXB1bGF0b3I7IH0oKSksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBjZWxsVmlldyxcclxuICAgICAgICAgICAgICAgIGtleWRvd246IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJ1bmRsZS52aWV3Lm1vZGVsLm9uKCdjaGFuZ2U6cG9zaXRpb24gY2hhbmdlOnNpemUgY2hhbmdlOmFuZ2xlJywgdXBkYXRlTWFuaXB1bGF0b3IpO1xyXG4gICAgICAgICAgICB0YWIgPSAkKGJ1bmRsZS5lbC5maW5kKCcubS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXRhYicpKTtcclxuICAgICAgICAgICAgY29udGV4dCA9IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VNYW5pcHVsYXRvcihidW5kbGUudmlldy5tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChtYWduZXRpemUgJiYgYnVuZGxlLnZpZXcubW9kZWwubWFnbmV0aXplICYmIGJ1bmRsZS52aWV3Lm1vZGVsLmRlbWFnbmV0aXplKSB7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rbWFya2VyID0gJChyZXF1aXJlKCcuL2xpbmsuc3ZnJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyID0gJChyZXF1aXJlKCcuL21vdmUuc3ZnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmttYXJrZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0gYnVuZGxlLnZpZXcubW9kZWwubWFnbmV0aXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiAhcmVzKSB7IGxpbmttYXJrZXIuYWZ0ZXIobW92ZW1hcmtlcik7IH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlbWFya2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLnZpZXcubW9kZWwubWFnbmV0aXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVtYXJrZXIuYWZ0ZXIobGlua21hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiLmFwcGVuZChsaW5rbWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXy5mb3JFYWNoKGFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uY2hlY2tlcihjZWxsVmlldy5tb2RlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnV0dG9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jbGljay5hcHBseShjb250ZXh0LCBidW5kbGUudmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuYXBwZW5kKCQoYWN0aW9uLm1hcmtlcikuY2xvbmUoKS5vbignY2xpY2snLCBjbGljaykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5rZXlkb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmtleWRvd24ucHVzaCh7IGZpbHRlcjogYWN0aW9uLmtleWRvd24sIGFjdGlvbjogY2xpY2sgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V2ZW50JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignY2VsbDonICsgYWN0aW9uLmV2ZW50LCBidW5kbGUudmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmFwcGVuZCgkKGFjdGlvbi5tYXJrZXIpLmNsb25lKCkub24oJ2NsaWNrJywgdHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5rZXlkb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmtleWRvd24ucHVzaCh7IGZpbHRlcjogYWN0aW9uLmtleWRvd24sIGFjdGlvbjogdHJpZ2dlciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc2l6ZSAmJiBjYW5SZXNpemUoY2VsbFZpZXcubW9kZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBidW5kbGUuZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgWyduJywgJ25lJywgJ2UnLCAnc2UnLCAncycsICdzdycsICd3JywgJ253J10uZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmVsLmZpbmQoJy5tLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItJyArIGRpcmVjdGlvbikub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVzaXplUmVhY3Rvcih7dmlldzogYnVuZGxlLnZpZXcsIHBhcGVyOiBwYXBlciwgbW9kZWw6IG1vZGVsLCBlbDogZWwsIGRpcmVjdGlvbjogZGlyZWN0aW9uLCBncmlkU2l6ZTogZ3JpZFNpemV9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyb3RhdGUgJiYgY2FuUm90YXRlKGNlbGxWaWV3Lm1vZGVsKSkge1xyXG4gICAgICAgICAgICAgICAgYnVuZGxlLmVsLmFkZENsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1yb3RhdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGJ1bmRsZS5lbC5maW5kKCcubS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJvdGF0ZScpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUm90YXRlUmVhY3Rvcih7dmlldzogYnVuZGxlLnZpZXcsIHBhcGVyOiBwYXBlciwgbW9kZWw6IG1vZGVsLCBlbDogZWwsIGFuZ2xlU3RlcDogMTV9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVwZGF0ZU1hbmlwdWxhdG9yKGNlbGxWaWV3Lm1vZGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24ga2V5ZG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDI3OlxyXG4gICAgICAgICAgICBjbG9zZU1hbmlwdWxhdG9ycygpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5mb3JFYWNoKHNlbGVjdGVkVmlld3MsIGZ1bmN0aW9uIChidW5kbGUpIHtcclxuICAgICAgICAgICAgaWYgKGJ1bmRsZS5rZXlkb3duKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVuZGxlLmtleWRvd24ua2V5Q29kZSA9PT0gZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmtleWRvd24uYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgZWwuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIHRvZ2dsZU1hbmlwdWxhdG9yKTtcclxuICAgIHBhcGVyLm9uKCdzY2FsZSB0cmFuc2xhdGUnLCB1cGRhdGVNYW5pcHVsYXRvcnMpO1xyXG4gICAgcGFwZXIub24oJ2NlbGw6cG9pbnRlcm1vdmUnLCBmdW5jdGlvbiAoY2VsbFZpZXcpIHsgdXBkYXRlTWFuaXB1bGF0b3IoY2VsbFZpZXcubW9kZWwpOyB9KTtcclxuICAgIG1vZGVsLm9uKCdjaGFuZ2U6dGFyZ2V0JywgZnVuY3Rpb24gKGxpbmspIHtcclxuICAgICAgICB2YXIgYnVuZGxlID0gc2VsZWN0ZWRWaWV3c1tsaW5rLmdldCgnc291cmNlJykuaWRdO1xyXG4gICAgICAgIGxpbmsudG9Gcm9udCgpO1xyXG4gICAgICAgIGlmICghYnVuZGxlIHx8ICFidW5kbGUudmlldy5tb2RlbC5tYWduZXRpemUgfHwgIWJ1bmRsZS52aWV3Lm1vZGVsLmRlbWFnbmV0aXplKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGJ1bmRsZS52aWV3Lm1vZGVsLmRlbWFnbmV0aXplKCk7XHJcbiAgICAgICAgYnVuZGxlLnZpZXcubW9kZWwubWFnbmV0aXplKCk7XHJcbiAgICB9KTtcclxuICAgIG1vZGVsLm9uKCdyZW1vdmUnLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGNsb3NlTWFuaXB1bGF0b3IoZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIGVsLmtleWRvd24oa2V5ZG93bik7XHJcbiAgICBlbC5tb3VzZW92ZXIobW91c2VvdmVyKTtcclxufVxyXG5cclxuZXhwb3J0cy5NYW5pcHVsYXRpb25SZWFjdG9yID0gTWFuaXB1bGF0aW9uUmVhY3RvcjtcclxuXHJcblxyXG5leHBvcnRzLmRlbGV0ZSA9IHtcclxuICAgIG1hcmtlcjogcmVxdWlyZSgnLi9kZWxldGUuc3ZnJyksXHJcbiAgICBjaGVja2VyOiBwcm9wZXJ0eUNoZWNrZXIoJ2RlbGV0YWJsZScsIHRydWUpLFxyXG4gICAgdHlwZTogJ2JvdHRvbicsXHJcbiAgICBjbGljazogZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgICB2aWV3Lm1vZGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0sXHJcbiAgICBrZXlkb3duOiB7IGtleUNvZGU6IDQ2IH1cclxufTtcclxuZXhwb3J0cy5lZGl0ID0ge1xyXG4gICAgbWFya2VyOiByZXF1aXJlKCcuL2VkaXQuc3ZnJyksXHJcbiAgICBjaGVja2VyOiBwcm9wZXJ0eUNoZWNrZXIoJ2VkaXRhYmxlJywgZmFsc2UpLFxyXG4gICAgdHlwZTogJ2JvdHRvbicsXHJcbiAgICBldmVudDogJ2VkaXQnXHJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0b3JcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItdGFiXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJlc2l6ZS1uZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yZXNpemUtZVxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yZXNpemUtc2VcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItcmVzaXplLXNcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC1tYXJrZXItcmVzaXplLXN3XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJlc2l6ZS13XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtbWFya2VyLXJlc2l6ZS1ud1xcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yZXNpemUtblxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm0tdHJhbnNmb3JtLWpvaW50LW1hcmtlci1yb3RhdGVcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKSxcclxuICAgICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgY3JlYXRlUHJldmlldyA9IHJlcXVpcmUoJy4vcHJldmlldycpLlByZXZpZXcsXHJcbiAgICBjcmVhdGVWaWV3cG9ydCA9IHJlcXVpcmUoJy4vdmlld3BvcnQnKS5WaWV3cG9ydDtcclxuXHJcbmZ1bmN0aW9uIE1hcChvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFwKSkgeyByZXR1cm4gbmV3IE1hcChvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLm1vZGVsIHx8IHR5cGVvZiBvcHRpb25zLm1vZGVsICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ21vZGVsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCB8fCB0eXBlb2Ygb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50ICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignbGlua0Nvbm5lY3Rpb25Qb2ludCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQgPSBvcHRpb25zLmxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgbWFwQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHt2YXIgY29udGFpbmVyID0gJChyZXF1aXJlKCcuL3ByZXZpZXcuaHRtbCcpKTsgZWwuYXBwZW5kKGNvbnRhaW5lcik7IHJldHVybiBjb250YWluZXI7IH0oKSksXHJcbiAgICAgICAgdmlld3BvcnRDb250YWluZXIgPSAoZnVuY3Rpb24gKCkge3ZhciBjb250YWluZXIgPSAkKHJlcXVpcmUoJy4vdmlld3BvcnQuaHRtbCcpKTsgZWwuYXBwZW5kKGNvbnRhaW5lcik7IHJldHVybiBjb250YWluZXI7IH0oKSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIHByZXZpZXcgPSBjcmVhdGVQcmV2aWV3KHtlbDogbWFwQ29udGFpbmVyLCBtb2RlbDogbW9kZWwsIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnR9KSxcclxuICAgICAgICB2aWV3cG9ydCA9IGNyZWF0ZVZpZXdwb3J0KHtlbDogdmlld3BvcnRDb250YWluZXJ9KSxcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIG1vZGVsLm9uKCdjaGFuZ2U6cG9zaXRpb24gY2hhbmdlOnNpemUgY2hhbmdlOmFuZ2xlIGNoYW5nZTpwYXJlbnQgYWRkIHJlbW92ZScsIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKG1vZGVsLmhhc0FjdGl2ZUJhdGNoKCdhZGQnKSB8fCBtb2RlbC5oYXNBY3RpdmVCYXRjaCgnY2xlYXInKSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoIWF1dG9SZWZyZXNoRW5hYmxlZCkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoZWxlbWVudC5pc0xpbmsoKSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoZWxlbWVudC5nZXQoJ3BhcmVudCcpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIF8uZGVmZXIoZnVuY3Rpb24gKCkgeyBzZWxmLnJlZnJlc2goKTsgfSk7XHJcbiAgICB9KTtcclxuICAgIG1vZGVsLm9uKCdiYXRjaDpzdG9wJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoKGUuYmF0Y2hOYW1lICE9PSAnYWRkJyAmJiBlLmJhdGNoTmFtZSAhPT0gJ2NsZWFyJykgfHwgbW9kZWwuaGFzQWN0aXZlQmF0Y2goJ2FkZCcpIHx8IG1vZGVsLmhhc0FjdGl2ZUJhdGNoKCdjbGVhcicpKSB7IHJldHVybjsgfVxyXG4gICAgICAgIF8uZGVmZXIoZnVuY3Rpb24gKCkgeyBzZWxmLnJlZnJlc2goKTsgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxmLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJib3gsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbkxvY2FsLFxyXG4gICAgICAgICAgICBtYXhMb2NhbDtcclxuICAgICAgICBpZiAobW9kZWwuZ2V0RWxlbWVudHMoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgbWluTG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoam9pbnQuZy5wb2ludCgwLCAwKSk7XHJcbiAgICAgICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGpvaW50LmcucG9pbnQod2lkdGgsIGhlaWdodCkpO1xyXG4gICAgICAgICAgICBiYm94ID0gam9pbnQuZy5yZWN0KG1pbkxvY2FsLngsIG1pbkxvY2FsLnksIG1heExvY2FsLnggLSBtaW5Mb2NhbC54LCBtYXhMb2NhbC55IC0gbWluTG9jYWwueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmJveCA9IG1vZGVsLmdldEJCb3gobW9kZWwuZ2V0RWxlbWVudHMoKSwge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KTtcclxuICAgICAgICAgICAgYmJveCA9IGpvaW50LmcucmVjdChiYm94LnggLSAxMCwgYmJveC55IC0gMTAsIGJib3gud2lkdGggKyAyMCwgYmJveC5oZWlnaHQgKyAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpZXcuc2V0QkJveChiYm94KTtcclxuICAgICAgICB2aWV3cG9ydC5zZXRCQm94KGJib3gpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmRpc2FibGVBdXRvcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5lbmFibGVBdXRvcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnNldFZpZXdwb3J0ID0gZnVuY3Rpb24gKGJib3gpIHtcclxuICAgICAgICB2aWV3cG9ydC5zZXRWaWV3cG9ydChiYm94KTtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5kb3dubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmV2aWV3LmRvd25sb2FkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYucmVmcmVzaCgpO1xyXG59XHJcblxyXG5leHBvcnRzLk1hcCA9IE1hcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J20tdHJhbnNmb3JtLWpvaW50LW1hcCc+PC9kaXY+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpLFxyXG4gICAgYXRvYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydhdG9iJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydhdG9iJ10gOiBudWxsKSxcclxuICAgIFVpbnQ4QXJyYXkgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVWludDhBcnJheSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVWludDhBcnJheSddIDogbnVsbCksXHJcbiAgICBCbG9iID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ0Jsb2InXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ0Jsb2InXSA6IG51bGwpLFxyXG4gICAgc2F2ZUFzID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ3NhdmVBcyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnc2F2ZUFzJ10gOiBudWxsKSxcclxuICAgIHN2ZzJwbmcgPSByZXF1aXJlKCdzYXZlLXN2Zy1hcy1wbmcnKTtcclxuXHJcbmZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcclxuICAgIHZhciBkZWxpbWl0ZXIgPSAnYmFzZTY0LCcsXHJcbiAgICAgICAgaW5kZXggPSB1cmkuaW5kZXhPZihkZWxpbWl0ZXIpLFxyXG4gICAgICAgIGI2NERhdGEgPSB1cmkuc3Vic3RyKGluZGV4ICsgZGVsaW1pdGVyLmxlbmd0aCksXHJcbiAgICAgICAgY29udGVudFR5cGUgPSB1cmkuc3Vic3RyKDAsIHVyaS5pbmRleE9mKCc7JykpLFxyXG4gICAgICAgIHNsaWNlU2l6ZSA9IDUxMixcclxuICAgICAgICBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSksXHJcbiAgICAgICAgYnl0ZUFycmF5cyA9IFtdLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBzbGljZSxcclxuICAgICAgICBieXRlTnVtYmVycyxcclxuICAgICAgICBpLFxyXG4gICAgICAgIGJ5dGVBcnJheTtcclxuXHJcbiAgICBmb3IgKG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG4gICAgICAgIHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG5cclxuICAgICAgICBieXRlTnVtYmVycyA9IFtdO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblxyXG4gICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldmlldyhvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJldmlldykpIHsgcmV0dXJuIG5ldyBQcmV2aWV3KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCB8fCB0eXBlb2Ygb3B0aW9ucy5saW5rQ29ubmVjdGlvblBvaW50ICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IG5ldyBFcnJvcignbGlua0Nvbm5lY3Rpb25Qb2ludCBvcHRpb24gaXMgTWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBNYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBvcHRpb25zLm1vZGVsLFxyXG4gICAgICAgIGxhc3RTY2FsZSA9IDEsXHJcbiAgICAgICAgbGlua0Nvbm5lY3Rpb25Qb2ludCA9IG9wdGlvbnMubGlua0Nvbm5lY3Rpb25Qb2ludCxcclxuICAgICAgICBwYXBlciA9IG5ldyBqb2ludC5kaWEuUGFwZXIoe1xyXG4gICAgICAgICAgICBlbDogZWwsXHJcbiAgICAgICAgICAgIHdpZHRoOiBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGVsLmhlaWdodCgpLFxyXG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXHJcbiAgICAgICAgICAgIGxpbmtDb25uZWN0aW9uUG9pbnQ6IGxpbmtDb25uZWN0aW9uUG9pbnQsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHNlbGYuc2V0QkJveCA9IGZ1bmN0aW9uIChiYm94KSB7XHJcbiAgICAgICAgLy8gaXQgaXMgc2ltaWxhciB0byBwYXBlci5zY2FsZUNvbnRlbnRUb0ZpdCgpOyBidXQgaSByZXF1aXJlIHRvIGRvIGl0IG1hbnVhbGx5IHRvIGNoYW5nZSBldmVuIHRoZSBvcmlnaW5cclxuICAgICAgICB2YXIgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgc2NhbGVYID0gd2lkdGggLyBiYm94LndpZHRoLFxyXG4gICAgICAgICAgICBzY2FsZVkgPSBoZWlnaHQgLyBiYm94LmhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSksXHJcbiAgICAgICAgICAgIG94ID0gKHdpZHRoIC0gYmJveC53aWR0aCAqIHNjYWxlKSAvIDIgLSBiYm94LnggKiBzY2FsZSxcclxuICAgICAgICAgICAgb3kgPSAoaGVpZ2h0IC0gYmJveC5oZWlnaHQgKiBzY2FsZSkgLyAyIC0gYmJveC55ICogc2NhbGU7XHJcblxyXG4gICAgICAgIGxhc3RTY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIHBhcGVyLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG94LCBveSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZG93bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN2ZyA9ICQoJCgnPGRpdj4nKS5hcHBlbmQoJChwYXBlci5zdmcpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC8mbmJzcDt8eG1sbnM6eG1sPVwiaHR0cDpcXC9cXC93d3dcXC53M1xcLm9yZ1xcL1hNTFxcLzE5OThcXC9uYW1lc3BhY2VcIi9nLCAnICcpKTtcclxuICAgICAgICBzdmcuZmluZCgnLmVsZW1lbnQgKicpLmNzcygndmVjdG9yLWVmZmVjdCcsICdub25lJyk7XHJcbiAgICAgICAgc3ZnMnBuZy5zdmdBc1BuZ1VyaShzdmdbMF0sIHtzY2FsZTogMyAvIGxhc3RTY2FsZX0sIGZ1bmN0aW9uICh1cmkpIHtcclxuICAgICAgICAgICAgc2F2ZUFzKHVyaVRvQmxvYih1cmkpLCBcIm1vZGVsLnBuZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMuUHJldmlldyA9IFByZXZpZXc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtLXRyYW5zZm9ybS1tYXAtdmlld3BvcnQnPjwvZGl2PlxcclxcblwiO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKSxcclxuICAgIFZpZXdwb3J0T3V0bGluZSA9IHJlcXVpcmUoJy4vdmlld3BvcnRvdXRsaW5lJykuVmlld3BvcnRPdXRsaW5lO1xyXG5cclxuZnVuY3Rpb24gVmlld3BvcnQob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZXdwb3J0KSkgeyByZXR1cm4gbmV3IFZpZXdwb3J0KG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb25zIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoJChvcHRpb25zLmVsKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGVsIG9wdGlvbnMnKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgbW9kZWwgPSBuZXcgam9pbnQuZGlhLkdyYXBoKCksXHJcbiAgICAgICAgcGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHtcclxuICAgICAgICAgICAgZWw6IGVsLFxyXG4gICAgICAgICAgICB3aWR0aDogZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB2aWV3cG9ydCA9IG5ldyBWaWV3cG9ydE91dGxpbmUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogam9pbnQuZy5wb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICBtb2RlbC5hZGRDZWxscyhbdmlld3BvcnRdKTtcclxuXHJcbiAgICBzZWxmLnNldEJCb3ggPSBmdW5jdGlvbiAoYmJveCkge1xyXG4gICAgICAgIC8vIGl0IGlzIHNpbWlsYXIgdG8gcGFwZXIuc2NhbGVDb250ZW50VG9GaXQoKTsgYnV0IGkgcmVxdWlyZSB0byBkbyBpdCBtYW51YWxseSB0byBjaGFuZ2UgZXZlbiB0aGUgb3JpZ2luXHJcbiAgICAgICAgdmFyIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHNjYWxlWCA9IHdpZHRoIC8gYmJveC53aWR0aCxcclxuICAgICAgICAgICAgc2NhbGVZID0gaGVpZ2h0IC8gYmJveC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpLFxyXG4gICAgICAgICAgICBveCA9ICh3aWR0aCAtIGJib3gud2lkdGggKiBzY2FsZSkgLyAyIC0gYmJveC54ICogc2NhbGUsXHJcbiAgICAgICAgICAgIG95ID0gKGhlaWdodCAtIGJib3guaGVpZ2h0ICogc2NhbGUpIC8gMiAtIGJib3gueSAqIHNjYWxlO1xyXG5cclxuICAgICAgICBwYXBlci5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIHBhcGVyLnNldE9yaWdpbihveCwgb3kpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnNldFZpZXdwb3J0ID0gZnVuY3Rpb24gKGJib3gpIHtcclxuICAgICAgICB2aWV3cG9ydC5wb3NpdGlvbihiYm94LngsIGJib3gueSk7XHJcbiAgICAgICAgdmlld3BvcnQucmVzaXplKGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMuVmlld3BvcnQgPSBWaWV3cG9ydDtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCB0aGUgTS1UcmFuc2Zvcm0uanMgcHJvamVjdCBhdXRob3JzLiBQbGVhc2Ugc2VlIHRoZVxyXG4vLyBBVVRIT1JTIGZpbGUgZm9yIGRldGFpbHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzXHJcbi8vIGdvdmVybmVkIGJ5IGEgTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cclxuLypqc2xpbnQgbm9kZTogdHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5leHBvcnRzLlZpZXdwb3J0T3V0bGluZSA9IGpvaW50LnNoYXBlcy5iYXNpYy5HZW5lcmljLmV4dGVuZCh7XHJcbiAgICBtYXJrdXA6IHJlcXVpcmUoJy4vbWFya3VwLnN2ZycpLFxyXG5cclxuICAgIGRlZmF1bHRzOiBqb2ludC51dGlsLmRlZXBTdXBwbGVtZW50KHtcclxuICAgICAgICB0eXBlOiAnbWFwLlZpZXdwb3J0T3V0bGluZScsXHJcbiAgICAgICAgc2l6ZToge3dpZHRoOiAxLCBoZWlnaHQ6IDF9LFxyXG4gICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdCcgOiB7J2ZvbGxvdy1zY2FsZSc6ICdhdXRvJ30sXHJcbiAgICAgICAgICAgICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtb3V0ZXItcmVjdCc6IHtcclxuICAgICAgICAgICAgICAgICdyZWYteCc6IDAsXHJcbiAgICAgICAgICAgICAgICAncmVmLXknOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3JlZi13aWR0aCc6IDEsXHJcbiAgICAgICAgICAgICAgICAncmVmLWhlaWdodCc6IDEsXHJcbiAgICAgICAgICAgICAgICByZWY6ICcubS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIGpvaW50LnNoYXBlcy5iYXNpYy5HZW5lcmljLnByb3RvdHlwZS5kZWZhdWx0cylcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZyBjbGFzcz1cXFwic2NhbGFibGVcXFwiPlxcclxcbiAgICA8cmVjdCBjbGFzcz1cXFwibS10cmFuc2Zvcm0tam9pbnQtdmlld3BvcnQtYmctcmVjdFxcXCIgd2lkdGg9XFxcIjFcXFwiIGhlaWdodD1cXFwiMVxcXCIgZmlsbD1cXFwidHJhbnNwYXJlbnRcXFwiIC8+XFxyXFxuPC9nPlxcclxcbjxyZWN0IGNsYXNzPVxcXCJtLXRyYW5zZm9ybS1qb2ludC12aWV3cG9ydC1vdXRlci1yZWN0XFxcIiBmaWxsPVxcXCJ0cmFuc3BhcmVudFxcXCIgc3Ryb2tlPVxcXCJibHVlXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIC8+XFxyXFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiIHN0YW5kYWxvbmU9XFxcIm5vXFxcIj8+XFxyXFxuPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPlxcclxcblxcclxcbjxzdmdcXHJcXG4gICB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiXFxyXFxuICAgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCJcXHJcXG4gICB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiXFxyXFxuICAgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXHJcXG4gICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxyXFxuICAgeG1sbnM6c29kaXBvZGk9XFxcImh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkXFxcIlxcclxcbiAgIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIlxcclxcbiAgIHZlcnNpb249XFxcIjEuMVxcXCJcXHJcXG4gICBpZD1cXFwiQ2FwYV8xXFxcIlxcclxcbiAgIHg9XFxcIjBweFxcXCJcXHJcXG4gICB5PVxcXCIwcHhcXFwiXFxyXFxuICAgd2lkdGg9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICBoZWlnaHQ9XFxcIjQ0LjIzNlxcXCJcXHJcXG4gICB2aWV3Qm94PVxcXCIwIDAgNDQuMjM2IDQ0LjIzNlxcXCJcXHJcXG4gICB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcclxcbiAgIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTEgcjEzNzI1XFxcIlxcclxcbiAgIHNvZGlwb2RpOmRvY25hbWU9XFxcIm1vdmUuc3ZnXFxcIj48bWV0YWRhdGFcXHJcXG4gICAgIGlkPVxcXCJtZXRhZGF0YTUzXFxcIj48cmRmOlJERj48Y2M6V29ya1xcclxcbiAgICAgICAgIHJkZjphYm91dD1cXFwiXFxcIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZVxcclxcbiAgICAgICAgICAgcmRmOnJlc291cmNlPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZVxcXCIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnNcXHJcXG4gICAgIGlkPVxcXCJkZWZzNTFcXFwiIC8+PHNvZGlwb2RpOm5hbWVkdmlld1xcclxcbiAgICAgcGFnZWNvbG9yPVxcXCIjZmZmZmZmXFxcIlxcclxcbiAgICAgYm9yZGVyY29sb3I9XFxcIiM2NjY2NjZcXFwiXFxyXFxuICAgICBib3JkZXJvcGFjaXR5PVxcXCIxXFxcIlxcclxcbiAgICAgb2JqZWN0dG9sZXJhbmNlPVxcXCIxMFxcXCJcXHJcXG4gICAgIGdyaWR0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgZ3VpZGV0b2xlcmFuY2U9XFxcIjEwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9XFxcIjBcXFwiXFxyXFxuICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PVxcXCIyXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPVxcXCIxNjAwXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD1cXFwiODM3XFxcIlxcclxcbiAgICAgaWQ9XFxcIm5hbWVkdmlldzQ5XFxcIlxcclxcbiAgICAgc2hvd2dyaWQ9XFxcImZhbHNlXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6em9vbT1cXFwiNy41NDQ4NTk0XFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3g9XFxcIjI4LjUyMDA0OVxcXCJcXHJcXG4gICAgIGlua3NjYXBlOmN5PVxcXCIzMi4yODQ0MTJcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteD1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3cteT1cXFwiLThcXFwiXFxyXFxuICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPVxcXCIxXFxcIlxcclxcbiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj1cXFwiQ2FwYV8xXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzE5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzIzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzI5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzMzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzM5XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQzXFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ1XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQ3XFxcIiAvPjxnXFxyXFxuICAgICBpZD1cXFwiZzQxNzdcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgcj1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBjeT1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBjeD1cXFwiMjIuMTE4XFxcIlxcclxcbiAgICAgICBpZD1cXFwicGF0aDQxODFcXFwiXFxyXFxuICAgICAgIHN0eWxlPVxcXCJjb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40MDAwMDAwMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlXFxcIiAvPjxwYXRoXFxyXFxuICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoN1xcXCJcXHJcXG4gICAgICAgZD1cXFwiTSAyMi4xMTgsNDQuMjM2IEMgOS45MjIsNDQuMjM2IDAsMzQuMzE0IDAsMjIuMTE5IDAsOS45MjMgOS45MjIsMCAyMi4xMTgsMCBjIDEyLjE5NiwwIDIyLjExOCw5LjkyMyAyMi4xMTgsMjIuMTE5IDAsMTIuMTk1IC05LjkyMiwyMi4xMTcgLTIyLjExOCwyMi4xMTcgeiBtIDAsLTQyLjczNiBDIDEwLjc1LDEuNSAxLjUsMTAuNzUgMS41LDIyLjExOSBjIDAsMTEuMzY5IDkuMjUsMjAuNjE3IDIwLjYxOCwyMC42MTcgMTEuMzY4LDAgMjAuNjE4LC05LjI0OCAyMC42MTgsLTIwLjYxNyBDIDQyLjczNiwxMC43NSAzMy40ODYsMS41IDIyLjExOCwxLjUgWlxcXCIgLz48Z1xcclxcbiAgICAgICBpZD1cXFwiZzlcXFwiPjxjaXJjbGVcXHJcXG4gICAgICAgICBpZD1cXFwiY2lyY2xlMTFcXFwiXFxyXFxuICAgICAgICAgcj1cXFwiMS40MVxcXCJcXHJcXG4gICAgICAgICBjeT1cXFwiMjIuNDM4XFxcIlxcclxcbiAgICAgICAgIGN4PVxcXCIyMi4xMThcXFwiIC8+PHBhdGhcXHJcXG4gICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIlxcclxcbiAgICAgICAgIGlkPVxcXCJwYXRoMTNcXFwiXFxyXFxuICAgICAgICAgZD1cXFwibSAyMi4xMTgsMjQuMDk4IGMgLTAuOTE2LDAgLTEuNjYsLTAuNzQ0IC0xLjY2LC0xLjY2IDAsLTAuOTE1IDAuNzQ1LC0xLjY2IDEuNjYsLTEuNjYgMC45MTUsMCAxLjY1OSwwLjc0NSAxLjY1OSwxLjY2IDAsMC45MTYgLTAuNzQzLDEuNjYgLTEuNjU5LDEuNjYgeiBtIDAsLTIuODIxIGMgLTAuNjQsMCAtMS4xNiwwLjUyMSAtMS4xNiwxLjE2IDAsMC42MzkgMC41MjEsMS4xNjEgMS4xNiwxLjE2MSAwLjYzOSwwIDEuMTU5LC0wLjUyMSAxLjE1OSwtMS4xNjEgMCwtMC42NCAtMC41MTksLTEuMTYgLTEuMTU5LC0xLjE2IHpcXFwiIC8+PC9nPjxwYXRoXFxyXFxuICAgICAgIGlkPVxcXCJwYXRoNy0yXFxcIlxcclxcbiAgICAgICBkPVxcXCJtIDM3LjAzOTk3NCwyMS43MzYxMjcgLTAuMjE0MDIxLC0wLjMyNDAxOSAtNC4wMDAwMjUsLTQuMDAwMDQ1IGMgLTAuMzkwMDMzLC0wLjM5MDAyNiAtMS4wMjU5ODYsLTAuMzkwMDI2IC0xLjQxNDAwMiwwIC0wLjM5MDAyNSwwLjM5MDAzNCAtMC4zOTAwMjUsMS4wMjQwMzggMCwxLjQxNDAwNSBsIDIuMjkyMDM1LDIuMjkyMDM4IC0xMC41ODYwOTIsMCAwLC0xMC41ODYwNjQgMi4yOTIwMzQsMi4yOTIwMzggYyAwLjM4ODAxNiwwLjM5MDAzNCAxLjAyNDAyOSwwLjM5MDAzNCAxLjQxMzk5NCwwIDAuMzg4MDE2LC0wLjM5MDAyNiAwLjM4ODAxNiwtMS4wMjQwMyAwLC0xLjQxMzk5NyBsIC00LjAwMDAzMSwtNC4wMDAxMTIgLTAuMDEsLTAuMDA2IC0wLjMxNDAxMywtMC4yMDc5NzcgLTAuMzgxOTcsLTAuMDc4MDMgLTAuMDAzOCwwIC0wLjM3ODAxMSwwLjA3ODAzIC0wLjMxNDAxMywwLjIwNzk3NyAtMC4wMTIsMC4wMDYgLTQuMDAwMDMxLDQuMDAwMDQ1IGMgLTAuMzkwMDI2LDAuMzkwMDM0IC0wLjM5MDAyNiwxLjAyNDAzOCAwLDEuNDE0MDA0IDAuMzkwMDI2LDAuMzg5OTY2IDEuMDI0MDI5LDAuMzkwMDI2IDEuNDEzOTk0LDAgbCAyLjI5NDA1MiwtMi4yOTIwNDUgMCwxMC41ODYxMzEgLTEwLjU4NjAzMiwwIDIuMjkyMDM0LC0yLjI5MjAzOCBjIDAuMzkwMDI2LC0wLjM5MDAzNCAwLjM5MDAyNiwtMS4wMjQwMzggMCwtMS40MTQwMDUgLTAuMzkwMDMzLC0wLjM4OTk2NiAtMS4wMjQwMzYsLTAuMzkwMDI2IC0xLjQxNDAwMiwwIGwgLTQuMDAwMDkyLDQuMDAwMDQ1IC0wLjAwNiwwLjAxIC0wLjIwNzk3NiwwLjMxNDAxMyAtMC4wNzgwMywwLjM4MjAzOSAwLDAuMDAzOCAwLjA3ODAzLDAuMzc4MDExIDAuMjA3OTc2LDAuMzEyMDAzIDAuMDA2LDAuMDEyIDQuMDAwMDMyLDQuMDAwMDQ1IGMgMC4zOTAwMjYsMC4zOTAwMzQgMS4wMjQwMjksMC4zOTAwMzQgMS40MTM5OTUsMCAwLjM5MDAzMywtMC4zODgwMTYgMC4zOTAwMzMsLTEuMDI0MDMgMCwtMS40MTQwMDQgbCAtMi4yOTE5NjcsLTIuMjkyMDk4IDEwLjU4NjA5MiwwIDAsMTAuNTg2MTMxIC0yLjI5MjAzNCwtMi4yOTIwNDYgYyAtMC4zOTAwMjYsLTAuMzg4MDE2IC0xLjAyNDAyOSwtMC4zODgwMTYgLTEuNDEzOTk1LDAgLTAuMzkwMDMzLDAuMzkwMDM0IC0wLjM5MDAzMywxLjAyNTk4OCAwLDEuNDE0MDA1IGwgNC4wMDAwMzIsNC4wMDAwNDUgMC4zMjQwMTgsMC4yMTU5NjQgMC4zNzgwMDMsMC4wNzYwMiAwLjAwMzgsMCAwLjM4MTk3OCwtMC4wNzgwMyAwLjMyNDAxOCwtMC4yMTQwMjIgNC4wMDAwMzEsLTQuMDAwMDQ1IGMgMC4zODgwMDgsLTAuMzkwMDI2IDAuMzg4MDA4LC0xLjAyNTk4IDAsLTEuNDEzOTk3IC0wLjM5MDAzMywtMC4zOTAwMzMgLTEuMDI1OTg2LC0wLjM5MDAzMyAtMS40MTQwMDIsMCBsIC0yLjI5MjAyNywyLjI5MjAzOCAwLC0xMC41ODYwNjMgMTAuNTg2MDkyLDAgLTIuMjkyMDM0LDIuMjkyMDM4IGMgLTAuMzg4MDE2LDAuMzg4MDE2IC0wLjM4ODAxNiwxLjAyNDAzOCAwLDEuNDE0MDA0IDAuMzkwMDI2LDAuMzg4MDE2IDEuMDI1OTc5LDAuMzg4MDE2IDEuNDEzOTk1LDAgbCA0LjAwMDAzMSwtNC4wMDAwNDUgMC4yMTU5NjQsLTAuMzI0MDE4IDAuMDc2MDIsLTAuMzc4MDExIDAsLTAuMDAzOCAtMC4wNzgwMywtMC4zODE5NzkgelxcXCJcXHJcXG4gICAgICAgc3R5bGU9XFxcImZpbGw6IzAxMDAwMlxcXCJcXHJcXG4gICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgLz48L2c+PC9zdmc+XFxyXFxuXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gUGFuUmVhY3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUGFuUmVhY3RvcikpIHsgcmV0dXJuIG5ldyBQYW5SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy54ICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy55ICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ3kgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG5cclxuICAgIHZhciBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIHN0YXJ0TG9jYWwgPSB7eDogb3B0aW9ucy54LCB5OiBvcHRpb25zLnl9LFxyXG4gICAgICAgIG1vdXNlb3V0O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlbW92ZShlKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgICAgICB0b3AgPSBlbC5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICAgIHdpZHRoID0gZWwud2lkdGgoKSxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCksXHJcbiAgICAgICAgICAgIHRvcExlZnQgPSBqb2ludC5nLnBvaW50KGxlZnQsIHRvcCksXHJcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0ID0gam9pbnQuZy5wb2ludChsZWZ0ICsgd2lkdGgsIHRvcCArIGhlaWdodCksXHJcbiAgICAgICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpLFxyXG4gICAgICAgICAgICBtYXhMb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludChib3R0b21SaWdodCksXHJcbiAgICAgICAgICAgIHNjYWxlID0gam9pbnQuZy5wb2ludCh3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSkpLFxyXG4gICAgICAgICAgICBvZmZzZXRDbGllbnQgPSBqb2ludC5nLnBvaW50KHN0YXJ0TG9jYWwueCAqIHNjYWxlLnggKyBsZWZ0LCBzdGFydExvY2FsLnkgKiBzY2FsZS55ICsgdG9wKSxcclxuICAgICAgICAgICAgb3JpZ2luID0gam9pbnQuZy5wb2ludChlLmNsaWVudFggLSBvZmZzZXRDbGllbnQueCwgZS5jbGllbnRZIC0gb2Zmc2V0Q2xpZW50LnkpO1xyXG5cclxuICAgICAgICBwYXBlci5zZXRPcmlnaW4ob3JpZ2luLngsIG9yaWdpbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXJtaW5hdGUoKSB7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZXVwJywgdGVybWluYXRlKTtcclxuICAgICAgICBlbC5vZmYoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWwuZ2V0KDApKSB7XHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWwub24oJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgZWwub24oJ21vdXNlb3V0JywgbW91c2VvdXQpO1xyXG4gICAgZWwub24oJ21vdXNlbW92ZSB0b3VjaG1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LW1hbmlwdWxhdGluZycpO1xyXG59XHJcblxyXG5leHBvcnRzLlBhblJlYWN0b3IgPSBQYW5SZWFjdG9yO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSxcclxuICAgIGpvaW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2pvaW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydqb2ludCddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoMiA9PT0gZGlyZWN0aW9uLmxlbmd0aCkgeyByZXR1cm4ge3Y6IGRpcmVjdGlvbi5zdWJzdHIoMCwgMSksIGg6IGRpcmVjdGlvbi5zdWJzdHIoLTEpfTsgfVxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgIGNhc2UgJ24nOlxyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgICAgcmV0dXJuIHt2OiBkaXJlY3Rpb259O1xyXG4gICAgY2FzZSAndyc6XHJcbiAgICBjYXNlICdlJzpcclxuICAgICAgICByZXR1cm4ge2g6IGRpcmVjdGlvbn07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc2l6ZVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZVJlYWN0b3IpKSB7IHJldHVybiBuZXcgUmVzaXplUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMudmlldyB8fCB0eXBlb2Ygb3B0aW9ucy52aWV3ICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ZpZXcgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMubW9kZWwgfHwgdHlwZW9mIG9wdGlvbnMubW9kZWwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignbW9kZWwgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5kaXJlY3Rpb24pIHsgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3Rpb24gb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoLTEgPT09IFsnbmUnLCAnZScsICdzZScsICdzJywgJ3N3JywgJ3cnLCAnbncnLCAnbiddLmluZGV4T2Yob3B0aW9ucy5kaXJlY3Rpb24pKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBkaXJlY3Rpb24gb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ncmlkU2l6ZSAhPT0gJ251bWJlcicpIHsgdGhyb3cgbmV3IEVycm9yKCdncmlkU2l6ZSBvcHRpb24gaXMgbWFuZGF0b3J5IGFuZCBoYXMgdG8gYmUgYSBudW1iZXInKTsgfVxyXG4gICAgaWYgKG9wdGlvbnMuZ3JpZFNpemUgPCAwKSB7IHRocm93IG5ldyBFcnJvcignZ3JpZFNpemUgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvJyk7IH1cclxuXHJcbiAgICB2YXIgZWwgPSAkKCQob3B0aW9ucy5lbClbMF0pLFxyXG4gICAgICAgIHBhcGVyID0gb3B0aW9ucy5wYXBlcixcclxuICAgICAgICBtb2RlbCA9IG9wdGlvbnMubW9kZWwsXHJcbiAgICAgICAgZ3JpZFNpemUgPSBvcHRpb25zLmdyaWRTaXplLFxyXG4gICAgICAgIGVsZW1lbnQgPSBvcHRpb25zLnZpZXcubW9kZWwsXHJcbiAgICAgICAgZGlyZWN0aW9uID0gbm9ybWFsaXplRGlyZWN0aW9uKG9wdGlvbnMuZGlyZWN0aW9uKSxcclxuICAgICAgICBtaW5zaXplID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1zaXplID0gZWxlbWVudC5taW5zaXplLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZyxcclxuICAgICAgICAgICAgICAgIGVtYmVkcyA9IF8uZmlsdGVyKGVsZW1lbnQuZ2V0RW1iZWRkZWRDZWxscygpLCBmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5pc0NvbnRyYWludDsgfSksXHJcbiAgICAgICAgICAgICAgICBiYm94LFxyXG4gICAgICAgICAgICAgICAgZW1iZWRzYmJveCxcclxuICAgICAgICAgICAgICAgIG1pbndpZHRoID0gbXNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBtaW5oZWlnaHQgPSBtc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChlbWJlZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBlbWJlZHNiYm94ID0gbW9kZWwuZ2V0QkJveChlbWJlZHMsIHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBiYm94ID0gZWxlbWVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nID0gZWxlbWVudC5wYWRkaW5nO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWlud2lkdGggPSBlbWJlZHNiYm94LmNvcm5lcigpLnggLSBiYm94Lm9yaWdpbigpLnggKyBwYWRkaW5nLnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWlud2lkdGggPSBiYm94LmNvcm5lcigpLnggLSBlbWJlZHNiYm94Lm9yaWdpbigpLnggKyBwYWRkaW5nLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbi52KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgICAgICAgICBtaW5oZWlnaHQgPSBlbWJlZHNiYm94LmNvcm5lcigpLnkgLSBiYm94Lm9yaWdpbigpLnkgKyBwYWRkaW5nLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmhlaWdodCA9IGJib3guY29ybmVyKCkueSAtIGVtYmVkc2Jib3gub3JpZ2luKCkueSArIHBhZGRpbmcudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogTWF0aC5tYXgobWlud2lkdGgsIG1zaXplLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heChtaW5oZWlnaHQsIG1zaXplLmhlaWdodCl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtc2l6ZTtcclxuICAgICAgICB9KCkpLFxyXG4gICAgICAgIG1vdXNlZW50ZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gZml4UG9pbnQocG9pbnQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciB4ID0gcG9pbnQueCxcclxuICAgICAgICAgICAgeSA9IHBvaW50Lnk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgICB4IC09IGdyaWRTaXplO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgICAgeCArPSBncmlkU2l6ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uLnYpIHtcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgeSAtPSBncmlkU2l6ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgIHkgKz0gZ3JpZFNpemU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gam9pbnQuZy5wb2ludCh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25zdHJhaW4ocG9pbnQpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5nZXQoJ3BhcmVudCcpLFxyXG4gICAgICAgICAgICBiYm94LFxyXG4gICAgICAgICAgICBwYWRkaW5nO1xyXG4gICAgICAgIHBvaW50ID0gam9pbnQuZy5wb2ludChqb2ludC5nLnNuYXBUb0dyaWQocG9pbnQueCwgZ3JpZFNpemUpLCBqb2ludC5nLnNuYXBUb0dyaWQocG9pbnQueSwgZ3JpZFNpemUpKTtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IG1vZGVsLmdldENlbGwocGFyZW50KTtcclxuICAgICAgICAgICAgYmJveCA9IHBhcmVudC5nZXRCQm94KHt1c2VNb2RlbEdlb21ldHJ5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSBwYXJlbnQucGFkZGluZztcclxuICAgICAgICAgICAgcG9pbnQgPSBqb2ludC5nLnBvaW50KFxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoTWF0aC5taW4ocG9pbnQueCwgYmJveC5jb3JuZXIoKS54IC0gcGFkZGluZy5yaWdodCksIGJib3gueCArIHBhZGRpbmcubGVmdCksXHJcbiAgICAgICAgICAgICAgICBNYXRoLm1heChNYXRoLm1pbihwb2ludC55LCBiYm94LmNvcm5lcigpLnkgLSBwYWRkaW5nLmJvdHRvbSksIGJib3gueSArIHBhZGRpbmcudG9wKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2Vtb3ZlKGUpIHtcclxuICAgICAgICB2YXIgY2xpZW50ID0gY29uc3RyYWluKGZpeFBvaW50KHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh7eDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFl9KSwgZGlyZWN0aW9uKSksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gZWxlbWVudC5nZXQoJ3Bvc2l0aW9uJyksXHJcbiAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldCgnc2l6ZScpLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBweCxcclxuICAgICAgICAgICAgcHk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24uaCkge1xyXG4gICAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KGNsaWVudC54IC0gcG9zaXRpb24ueCwgbWluc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHB4ID0gcG9zaXRpb24ueDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgoc2l6ZS53aWR0aCAtIGNsaWVudC54ICsgcG9zaXRpb24ueCwgbWluc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIHB4ID0gcG9zaXRpb24ueCArIHNpemUud2lkdGggLSB3aWR0aDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgd2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICBweCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uLnYpIHtcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoY2xpZW50LnkgLSBwb3NpdGlvbi55LCBtaW5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHB5ID0gcG9zaXRpb24ueTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbic6XHJcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KHNpemUuaGVpZ2h0IC0gY2xpZW50LnkgKyBwb3NpdGlvbi55LCBtaW5zaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHB5ID0gcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0IC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBoZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgcHkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnBvc2l0aW9uKHB4LCBweSk7XHJcbiAgICAgICAgZWxlbWVudC5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VsZWF2ZShlKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gam9pbnQuZy5wb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgIGJib3ggPSBqb2ludC5nLnJlY3QoZWwub2Zmc2V0KCkubGVmdCwgZWwub2Zmc2V0KCkudG9wLCBlbC53aWR0aCgpLCBlbC5oZWlnaHQoKSk7XHJcbiAgICAgICAgcG9pbnQgPSBiYm94LnBvaW50TmVhcmVzdFRvUG9pbnQocG9pbnQpO1xyXG4gICAgICAgIGUuY2xpZW50WCA9IHBvaW50Lng7XHJcbiAgICAgICAgZS5jbGllbnRZID0gcG9pbnQueTtcclxuICAgICAgICByZXR1cm4gbW91c2Vtb3ZlKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBlbC5vZmYoJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VlbnRlcicsIG1vdXNlZW50ZXIpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgICAgICBlbC5vZmYoJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6aW5nLScgKyBvcHRpb25zLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VlbnRlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9ucyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0ZXJtaW5hdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsLm9uKCdtb3VzZXVwJywgdGVybWluYXRlKTtcclxuICAgIGVsLm9uKCdtb3VzZWVudGVyJywgbW91c2VlbnRlcik7XHJcbiAgICBlbC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuICAgIGVsLm9uKCdtb3VzZWxlYXZlJywgbW91c2VsZWF2ZSk7XHJcblxyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LW1hbmlwdWxhdGluZycpO1xyXG4gICAgZWwuYWRkQ2xhc3MoJ20tdHJhbnNmb3JtLWpvaW50LXJlc2l6aW5nLScgKyBvcHRpb25zLmRpcmVjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydHMuUmVzaXplUmVhY3RvciA9IFJlc2l6ZVJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFJvdGF0ZVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJvdGF0ZVJlYWN0b3IpKSB7IHJldHVybiBuZXcgUm90YXRlUmVhY3RvcihvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnBhcGVyIHx8IHR5cGVvZiBvcHRpb25zLnBhcGVyICE9PSAnb2JqZWN0JyB8fCAhKG9wdGlvbnMucGFwZXIgaW5zdGFuY2VvZiBqb2ludC5kaWEuUGFwZXIpKSB7IHRocm93IG5ldyBFcnJvcigncGFwZXIgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMudmlldyB8fCB0eXBlb2Ygb3B0aW9ucy52aWV3ICE9PSAnb2JqZWN0JykgeyB0aHJvdyBuZXcgRXJyb3IoJ3ZpZXcgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAoIW9wdGlvbnMuZWwpIHsgdGhyb3cgbmV3IEVycm9yKCdlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuZWwpLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZWwgb3B0aW9uJyk7IH1cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmdsZVN0ZXAgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignYW5nbGVTdGVwIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5hbmdsZVN0ZXAgPCAwKSB7IHRocm93IG5ldyBFcnJvcignYW5nbGVTdGVwIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcblxyXG4gICAgdmFyIGVsID0gJCgkKG9wdGlvbnMuZWwpWzBdKSxcclxuICAgICAgICBwYXBlciA9IG9wdGlvbnMucGFwZXIsXHJcbiAgICAgICAgZWxlbWVudCA9IG9wdGlvbnMudmlldy5tb2RlbCxcclxuICAgICAgICBhbmdsZVN0ZXAgPSBvcHRpb25zLmFuZ2xlU3RlcCxcclxuICAgICAgICBtb3VzZW91dDtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZW1vdmUoZSkge1xyXG4gICAgICAgIHZhciBjbGllbnQgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoe3g6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZfSksXHJcbiAgICAgICAgICAgIGJib3ggPSBlbGVtZW50LmdldEJCb3goe3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgY2VudGVyID0gYmJveC5jZW50ZXIoKSxcclxuICAgICAgICAgICAgcmFkID0gTWF0aC5hdGFuMihjbGllbnQueSAtIGNlbnRlci55LCBjbGllbnQueCAtIGNlbnRlci54KTtcclxuICAgICAgICBlbGVtZW50LnJvdGF0ZShNYXRoLnJvdW5kKGpvaW50LmcudG9EZWcocmFkKSAvIGFuZ2xlU3RlcCkgKiBhbmdsZVN0ZXAsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBlbC5vZmYoJ21vdXNldXAnLCB0ZXJtaW5hdGUpO1xyXG4gICAgICAgIGVsLm9mZignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICAgICAgZWwub2ZmKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdtLXRyYW5zZm9ybS1qb2ludC1tYW5pcHVsYXRpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlbC5nZXQoMCkpIHtcclxuICAgICAgICAgICAgdGVybWluYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbC5vbignbW91c2V1cCcsIHRlcm1pbmF0ZSk7XHJcbiAgICBlbC5vbignbW91c2VvdXQnLCBtb3VzZW91dCk7XHJcbiAgICBlbC5vbignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuXHJcbiAgICBlbC5hZGRDbGFzcygnbS10cmFuc2Zvcm0tam9pbnQtbWFuaXB1bGF0aW5nJyk7XHJcbn1cclxuXHJcbmV4cG9ydHMuUm90YXRlUmVhY3RvciA9IFJvdGF0ZVJlYWN0b3I7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgam9pbnQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snam9pbnQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2pvaW50J10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIGlnbm9yZSgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG5cclxuZXhwb3J0cy52YWxpZGF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY2VsbFZpZXdTLCBtYWduZXRTLCBjZWxsVmlld1QsIG1hZ25ldFQsIGVuZCwgbGlua1ZpZXcpIHtcclxuICAgIGlnbm9yZShtYWduZXRTLCBtYWduZXRUKTtcclxuICAgIGlmIChjZWxsVmlld1MgPT09IGNlbGxWaWV3VCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGlmIChsaW5rVmlldy5tb2RlbC52YWxpZGF0ZUNvbm5lY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gbGlua1ZpZXcubW9kZWwudmFsaWRhdGVDb25uZWN0aW9uKGNlbGxWaWV3UywgbWFnbmV0UywgY2VsbFZpZXdULCBtYWduZXRULCBlbmQsIGxpbmtWaWV3KTtcclxuICAgIH1cclxuICAgIGlmIChlbmQgPT09ICdzb3VyY2UnKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xICE9PSBsaW5rVmlldy5tb2RlbC52YWxpZFNvdXJjZXMuaW5kZXhPZihjZWxsVmlld1MubW9kZWwuZ2V0KCd0eXBlJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xICE9PSBsaW5rVmlldy5tb2RlbC52YWxpZFRhcmdldHMuaW5kZXhPZihjZWxsVmlld1QubW9kZWwuZ2V0KCd0eXBlJykpO1xyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBqb2ludCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93Wydqb2ludCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnam9pbnQnXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gWm9vbVJlYWN0b3Iob3B0aW9ucykge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFpvb21SZWFjdG9yKSkgeyByZXR1cm4gbmV3IFpvb21SZWFjdG9yKG9wdGlvbnMpOyB9XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIW9wdGlvbnMucGFwZXIgfHwgdHlwZW9mIG9wdGlvbnMucGFwZXIgIT09ICdvYmplY3QnIHx8ICEob3B0aW9ucy5wYXBlciBpbnN0YW5jZW9mIGpvaW50LmRpYS5QYXBlcikpIHsgdGhyb3cgbmV3IEVycm9yKCdwYXBlciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5tb2RlbCB8fCB0eXBlb2Ygb3B0aW9ucy5tb2RlbCAhPT0gJ29iamVjdCcpIHsgdGhyb3cgbmV3IEVycm9yKCdtb2RlbCBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICghb3B0aW9ucy5lbCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2VsIG9wdGlvbiBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy5lbCkubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBlbCBvcHRpb24nKTsgfVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm1pblNjYWxlICE9PSAnbnVtYmVyJykgeyB0aHJvdyBuZXcgRXJyb3IoJ21pblNjYWxlIG9wdGlvbiBpcyBtYW5kYXRvcnkgYW5kIGhhcyB0byBiZSBhIG51bWJlcicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4U2NhbGUgIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignbWF4U2NhbGUgb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLm1pblNjYWxlIDwgMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ21pblNjYWxlIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybycpOyB9XHJcbiAgICBpZiAob3B0aW9ucy5taW5TY2FsZSA+IG9wdGlvbnMubWF4U2NhbGUpIHsgdGhyb3cgbmV3IEVycm9yKCdtYXhTY2FsZSBjYW5ub3QgYmUgbGVzcyB0aGUgbWluU2NhbGUnKTsgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICBlbCA9ICQoJChvcHRpb25zLmVsKVswXSksXHJcbiAgICAgICAgcGFwZXIgPSBvcHRpb25zLnBhcGVyLFxyXG4gICAgICAgIG1vZGVsID0gb3B0aW9ucy5tb2RlbCxcclxuICAgICAgICBtaW5TY2FsZSA9IG9wdGlvbnMubWluU2NhbGUsXHJcbiAgICAgICAgbWF4U2NhbGUgPSBvcHRpb25zLm1heFNjYWxlLFxyXG4gICAgICAgIHBhZGRpbmdab29tRSA9IHt3aWR0aDogNTAsIGhlaWdodDogNTB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVNjYWxlKHNjYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHNjYWxlLCBtaW5TY2FsZSksIG1heFNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZXdoZWVsKGUpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IGVsLm9mZnNldCgpLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcCA9IGVsLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgd2lkdGggPSBlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBlbC5oZWlnaHQoKSxcclxuICAgICAgICAgICAgdG9wTGVmdCA9IGpvaW50LmcucG9pbnQobGVmdCwgdG9wKSxcclxuICAgICAgICAgICAgYm90dG9tUmlnaHQgPSBqb2ludC5nLnBvaW50KGxlZnQgKyB3aWR0aCwgdG9wICsgaGVpZ2h0KSxcclxuICAgICAgICAgICAgY3VycmVudCA9IGpvaW50LmcucG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICBtaW5Mb2NhbCA9IHBhcGVyLmNsaWVudFRvTG9jYWxQb2ludCh0b3BMZWZ0KSxcclxuICAgICAgICAgICAgbWF4TG9jYWwgPSBwYXBlci5jbGllbnRUb0xvY2FsUG9pbnQoYm90dG9tUmlnaHQpLFxyXG4gICAgICAgICAgICBzdGFydExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGN1cnJlbnQpLFxyXG4gICAgICAgICAgICBzY2FsZSA9IHt4OiB3aWR0aCAvIChtYXhMb2NhbC54IC0gbWluTG9jYWwueCksIHk6IGhlaWdodCAvIChtYXhMb2NhbC55IC0gbWluTG9jYWwueSl9LFxyXG4gICAgICAgICAgICBvZmZzZXRDbGllbnQsXHJcbiAgICAgICAgICAgIG9yaWdpbjtcclxuICAgICAgICBzY2FsZSA9IG5vcm1hbGl6ZVNjYWxlKHNjYWxlLnggKiBNYXRoLnBvdygxLjEsIGUuZGVsdGFZICogZS5kZWx0YUZhY3RvciAvIDEwMDApKTtcclxuICAgICAgICBwYXBlci5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIG1pbkxvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KHRvcExlZnQpO1xyXG4gICAgICAgIG1heExvY2FsID0gcGFwZXIuY2xpZW50VG9Mb2NhbFBvaW50KGJvdHRvbVJpZ2h0KTtcclxuICAgICAgICBzY2FsZSA9IGpvaW50LmcucG9pbnQod2lkdGggLyAobWF4TG9jYWwueCAtIG1pbkxvY2FsLngpLCBoZWlnaHQgLyAobWF4TG9jYWwueSAtIG1pbkxvY2FsLnkpKTtcclxuICAgICAgICBvZmZzZXRDbGllbnQgPSBqb2ludC5nLnBvaW50KHN0YXJ0TG9jYWwueCAqIHNjYWxlLngsIHN0YXJ0TG9jYWwueSAqIHNjYWxlLnkpO1xyXG4gICAgICAgIG9yaWdpbiA9IGpvaW50LmcucG9pbnQoZS5jbGllbnRYIC0gb2Zmc2V0Q2xpZW50LngsIGUuY2xpZW50WSAtIG9mZnNldENsaWVudC55KTtcclxuXHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG9yaWdpbi54IC0gbGVmdCwgb3JpZ2luLnkgLSB0b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBvaW50ZXJkYmxjbGljaygpIHtcclxuICAgICAgICBpZiAobW9kZWwuZ2V0RWxlbWVudHMoKS5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgLy8gaXQgaXMgc2ltaWxhciB0byBwYXBlci5zY2FsZUNvbnRlbnRUb0ZpdCgpOyBidXQgaSByZXF1aXJlIHRvIGRvIGl0IG1hbnVhbGx5IHRvIGNoYW5nZSBldmVuIHRoZSBvcmlnaW5cclxuICAgICAgICB2YXIgd2lkdGggPSBlbC53aWR0aCgpIC0gcGFkZGluZ1pvb21FLndpZHRoICogMixcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWwuaGVpZ2h0KCkgLSBwYWRkaW5nWm9vbUUuaGVpZ2h0ICogMixcclxuICAgICAgICAgICAgYmJveCA9IG1vZGVsLmdldEJCb3gobW9kZWwuZ2V0RWxlbWVudHMoKSwge3VzZU1vZGVsR2VvbWV0cnk6IHRydWV9KSxcclxuICAgICAgICAgICAgc2NhbGVYID0gd2lkdGggLyBiYm94LndpZHRoLFxyXG4gICAgICAgICAgICBzY2FsZVkgPSBoZWlnaHQgLyBiYm94LmhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSwgbWF4U2NhbGUpLCBtaW5TY2FsZSksXHJcbiAgICAgICAgICAgIG94ID0gKHdpZHRoIC0gYmJveC53aWR0aCAqIHNjYWxlKSAvIDIgLSBiYm94LnggKiBzY2FsZSxcclxuICAgICAgICAgICAgb3kgPSAoaGVpZ2h0IC0gYmJveC5oZWlnaHQgKiBzY2FsZSkgLyAyIC0gYmJveC55ICogc2NhbGU7XHJcblxyXG4gICAgICAgIHBhcGVyLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgcGFwZXIuc2V0T3JpZ2luKG94ICsgcGFkZGluZ1pvb21FLndpZHRoLCBveSArIHBhZGRpbmdab29tRS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcGVyLm9uKCdibGFuazpwb2ludGVyZGJsY2xpY2snLCBwb2ludGVyZGJsY2xpY2spO1xyXG4gICAgZWwub24oJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsKTtcclxuXHJcbiAgICBzZWxmLnpvb21FID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBvaW50ZXJkYmxjbGljaygpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0cy5ab29tUmVhY3RvciA9IFpvb21SZWFjdG9yO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIHRoZSBNLVRyYW5zZm9ybS5qcyBwcm9qZWN0IGF1dGhvcnMuIFBsZWFzZSBzZWUgdGhlXHJcbi8vIEFVVEhPUlMgZmlsZSBmb3IgZGV0YWlscy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXNcclxuLy8gZ292ZXJuZWQgYnkgYSBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxyXG4vKmpzbGludCBub2RlOiB0cnVlLCBub21lbjogdHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpLFxyXG4gICAgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIEVsZW1lbnRzTWVudShvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRWxlbWVudHNNZW51KSkgeyByZXR1cm4gbmV3IEVsZW1lbnRzTWVudShvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLmNvbnRhaW5lcikgeyB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBvcHRpb24gaXMgbWFuZGF0b3J5Jyk7IH1cclxuICAgIGlmICgkKG9wdGlvbnMuY29udGFpbmVyKS5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbnRhaW5lciBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLnRlbXBsYXRlKSB7IHRocm93IG5ldyBFcnJvcigndGVtcGxhdGUgb3B0aW9uIGlzIG1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCQob3B0aW9ucy50ZW1wbGF0ZSkubGVuZ3RoICE9PSAxKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCB0ZW1wbGF0ZSBvcHRpb24nKTsgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMuYnVpbGRlcnMpKSB7IHRocm93IG5ldyBFcnJvcignYnVpbGRlcnMgb3B0aW9ucyBpcyBtYW5kYXRvcnknKTsgfVxyXG4gICAgaWYgKCFvcHRpb25zLmNyZWF0ZUl0ZW1EcmFnZ2VyKSB7IHRocm93IG5ldyBFcnJvcignY3JlYXRlSXRlbURyYWdnZXIgb3B0aW9uIGlzIE1hbmRhdG9yeScpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY3JlYXRlSXRlbURyYWdnZXIgIT09ICdmdW5jdGlvbicpIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNyZWF0ZUl0ZW1EcmFnZ2VyIG9wdGlvbicpOyB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud2lkdGggIT09ICdudW1iZXInKSB7IHRocm93IG5ldyBFcnJvcignd2lkdGggb3B0aW9uIGlzIG1hbmRhdG9yeSBhbmQgaGFzIHRvIGJlIGEgbnVtYmVyJyk7IH1cclxuICAgIGlmIChvcHRpb25zLndpZHRoIDwgMiAqIG9wdGlvbnMucGFkZGluZykgeyB0aHJvdyBuZXcgRXJyb3IoJ3dpZHRoIGNhbm5vdCBiZSBsZXNzIHRoYW4gemVybyAob3IgMiB0aW1lIHBhZGRpbmcpJyk7IH1cclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0gJChfLmhlYWQoJChvcHRpb25zLmNvbnRhaW5lcikpKSxcclxuICAgICAgICBidWlsZGVycyA9IG9wdGlvbnMuYnVpbGRlcnMsXHJcbiAgICAgICAgY3JlYXRlSXRlbURyYWdnZXIgPSBvcHRpb25zLmNyZWF0ZUl0ZW1EcmFnZ2VyLFxyXG4gICAgICAgIHRlbXBsYXRlID0gb3B0aW9ucy50ZWFtcGxhdGUsXHJcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG5cclxuICAgIF8uZWFjaChidWlsZGVycywgZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgaXRlbSA9ICQodGVtcGxhdGUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XHJcbiAgICAgICAgY3JlYXRlSXRlbURyYWdnZXIoe2VsOiBpdGVtLCBjcmVhdGVFbGVtZW50czogYnVpbGRlciwgd2lkdGg6IHdpZHRoLCBtaW5IZWlnaHQ6IDUwLCBwYWRkaW5nOiAwfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0cy5FbGVtZW50c01lbnUgPSBFbGVtZW50c01lbnU7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgdGhlIE0tVHJhbnNmb3JtLmpzIHByb2plY3QgYXV0aG9ycy4gUGxlYXNlIHNlZSB0aGVcclxuLy8gQVVUSE9SUyBmaWxlIGZvciBkZXRhaWxzLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpc1xyXG4vLyBnb3Zlcm5lZCBieSBhIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXHJcbi8qanNsaW50IG5vZGU6IHRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCksXHJcbiAgICAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpLFxyXG4gICAga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKSxcclxuICAgIGRvY3VtZW50ID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2RvY3VtZW50J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydkb2N1bWVudCddIDogbnVsbCk7XHJcblxyXG5rby5iaW5kaW5nSGFuZGxlcnMuZXhlY3V0ZU9uRW50ZXIgPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3NBY2Nlc3Nvciwgdmlld01vZGVsKSB7XHJcbiAgICAgICAgXy5ub29wKHZhbHVlQWNjZXNzb3IpO1xyXG4gICAgICAgIHZhciBhbGxCaW5kaW5ncyA9IGFsbEJpbmRpbmdzQWNjZXNzb3IoKTtcclxuICAgICAgICAkKGVsZW1lbnQpLmtleXByZXNzKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKTtcclxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxCaW5kaW5ncy5leGVjdXRlT25FbnRlci5jYWxsKHZpZXdNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYXBCYXNlKGUsIGYpIHtcclxuICAgIHZhciBmaWVsZCA9IHtcclxuICAgICAgICBuYW1lOiBmLm5hbWUsXHJcbiAgICAgICAgdHlwZTogZi50eXBlLFxyXG4gICAgICAgIHByb3BlcnR5OiBmLnByb3BlcnR5LFxyXG4gICAgICAgIHZhbHVlOiBrby5vYnNlcnZhYmxlKGUucHJvcChmLnByb3BlcnR5KSlcclxuICAgIH07XHJcbiAgICBmaWVsZC52YWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgZS5wcm9wKGYucHJvcGVydHksIHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG52YXIgbWFwU3RyaW5nID0gbWFwQmFzZTtcclxudmFyIG1hcEJvb2xlYW4gPSBtYXBCYXNlO1xyXG5cclxuZnVuY3Rpb24gbWFwQm9vbGVhblNldChlLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSB7XHJcbiAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgIHR5cGU6IGYudHlwZSxcclxuICAgICAgICBpdGVtczogZi5pdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG1hcEJvb2xlYW4oZSwgdik7IH0pXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdHJpbmdTZXQoZSwgZikge1xyXG4gICAgdmFyIGZpZWxkID0ge1xyXG4gICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICB0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgc3RyaW5nczoga28ub2JzZXJ2YWJsZUFycmF5KF8oZS5nZXQoZi5wcm9wZXJ0eSkgfHwgW10pLnNvcnQoKS51bmlxKHRydWUpLnZhbHVlKCkpLFxyXG4gICAgICAgIHZhbHVlOiBrby5vYnNlcnZhYmxlKCcnKSxcclxuICAgICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlKCkudHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGQuc3RyaW5ncyhfKGZpZWxkLnN0cmluZ3MoKSkuY29uY2F0KGZpZWxkLnZhbHVlKCkudHJpbSgpKS5zb3J0KCkudW5pcSh0cnVlKS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLnN0cmluZ3MucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgZmllbGQuc3RyaW5ncy5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0cmluZ3MpIHtcclxuICAgICAgICBlLnByb3AoZi5wcm9wZXJ0eSwgc3RyaW5ncyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRW51bShlLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSBtYXBCYXNlKGUsIGYpO1xyXG4gICAgZmllbGQudmFsdWVzID0gZi52YWx1ZXM7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcE51bWJlcihlLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSBtYXBCYXNlKGUsIGYpO1xyXG4gICAgZmllbGQubWluID0gZi5taW47XHJcbiAgICBmaWVsZC5tYXggPSBmLm1heDtcclxuICAgIGZpZWxkLnRleHQgPSBrby5wdXJlQ29tcHV0ZWQoe1xyXG4gICAgICAgIHJlYWQ6IGZpZWxkLnZhbHVlLFxyXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJy0nKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGZpZWxkLnZhbHVlKCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TnVtYmVyID0gKGYuaW50ZWdlciAmJiBwYXJzZUludCh2YWx1ZSwgMTApKSB8fCBwYXJzZUZsb2F0KHZhbHVlLCAxMCkgfHwgMCxcclxuICAgICAgICAgICAgICAgIG51bWJlciA9IGN1cnJlbnROdW1iZXI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZi5taW4gPT09ICdudW1iZXInKSB7IG51bWJlciA9IE1hdGgubWF4KGYubWluLCBudW1iZXIpOyB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZi5tYXggPT09ICdudW1iZXInKSB7IG51bWJlciA9IE1hdGgubWluKGYubWF4LCBudW1iZXIpOyB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ICE9PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE51bWJlciAhPT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWUubm90aWZ5U3Vic2NyaWJlcnMobnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLmV4dGVuZCh7bm90aWZ5OiAnYWx3YXlzJ30pO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBCaW5kaW5ncyhsLCBmKSB7XHJcbiAgICB2YXIgZmllbGQgPSB7XHJcbiAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgIHR5cGU6IGYudHlwZSxcclxuICAgICAgICBiaW5kaW5nczoga28ub2JzZXJ2YWJsZUFycmF5KChsLmdldChmLnByb3BlcnR5KSB8fCBbXSkuc2xpY2UoKSksXHJcbiAgICAgICAgb3V0cHV0OiBrby5vYnNlcnZhYmxlKCksXHJcbiAgICAgICAgaW5wdXQ6IGtvLm9ic2VydmFibGUoKSxcclxuICAgICAgICBhZGRCaW5kaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5vdXRwdXQoKSAmJiBmaWVsZC5pbnB1dCgpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5iaW5kaW5ncy5wdXNoKHtpbnB1dDogZmllbGQuaW5wdXQoKSwgb3V0cHV0OiBmaWVsZC5vdXRwdXQoKX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVCaW5kaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLmJpbmRpbmdzLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmllbGQub3V0cHV0cyA9IChsLmdldFNvdXJjZUVsZW1lbnQoKS5vdXRwdXRzICYmIGwuZ2V0U291cmNlRWxlbWVudCgpLm91dHB1dHMoKSkgfHxcclxuICAgICAgICAobC5nZXRTb3VyY2VFbGVtZW50KCkuZ2V0QW5jZXN0b3JzKClbMF0ub3V0cHV0cyAmJiBsLmdldFNvdXJjZUVsZW1lbnQoKS5nZXRBbmNlc3RvcnMoKVswXS5vdXRwdXRzKCkpIHx8XHJcbiAgICAgICAgW107XHJcbiAgICBmaWVsZC5pbnB1dHMgPSBrby5jb21wdXRlZChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfKGwuZ2V0VGFyZ2V0RWxlbWVudCgpLmlucHV0cygpKVxyXG4gICAgICAgICAgICAgICAgLmRpZmZlcmVuY2UoXy5tYXAoZmllbGQuYmluZGluZ3MoKSwgZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIuaW5wdXQ7IH0pKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGZpZWxkLmJpbmRpbmdzLnN1YnNjcmliZShmdW5jdGlvbiAoYmluZGluZ3MpIHtcclxuICAgICAgICBsLnNldChmLnByb3BlcnR5LCBiaW5kaW5ncy5zbGljZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBFbGVtZW50c0xpc3QobCwgZikge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gbC5nZXQoZi5wcm9wZXJ0eSksXHJcbiAgICAgICAgaWdub3JlZCA9IF8ucmVqZWN0KGVsZW1lbnRzLCBmLmZpbHRlciksXHJcbiAgICAgICAgZmllbGQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgICAgdHlwZTogZi50eXBlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjoga28ub2JzZXJ2YWJsZUFycmF5KF8uY2hhaW4oZWxlbWVudHMpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGYuZmlsdGVyKVxyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHtpZDogaWQsIGRpc3BsYXk6IGYuZGlzcGxheShpZCl9OyB9KVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlKCkpXHJcbiAgICAgICAgfTtcclxuICAgIGZpZWxkLnRvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBmaWVsZC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4udW5zaGlmdCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmllbGQudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZmllbGQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLnNwbGljZShpbmRleCAtIDEsIDIsIHRoaXMsIGZpZWxkLmNoaWxkcmVuKClbaW5kZXggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZpZWxkLmRvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZmllbGQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPCBmaWVsZC5jaGlsZHJlbigpLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAyLCBmaWVsZC5jaGlsZHJlbigpW2luZGV4ICsgMV0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmaWVsZC5ib3R0b20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gZmllbGQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPCBmaWVsZC5jaGlsZHJlbigpLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgZmllbGQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmllbGQuY2hpbGRyZW4uc3Vic2NyaWJlKGZ1bmN0aW9uIChzb3J0ZWQpIHtcclxuICAgICAgICBsLnNldChmLnByb3BlcnR5LCBfLmNoYWluKHNvcnRlZCkubWFwKCdpZCcpLmNvbmNhdChpZ25vcmVkKS52YWx1ZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpZWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFbGVtZW50Vmlld01vZGVsKG9wdGlvbnMsIGNsb3NlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgY2VsbCA9IG9wdGlvbnMuY2VsbDtcclxuICAgIHNlbGYuaWQgPSBjZWxsLmlkO1xyXG4gICAgc2VsZi5maWVsZHMgPSBfLm1hcChvcHRpb25zLmZpZWxkcywgZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICBzd2l0Y2ggKGYudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBOdW1iZXIoY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcFN0cmluZyhjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdzdHJpbmdzZXQnOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwU3RyaW5nU2V0KGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gbWFwQm9vbGVhbihjZWxsLCBmKTtcclxuICAgICAgICBjYXNlICdlbnVtJzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcEVudW0oY2VsbCwgZik7XHJcbiAgICAgICAgY2FzZSAnYm9vbGVhbnNldCc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBCb29sZWFuU2V0KGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ2JpbmRpbmdzJzpcclxuICAgICAgICAgICAgcmV0dXJuIG1hcEJpbmRpbmdzKGNlbGwsIGYpO1xyXG4gICAgICAgIGNhc2UgJ2VsZW1lbnRzbGlzdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBFbGVtZW50c0xpc3QoY2VsbCwgZik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vZGFsRWRpdChvcHRpb25zKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTW9kYWxFZGl0KSkgeyByZXR1cm4gbmV3IE1vZGFsRWRpdChvcHRpb25zKTsgfVxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNlbGwgIT09ICdvYmplY3QnKSB7IHRocm93IG5ldyBFcnJvcignYXQgbGVhc3QgZWxlbWVudCBvciBsaW5rIHNob3VsZCBiZSBwcm92aWRlZCcpOyB9XHJcblxyXG4gICAgdmFyIGNlbGwgPSBvcHRpb25zLmNlbGwsXHJcbiAgICAgICAgZmllbGRzID0gY2VsbC5lZGl0YWJsZSAmJiBjZWxsLmVkaXRhYmxlKCksXHJcbiAgICAgICAgZWwgPSAkKHJlcXVpcmUoJy4vbW9kYWwuaHRtbCcpKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkcykgeyByZXR1cm47IH1cclxuXHJcbiAgICAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZChlbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gdGVhckRvd24oKSB7XHJcbiAgICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAga28uYXBwbHlCaW5kaW5ncyhuZXcgRWxlbWVudFZpZXdNb2RlbCh7Y2VsbDogY2VsbCwgZmllbGRzOiBmaWVsZHN9LCBmdW5jdGlvbiAoKSB7IGVsLm1vZGFsKCdoaWRlJyk7IH0pLCBlbC5maW5kKCcubW9kYWwtY29udGVudCcpWzBdKTtcclxuXHJcbiAgICBlbC5tb2RhbCgnc2hvdycpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCB0ZWFyRG93bik7XHJcbn1cclxuXHJcbmV4cG9ydHMuTW9kYWxFZGl0ID0gTW9kYWxFZGl0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+RWRpdCBFbGVtZW50IDxzbWFsbD4oaWQ6IDxzcGFuIGNsYXNzPVxcXCJzZWxlY3RhYmxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IGlkXFxcIj48L3NwYW4+KTwvc21hbGw+PC9oND5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiBkYXRhLWJpbmQ9XFxcImZvcmVhY2g6IGZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnc3RyaW5nJywgdmlzaWJsZTogdHlwZSA9PT0gJ3N0cmluZydcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLXNtLTIgY29udHJvbC1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lLCBhdHRyOiB7Zm9yOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDogdmFsdWUsIGV4ZWN1dGVPbkVudGVyOiAkcm9vdC5jbG9zZSwgYXR0cjoge2lkOiAnaW5wdXQtZmllbGQnICsgcHJvcGVydHl9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ251bWJlcicsIHZpc2libGU6IHR5cGUgPT09ICdudW1iZXInXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZSwgYXR0cjoge2ZvcjogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDogdGV4dCwgZXhlY3V0ZU9uRW50ZXI6ICRyb290LmNsb3NlLCBhdHRyOiB7aWQ6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eSwgbWluOiBtaW4sIG1heDogbWF4fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnYm9vbGVhbicsIHZpc2libGU6IHR5cGUgPT09ICdib29sZWFuJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDogdmFsdWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcImlmOiB0eXBlID09PSAnZW51bScsIHZpc2libGU6IHR5cGUgPT09ICdlbnVtJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWUsIGF0dHI6IHtmb3I6ICdpbnB1dC1maWVsZCcgKyBwcm9wZXJ0eX1cXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IHZhbHVlcywgb3B0aW9uc1RleHQ6ICduYW1lJywgb3B0aW9uc1ZhbHVlOiAndmFsdWUnLCB2YWx1ZTogdmFsdWUsIGF0dHI6IHtpZDogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdib29sZWFuc2V0JywgdmlzaWJsZTogdHlwZSA9PT0gJ2Jvb2xlYW5zZXQnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiIGRhdGEtYmluZD1cXFwiZm9yZWFjaDogaXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNoZWNrYm94LWlubGluZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDogdmFsdWUsIGF0dHI6IHtpZDogJ2lucHV0LWZpZWxkJyArIHByb3BlcnR5fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ3N0cmluZ3NldCcsIHZpc2libGU6IHR5cGUgPT09ICdzdHJpbmdzZXQnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcHBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD52YWx1ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDogc3RyaW5nc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcHJlPVxcXCJyb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJGluZGV4XFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkZGF0YVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnJlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dElucHV0OiB2YWx1ZSwgZXhlY3V0ZU9uRW50ZXI6IGFkZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogYWRkXFxcIj5hZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJpZjogdHlwZSA9PT0gJ2JpbmRpbmdzJywgdmlzaWJsZTogdHlwZSA9PT0gJ2JpbmRpbmdzJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcHBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5vdXRwdXQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5pbnB1dDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDogYmluZGluZ3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3ByZT1cXFwicm93XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRpbmRleFxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogb3V0cHV0XFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBpbnB1dFxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnJlbW92ZUJpbmRpbmdcXFwiPnJlbW92ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRmb29yPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBvdXRwdXRzLCB2YWx1ZTogb3V0cHV0XFxcIj48L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBpbnB1dHMsIHZhbHVlOiBpbnB1dFxcXCI+PC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogYWRkQmluZGluZ1xcXCI+YWRkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiaWY6IHR5cGUgPT09ICdlbGVtZW50c2xpc3QnLCB2aXNpYmxlOiB0eXBlID09PSAnZWxlbWVudHNsaXN0J1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtc20tMiBjb250cm9sLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMCBjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcHBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBjaGlsZHJlblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcHJlPVxcXCJyb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJGluZGV4XFxcIj48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBkaXNwbGF5XFxcIj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQudG9wLCBkaXNhYmxlOiAkaW5kZXgoKSA9PT0gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnVwLCBkaXNhYmxlOiAkaW5kZXgoKSA9PT0gMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS11cFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmRvd24sIGRpc2FibGU6ICRpbmRleCgpICsgMSA9PT0gJHBhcmVudC5jaGlsZHJlbigpLmxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuYm90dG9tLCBkaXNhYmxlOiAkaW5kZXgoKSArIDEgPT09ICRwYXJlbnQuY2hpbGRyZW4oKS5sZW5ndGhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2xvc2U8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcgJiYge30gfHwgdGhpcztcblxuICB2YXIgZG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiIFs8IUVOVElUWSBuYnNwIFwiJiMxNjA7XCI+XT4nO1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVEb21Ob2RlKGVsKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIEhUTUxFbGVtZW50IG9yIFNWR0VsZW1lbnQgaXMgcmVxdWlyZWQ7IGdvdCAnICsgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLDApID09IDAgJiYgdXJsLmxhc3RJbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ob3N0KSA9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCwgY2FsbGJhY2spIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICB2YXIgaW1hZ2VzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKSxcbiAgICAgICAgbGVmdCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgIGNoZWNrRG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGNoZWNrRG9uZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBpbWFnZS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGlmIChpc0V4dGVybmFsKGhyZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVuZGVyIGVtYmVkZGVkIGltYWdlcyBsaW5raW5nIHRvIGV4dGVybmFsIGhvc3RzOiBcIitocmVmLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI7XG4gICAgICAgIGhyZWYgPSBocmVmIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGltZy5zcmMgPSBocmVmO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGxvYWQgXCIraHJlZik7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KShpbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZWN0b3JSZW1hcCA9IG9wdGlvbnMuc2VsZWN0b3JSZW1hcDtcbiAgICB2YXIgbW9kaWZ5U3R5bGUgPSBvcHRpb25zLm1vZGlmeVN0eWxlO1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIC8vIGVhY2ggZm9udCB0aGF0IGhhcyBleHRyYW5sIGxpbmsgaXMgc2F2ZWQgaW50byBxdWV1ZSwgYW5kIHByb2Nlc3NlZFxuICAgIC8vIGFzeW5jaHJvbm91c2x5XG4gICAgdmFyIGZvbnRzUXVldWUgPSBbXTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVzaGVldCBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIitzaGVldHNbaV0uaHJlZik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbWF0Y2g7IGogPCBydWxlcy5sZW5ndGg7IGorKywgbWF0Y2ggPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tqXTtcbiAgICAgICAgICBpZiAodHlwZW9mKHJ1bGUuc3R5bGUpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZm9sbG93aW5nIENTUyBydWxlIGhhcyBhbiBpbnZhbGlkIHNlbGVjdG9yOiBcIicgKyBydWxlICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yVGV4dCkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgQ1NTIHNlbGVjdG9yIFwiJyArIHNlbGVjdG9yVGV4dCArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChydWxlLnNlbGVjdG9yVGV4dCkgOiBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBtb2RpZnlTdHlsZSA/IG1vZGlmeVN0eWxlKHJ1bGUuc3R5bGUuY3NzVGV4dCkgOiBydWxlLnN0eWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHsgXCIgKyBjc3NUZXh0ICsgXCIgfVxcblwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHJ1bGUuY3NzVGV4dC5tYXRjaCgvXkBmb250LWZhY2UvKSkge1xuICAgICAgICAgICAgICAvLyBiZWxvdyB3ZSBhcmUgdHJ5aW5nIHRvIGZpbmQgbWF0Y2hlcyB0byBleHRlcm5hbCBsaW5rLiBFLmcuXG4gICAgICAgICAgICAgIC8vIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAvLyAgIC8vIC4uLlxuICAgICAgICAgICAgICAvLyAgIHNyYzogbG9jYWwoJ0FiZWwnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9hYmVsL3Y2L1V6Ti1pZWpSMVZvWFUyT2MtN0xzYnZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZjIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFRoaXMgcmVnZXggd2lsbCBzYXZlIGV4dHJuYWwgbGluayBpbnRvIGZpcnN0IGNhcHR1cmUgZ3JvdXBcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxSZWdleHAgPSAvdXJsXFwoW1wiJ10/KC4rPylbXCInXT9cXCkvO1xuICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gc3VwcG9ydCBtdWx0aXBsZSB1cmwgZGVjbGFyYXRpb25zIHBlciBmb250LlxuICAgICAgICAgICAgICB2YXIgZm9udFVybE1hdGNoID0gcnVsZS5jc3NUZXh0Lm1hdGNoKGZvbnRVcmxSZWdleHApO1xuXG4gICAgICAgICAgICAgIHZhciBleHRlcm5hbEZvbnRVcmwgPSAoZm9udFVybE1hdGNoICYmIGZvbnRVcmxNYXRjaFsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgIHZhciBmb250VXJsSXNEYXRhVVJJID0gZXh0ZXJuYWxGb250VXJsLm1hdGNoKC9eZGF0YTovKTtcbiAgICAgICAgICAgICAgaWYgKGZvbnRVcmxJc0RhdGFVUkkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgaWdub3JlIGRhdGEgdXJpIC0gdGhleSBhcmUgYWxyZWFkeSBlbWJlZGRlZFxuICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9ICcnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybCkge1xuICAgICAgICAgICAgICAgIC8vIG9rYXksIHdlIGFyZSBsdWNreS4gV2UgY2FuIGZldGNoIHRoaXMgZm9udCBsYXRlclxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuIl19
