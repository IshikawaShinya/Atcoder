X,Y=map(int,input().split('.'))
if Y >= 0 and Y <=2:
    print(f"{X}-")
elif Y >= 3 and Y <= 6:
    print(f"{X}")
elif Y >= 7 and Y <= 9:
    print(f"{X}+")
    