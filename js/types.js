// Scroll to Up

let mySpan = document.querySelector("#scrollBttn");
let test = true;

if (test) {
  window.onscroll = function () {
    if (this.scrollY >= 600) {
      mySpan.classList.add("show");
    } else {
      mySpan.classList.remove("show");
    }
    // another way to write this code
    //   this.scrollY >= 600
    //     ? mySpan.classList.add("show")
    //     : mySpan.classList.remove("show");
  };

  mySpan.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// -----------------------------------------------------------------

// coloring the eye icon

let eye_drama_one = document.getElementById("drama-one");
let eye_drama_two = document.getElementById("drama-two");
let eye_drama_three = document.getElementById("drama-three");
// Crime
let eye_crime_one = document.getElementById("crime-one");
let eye_crime_two = document.getElementById("crime-two");
let eye_crime_three = document.getElementById("crime-three");

// let eye_icons = document.querySelectorAll(".i-drama");
// console.log(eye_icons);

let manage1 = false;
let manage2 = false;
let manage3 = false;

function coloring_eye_drama_1() {
  if (!manage1) {
    eye_drama_one.classList.add("coloring");
    manage1 = true;
  } else {
    eye_drama_one.classList.remove("coloring");
    manage1 = false;
  }
}

function coloring_eye_drama_2() {
  if (!manage2) {
    eye_drama_two.classList.add("coloring");
    manage2 = true;
  } else {
    eye_drama_two.classList.remove("coloring");
    manage2 = false;
  }
}

function coloring_eye_drama_3() {
  if (!manage3) {
    eye_drama_three.classList.add("coloring");
    manage3 = true;
  } else {
    eye_drama_three.classList.remove("coloring");
    manage3 = false;
  }
}

eye_drama_one.addEventListener("click", coloring_eye_drama_1);
eye_drama_two.addEventListener("click", coloring_eye_drama_2);
eye_drama_three.addEventListener("click", coloring_eye_drama_3);

// Crime
let mng1 = false;
let mng2 = false;
let mng3 = false;

function coloring_eye_crime_1() {
  if (!mng1) {
    eye_crime_one.classList.add("coloring2");
    mng1 = true;
  } else {
    eye_crime_one.classList.remove("coloring2");
    mng1 = false;
  }
}

function coloring_eye_crime_2() {
  if (!mng2) {
    eye_crime_two.classList.add("coloring2");
    mng2 = true;
  } else {
    eye_crime_two.classList.remove("coloring2");
    mng2 = false;
  }
}

function coloring_eye_crime_3() {
  if (!mng3) {
    eye_crime_three.classList.add("coloring2");
    mng3 = true;
  } else {
    eye_crime_three.classList.remove("coloring2");
    mng3 = false;
  }
}

eye_crime_one.addEventListener("click", coloring_eye_crime_1);
eye_crime_two.addEventListener("click", coloring_eye_crime_2);
eye_crime_three.addEventListener("click", coloring_eye_crime_3);

// FOREACH!!

// -----------------------------------------------------------------

// imdb redirect

// DRAMA
function breaking_bad() {
  window.open(
    "https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0",
    "_blank"
  );
}

function the_wire() {
  window.open(
    "https://www.imdb.com/title/tt0306414/?ref_=nv_sr_srsg_0",
    "_blank"
  );
}

function the_sopranos() {
  window.open(
    "https://www.imdb.com/title/tt0141842/?ref_=nv_sr_srsg_0",
    "_blank"
  );
}

document.getElementById("breaking-bad").addEventListener("click", breaking_bad);
document.getElementById("the-wire").addEventListener("click", the_wire);
document.getElementById("the-sopranos").addEventListener("click", the_sopranos);

// CRIME
function true_detective() {
  window.open(
    "https://www.imdb.com/title/tt2356777/?ref_=nv_sr_srsg_0",
    "_blank"
  );
}

function fargo() {
  window.open(
    "https://www.imdb.com/title/tt2802850/?ref_=nv_sr_srsg_0",
    "_blank"
  );
}

document
  .getElementById("true-detective")
  .addEventListener("click", true_detective);
document.getElementById("fargo").addEventListener("click", fargo);
document
  .getElementById("the-sopranos2")
  .addEventListener("click", the_sopranos);
