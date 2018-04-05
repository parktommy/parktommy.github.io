// var prelude = document.getElementById("prelude");
// var dminor = document.getElementById("dminor");
// var air = document.getElementById("air");






 // bach
var first = document.getElementById("first");

first.addEventListener("click", handleBtnClick)

function handleBtnClick() {
var prelude = document.getElementById("prelude");
    // prelude.pause()
    dminor.pause()
    air.pause()

    if (prelude.paused){
    prelude.play()
    }
    else{
      prelude.pause()
    }
    var flower = document.getElementById("bachflower");

    flower.classList.add("active");
    flower.classList.remove("thunder");
    flower.classList.remove("air");


}


var second = document.getElementById("second");

second.addEventListener("click", handleBtnClick2)

function handleBtnClick2() {
var dminor = document.getElementById("dminor");
  prelude.pause()
  // dminor.pause()
  air.pause()


    if (dminor.paused){
    dminor.play()
    }
    else{
      dminor.pause()
    }
    var thunder = document.getElementById("bachflower");

    thunder.classList.add("thunder");
    thunder.classList.remove("active");
    thunder.classList.remove("air");
}

var third = document.getElementById("third");

third.addEventListener("click", handleBtnClick3)

function handleBtnClick3() {
var air = document.getElementById("air");
  prelude.pause()
  dminor.pause()
  // air.pause()

    if (air.paused){
    air.play()
    }
    else{
      air.pause()
    }
    var air = document.getElementById("bachflower");

    air.classList.add("air");
    air.classList.remove("active");
    air.classList.remove("thunder");
}






// mozart

var fourth = document.getElementById("fourth");

fourth.addEventListener("click", handleBtnClick4)

function handleBtnClick4() {
var avemaria = document.getElementById("avemaria");
    // avemaria.pause()
    baby.pause()
    turkish.pause()

    if (avemaria.paused){
    avemaria.play()
    }
    else{
      avemaria.pause()
    }
    var flower = document.getElementById("mozartflower");

    flower.classList.add("active");
    flower.classList.remove("fall");
    flower.classList.remove("winter");

}


var fifth = document.getElementById("fifth");

fifth.addEventListener("click", handleBtnClick5)

function handleBtnClick5() {
var baby = document.getElementById("baby");
  avemaria.pause()
  // baby.pause()
  turkish.pause()


    if (baby.paused){
    baby.play()
    }
    else{
      baby.pause()
    }
    var fall = document.getElementById("mozartflower");

    fall.classList.add("fall");
    fall.classList.remove("active");
    fall.classList.remove("winter");
}

var sixth = document.getElementById("sixth");

sixth.addEventListener("click", handleBtnClick6)

function handleBtnClick6() {
var turkish = document.getElementById("turkish");
  avemaria.pause()
  baby.pause()
  // turkish.pause()

    if (turkish.paused){
    turkish.play()
    }
    else{
      turkish.pause()
    }
    var winter = document.getElementById("mozartflower");

    winter.classList.add("winter");
    winter.classList.remove("active");
    winter.classList.remove("fall");
}





// vivaldi
var seven = document.getElementById("seven");

seven.addEventListener("click", handleBtnClick7)

function handleBtnClick7() {
var spring = document.getElementById("spring1");
    // spring1.pause()
    summer1.pause()
    winter1.pause()

    if (spring1.paused){
    spring1.play()
    }
    else{
      spring1.pause()
    }
    var spring = document.getElementById("vivaldiflower");

    spring.classList.add("spring");
    spring.classList.remove("summer");
    spring.classList.remove("winteractive");

}


var eight = document.getElementById("eight");

eight.addEventListener("click", handleBtnClick8)

function handleBtnClick8() {
var summer = document.getElementById("summer1");
  spring1.pause()
  // summer1.pause()
  winter1.pause()


    if (summer1.paused){
    summer1.play()
    }
    else{
      summer1.pause()
    }
    var summer = document.getElementById("vivaldiflower");

    summer.classList.add("summer");
    summer.classList.remove("spring");
    summer.classList.remove("winteractive");
}

var nine = document.getElementById("nine");

nine.addEventListener("click", handleBtnClick9)

function handleBtnClick9() {
var winter = document.getElementById("winter1");
  spring1.pause()
  summer1.pause()


    if (winter1.paused){
    winter1.play()
    }
    else{
      winter1.pause()
    }
    var winter = document.getElementById("vivaldiflower");

    winter.classList.add("winteractive");
    winter.classList.remove("summer");
    winter.classList.remove("spring");
}








// beethoven
var ten = document.getElementById("ten");

ten.addEventListener("click", handleBtnClick10)

function handleBtnClick10() {
var elise = document.getElementById("elise");
    // spring1.pause()
    symphony5.pause()
    joy.pause()

    if (elise.paused){
    elise.play()
    }
    else{
      elise.pause()
    }
    var elise = document.getElementById("beethovenflower");

    elise.classList.add("elise");
    elise.classList.remove("symphony5");
    elise.classList.remove("joy");

}


var eleven = document.getElementById("eleven");

eleven.addEventListener("click", handleBtnClick11)

function handleBtnClick11() {
var symphony5 = document.getElementById("symphony5");
  elise.pause()
  // summer1.pause()
  joy.pause()


    if (symphony5.paused){
    symphony5.play()
    }
    else{
      symphony5.pause()
    }
    var symphony5 = document.getElementById("beethovenflower");

    symphony5.classList.add("symphony5");
    symphony5.classList.remove("elise");
    symphony5.classList.remove("joy");
}

var twelve = document.getElementById("twelve");

twelve.addEventListener("click", handleBtnClick12)

function handleBtnClick12() {
var joy = document.getElementById("joy");
  elise.pause()
  symphony5.pause()


    if (joy.paused){
    joy.play()
    }
    else{
      joy.pause()
    }
    var joy = document.getElementById("beethovenflower");

    joy.classList.add("joy");
    joy.classList.remove("symphony5");
    joy.classList.remove("elise");
}


// chopin
var thirteen = document.getElementById("thirteen");

thirteen.addEventListener("click", handleBtnClick13)

function handleBtnClick13() {
var nocturn = document.getElementById("nocturn");
    // spring1.pause()
    waltz.pause()
    minute.pause()

    if (nocturn.paused){
    nocturn.play()
    }
    else{
      nocturn.pause()
    }
    var nocturn = document.getElementById("chopinflower");

    nocturn.classList.add("nocturn");
    nocturn.classList.remove("rain");
    nocturn.classList.remove("cloud3");

}


var fourteen = document.getElementById("fourteen");

fourteen.addEventListener("click", handleBtnClick14)

function handleBtnClick14() {
var minute = document.getElementById("minute");
  nocturn.pause()
  // summer1.pause()
  waltz.pause()


    if (minute.paused){
    minute.play()
    }
    else{
      minute.pause()
    }
    var minute = document.getElementById("chopinflower");

    minute.classList.add("rain");
    minute.classList.remove("night");
    minute.classList.remove("cloud3");
}

var fifteen = document.getElementById("fifteen");

fifteen.addEventListener("click", handleBtnClick15)

function handleBtnClick15() {
var waltz = document.getElementById("waltz");
  nocturn.pause()
  minute.pause()


    if (waltz.paused){
    waltz.play()
    }
    else{
      waltz.pause()
    }
    var waltz = document.getElementById("chopinflower");

    waltz.classList.add("cloud3");
    waltz.classList.remove("night");
    waltz.classList.remove("rain");
}
