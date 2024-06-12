let [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timerDisplay");
let int;
let isTimerRunning = false; // Flag to track timer state

document.getElementById("StartTimer").addEventListener("click", () => {
  if (!isTimerRunning) {
    int = setInterval(displayTimer, 10);
    isTimerRunning = true;
    StartTimer.style.backgroundColor = "red";
    StartTimer.style.cursor = "no-drop";

    document.getElementById("StartTimer").disabled = true;
  }
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
  isTimerRunning = false;
  StartTimer.style.backgroundColor = "white";
  StartTimer.style.cursor = "pointer";
  document.getElementById("StartTimer").disabled = false;
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  isTimerRunning = false;
  [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
  document.getElementById("StartTimer").disabled = false;
  StartTimer.style.backgroundColor = "white";
  StartTimer.style.cursor = "pointer";
});
function displayTimer() {
  millisecond += 10;
  if (millisecond == 1000) {
    millisecond = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    millisecond < 10
      ? "00" + millisecond
      : millisecond < 100
      ? "000" + millisecond
      : millisecond;
  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
