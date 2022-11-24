let userChoose = document.getElementById("userinput").value;
function rockPapperScissor() {
  const random = ["Rock", "Papper", "Scissor"];
  document.getElementById("userchoose").innerHTML = userChoose;
  const cpuChoose = random[[Math.floor(Math.random() * random.length)]];
  document.getElementById("cpuchoose").innerHTML = cpuChoose;
  if (
    (userChoose === "Rock" || userChoose === "rock") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "Draw";
    document.getElementById("result").style.color = "brown";
  } else if (
    (userChoose === "Rock" || userChoose === "rock") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "You loose";
    document.getElementById("result").style.color = "red";
  } else if (
    (userChoose === "Rock" || userChoose === "rock") &&
    cpuChoose === "Scissor"
  ) {
    document.getElementById("result").innerHTML = "You win";
    document.getElementById("result").style.color = "green";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "You win";
    document.getElementById("result").style.color = "green";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "Draw";
    document.getElementById("result").style.color = "black";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Scissor"
  ) {
    document.getElementById("result").innerHTML = "You loose";
    document.getElementById("result").style.color = "red";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "You loose";
    document.getElementById("result").style.color = "red";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Scissor"
  ) {
    document.getElementById("result").innerHTML = "Draw";
    document.getElementById("result").style.color = "black";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "You win";
    document.getElementById("result").style.color = "green";
  }
}

console.log(rockPapperScissor());
