const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checksInput();

});


function checksInput() {
    // get the values form the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    console.log("username", username);



    if (usernameValue === "") {
        // show error
        // add error class
        setErrorFor(username, "Username can't be blank")
    } else {
        // add success class

        setSuccessFor(username)
    }
}

function setErrorFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // add error message inside message
    small.innerText = message;

    // add error class 

    formControl.className = "form-control error"


}