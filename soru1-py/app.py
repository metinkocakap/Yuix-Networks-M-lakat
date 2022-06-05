total1=0
total2=0
num1=10
num2=1000
# 10'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: 3 + 5 + 6 + 9 = 23
for index in range(num1):
  if  not(index%3==0 and index%5==0):
     if index%3==0:
         total1+=index
     if index%5==0:
         total1+=index
print(total1)


# 1000'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı nedir? Python ve javascript ile çözünüz
for index in range(num2):
  if  not(index%3==0 and index%5==0):
     if index%3==0:
         total2+=index
     if index%5==0:
         total2+=index
print(total2)