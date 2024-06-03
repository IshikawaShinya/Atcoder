def pianotwo():
    N, M = map(int,input().split())
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    C = A + B
    C.sort()
    # print(C)
    index = 0
    renzoku = 0
    for i in range(N + M - 1):
        if C[i] in A and C[i+1] in A: 
            print("Yes")
            return
    print("No")
    return
            
pianotwo()