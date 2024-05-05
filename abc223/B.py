S = input()
n = len(S)
v = []
for i in range(n):
    v.append(S[i+1:n]+S[0:i+1])
print(min(v))
print(max(v))