// Select the slider container and store it in a let
let carousels = document.getElementsByClassName('slider-container');
// I used an empty array because its easier to acces my elements and I can pass a function as input
[].forEach.call(carousels, function (e) {
  let next = e.getElementsByClassName('next')[0],
      previous = e.getElementsByClassName('previous')[0],
      blockSelection = e.getElementsByClassName('block-selection')[0],
      inner = e.getElementsByClassName('slider-container-inner')[0],
      images = e.getElementsByClassName('view'),
      imageIndex = 0,
      width = window.innerWidth,
      squares = [];
  // For loop to make the code scalable || run as many times as there are images
  for(let i = 0; i < images.length; i++) {
    // Create the little boxes that show at which image you currently are
    let s = document.createElement('span');
    // Add classlist to these items so we can style them
    s.classList.add('square');
    // We set the innerhtml equal to its position in the array
    s.innerHTML = i;
    // Actual appending the span to the parent element
    blockSelection.appendChild(s);
    // Push the spans to a new array squares, we need this for checks lateron in the code
    squares.push(s);
    // When the user clicks on one of the spans we set the imageIndex(counter) to i(position of the element in array) and we fire two functions
    s.addEventListener('click', function () {
      imageIndex = i;
      nextImg();
      checkState();
    })
  }
  // This function checks the state we are in, it hides and shows the the next and previous buttons based on the imageIndex
  function checkState() {
    imageIndex == 0 ? previous.style.display  = 'none' : previous.style.display = 'block';
    imageIndex == squares.length - 1 ? next.style.display = 'none' : next.style.display = 'block';
  }
  // We fire checkState from the beginning because the index = 0, so the previous button gets a display of none
  checkState();
  // This function makes the images slide out from right to left by adding a minus width (which equals to the users devive width)
  // times the imageindex
  function nextImg () {
    inner.style.left = -width * imageIndex + 'px';
    // We loop over the squares array to check if i equals the imageIndex, if so we add the class active which adds a background of white
    // This way the user can see which image he is viewing
    squares.forEach(function(s, i) {
      if(i === imageIndex) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    })
  }
  // Fire function when user clicks on next arrow
  next.addEventListener('click', function () {
    // Add +1 to image counter
    imageIndex ++;
    // Run checkState to see if we need to hide or show the arrows
    checkState();
    // Run nextimg function to add the correct width to the images
    nextImg();
  });
  // Fire function when user clicks the previous arrow
  previous.addEventListener('click', function () {
    // Instead of adding we now substract one of the imageIndex, when nextimg is called, it will do the calculation on the correct index number
    imageIndex --;
    // Run checkState to see if we need to hide or show the arrows
    checkState();

    nextImg();
  });
  // Run nextimg function to add the correct width to the images
  nextImg();
});

// For demo purpose i call the setTimeout which calls the ready instead of removing the element instant
function ready() {
  var elem = document.getElementById("remove");
  elem.parentNode.removeChild(elem);
}

document.addEventListener("DOMContentLoaded", setTimeout(ready, 2000));
