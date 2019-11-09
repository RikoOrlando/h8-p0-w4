function changeMe(arr) {
  // you can only write your code here!
  if(arr == false) {return console.log('""')}
  var result = {}
  for(i=0; i<arr.length; i++){
    result[i+1 +'. ' +  arr[i][0] + ' ' + arr[i][1]] = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 2019 - arr[i][3]
    };
    if(arr[i].length < 4 || 2019 - arr[i][3] < 0){
      result[i+1 +'. ' +  arr[i][0] + ' ' + arr[i][1]].age = 'Invalid Birth Year'
    }
  }
  return console.log(result)
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""



