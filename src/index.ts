import * as fs from "fs";
// 標準入力を取得する
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split(/\s/)

//アウトプット
console.log("input "+ inputArray[0] + " " + inputArray[1] + " " + inputArray[2]);
