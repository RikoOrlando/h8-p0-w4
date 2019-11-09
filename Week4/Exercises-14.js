function naikAngkot(arrPenumpang) {
  if(arrPenumpang == false){return arrPenumpang}
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];
  for(i=0; i<arrPenumpang.length; i++){
    var smt = {
    penumpang: arrPenumpang[i][0],
    naikDari: arrPenumpang[i][1],
    tujuan: arrPenumpang[i][2],
    bayar: (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))*2000,
    }
    result.push(smt)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
