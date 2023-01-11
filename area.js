const lengthA = document.querySelector("#first-side");
const lengthB = document.querySelector("#second-side");
const checkBtn= document.querySelector("#check");
const outPut=document.querySelector("#output");


checkBtn.addEventListener("click", calculateArea);

function calculateArea(){
    let Area = 0;
    Area= lengthA.value * lengthB.value / 2;
    console.log(Area);
    outPut.innerText = "The Area of a Triangle is: " + Area + "cm²";
}