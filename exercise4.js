
var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;

function dataHandling2(array) {
  
return array;
}

array.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
console.log (array)

var str = array.toString();
var array1 = str.split('/');

switch (array1[1]) {
  case '01': console.log('Jan');
  break;
  case '02': console.log('Feb');
  break;
  case '03': console.log('Mar');
  break;
  case '04': console.log('Apr');
  break;
  case '05': console.log('Mei');
  break;
  case '06': console.log('Juni');
  break;
  case '07': console.log('Juli');
  break;
  case '08': console.log('Agustus');
  break;
  case '09': console.log('September');
  break;
  case '10': console.log('Oktober');
  break;
  case '11': console.log('November');
  break;
  case '12': console.log('Desember');
  break;
  default: console.log('coba lagi');
  
}

var array2 = array[3].split('/').sort();
var array3 = array[3].split('/').join('-');

array2.sort(function(a,b)
{ return b - a});

console.log (array2);
console.log (array3);
console.log (array[1].split('',15).join(''));


