function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var result = []
  for(i=1; i <= angka ; i++){
    var smt = ''
    if(angka%i == 0){
      smt += String(i) + (angka/i);
      result.push(smt.length)
    }
  }
  result.sort(function(value1, value2){return value1 > value2})
  return result[0]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2