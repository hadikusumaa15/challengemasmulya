var a = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';

//x = a.split(" ");
var cekaku = a.match(/Aku/g);
//x = cekaku.split(" ");
var cekingin = a.match(/ingin/g);
var cekdapat = a.match(/Dapat/g);
console.log('kata `aku` berjumlah : ', cekaku.length);
console.log('kata `ingin` berjumlah : ', cekingin.length);
console.log('kata `dapat` berjumlah : ', cekdapat.length);
