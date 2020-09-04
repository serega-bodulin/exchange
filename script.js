function get(){
    getValue().then(console.log);
};
const but = document.querySelector(".input-form__button");

but.addEventListener("сlick", function () {
    get();
  })

async function getValue() {
    document.getElementById("value").firstChild.nodeValue="";
    
    const inputVal = document.getElementById("first").value;
    const inputVal2 = document.getElementById("second").value;

    var select = document.getElementById("courseFrom");
    let valueFrom = select.value;
    
    var select2 = document.getElementById("courseTo");
    var valueTo = select2.value;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/c5295f6a70b9fa51b4ae814e/latest/USD`);
    const course = await response.json();
    const valTo = course.conversion_rates[valueTo];
    const valFrom = course.conversion_rates[valueFrom];

    document.getElementById("value").firstChild.nodeValue+=`1 ${valueFrom} = ${(valTo / valFrom).toFixed(4)} ${valueTo}`;
    document.getElementById("second").value = (inputVal * valTo / valFrom).toFixed(2);
    //document.getElementById("first").value = (inputVal2 * valFrom / valTo).toFixed(2);
}

