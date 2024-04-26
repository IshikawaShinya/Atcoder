def comparisonString():
    a, b = input().split()
    ans = ""
    print(a*int(b))
    print(a * int(b))
    if a == b:
        for i in range(a):
            ans = ans + str(b)
        print(ans)
        return
    else:
        for i in range(max(a, b)):
            ans = ans + str(min(a, b))
        print(ans)
        return

comparisonString()
    
