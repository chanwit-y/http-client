"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.HttpClient = void 0;
var HttpClient_1 = require("./HttpClient");
Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function () { return HttpClient_1.HttpClient; } });
var Greeter = function (name) { return "Hello " + name; };
exports.Greeter = Greeter;
