console.log('gonna make a change to the show posts through this');

alert('this is a test alert for the post show page');

postFactorial = (1..9).to_a.sample
# p postFactorial


def get_rand_factorial n
  (1..n).inject(:*) || 1

end

p get_rand_factorial postFactorial
