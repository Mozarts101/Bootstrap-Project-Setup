function checkUserName() {
    let elMsg = document.getElementById("feedback");
    if (this.value.length < 5) {
        elMsg.textContent = "Username must be more than 5 characters";
    } else {
        elMsg.textContent = ""
    }
}

let elUsername = document.getElementById("username");
elUsername.onblur = checkUserName;