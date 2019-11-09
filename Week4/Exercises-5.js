
/*
function ubahHuruf(kata) {
  var hasil = '';
  var tambah = 1; //UNTUK MENGATUR PERUBAHAN STRING YANG DI INGINKAN MISAL DENGAN 
  //9 Character BERIKUTNYA 
  for(i=0; i<kata.length; i++){
    var code = kata.charCodeAt(i);
    //untuk merubah String yang memiliki sifat Uppercase
    if(code >= 97 && code <= 122){
      var smt1 = code-97;
      var smt2 = tambah%26;
      var smt3 = (smt1+smt2)%26;
      hasil+= String.fromCharCode(97+smt3)
      //untuk merubah String yang memiliki sifat Lowercase
    } else if (code >=65 && code <= 90){
      var smt4 = code - 65;
      var smt5 = tambah%26;
      var smt6 = (smt4+smt5)%26;
      hasil+= String.fromCharCode(65+smt6)
    } else {hasil += kata[i]}
    
  } return hasil

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
*/


function ubahHuruf(kata) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var tmbh = 1 //untuk mengatur berapa banyak penambahahan index
  var hasil = ''
  for(i=0; i<kata.length; i++){
    var posisi = alfabet.indexOf(kata[i]);
    //untuk merubah huruf jika kata merupakan lowercase
    if(posisi >= 0 && posisi <= 25){
      var smt1 = tmbh%26
      var smt2 = (posisi+smt1)%26
      hasil += alfabet[smt2]
    }
    //untuk merubah huruf jika kata merupakan uppercase
    if(posisi >= 26 && posisi <= 51){
      var smt3 = posisi - 26
      var smt4 = tmbh%26
      var smt5 = 26 + ((smt3 + smt4)%26)
      hasil += alfabet[smt5]
    }
   
  } return hasil

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

