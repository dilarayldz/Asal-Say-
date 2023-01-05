let sayi = Number(prompt("Lütfen Bir Sayı Griniz: "));
let sonuc = true;

if (sayi == 2){
    alert(sayi + " ASAL SAYIDIR.")
}

else{
    for(let i = 2; i<=Math.floor(sayi/2); i++){
        if(sayi%i == 0){
            sonuc = false;
            break;
        }
    }

    if(sonuc){
        alert(sayi + " ASAL SAYIDIR")
    }

    else{
        alert(sayi + " ASAL SAYI DEĞİLDİR.")
    }
}