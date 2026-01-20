let username;
document.getElementById("btn").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myH1").textContent = `Hellow ${username}`;
};
