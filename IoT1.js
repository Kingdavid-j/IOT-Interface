//SPEED SLIDER
const speedSlider = document.getElementById("speed");
const speedLevel = document.querySelector(".speed-level");
let rpmValue = document.createElement("p");
rpmValue.className = "rpm-display";
rpmValue.style.color = "#AAB2C8";
speedLevel.appendChild(rpmValue);

function updateSpeed(value) {
  speedLevel.querySelector("p").textContent = `${value}%`;
  const rpm = Math.round((value / 100) * 300);
  rpmValue.textContent = `${rpm} rpm`;
}

speedSlider.addEventListener("input", (e) => {
  updateSpeed(e.target.value);
});
updateSpeed(speedSlider.value);