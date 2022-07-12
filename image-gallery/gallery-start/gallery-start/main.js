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
}

/* Wiring up the Darken/Lighten button */


/**
    Add a click event listener to each <img> inside the thumb-bar <div> so that when they are clicked, the corresponding image is displayed in the displayed-img <img> element.
    Add a click event listener to the <button> so that when it is clicked, a darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.


You need to:

Adding a click event listener to each thumbnail image

In each loop iteration, you need to add a click event listener to the current newImage — this listener should find the value of the src attribute of the current image. Set the src attribute value of the displayed-img <img> to the src value passed in as a parameter.

Alternatively, you can add one event listener to the thumb bar.
Writing a handler that runs the darken/lighten button

That just leaves our darken/lighten <button> — we've already provided a line that stores a reference to the <button> in a constant called btn. You need to add a click event listener that:

    Checks the current class name set on the <button> — you can again achieve this by using getAttribute().
    If the class name is "dark", changes the <button> class to "light" (using setAttribute()), its text content to "Lighten", and the background-color of the overlay <div> to "rgba(0,0,0,0.5)".
    If the class name is not "dark", changes the <button> class to "dark", its text content back to "Darken", and the background-color of the overlay <div> to "rgba(0,0,0,0)".

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;

 */
