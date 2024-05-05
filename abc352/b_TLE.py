S = input()
T = input()

# ans = ""
ans = []
i,j = 0,0

for j in range(len(T)):
    if i == len(S) :
        break
    else:
        if S[i] == T[j]:
            # ans +=  str(j + 1) + " "
            ans.append(j + 1)
            i += 1
        else:
            j += 1
print(ans[:-1])
# print(*ans)





