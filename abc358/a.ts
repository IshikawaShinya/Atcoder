function a358(input: string) {
    const [S, T]:string[] = input.trim().split(" ")
    if (S === "AtCoder" && T === "Land") console.log("Yes");
    else console.log("No"); 
  }
  
  a358(require("fs").readFileSync("/dev/stdin", "utf8"));