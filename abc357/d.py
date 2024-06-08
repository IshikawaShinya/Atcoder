n = input()
N = int(n)
VN = ""
C = 998244353
for i in range(N):
    VN += n
print(int(VN) % C)