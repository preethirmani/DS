//LeetCode 441 : Arranging Coins

/** You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build. */
// n is the number of coins
function arrangeCoins(n) {
 let coins = 0;
 let rows = 0;
 while (n >= coins + 1) {
   coins = coins + 1;
   n = n - coins;
   rows = rows + 1;
 }
 return rows;
}
 

console.log(arrangeCoins(6)); // 1, 1 1, 1 1 1
console.log(arrangeCoins(7))