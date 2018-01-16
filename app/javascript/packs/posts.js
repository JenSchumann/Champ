console.log('packs/posts.js talkin here');

// alert('this is a test alert for the post show page');

// postFactorial is name of column to reference in schema

const items = [1,2,3,4,5,6,7,8,9]
var postFactorial = items[Math.floor(Math.random()*items.length)];

// console.log(postFactorial);

const f = [];

const randomFactorial = (n) =>{

  if(n == 0  || n == 1)
    return 1;
  if(f[n] > 0)
    return f[n];
  return f[n] = randomFactorial(n-1) * n;
  for(n = 1; n <= 9; n++) {
    n = postFactorial[Math.floor(Math.random()*items.length)];
  }

};
console.log("the postFactorial this time is " +  randomFactorial(postFactorial));
