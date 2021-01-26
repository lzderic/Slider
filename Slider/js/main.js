/*               OSTALO NAPRAVITI

- ovaj kod radi sve što treba samo je problem jer imam neke fiksne vrijednosti što znači da mi je hard kodirano za širinu ekrana od 1366px
- ostalo jos sakriti slike na određenoj x osi
*/

let myEl1 = document.querySelector('.slider-1 img');
let myEl2 = document.querySelector('.slider-2 img');
$(".slider-1 img:gt(8)").css("display", "none");

function getTranslateX(myEl) {
  var style = window.getComputedStyle(myEl);
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41
}



let slider1 = $(".slider-1 img").toArray();
let slider2 = $(".slider-2 img").toArray();

$(".arrow-left").click(() => {

  let lastElement1 = slider1.slice(-1)[0];
  let firstElement1 = slider1.slice()[0];
  let lastElement2 = slider2.slice(-1)[0];
  let firstElement2 = slider2.slice()[0];
  
  let widthEl1 = lastElement1.width - firstElement1.width;
  let widthEl2 = lastElement2.width - firstElement2.width;

    if(lastElement1.width == firstElement1.width) {
      widthEl1 = -200;
    }

    if(lastElement2.width == firstElement2.width) {
      widthEl2 = -200;
    }
   
    if(Math.sign(widthEl1) !== -1) {
        widthEl1 = widthEl1 * -1;
    }

    if(Math.sign(widthEl2) !== -1) {
      widthEl2 = widthEl2 * -1;
  }

     if(firstElement1.width > lastElement1.width) {
      widthEl1 = widthEl1 * -1;
    }

    if(firstElement2.width > lastElement2.width) {
      widthEl2 = widthEl2 * -1;
    }

     let move1 = getTranslateX(myEl1) + widthEl1;
     let move2 = getTranslateX(myEl2) + widthEl2;
     console.log(move2)


    $(".slider-1 img").css("transform", `translateX(${move1}px)`);
    $(".slider-2 img").css("transform", `translateX(${move2}px)`);
    

    let leftShift1 = slider1.shift();
    let leftShift2 = slider2.shift();

    $(".slider-1").append(leftShift1);
    $(".slider-2").append(leftShift2);

    slider1.push(leftShift1);
    slider2.push(leftShift2);
    console.log(getTranslateX(myEl2));

    if(move1 <= -1620) {
      $(".slider-1 img").css("transform", `translateX(-820px)`);
    }

    if(move2 <= -1740) {
      $(".slider-2 img").css("transform", `translateX(-940px)`);
    }
})

$(".arrow-right").click(() => {

  let lastElement1 = slider1.slice(-1)[0];
  let firstElement1 = slider1.slice()[0];
  let lastElement2 = slider2.slice(-1)[0];
  let firstElement2 = slider2.slice()[0];

  let widthEl1 = lastElement1.width;
  console.log(widthEl1);
  let widthEl2 = lastElement2.width;
   
    if(Math.sign(widthEl1) !== 1) {
        widthEl1 = widthEl1 * -1;
    }

    if(Math.sign(widthEl2) !== 1) {
      widthEl2 = widthEl2 * -1;
  }

     let move1 = getTranslateX(myEl1) + widthEl1;
     let move2 = getTranslateX(myEl2) + widthEl2;
     console.log(move2)


    $(".slider-1 img").css("transform", `translateX(${move1}px)`);
    $(".slider-2 img").css("transform", `translateX(${move2}px)`);



    let popRight1 = slider1.pop();
    let popRight2 = slider2.pop();

    $(".slider-1").prepend(popRight1);
    $(".slider-2").prepend(popRight2);

    slider1.unshift(popRight1);
    slider2.unshift(popRight2);

     if(move1 >= 0) {
       $(".slider-1 img").css("transform", `translateX(-820px)`);
     }

     if(move2 >= -0) {
       $(".slider-2 img").css("transform", `translateX(-940px)`);
     }

});
