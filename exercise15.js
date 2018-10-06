function groupAnimals(animals) {
  animals.sort(function(a, b){return a>b}) 
  var tampung = []
  var result = [] 
  for(var i = 0; i < animals.length-1; i++) {
      if(animals[i][0] === animals[i+1][0]) {
          tampung.push(animals[i])
          if(i === animals.length - 2) {
              tampung.push(animals[i+1])
              result.push(tampung)
          }
      } else if(animals[i][0] !== animals[i+1][0]) {
          tampung.push(animals[i])
          result.push(tampung)
          tampung = []
          if(i === animals.length-2) {
              tampung.push(animals[i+1])
              result.push(tampung)
          }
      }
  }return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]