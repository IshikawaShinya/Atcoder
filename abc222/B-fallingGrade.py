N,P = map(int,input().split())
a = map(int,input().split())
print(sum(x<P for x in a))
