def subsegmentReverse():
    N, L, R = map(int,input().split())
    list =[]
    output = ""
    for i in range(N):
        if i >= L - 1 and i <= R - 1:
            output = output + "$R + L -i - 1"
            list.append(R + L -i - 1)
            continue
        list.append(i+1)
    print(" ".join(map(str,list)))
    return 

subsegmentReverse()
