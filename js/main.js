var myImage = document.querySelector('img');

myImage.onclick = function() {
    var myScr = myImage.getAttribute('scr');
    if(myScr ==== 'Images/C.jpg'){
      myImage.setAttribute ('scr','Images/cristiano-ronaldo-dunk.webp');
    } else {
      myImage.setAttribute ('scr','Images/C.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('hi');
function setUserName() {
   var myName = prompt('Введите свое имя');
   localStorage.setItem('name', myName);
   myHeading.textContent = 'Добро пожаловать ' + myName;
 }
 if(!localStorage.getItem('name')) {
   setUserName();
 } else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = 'Привет ' +storedName;
 }
 myButton.onclick = function() {
   setUserName();
 }