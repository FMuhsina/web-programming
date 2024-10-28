n=int(input("Enter number of terms in the series :"))
a=0
b=1
if n==1:
    print("Fibonacci series upto",n,":",a)
elif n==2:
    print("Fibonacci series upto",n,":", a, b)
else:
    
    print("Fibonacci series upto",n,":", a, b, end=" ")
    for i in range(2,n):
        c=a+b
        a=b
        b=c
        print(c, end=" ")
        
 