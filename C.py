N = input()
list =input().split()
count=0
min = int(N)+1
for i in range(int(N)):
  if int(list[i]) < min:
    min = int(list[i])
    count += 1

print(count)