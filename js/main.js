//scrolled bar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//tech stack text
document.querySelectorAll('.skills-wraper img').forEach(img => {
  img.addEventListener('mouseover', () => {
      const text = img.nextElementSibling;
      if (text.style.display === 'none' || !text.style.display) {
          text.style.display = 'block';
      } else {
          text.style.display = 'none';
      }
  });
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Database", "Backend", "Frontend"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 30,
  backDelay: 500,
});


document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(function (error) {
      error.textContent = '';
  });

  let isValid = true;

  // Validate Name
  const name = document.getElementById('name').value.trim();
  if (name === '') {
      isValid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
  }

  // Validate Email
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
      isValid = false;
      document.getElementById('emailError').textContent = 'Email is required.';
  } else if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
  }

  // Validate Message
  const message = document.getElementById('message').value.trim();
  if (message === '') {
      isValid = false;
      document.getElementById('messageError').textContent = 'Message is required.';
  } else if (message.length < 10) {
      isValid = false;
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
  }

  // If all fields are valid, submit the form
  if (isValid) {
      this.submit();
      alert('Thank you for reaching out! Your message has been sent.');
            document.getElementById('contactForm').reset();
  }
});

//particle effect
particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 180,
          "density": {
              "enable": true,
              "value_area": 700
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

