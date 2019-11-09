function cariModus(arr) {
  var smt = [];
  smt[0] = [1, arr[0]];
  var key = 0
  for(i=1; i<arr.length; i++){
    for(j=0; j<smt.length; j++){
      if(smt[j][1] == arr[i]){
        smt[j][0]+=1; key = 1;break
      } else {key = 2}
    }
    if(key != 1){
    smt[smt.length] = [1, arr[i]]
    } 
  }
  if(arr.length == smt.length || smt.length == 1){
    return -1
  }
  smt.sort()
  return smt[smt.length-1][1]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
