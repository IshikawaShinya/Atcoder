def JudgeRideNumber():
    N, K = map(int,input().split())
    A = []
    # for x in map(int,input().split()):
    #     A.append(x)
    A = list(map(int, input().split()))
    # print(A)
    emptySeat = K
    startNumber = 0
    j = 0
    for i in range(1000):
        # print("j {},emptySeat {},startnumber {}".format(j,emptySeat, startNumber))
        if j > N-1:break
        if emptySeat < A[j]:
            startNumber += 1
            emptySeat = K
            continue
        else:
            emptySeat = emptySeat - A[j]
            j += 1
    return print(startNumber + 1)

JudgeRideNumber()
