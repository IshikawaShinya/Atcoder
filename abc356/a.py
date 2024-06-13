def subsegmentReverse():
    N, L, R = map(int,input().split())
    #解答１
    list =[]
    for i in range(N):
        if i >= L - 1 and i <= R - 1:
            list.append(R + L -i - 1)
            continue
        list.append(i+1)
    print(" ".join(map(str,list)))

    #解答2
    # A = list(range(1, N + 1))
    # A[L - 1 : R] = A[L - 1 : R][::-1]
    # print(*A)
    return 

subsegmentReverse()
