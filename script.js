function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "0805") {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
  } else {
    alert("Parolă greșită. Încearcă din nou!");
  }
}

let holdTimer;
function startHold() {
  holdTimer = setTimeout(() => {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  }, 3000); // 3 secunde
}

function endHold() {
  clearTimeout(holdTimer);
}
