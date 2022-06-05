let total1 = 0;
let total2 =0;
let num1=10;
let num2=1000;
/*# 10'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı: 3 + 5 + 6 + 9 = 23*/

for (let index =num1-1; index >=0; index--) {

    if (!(index%3==0 && index%5==0)) {
        if (index%3==0 ) {
            total1+=index;
        }
      if (index%5==0) {
            total1+=index;
        }
    }

    
}
console.log(total1)

/*# 1000'dan küçük, 3 ya da 5'e bölünebilen tüm doğal sayıların toplamı nedir? Python ve javascript ile çözünüz */
for (let index =num2-1; index >=0; index--) {

    if (!(index%3==0 && index%5==0)) {
        if (index%3==0 ) {
            total2+=index;
        }
      if (index%5==0) {
            total2+=index;
        }
    }

    
}

console.log(total2)