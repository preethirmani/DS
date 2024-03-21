/*
  Create a pattern like this in js
  *****
  *****
  *****
  *****
  *****
*/

function createPattern(n) {
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      process.stdout.write('*');
    }
    console.log();
  }
}

createPattern(5);