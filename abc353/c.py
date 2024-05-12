def SigmaSolve():
    N = int(input())
    A = []
    sum = 0
    for x in map(int,input().split()):
        sum += ((N-1) * x)//(10*8)
    return print(sum)

SigmaSolve()