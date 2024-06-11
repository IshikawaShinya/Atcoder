function a357(input: string) {
    const [[n, m], h]: number[][] = input
      .trim()
      .split("\n")
      .map((a) => a.split(" ").map(Number));
  
    let cnt = m;
    let ans = n;
    for (let i = 0; i < n; i++) {
      cnt -= h[i];
      if (cnt < 0) {
        ans = i;
        break;
      }
    }
    console.log(ans);
  }
  a357(require("fs").readFileSync("/dev/stdin", "utf8"));