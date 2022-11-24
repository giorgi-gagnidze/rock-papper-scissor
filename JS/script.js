const userChoose = prompt("Enter your choose ");
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
  } else if (
    (userChoose === "Rock" || userChoose === "rock") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "You loose";
  } else if (
    (userChoose === "Rock" || userChoose === "rock") &&
    cpuChoose === "Scissor"
  ) {
    document.getElementById("result").innerHTML = "You win";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "You win";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "Draw";
  } else if (
    (userChoose === "Papper" || userChoose === "papper") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "You loose";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Rock"
  ) {
    document.getElementById("result").innerHTML = "You loose";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Scissor"
  ) {
    document.getElementById("result").innerHTML = "Draw";
  } else if (
    (userChoose === "Scissor" || userChoose === "scissor") &&
    cpuChoose === "Papper"
  ) {
    document.getElementById("result").innerHTML = "You win";
  }
}

console.log(rockPapperScissor());
