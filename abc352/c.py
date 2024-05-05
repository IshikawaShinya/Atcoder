N = int(input())
ans = 0
history =[]
max = 0
for i in range(N):
    A, B = map(int,input().split())
    if i == N-1:
        ans = ans + B
        break
    else:
        ans = ans + A
    history.append(ans)
print(ans)





# for i,j in map(int,input().split()):
#     print("{},{}".format(i,j))