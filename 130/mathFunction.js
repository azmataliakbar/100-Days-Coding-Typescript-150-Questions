"use strict";
//todo=>  This file is: mathFunctions.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var add = function (a, b) { return a + b; }; //? This line 5 will be export to index.ts
exports.add = add;
//! This line exports an add function from mathFunctions.ts
//change to "type": "commonjs" in package.json file
