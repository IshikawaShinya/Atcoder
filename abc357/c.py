def main():
    #初期箱を用意する
    #N=1
    #N>=2,N-1の箱を使用する。

    #真ん中を決定する。
    #
    n = input()
    N = int(n)
    if N == 0:
        print("#")
        return
    output = []
    for k in range(1, N + 1):
        formerlength = 3 ** (k - 1)
        length = 3 ** k
        list = [["*"]*length for i in range(length)]
        if k == 1:
            for i in range(length):
                for j in range(length):
                    if i == 1 and j == 1:
                        list[i][j] = "."
                    else:
                        list[i][j] = "#"
        else:
            for i in range(length):
                for j in range(length):
                    # print("{},{}".format( 3 ** (k-1), 2 * 3 ** (k-1)))
                    if i >= 3 ** (k-1) and i < 2 * 3 ** (k-1) and j >= 3 ** (k-1) and j < 2 * 3 ** (k-1) :
                        list[i][j] = "."
                    else:
                        list[i][j] = formerlist[i % formerlength][j % formerlength]
        formerlist = list
        output = list
    for i in range(3 ** k):
        print(''.join(output[i]))
    return

main()