function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "0805") {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
  } else {
    alert("Parolă greșită. Încearcă din nou!");
  }
}

let clickCount = 0;
let clickTimer;

function handleHeartClick() {
  clickCount++;

  if (clickCount === 1) {
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 1500); // Resetează dacă nu apasă de 3 ori rapid
  }

  if (clickCount === 3) {
    clearTimeout(clickTimer);
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  }
}

