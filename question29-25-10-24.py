str=input("Enter a String :")
end=str[-3]+str[-2]+str[-1]
if end!="ing":
    str=str+end
else:
    str+"ly"