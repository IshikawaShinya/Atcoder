A,B,C = map(int,input().split())
print(A,B,C)
flag = False
for i in range(A,B+1,1):
    if i % C == 0:
        flag = True
        break
print(i) if flag else print(-1)
