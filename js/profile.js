var users_data = JSON.parse(localStorage.getItem("users"));
let check = false;
for (let i = 0; i < users_data.length; i++) {
  if (users_data[i].session) {

    document.getElementById("name").innerHTML = "Welcome! " + users_data[i].name
    if (!users_data[i].disable) {
      if (users_data[i].course['eye'].request && !users_data[i].course['eye'].admin) {
        document.getElementById("eye").style.display = "block";
        document.getElementById("eyeNotAccess").style.display = "block";
        check = true;
      } else if (users_data[i].course['eye'].request && users_data[i].course['eye'].admin) {
        document.getElementById("eye").style.display = "block";
        document.getElementById("eyeAccess").style.display = "block";
        check = true;
      }

      if (users_data[i].course['all'].request && !users_data[i].course['all'].admin) {
        document.getElementById("all").style.display = "block";
        document.getElementById("allNotAccess").style.display = "block";
        check = true;
      } else if (users_data[i].course['all'].request && users_data[i].course['all'].admin) {
        document.getElementById("all").style.display = "block";
        document.getElementById("allAccess").style.display = "block";
        check = true;
      }

      if (users_data[i].course['brain'].request && !users_data[i].course['brain'].admin) {
        document.getElementById("brain").style.display = "block";
        document.getElementById("brainNotAccess").style.display = "block";
        check = true;
      } else if (users_data[i].course['brain'].request && users_data[i].course['brain'].admin) {
        document.getElementById("brain").style.display = "block";
        document.getElementById("brainAccess").style.display = "block";
        check = true;
      }

      if (check) {
        document.getElementById("text").style.display = "none"
      }
    } else {
      document.getElementById("ban").innerHTML = "You were blocked by administrator!"
      document.getElementById("text").style.display = "none"
    }
  }
}
