function targetTerdekat(arr) {
  var placeO = arr.indexOf('o')
  var placeX = arr.indexOf('x')
  
  if(placeO < placeX) {
    for(var i = placeO; i < placeX; i++) {
  } return i - placeO

  } else if(placeX < 0) {
      return 0
      
  } else if(placeO > placeX) {
      return arr.length - (placeO+1)
  } 
}  

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2