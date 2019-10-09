var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
 //var name='ralph';
  kittens.push(name);
}

function destructivelyPrependKitten(name){
 kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  return [...kittens,name];
}

function prependKitten(name){
  return [name,...kittens];
}

function removeLastKitten(){
  return [1, kittens.length - 1];
}

function removeFirstKitten(){
  return kittens.slice(1);
}