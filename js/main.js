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
