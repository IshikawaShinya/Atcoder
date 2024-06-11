"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// 標準入力を取得する
var inputs = fs.readFileSync("/dev/stdin", "utf8");
var inputArray = inputs.split(/\s/);
//アウトプット
console.log("input " + inputArray[0] + " " + inputArray[1] + " " + inputArray[2]);
