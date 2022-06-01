const myImage = document.querySelector('img');
const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) setUserName();
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

myImage.onclick = () => {
    mySrc = myImage.getAttribute('src');
    if (mySrc === './images/firefox-icon.png')
        myImage.setAttribute('src', './images/python-logo.png');
    else myImage.setAttribute('src', './images/firefox-icon.png');
}

if(!localStorage.getItem('name')) setUserName();
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => setUserName();