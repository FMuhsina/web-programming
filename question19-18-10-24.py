string=input("Enter a string :")
print("Entered string =",string)
f=string[0]
m_string=f+string[1:].replace(f,"$")
print("String after replacing the repeating '",string[0],"' with '$' =",m_string)
