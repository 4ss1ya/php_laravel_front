function select(type) {
  if (type == "signin") {
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
  } else {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
  }
}

var users_data = []
if (localStorage.getItem("users") != null) {
  users_data = JSON.parse(localStorage.getItem("users"));
}
function signin() {
  let email = document.getElementById("logEmail").value;
  let password = document.getElementById("logPassword").value;
  let request = $.ajax(
    {
      url:"http://smartbrain.loc/api/createUser",
      method: "POST",
      data: { email: email, password: password },
      dataType: "json"
    }
  )
  
  /*if (users_data.length > 0) {
    for (let i = 0; i < users_data.length; i++) {
      if (users_data[i].email == email.value && users_data[i].password == password.value) {
        users_data[i].session = true;

        localStorage.setItem("users", JSON.stringify(users_data));
        window.open('../index.html');
        window.close();
        return
      }
    }
    alert("An account does not exist");
  }*/
}

function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let request = $.ajax(
    {
      url:"http://smartbrain.loc/api/createUser",
      method: "POST",
      data: { user_name: name, email: email, password: password },
      dataType: "json"
    }
  )

  
  /*let check = true;
  if (users_data != null) {
    for (let i = 0; i < users_data.length; i++) {
      if (users_data[i].email == email.value) {
        check = false;
        alert("Account already exists!");
        select("signin");
      }
    }*/
  }

  /*let email_v = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  let password_v = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (name.value == null || name.value == "") {
    name.classList.add("error")
    setTimeout(function () {
      name.classList.remove('error');
    }, 300);
    check = false;
  }


  if (email.value == null || email.value == "" || email_v.test(email.value) == false) {
    email.classList.add("error")
    setTimeout(function () {
      email.classList.remove('error');
    }, 300);
    check = false;
  }

  if (password.value == null || password.value == "" || password_v.test(password.value) == false) {
    password.classList.add("error")
    setTimeout(function () {
      password.classList.remove('error');
    }, 300);
    document.getElementById("errorMessage").innerHTML = "Classes of characters: Lower Case, Upper Case, Digits!"
    check = false;
  } else {
    document.getElementById("errorMessage").innerHTML = ""
  }*/

  if (check) {
    users_data.push({
      name: name.value,
      email: email.value,
      password: password.value,
      disable: false,
      session: true,
      course: {
        "eye": {
          request: false,
          admin: false
        },
        "brain": {
          request: false,
          admin: false
        },
        "all": {
          request: false,
          admin: false
        },
      },
    })
    console.log(users_data)
    localStorage.setItem('users', JSON.stringify(users_data));
    window.open('../index.html');
    window.close();

  }


