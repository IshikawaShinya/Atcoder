def buildings():
    N = int(input())
    A = list(map(int, input().split()))w
    ans = -1
    target = A[0]
    for i in range(N):
        if i == 0: continue
        if target < A[i]:
            ans = i + 1
            break
    return print(ans)
buildings()