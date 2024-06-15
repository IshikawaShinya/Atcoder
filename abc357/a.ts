// // import * as fs from "fs";
// // // 標準入力を取得する
// // const inputs = fs.readFileSync("/dev/stdin", "utf8");
// // const inputArray = inputs.split(/\s/)

// // //アウトプット
// // console.log("input "+ inputArray[0] + " " + inputArray[1] + " " + inputArray[2]);
// //------------------------------------------------------

// function main(input: string) {
//     const [NM, Hs] = input.trim().split("\n");
//     let [N, M] = NM.split(" ").map(Number);
//     let H = Hs.split(" ").map(Number);
  
//     let sum = 0;
//     let result = 0;
//     let i = 0;
//     do {
//       sum += H[i];
//       result++;
//       i++;
//     } while (sum <= M);
  
//     console.log(result - 1);
//   }
  
//   main(require("fs").readFileSync("/dev/stdin", "utf8"));
  