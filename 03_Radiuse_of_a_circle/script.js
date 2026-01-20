let pi = 3.14;
let radius;
let circumferance;
document.getElementById("mybtn").onclick = function () {
  radius = Number(document.getElementById("Myinput").value);
  circumferance = 2 * radius * pi;
  document.getElementById(
    "myoutput"
  ).textContent = `The Raduse of a circle is: ${circumferance}`;
};
