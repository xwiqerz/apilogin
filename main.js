let attempt = 3; // räkna login attempts
// login function
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "casper@lood.com" && password == "casper") {
    alert("Login successfully");
    url = "https://reqres.in/api/users?page=2"

    const userList = document.querySelector(".ulList");
    const userImage = document.querySelector(".userImage");
    const userFullName = document.querySelector(".userFullName");
    const userEmail = document.querySelector(".userEmail");
    const showUsersBtn = document.querySelector(".showUsers");
    showUsersBtn.disabled = false;

    // fetchar url och använder informationen till att fylla en lista. 
    showUsersBtn.addEventListener("click", function() {
      console.log("hej");
      fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
          let users = data.data;
          return users.map(function(user) {
            //gör en ny lista och fyller den med användarnas förnamn
            let li = createNode('li');
            li.innerHTML = `${user.first_name}`;
            //när man klickar på en person i listan visas deras avatar, för och efternamn samt email.
            li.addEventListener("click", function() {
            
              userImage.src = `${user.avatar}`;
              userFullName.innerHTML = `${user.first_name} ${user.last_name}`;
              userEmail.innerHTML = `${user.email}`;
              
            });
            userList.appendChild(li);
          });
        });
    });
    
  } else {
    attempt--; // minskar med ett
    alert("You have left " + attempt + " attempt;");
    // tar bort element efter 3 försök
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
//createar en html tag som jag anropar i showUsersBtn onclick eventet.
function createNode(element) {
  return document.createElement(element);
}
