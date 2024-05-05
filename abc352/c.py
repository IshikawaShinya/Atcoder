N = int(input())
# ans = 0
# history =[]
# max = 0
# for i in range(N):
#     A, B = map(int,input().split())
#     if max < B - A:
#         max = B - A
#     ans += A
# print(ans + max)

A = []
B = []
maxValue = 0
for i in range(N):
    a, b = map(int,input().split())
    A.append(a)
    B.append(b)
    maxValue = max(maxValue,b - a)
print(sum(A) + maxValue)

