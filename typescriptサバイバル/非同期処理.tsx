
// ・・・・・・・・・・・Promise記法に
// type User = {
//     name: string;
//     age: number;
// };

// function getUser(): Promise<User> {
//     return new Promise((resolve) => {
//         const user: User = {
//             name: "Taro",
//             age: 10,
//         };
//         resolve(user);
//     });
// }
// getUser().then((user:User) => {
//     console.log(user);
// })

// ・・・・・・・・・・非同期処理をやろうとしたが、改善できる
// グローバルにこの変数を持っていれば、この書き方を実行できると思う。
// typeして、変数を作っておく。
// function request1(): Promise<number> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 1000);
//     });
// }
// function request2(result1 :number): Promise<number>{
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(result1 + 1);
//         }, 1000);
//     });
// }

// function request3(result2: number): Promise<number> {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve(result2 + 2);
//         }, 1000);
//     })
// }
// request1()
//   .then((result1) => {
//     return request2(result1);
//   })
//   .then((result2) => {
//     return request3(result2);
//   })
//   .then((result3) => {
//     console.log(result3);
//     // @log: 4
//   });

// // 同期的処理
// // 計測
// const elaplsedTime = (start: number, end: number): string => {
//     return (end - start).toFixed(0);
// };
// // タスク消化
// const doTask = (task: string, time: number): Promise<string> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(task + ": " + String(time) + "分");
//         },time);
//     });
// };

// const singleTask = async () => {
//     console.log("===順番タスク開始===");

//     const start: number = performance.now();
//     let end: number

//     await doTask("部屋掃除をする", 30)
//     end = performance.now()
//     console.log(elaplsedTime(start, end) + "分");
    
//     await doTask("米を炊く", 50)
//     end = performance.now()
//     console.log(elaplsedTime(start, end) + "分");
    
//     await doTask("味噌汁を作る", 10)
//     end = performance.now()
//     console.log(elaplsedTime(start, end) + "分");
    
//     await doTask("食事をする", 30)
//     end = performance.now()
//     console.log(elaplsedTime(start, end) + "分");

// };
// singleTask()

// //非同期的処理
// const multiTasks = async() => {
//     console.log("===非同期的処理===");

//     const start: number = performance.now()
//     let end: number

//     await Promise.all([
//         doTask("部屋掃除", 30).then(() => (doTask("味噌汁作成", 10))),
//         doTask("米を炊く", 30)
//     ])
//     end = performance.now()
//     console.log(elaplsedTime(start, end) + "分");

//     await doTask("食事をする", 30);
//     end = performance.now();
//     console.log(elaplsedTime(start, end) + "分");
   
// }

// multiTasks()

Promise.resolve(1)
  .then(() => {
    // throw new Error();
    throw new Error();
  })
  .then(() => {
    console.log("fulilled");
  })
  .catch(() => {
    console.log("rejected");
  });