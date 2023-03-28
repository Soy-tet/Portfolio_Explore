const div = document.querySelector(".container");
var width = div.offsetWidth;
if(width <= 700){
  div.addEventListener("scroll", () => {
    var scroll = div.pageYOffset;
    const scrollTop = div.scrollTop;
    if (scrollTop >= 450) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's about me?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
      var navbar_color = document.getElementById("navbar_top").style.background='#28c7fa40';
    }
    if (scrollTop >= 1000) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's do I do?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    if (scrollTop >= 1650) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's I graduated");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    } 
    if (scrollTop >= 2300) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's my last work?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    if (scrollTop >= 2900) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's my footer?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }else if (scrollTop < 200) {
      var dynamic = (document.querySelector(".static-txt").innerHTML = "I'm a programmer");
      var dynamic = (document.getElementById("dynamic-txts").innerHTML = "");
      var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    console.log(scrollTop);
  
  });
}
else {
  div.addEventListener("scroll", () => {
    var scroll = div.pageYOffset;
    const scrollTop = div.scrollTop;
    if (scrollTop >= 500) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's about me?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
      var navbar_color = document.getElementById("navbar_top").style.background='#28c7fa40';
    }
    if (scrollTop >= 1200) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's do I do?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    if (scrollTop >= 2000) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's I graduated");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    } 
    if (scrollTop >= 3000) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's my last work?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    if (scrollTop >= 3900) {
      var dynamic = (document.querySelector(".static-txt").innerHTML =
        "What's my footer?");
      var dynamic = (document.querySelector(".dynamic-txts").innerHTML = "");
       var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }else if (scrollTop < 200) {
      var dynamic = (document.querySelector(".static-txt").innerHTML = "I'm a programmer");
      var dynamic = (document.getElementById("dynamic-txts").innerHTML = "");
      var navbar_color = document.getElementById("navbar_top").style.background='rgba(0, 250, 242, 0.053)';
    }
    // console.log(scrollTop);
  
  });
}


// LOADING TIME OUT 
setTimeout(() => {
  var loading = document.getElementById("pl").style.display="none";
}, 950);
var A1 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2528.jpg)";
var A2 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4587.png)";
var A3 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/144.png)";
var A4 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4592.png)";
var A5 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4585.png)";
var A6 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/10655.jpg)";
var A7 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2218.png)";
var array = [A1, A2, A3, A4, A5, A6, A7];
var random_num = Math.floor(Math.random() * 7);
var random = array[random_num];
const parent = (document.getElementById("area").style.backgroundImage = random);
setTimeout(() => {
  // var timeout = 500;
  // timeout+=500;
  var A1 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2528.jpg)";// mountain claim red
  var A2 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4587.png)";//forest sunset blue
  var A3 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/6409.jpg)";//game poster
  var A4 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4592.png)";// forest sunset red
  var A5 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4585.png)";// forest sunset red
  var A6 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/10655.jpg)"; //lighthouse
  var A7 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2218.png)";//window red 11
  // var A1 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/974.png)";// mountain claim red
  // var A2 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/5717.jpg)";//forest sunset blue
  // var A3 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/977.png)";//game poster
  // var A4 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4592.png)";// forest sunset red
  // var A5 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4585.png)";// forest sunset red
  // var A6 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/976.png)"; //lighthouse
  // var A7 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/979.png)";//window red 11
var array = [A1, A2, A3, A4, A5, A6, A7];
var random_num = Math.floor(Math.random() * 7);
var random = array[random_num];
const parent = (document.getElementById("area").style.backgroundImage = random);
}, 10000);
function random_bg() {
  // var A1 = "url(./IMG/compressed/A1.jpg)";
  // var A2 = "url(./IMG/compressed/A2.jpg)";
  // var A3 = "url(./IMG/compressed/A3.jpg)";
  // var A4 = "url(./IMG/compressed/A4.png)";
  // var A5 = "url(./IMG/compressed/A4.png)";
  // var A6 = "url(./IMG/compressed/A6.png)";
  // var A7 = "url(./IMG/compressed/A7.png)";
  var A1 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2528.jpg)";
  var A2 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/6409.jpg)";
  var A3 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/144.png)";
  var A4 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4592.png)";
  var A5 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4585.png)";
  var A6 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/10783.jpg)";
  var A7 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/2218.png)";
  var A8 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/1229.jpg)";
  var A9 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/10415.jpg)";
    var A12 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/974.png)";// mountain claim red
  var A22 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/5717.jpg)";//forest sunset blue
  var A32 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/977.png)";//game poster
  var A42 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4592.png)";// forest sunset red
  var A52 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/4585.png)";// forest sunset red
  var A62 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/976.png)"; //lighthouse
  var A72 = "url(https://4kwallpapers.com/images/walls/thumbs_3t/979.png)";//window red 11
  var array = [A1, A2, A3, A4, A5, A6, A7,A8,A9,A12, A22, A32, A42, A52, A62, A72];
  var random_num = Math.floor(Math.random() * 15);
  var random = array[random_num];
  const parent = (document.getElementById("area").style.backgroundImage =
    random);
  console.log(random_num);
  const audio = new Audio();
audio.src=("./audio/click.wav");
audio.play();
}
// var element = document.getElementById("span3");
// var styles = window.getComputedStyle(element, ":after");
// var content = styles["background"];
// console.log(content);

// var array = [A1, A2, A3, A4, A5, A6, A7];
// var random_num = Math.floor(Math.random() * 7);
// var random = array[random_num];
// const parent = (document.getElementById("area").style.backgroundImage =
//   random);
const click = new Audio();
click.src=("./audio/click.wav");
function home(){
  div.scrollTop=0;
  click.play();
}
function aboutme(){
  div.scrollTop=500;
  click.play();
}
function doIdo(){
  div.scrollTop=1400;
  click.play();
}
function graduated(){
  div.scrollTop=2700;
  click.play();
}
function last_work(){
  div.scrollTop=4000;
  click.play();
}
function footer(){
  div.scrollTop=4800;
  click.play();
}


// TIME MY LOVE 
function timer(){
  var watchtimer = new Date().getTime();
  var dateold = new Date("November 25,2022 20:39:00").getTime();
  var gap = (watchtimer-dateold);
  var Millisecond = 1;
  var second = Millisecond * 1000;
  var minute = second *60;
  var hour = minute * 60;
  var day = hour *24;
  var month = day *30;
  var year = month *12;

  const textcentury = Math.floor(gap/year)
  const textmonth = Math.floor((gap%year)/month)
  const textday = Math.floor((gap%month)/day);
  const texthour = Math.floor((gap%day)/hour);
  const textminute = Math.floor((gap%hour)/minute);
  const textsecond = Math.floor((gap%minute)/second);
  const textMillisecond = Math.floor(gap/Millisecond);


  
  document.querySelector(".century").innerHTML = textcentury;
  document.querySelector(".year").innerHTML = textmonth;
  document.querySelector(".day").innerHTML = textday;
  document.querySelector(".hour").innerHTML = texthour;
  document.querySelector(".minute").innerHTML = textminute;
  document.querySelector(".second").innerHTML = textsecond;
  document.querySelector(".Millisecond").innerHTML = textMillisecond;
  // console.log(textday)
}
setInterval(timer ,1000)