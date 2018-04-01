var myClients = [
  {
    "username": "CassiniAdmin",
    "password": "GoRattlers"
  },
]

//login functionality
function getInfo() {
    //retrieve data input from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    //loop through all the user objects and confirm if the username and passwords are correct
    for(i = 0; i < myClients.length; i++) {
      if(username == myClients[i].username && password == myClients[i].password) {
          return alert("Login Successful")
      } else {
          alert("Login Failed")
      }
    }
}
