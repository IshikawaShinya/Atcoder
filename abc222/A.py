# 入力をもらう
# 桁数を判定する
# (4-桁数)回、0を先頭に足す。を繰り返す。
# 文字列を足せるのか。文字*数字で文字を複数個足せるのか。
N = input()
print('00' * (4 - len(N)) + N)