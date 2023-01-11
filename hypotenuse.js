const lengthA = document.querySelector("#first-side");
const lengthB = document.querySelector("#second-side");
const checkBtn= document.querySelector("#check");
const outPut=document.querySelector("#output");


checkBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
    let hypotenuse = 0;
    hypotenuse= Math.sqrt(lengthA.value * lengthA.value + lengthB.value * lengthB.value);
    console.log(hypotenuse);
    outPut.innerText = "The length of the hypotenuse is: " + hypotenuse + "cm";
}