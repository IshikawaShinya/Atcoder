C = input()

alphabet = "abcdefghijklmnopqrstuvwxyz"
k = 0
for i in range(len(alphabet)):
    if i == 25:
        k = 0
        break
    elif alphabet[i] == C:
        k = i + 1
        break

print(alphabet[k])