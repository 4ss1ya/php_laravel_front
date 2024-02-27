$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
});
let mainData = []
if (localStorage.getItem("admin") == null) {
  mainData = [{
    name: 'Admin',
    email: 'admin',
    password: 'admin123',
    session: false,
  }]
} else {
  mainData = JSON.parse(localStorage.getItem("admin"));
}
localStorage.setItem("admin", JSON.stringify(mainData));
let userId = 99;
var users = JSON.parse(localStorage.getItem("users"));
for (let i = 0; i < users.length; i++) {
  if (users[i].session == true) {
    userId = i;
    document.getElementById("notAuth1").style.display = "none";
    document.getElementById("notAuth2").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block"
    document.getElementById("user_name").innerHTML = users[i].name
  }
}

function logout() {
  users[userId].session = false;
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}

function buyCourses(type) {
  if (userId != 99) {
    if (!users[userId].course[type].request) {
      users[userId].course[type].request = true;
      localStorage.setItem("users", JSON.stringify(users));
      alert("You have successfully added a course!")
    } else {
      alert("You have already added this course")
    }
  } else {
    alert("Please login to buy the course!")
  }
}
