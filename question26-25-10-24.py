print("Upper limit and Lower limit are greater than or equal to 1000")
l=int("Enter a lower limit :")
u=int("Enter an upper limit :")
perfect_square_digits = {'0', '1', '4', '9'} 
results = []
    
for num in range(l, u):
    if int(num**0.5) ** 2 == num and all(digit in perfect_square_digits for digit in str(num)):
        results.append(num)