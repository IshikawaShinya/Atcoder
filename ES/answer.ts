//氏名 石川晋也
import * as fs from "fs";

interface Iprops {
    startHour: number, 
    endHour: number,
    targetHour: number
}
function hourFitsInterval({startHour, endHour, targetHour} : Iprops):boolean | Error{
    if(startHour < 0 ?? 23 < endHour) return new Error("設計と違う変数の値だぞ")
    let start: number = endHour < startHour ? startHour - 24 : startHour;
    let end: number = endHour;
    return start <= targetHour && targetHour < end;
}

//入力例 "23 4 5"
const inputs = fs.readFileSync("/dev/stdin", "utf8");
const inputArray = inputs.split(/\s/);
console.log(
    hourFitsInterval({startHour: Number(inputArray[0]), endHour: Number(inputArray[1]), targetHour: Number(inputArray[2])})
);
