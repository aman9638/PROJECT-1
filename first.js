const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const boy = document.getElementById("boy");
  const girl = document.getElementById("girl");
  const l1 = boy.value.length;
  const l2 = girl.value.length;
  const result = Math.pow(l1+l2,3)%101;

let emoji;
    let message;

    if (result <= 10) {
        emoji = "💔";
        message = "Very Low Love!";
    } else if (result <= 30) {
        emoji = "😅";
        message = "Just a Little Crush!";
    } else if (result <= 50) {
        emoji = "😊";
        message = "Something Is Growing!";
    } else if (result <= 70) {
        emoji = "😍";
        message = "Strong Feelings!";
    } else if (result <= 90) {
        emoji = "🥰";
        message = "Made for Each Other!";
    } else {
        emoji = "💑";
        message = "Perfect Love Match!";
    }

    document.querySelector("h2").innerHTML =
        `Love Percentage: ${result}% ${emoji}<br>${message}`;
});