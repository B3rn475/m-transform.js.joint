// Copyright (c) 2016, the M-Transform.js project authors. Please see the
// AUTHORS file for details. All rights reserved. Use of this source code is
// governed by a MIT-style license that can be found in the LICENSE file.
/*jslint node: true, nomen: true */
"use strict";

var _ = require('lodash'),
    $ = require('jquery');

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
