const clock = document.getElementById("clock-text");

function clockView() {
  const date = new Date();
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${h}:${m}:${s}`;
}

setInterval(clockView, 1000);
