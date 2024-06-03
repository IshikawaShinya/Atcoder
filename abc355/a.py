def detector():
    A,B = map(int, input().split())
    if A == B:
        print(-1)
        return 
    for i in range(3):
        if i+1 == A :continue
        if i+1 == B :continue
        print(i+1)
        return 

detector()
