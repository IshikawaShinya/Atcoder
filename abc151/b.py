

def solve():
    N, K, M = map(int, input().split())
    A = map(int, input().split())

    x = (M * N) - sum(A)
    if x > K:
        print(-1)
        return
    x = max(x, 0)    
    print(x)
    return

solve()
