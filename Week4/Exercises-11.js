function shoppingTime(memberId, money) {
  // you can only write your code here!
  if(memberId == false || typeof(money) != 'number'){return 'Mohon maaf, toko X hanya berlaku untuk member saja'}
  else if(money < 50000) {return 'Mohon maaf, uang tidak cukup'}

  var result = {
    memberId: memberId, 
    money: money, 
    listPurchased:[], 
    changeMoney: money, 
    };
  var item = [
    [1500000, 'Sepatu Stacattu'],
    [500000, 'Baju Zoro'],
    [250000, 'Baju H&M'],
    [175000, 'Sweater Uniklooh'],
    [50000, 'Casing Handphone']];
  for(i=0; i < 5; i++){
    if(result.changeMoney - item[i][0] >= 0){
    result.listPurchased.push(item[i][1]); result.changeMoney -= item[i][0]; 
    }
  } 
  return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }

console.log('\n')

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }

console.log('\n')

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja

console.log('\n')

console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup

console.log('\n')

console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
