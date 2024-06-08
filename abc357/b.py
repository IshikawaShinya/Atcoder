def main():
    S = input()
    countHighCharcter = 0
    for i in S:
        if i.isupper():
            countHighCharcter += 1
        if countHighCharcter > len(S)/2:
            print(S.upper())
            return
    print(S.lower())
    return
        
main()