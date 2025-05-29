
let hr = document.querySelector("#hour-js");
let mint = document.querySelector("#minutes-js ");
let sec = document.querySelector("#second-js");

function clockDisplay() {
  
      let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hRout = 30 * hours + minutes / 2;
  let mRout = 6 * minutes;
  let sRout = 6 * seconds;

  hr.style.transform = `rotate(${hRout}deg)`;
  mint.style.transform = `rotate(${mRout}deg)`;
  sec.style.transform = `rotate(${sRout}deg)`;
}

setInterval(clockDisplay, 1000);
