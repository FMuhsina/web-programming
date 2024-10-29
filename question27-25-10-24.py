alpha="ABCDEFGHIJKLMN"
steps=int("enter the number steps of pyramid :")
for i in range(steps):
    for j in range(i+1):
        print(alpha[j], end=" ")
    print()    