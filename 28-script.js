console.log('====== DOM API - getElementById() ===========');
const headingElement = document.getElementById("heading");
console.log(headingElement);
console.log(headingElement.innerHTML);

console.log('====== DOM API - getElementsByTagName()  ===========');
const h3Element = document.getElementsByTagName("h3");
console.log(h3Element[0].innerHTML);

console.log('====== DOM API - getElementsByClassName()  ===========');
const techElements = document.getElementsByClassName("tech");
console.log(techElements);
for (const element of techElements) {
    console.log(element.innerHTML); 
}