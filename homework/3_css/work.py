MOD = 10**9 + 7

n = int(input())

if n == 1:
    print(3)
elif n == 2:
    print(8)
elif n == 3:
    print(21)
else:
    a, b, c = 3, 8, 21
    for i in range(4, n + 1):
        a, b, c = b, c, (2*c + 2*b - a) % MOD
    print(c % MOD)