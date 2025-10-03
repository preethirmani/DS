function superDigit(n, k) {
    // Write your code here
   if(n === 0 ) return n;
   
   while(n >= 10) {
        n = Math.floor(n/10) + n % 10;
   }
   k > 0 ? n = n * k : n;
   function super_digit(n) {
    if(n < 10) return n;
    return super_digit(Math.floor(n/10) + n % 10);
   }
   return super_digit(n);
    
}

let n = 3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736;
k = 1;
console.log(superDigit(n, k));


