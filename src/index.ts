// import * as fs from "fs";
// // 標準入力を取得する
// const inputs = fs.readFileSync("/dev/stdin", "utf8");
// const inputArray = inputs.split(/\s/)

// //アウトプット
// console.log("input "+ inputArray[0] + " " + inputArray[1] + " " + inputArray[2]);
//------------------------------------------------------
//   function a375(inputs:string){
//     const [NM, Hs]: string[] = inputs.trim().split("\n");
//     const [N, M]: number[] = NM.split(" ").map(Number);
//     const numberH: number[] = Hs.split(" ").map(Number);
//     let sum: number = 0;
//     let result: number = 0;
//     let i: number = 0;
//     do {
//         sum += numberH[i];
//         result++;
//         i++;
//     } while (sum <= M);

//     console.log(result - 1);
//   }
//   a375(require("fs").readFileSync("/dev/stdin", "utf8"));
