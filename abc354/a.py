h=int(input())
now=0
ans=0
while now<=h:
    now+=1<<ans
    print(now)
    ans+=1
print(ans)

