    var n, x, i, j;
    rev = "";
    n = "ibu membeli ubi";
    x = n.split(" ");
    for (i = 0; i < x.length; i++) {
        for (j = x[i].length - 1; j >= 0; j--) {
            rev = rev+x[i].charAt(j);
            
            //console.log(rev);
        }
        rev = rev+' ';
    }

    console.log(rev);