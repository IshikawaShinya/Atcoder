N, M = map(int,input().split())
A = []
for i in range(2*N):
    A.append(input())
rank = [[0,i] for i in range(2*N)]

def janken (a,b):
    #引き分けなら-1,前者勝ちなら0,後者勝ちなら1:
    if a == b: return -1
    if a == "P" and b == "C": return 1
    if a == "C" and b == "G": return 1
    if a == "G" and b == "P": return 1
    return 0
for j in range(M):
    for i in range(N):
        player1 = rank[2*i][1]
        player2 = rank[2*i+1][1]
        result = janken(A[player1][j],A[player2][j])
        # print("{}ラウンド{}番目、player1[{}],player2[{}]の結果は[{}], {}".format(j, i, player1, player2, result, rank))
        if result == -1: continue
        rank[2*i + result][0] -= 1
    rank.sort()
for _,i in rank:print(i+1)
