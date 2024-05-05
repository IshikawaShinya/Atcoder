S = list(input())
T = list(input())
i = 0
j = 0
ans = []
while i < len(S) and j < len(T):
    if S[i] == T[j]:
        i += 1
        ans.append(j + 1)
    j += 1
print(*ans)
