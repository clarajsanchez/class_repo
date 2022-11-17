let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    console.log("I have been clicked!")
    event.preventDefault();

    if (nameInput.value === "" || emailInput === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all field of the form...";
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode('${nameInput.value}: ${emailInput.value}')
        );

        userList.appendChild(li);

        nameInput.value = "";
        emailInput.value = "";
    }
}
