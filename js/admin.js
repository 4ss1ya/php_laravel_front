var users = JSON.parse(localStorage.getItem("users"));

var admin = JSON.parse(localStorage.getItem("admin"));
console.log(admin)
if (admin[0].session) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("auth").style.display = "block";
}

function login() {
  let login = document.getElementById("login");
  let pass = document.getElementById("password");
  if (admin[0].email == login.value && admin[0].password == pass.value) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("auth").style.display = "block";
    admin[0].session = true;
    localStorage.setItem("admin", JSON.stringify(admin));
    location.reload();
  } else {

    alert("Invalid login or password!")
  }
}
function logout() {
  admin[0].session = false;
  localStorage.setItem("admin", JSON.stringify(admin));
  location.reload();

}


var table = document.getElementById("myTable");

if (users.length > 0) {
  for (let i = 0; i < users.length; i++) {
    var row = table.insertRow(i + 1);
    let eye = users[i].course.eye.request ? `<button id="eyeBtn" onclick="access('eye', '${users[i].email}', 'eyeBtn')">Access</button>` : "";
    let brain = users[i].course.brain.request ? `<button id="brainBtn" onclick="access('brain', '${users[i].email}', 'brainBtn')">Access</button>` : "";
    let all = users[i].course.all.request ? `<button id="allBtn" onclick="access('all', '${users[i].email}', 'allBtn')">Access</button>` : "";
    row.insertCell(0).innerHTML = users[i].name
    row.insertCell(1).innerHTML = users[i].email
    row.insertCell(2).innerHTML = users[i].password
    row.insertCell(3).innerHTML = `<button onclick="ban('${users[i].email}')">Ban</button>`
    row.insertCell(4).innerHTML = eye
    row.insertCell(5).innerHTML = brain
    row.insertCell(6).innerHTML = all
    row.insertCell(7).innerHTML = users[i].session

  }
}

function access(type, email, id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      users[i].course[type].admin = !users[i].course[type].admin;
      localStorage.setItem("users", JSON.stringify(users));
      location.reload();
    }
  }
}

function ban(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      users[i].disable = !users[i].disable;
      localStorage.setItem("users", JSON.stringify(users));
      location.reload();
    }
  }
}