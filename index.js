var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name) //changes underlying array
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name) //opposite of above 
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name)
}
function appendKitten(name){
  var newKittens = kittens.concat(name) 
  // makes a new array (newKittens) that is the old array with a name on the end 
return newKittens
}
function prependKitten(name){
return [name,...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
  //returns all but the final element, doesn't really 'remove' it 
  
}
function removeFirstKitten(){
  return kittens.slice(1)
  //returns the full array after slicing i 0to1
}

