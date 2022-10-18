var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector("#screen");
var btnOpt = document.querySelectorAll("#btnOpt");
var init = document.querySelector("#init");
var initAll = document.querySelector("#initAll");
var optState = false;
var opt = "";
var final = 0;
var elements = document.querySelector(".element-group__list__item");
elements.textContent.hidden = true;


btnNumber.forEach(number => {
    number.addEventListener('click', showNumber);

    function showNumber() {
        this.style.fontSize = "25px";
        if (screen.textContent == "0" || optState) {
            screen.textContent = "";
        }


        screen.textContent += this.textContent;
        optState = false;

        setTimeout(() => {
            this.style.fontSize = "15px";
        }, 500);
    }
});


btnOpt.forEach(operator => {
    operator.addEventListener('click', calculator);
    function calculator() {
        optState = true;
        var newOpt = this.textContent;

        switch (opt) {
            case "+":
                screen.textContent = final + Number(screen.textContent);
                break;
            case "-":
                screen.textContent = final - Number(screen.textContent);
                break;
            case "/":
                screen.textContent = final / Number(screen.textContent);
                break;
            case "*":
                screen.textContent = final * Number(screen.textContent);
                break;
            case "=":
                final = Number(screen.textContent);
                break;
        }
        final = Number(screen.textContent);
        opt = newOpt;
    }
});

init.addEventListener('click', function () {
    screen.textContent = "0";
});

initAll.addEventListener('click', function () {
    screen.textContent = "";
});


//selectors

const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

//eventListeners

btn.addEventListener('click', btnClick);
list.addEventListener('click', listClick);

//functions
function btnClick() {
    var txt = input.value;
    if (txt == "") {
        alert("You must write something! ")
    } else {
        li = document.createElement("li");
        li.classList.add("element-group__list__item");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = "";
    }
}

function listClick(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
    }
}