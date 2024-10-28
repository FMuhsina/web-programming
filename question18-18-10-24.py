integers1=list(map(int,input("Enter integers of first list seperated by space : ").split()))
integers2=list(map(int,input("Enter integers of secod list seperated by space : ").split()))hg
print("first integer list :",integers1)      
print("second integer list :",integers2)
if len(integers1)==len(integers2):
    print("Number of elements in two lists are same.")
else:
    print("Number of elements in two lists are not same.")

if sum(integers1)==sum(integers2):
    print("sum of all elements in first list = sum of all elements in second lists.")
else:
    print("sum of all elements in first list != sum of all elements in second lists.")
for i in range(0,len(integers1)):
        if integers1[i] in integers2:
            x=x+=1
if x>0:
    print("Same elements are present in both list")
else:
    print("Same elements are not present in both list")
