


function generateUserId() {
    return 'USER-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

  
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (!users[username]) {
        
        let userId = generateUserId();
        users[username] = { userId, password };
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById("message").innerText = `New User Registered! ID: ${userId}`;
        document.getElementById("message").style.color = "green";
    } else {
     
        if (users[username].password === password) {
            document.getElementById("message").innerText = `Welcome Back! Your ID: ${users[username].userId}`;
            document.getElementById("message").style.color = "blue";
        } else {
            document.getElementById("message").innerText = "Incorrect Password!";
            document.getElementById("message").style.color = "red";
        }
    }

   
    document.getElementById("loginForm").reset();
});
