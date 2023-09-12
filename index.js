var prevBtn = document.querySelector(".prev-button");
var nextBtn = document.querySelector(".next-button");

const borderClass = "active";
const btnColor = 'btn-triggered';
const indContent = 'content';

var allContents = document.getElementsByClassName("inner-content");
var hrElements = document.getElementsByClassName("hr-element");

var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector(".content3");
var content4 = document.querySelector(".content4");

var hr1  = document.querySelector(".hr1");

prevBtn.addEventListener("click", ()=> {
    removeclass();
})
nextBtn.addEventListener("click", ()=> {
    addclass();
})

function removeclass() {
    var j = 0;
    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i].classList.contains(borderClass)) {
            j = i;
        }
    }
    if (j > 0) {
        allContents[j].classList.remove(borderClass);
        hrElements[j-1].classList.remove(borderClass);
    }
    console.log(j-1);
    adjustBtnClass(j-1);
}

function addclass() {
    var j = 0;
    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i].classList.contains(borderClass)) {
            j = i;
        }
    }
    j += 1;
    if (j != allContents.length) {
        allContents[j].classList.add(borderClass);
        hrElements[j-1].classList.add(borderClass);
    }
    adjustBtnClass(j);
}

function adjustBtnClass(j) {
    console.log(j + " >> " + allContents.length);
    
    
    if (j < 1 ) {
        prevBtn.classList.remove(btnColor);
        nextBtn.classList.add(btnColor);
    } else if (j > 0 && j <= allContents.length -1) {
        prevBtn.classList.add(btnColor);
        nextBtn.classList.add(btnColor);
        if (j === allContents.length - 1) {
            nextBtn.classList.remove(btnColor);
        }
    }
}