const slider = document.getElementsByClassName('slider-container');

[].forEach.call(slider, function (e) {
  let next = e.getElementsByClassName('next')[0],
      previous = e.getElementsByClassName('previous')[0],
      blockSelection = e.getElementsByClassName('block-selection')[0],
      inner = e.getElementsByClassName('slider-container-inner')[0],
      slides = e.getElementsByClassName('slide'),
      slideIndex = 0,
      width = window.innerWidth,
      squares = [];

  for(let i = 0; i < slides.length; i++) {
    let s = document.createElement('span');
    s.classList.add('square');
    s.innerHTML = i;
    blockSelection.appendChild(s);
    squares.push(s);

    s.addEventListener('click', function () {
      slideIndex = i;
      nextImg();
      checkState();
    })
  }

  function checkState() {
    slideIndex == 0 ? previous.style.display = 'none' : previous.style.display = 'block';
    slideIndex == squares.length - 1 ? next.style.display = 'none' : next.style.display = 'block';
  }

  checkState();

  function nextImg () {
    inner.style.setProperty('--left', `${-width * slideIndex}px`);

    squares.forEach(function(s, i) {
      if(i === slideIndex) {
        slides[i].classList.add('active');
        s.classList.add('active');
      } else {
        slides[i].classList.remove('active');
        s.classList.remove('active');
      }
    })
  }

  next.addEventListener('click', function () {
    slideIndex ++;

    checkState();

    if(slideIndex >= slides.length) {
      slideIndex = slides.length -1;
    }

    nextImg();
  });

  previous.addEventListener('click', function () {
    slideIndex --;

    checkState();

    if(slideIndex < 0) {
      slideIndex = slides.length -1;
    }

    nextImg();
  });

  nextImg();
});

function ready() {
  var elem = document.getElementById("remove");
  elem.parentNode.removeChild(elem);
}

document.addEventListener("DOMContentLoaded", setTimeout(ready, 2000));
