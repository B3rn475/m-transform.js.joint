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
