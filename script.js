const divElement = document.querySelector('div'); // Replace 'div' with the ID or class of your actual div element

// divElement.addEventListener('click', function() {
//   window.location.href = './pages/page1.html';
// });

divElement.addEventListener('click', function() {
  // Delay the page loading by 2 seconds (2000 milliseconds)
  setTimeout(function() {
    window.location.href = 'page2.html'; // Replace './pages/page1.html' with the URL of your desired page
  }, 2000); // Adjust the delay time as needed
});

document.addEventListener('DOMContentLoaded', function() {
  // Define the scaleCurve using mojs easing path
  var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

  // Get the button element
  var button = document.querySelector('.button');

  // Initialize a mo.js timeline
  var timeline = new mojs.Timeline();

  // Define the burst animation
  var tween1 = new mojs.Burst({
    parent: button,
    radius: { 0: 100 },
    angle: { 0: 45 },
    y: -10,
    count: 10,
    radius: 100,
    children: {
      shape: 'circle',
      radius: 30,
      fill: ['red', 'white'],
      strokeWidth: 15,
      duration: 500,
    }
  });

  // Define the scale animation
  var tween2 = new mojs.Tween({
    duration: 900,
    onUpdate: function(progress) {
      var scaleProgress = scaleCurve(progress);
      button.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
    }
  });

  // Define another burst animation
  var tween3 = new mojs.Burst({
    parent: button,
    radius: { 0: 100 },
    angle: { 0: -45 },
    y: -10,
    count: 10,
    radius: 125,
    children: {
      shape: 'circle',
      radius: 30,
      fill: ['white', 'red'],
      strokeWidth: 15,
      duration: 400,
    }
  });

  // Add tweens to timeline
  timeline.add(tween1, tween2, tween3);

  // Add click event listener to the button
  button.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      timeline.play();
      this.classList.add('active');
    }
  });
});

function appendHeart() {
  let container = document.querySelector(".heart-container");
  let heart = `
      <div class="heart">
        <svg id="color" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="10%" stop-color="#e74c3c" />
              <stop offset="90%" stop-color="#FF3C30" />
            </linearGradient>
          </defs>
          <path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z"/>
        </svg>
      </div>
  `;

  container.insertAdjacentHTML("beforeend", heart);
}

for (let i = 0; i < 20; i++) appendHeart();

document.body.addEventListener("mousemove", (e) => {
  gsap.to(".heart", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.2
  });
});
