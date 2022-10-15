// Scroll to Up (button)

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

// ---------------------------------------------------------

// Animate Width On Scrolling (Languages Section)

let languages_section = document.querySelector(".languages");
let spans = document.querySelectorAll(".languages .progress span");

window.onscroll = function () {
  if (window.scrollY >= languages_section.offsetTop - 10) {
    // console.log("DONE DONE");
    spans.forEach((span) => {
      // to take the width of the data-width attribute
      span.style.width = span.dataset.width;
    });
  }
};

// ---------------------------------------------------------

// Countdown Timer (Latest Shows Section)

// 1000 ms = 1 s

let countDownDate = new Date("January 06, 2023 23:59:59").getTime(); // our target by miliSeconds
console.log(countDownDate);
// get how many MiliSeconds from NOW to the TARGET

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime(); // how many ms from begininng to this moment

  // Find the date difference between now and countDownDate (our TARGET)
  let dateDiff = countDownDate - dateNow;

  // get time units
  // days
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  // let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); SAME METHOD
  // console.log(days);

  // hours
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours);
  // dateDiff % (1000 * 60 * 60 * 24) ==> to get the rest of days (HOURS) by MILISeconds
  // / 1000 / 60 / 60 ==> to get the result by HOURS

  // minutes
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)); // rest of hours (without / 24)
  // console.log(minutes / (1000 * 60));
  // console.log(minutes);

  // seconds
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000); // get the rest of minutes
  // console.log(seconds / 1000); ==> from miliSeconds to seconds
  // console.log(seconds);

  // give the days unit the value of days
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  // note: condition => IF number < 10 ==> make a place for ZERO 0 to keep the two numbers form, ELSE number

  if (dateDiff < 0) {
    clearInterval(counter); // stop the function
    document.querySelector(".events .info .title").innerHTML = "Congrats";
  }
}, 1000);

// ---------------------------------------------------------

// Change Video (Videos Section)

let liVideo1 = document.getElementById("li-video1");
let liVideo2 = document.getElementById("li-video2");
let sourceVideo = document.getElementById("main-source");
let mainVideo = document.getElementById("main-video");

console.log(mainVideo.src);

liVideo1.addEventListener("click", () => {
  mainVideo.src = "../videos/video_1.mp4";
});

liVideo2.addEventListener("click", () => {
  mainVideo.src = "../videos/video_2.mp4";
});

// ---------------------------------------------------------

// Increase Numbers (Stats Section)

let nums = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector(".stats");
let started = false;

// main function
function startCount(x) {
  // goal => get the number from data-goal to stop in it
  let goal = x.dataset.goal;
  // count => setInterval()
  let count = setInterval(() => {
    x.textContent++;
    if (x.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
  // 2000 / goal ==> try to fixed the duration of all number while the increase
}

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    // started == false ===> !started
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};

// note: why i used the condition of if (!started)
// bash mea ydaaar increase ghadi twliii started true so mghadiish yb9a kul shwiya f scroll ydaar increase of numbers
