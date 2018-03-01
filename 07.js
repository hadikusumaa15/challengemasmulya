var i,j,rev, split, reverseArray, joinArray;

class Str {
    constructor(kalimat, cari) {
      this._lower = kalimat.toLowerCase();
      this._upper = kalimat.toUpperCase();
      this._capitalize = kalimat.charAt(0).toUpperCase() + kalimat.slice(1);
      split = kalimat.split(""); 
      reverseArray = split.reverse();
      joinArray = reverseArray.join("");
      this._reverse = joinArray;
    var carihasil = kalimat.match(cari);
     var cht = 'terdapa kata '; 
     var cht2 = carihasil.length ;
     var cht3 = carihasil[0];
     var cht4 = ' sebanyak : '
    this._contains =  cht+ cht3+cht4+ cht2;
    }
  
    get lower() {
      return this._lower;
    }
    get upper() {
      return this._upper;
    }   
    get capitalize() {
        return this._capitalize;
      }
      get reverse() {
        return this._reverse;
      }

      get contains() {
        return this._contains;
      }
  }
  
  const makan = new Str('AKU INGIN MAKAN bakso baksoan tapi yang enak',/bakso/g);
 // makan.lower(); // Print name value to console
  console.log(makan.lower);
  console.log(makan.upper);
  console.log(makan.capitalize);
  console.log(makan.reverse);
  console.log(makan.contains);
  //console.log(halley.behavior); // Print behavior value to console
  //halley.incrementBehavior(); // Add one to behavior
  //halley.incrementBehavior();
  //console.log(halley.name); // Print name value to console
  //console.log(halley.behavior); // Print behavior value to console
  
//Str.lower('MAKAN'); // makan
//Str.upper('malam'); // MALAM
//Str.capitalize('saya ingin makan'); // Saya Ingin Makan
//Str.reverse('kasur'); // rusak
