// import * as fs from "fs";
// // 標準入力を取得する
// const inputs = fs.readFileSync("/dev/stdin", "utf8");
// const inputArray = inputs.split(/\s/)

// import { start } from "repl";

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





// class Arr<T>{
//     constructor(readonly x:T){
//         this.x = x
//     }

//     display(){
//         console.log(typeof this.x)
//     }
// }
// const a = new Arr<number>(1);
// a.display()
// const b = new Arr<string>("1");
// b.display()

// const numbers: Array<number> = [1,2,3,4];
// const numbers1: Array<number> = new Array();

// const map_numbers = numbers.map<number>((element) => element ** 2)

// type Address = {
//     country: string;
//     postalCode: string;
//     address1: string;
// }

// const addresses: Map<number, Address> = new Map<number, Address>();
// addresses.set(10222, {
//     country: "日本",
//     postalCode: "8256405",
//     address1: "東京都",
// });


// function 合計(a: number, b: number):number{
//     return a + b;
// }

// function sendform(a: string | null):string | null{
//     return a
// } 
// const data1:string | null = "石川晋也";

// type Point2D = [number, number]
// type dest = [string, Point2D]
// const dest1: dest = ["石川県",[1,2]]

// interface Person{
//     firstName: string;
//     lastName: string;
// }

// class Employee implements Person {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName:string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
