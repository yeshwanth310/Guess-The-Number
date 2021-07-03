let guesses = [];
let correctnumber = getrandomnumber();
window.onload = function () {
  document.getElementById("btn-1").addEventListener("click", playgame);
  document.getElementById("btn-2").addEventListener("click", initgame);
};
function playgame() {
  let num = document.getElementById("input").value;
  displayresult(num);
  guesshistory(num);
  displayhistory();
}
function getrandomnumber() {
  let wholenumber = Math.floor(Math.random() * 100) + 1;
  return wholenumber;
}
function initgame() {
  correctnumber = getrandomnumber();
  document.getElementById("display").innerHTML = "";
  guesses = [];
  displayhistory();
}

function displayresult(guessnum) {
  if (guessnum > correctnumber) {
    showabove();
  } else if (guessnum < correctnumber) {
    showbelow();
  } else {
    showwon();
  }
}
function getdialog(dialogtype, text) {
  let dialog;
  switch (dialogtype) {
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showwon() {
  text = "You have guessed it correct";
  dialog = getdialog("won", text);

  document.getElementById("display").innerHTML = dialog;
}
function showabove() {
  text = "Your Guess is High";
  dialog = getdialog("warning", text);

  document.getElementById("display").innerHTML = dialog;
}
function showbelow() {
  text = "Your Guess is Low";
  dialog = getdialog("warning", text);

  document.getElementById("display").innerHTML = dialog;
}
function guesshistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}
function displayhistory() {
  let index = guesses.length - 1;
  let list;
  list = "<ul style='width:400px' class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>Your Guess is " + guesses[index] + "</li>";
    index--;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}
