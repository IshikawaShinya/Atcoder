S = input()
T = input()

index = 0
ans = ""
if S == T:
    for k in range(len(S)):
        ans = ans + str(k + 1) + " "
    print(ans[:-1])
else:    
    for i in range(len(S)):
        for j in range(index,len(T)):
            # print("-")
            if S[i] == T[j]:
                ans = ans + str(j+1) + " "
                index = j + 1
                break
            else:
                continue
    print(ans[:-1])
