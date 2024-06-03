def solve():
    N, X = map(int,input().split())
    A = list(map(int,input().split()))

    A.sort()

    def f(target):
        lef = -1
        rig = N
        while rig - lef > 1:
            mid = (lef + rig) // 2
            if A[mid] > target:
                rig = mid
            else:
                lef = mid
        return rig

    ans = 0

    for a in A:
        if f(a+X) - f(a+X-1) > 0:
            print("Yes")
            return

    print("No")
    return

solve()