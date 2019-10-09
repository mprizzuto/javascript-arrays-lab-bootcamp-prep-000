var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
 //var name='ralph';
 return kittens.push(name);
}

function destructivelyPrependKitten(name){
 kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}