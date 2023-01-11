const angle1 = document.querySelector("#firstangle");
const angle2 = document.querySelector("#secondangle");
const angle3 = document.querySelector("#thirdangle");

const button = document.querySelector("#check");
const outPut = document.querySelector("#output");


button.addEventListener("click", isTriangle);

function calculateSum(value1, value2, value3) {
    let sum = 0;
    sum = value1 + value2 + value3;
    //  console.log(parseInt(sum));
    return sum;
}


function isTriangle() {
    let value1 = parseInt(angle1.value);
    let value2 = parseInt(angle2.value);
    let value3 = parseInt(angle3.value);
    const sum = calculateSum(value1, value2, value3);

    if (sum === 180) {
        // console.log("it'a a triangle");
        outPut.innerText = "It's a Triangle";
    } else {
        // console.log("Oops! It's not");
        outPut.innerText = "Oops! It's not";
    }
}