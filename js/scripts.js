// alert("Hello World");

// var name = prompt("Please enter your name");
// alert("Welcome back " + name );


// A simple calculator
// var first_value = prompt("Please enter first value");
// var second_value = prompt("Please enter second value");
// var result = first_value * second_value;

// alert("The product of " + first_value + " x " + second_value + " = " + result );

                                             
//open menu container

var menu_button = document.getElementById("menu_btn");
var close_button = document.getElementById("close_btn");

// menu_button.addEventListener("click", open_menu);
// close_button.addEventListener("click", close_menu);

function open_menu(){
    // alert("I am working")
    let menu_cont = document.getElementById("menu_container")
    menu_cont.style.display = "block";
    menu_button.style.display = "none";
    close_button.style.display = "block";
}

function close_menu(){
    // alert("I am working")
    let menu_cont = document.getElementById("menu_container")
    menu_cont.style.display = "none";
    menu_button.style.display = "block";
    close_button.style.display = "none";
}


// Login Script

const user = {
    email: "aquadirmuhammad@gmail.com",
    password: "Qaudri1234"
}

let login_button = document.getElementById("login_btn")
login_button.addEventListener("click", Login)


function Login(){
    if(email == user.email){
        if(password == user.password){
            alert("Welcome " + user.email)
        }

        else {
            alert("The password you have entered is incorrect.")
        }
    }

    else {
        alert("This user does not exist!")
    }
}