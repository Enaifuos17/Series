// Scroll to Up

let mySpan = document.querySelector("#scrollBttn");
let test = false;

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
