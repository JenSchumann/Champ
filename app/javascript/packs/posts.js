console.log('gonna make a change to the show posts through this');

// alert('this is a test alert for the post show page');

//module build fail w/syntax error.. (1..9) NOT LIKED need to rewrite it as an explicit array?
postFactorial = (1..9).to_a.sample
// p postFactorial


def get_rand_factorial n
  (1..n).inject(:*) || 1
//
end
//
// p get_rand_factorial postFactorial
get_rand_factorial postFactorial
