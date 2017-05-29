(function() {

  const slider = document.querySelector('.slider-container');
  let   next = document.querySelector('.next'),
        previous = document.querySelector('.previous'),
        blockSelection = document.querySelector('.block-selection'),
        inner = document.querySelector('.slider-container-inner'),
        slides = document.querySelectorAll('.slide'),
        statement = document.querySelector('.statement'),
        pathCounter = document.querySelector('.step-counter'),
        slideIndex = 0,
        width = window.innerWidth,
        squares = [],
        varNum = document.querySelector('.varNum');
        pathContainer = [];

  function createCounter() {
    for(let i = 0; i < slides.length; i++) {
      let s = document.createElement('span');
          s.classList.add('square');
          s.innerHTML = i;
      blockSelection.appendChild(s);
      squares.push(s);

      s.addEventListener('click', function () {
        slideIndex = i;

        removeStatement();
        addPath();
        nextImg();
        checkState();
      });
    }
  }

  createCounter();

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
    });
  }

  next.addEventListener('click', function () {
    slideIndex ++;
    checkState();
    addPath();
    removeStatement();
    // showPath();

    if(slideIndex >= slides.length) {
      slideIndex = slides.length -1;
    }
    nextImg();
  });

  previous.addEventListener('click', function () {

    slideIndex --;
    checkState();
    removeStatement()
    addPath();

    if(slideIndex < 0) {
      slideIndex = slides.length -1;
    }
    nextImg();
  });

  function removeStatement() {
    if(slideIndex > 0) {
      statement.style.display = 'none';
    } else {
      statement.style.display = 'block';
    }
  }

  function addPath() {
    varNum.innerHTML = slideIndex;
    if(slideIndex < 1) {
      pathCounter.style.display = 'none';
    } else {
      pathCounter.style.display = 'block';
    }
  }

  function ready() {
    var elem = document.getElementById("remove");
    elem.parentNode.removeChild(elem);
  }

  document.addEventListener("DOMContentLoaded", setTimeout(ready, 2000));
})();
