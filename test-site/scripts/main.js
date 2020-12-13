let myImage= document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let imageSrc= myImage.getAttribute('src');
    if (imageSrc === 'images/images.jpeg')  {
        myImage.setAttribute('src', 'images/images2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/images.jpeg');
    }
}

//myButton.onclick(setUserName());
myButton.onclick = function() {
    setUserName();
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName +'  welcome back!';
  }
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName +'  welcome back!';
        }

}