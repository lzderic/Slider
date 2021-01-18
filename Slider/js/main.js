/*               ŠTO SAM SVE RADIO

1. Pokušao sam koristiti ugrađenu jquery metodu animate ali izgleda da ne radi s transform: translateX
2. Koristio sam onda postion absoulte i relative ali su mi slike onda čudno ponašale
3. Zadnje što sam pokušao je direktan unos translateX vrijednosti. Vremenski nisam stikao skroz da izprobam

const myEl = document.querySelector('.slider-1 img');

function getTranslateX() {
  var style = window.getComputedStyle(myEl);
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41
}
- S ovom funkcijom dohvatim translateX vrijednost 


    // Dohvacanje zanjeg elementa niza
    let lastElement1 = slider1.slice(-1)[0];
    let lastElement2 = slider2.slice(-1)[0];
    
    // Width tog elementa
    let widthEl1 = lastElement1.width;
    //let widthEl2 = lastElement2.width;

    let pom = getTranslateX() - widthEl1;
- Oduzmem vrijednost translateX i širinu zadnjeg niza.

    let dv = $(".slider-1 img").css("transform", `translateX(${pom}px)`);

- dodam transition: transform 2s; na slike kako bi bilo animacije 

-Teoretski ovo što sam napravio je isto animacija ali sada neznam dali to valja. 
-Slike se pomiču za širinu zadnje slike.

-Primjetio sam još da mi iz nekog razloga u chromu na 800px širine se pokida web stranica a u Firefoxu radi normalno
-Ne stignem popraviti zato jer sam rekao da ću predati do 12h
-Koristio sam FireFox zbog grida
*/



let slider1 = $(".slider-1 img").toArray();
let slider2 = $(".slider-2 img").toArray();


$(".arrow-left").click(() => {
    let leftShift1 = slider1.shift();
    let leftShift2 = slider2.shift();

    $(".slider-1").append(leftShift1);
    $(".slider-2").append(leftShift2);

    slider1.push(leftShift1);
    slider2.push(leftShift2);
});

$(".arrow-right").click(() => {
    let popRight1 = slider1.pop();
    let popRight2 = slider2.pop();

    $(".slider-1").prepend(popRight1);
    $(".slider-2").prepend(popRight2);

    slider1.unshift(popRight1);
    slider2.unshift(popRight2);

});
