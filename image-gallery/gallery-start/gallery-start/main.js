const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (image of imageFileNames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${image}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => displayedImage.setAttribute('src', e.target.src));
}

/* Wiring up the Darken/Lighten button */


/**
    Checks the current class name set on the <button> — you can again achieve this by using getAttribute().
    If the class name is "dark", changes the <button> class to "light" (using setAttribute()), its text content to "Lighten", and the background-color of the overlay <div> to "rgba(0,0,0,0.5)".
    If the class name is not "dark", changes the <button> class to "dark", its text content back to "Darken", and the background-color of the overlay <div> to "rgba(0,0,0,0)".

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;

 */
