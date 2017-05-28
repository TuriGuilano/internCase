let carousels = document.getElementsByClassName('slider-container');

[].forEach.call(carousels, function (e) {
  let next = e.getElementsByClassName('next')[0],
      previous = e.getElementsByClassName('previous')[0],
      blockSelection = e.getElementsByClassName('block-selection')[0],
      inner = e.getElementsByClassName('slider-container-inner')[0],
      images = e.getElementsByClassName('view'),
      imageIndex = 0,
      width = window.innerWidth,
      squares = [];

  for(let i = 0; i < images.length; i++) {
    let s = document.createElement('span');
    s.classList.add('square');
    s.innerHTML = i;
    blockSelection.appendChild(s);
    squares.push(s);

    s.addEventListener('click', function () {
      imageIndex = i;
      nextImg();
    })
  }

  // function checkState() {
  //   if(imageIndex == 0) {
  //     previous.style.display = 'none';
  //   } else {
  //       previous.style.display = 'block';
  //     }
  // }
  //
  // checkState();

  function nextImg () {
    inner.style.left = -width * imageIndex + 'px';

    squares.forEach(function(s, i) {
      if(i === imageIndex) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    })
  }

  next.addEventListener('click', function () {
    imageIndex ++;

    if(imageIndex >= images.length) {
      imageIndex = images.length -1;
    }

    // checkState();
    nextImg();
  });

  previous.addEventListener('click', function () {
    imageIndex --;

    if(imageIndex < 0) {
      imageIndex = images.length -1;
    }

    // checkState();
    nextImg();
  });

  nextImg();
});
