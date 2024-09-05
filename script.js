const nome = document.getElementById('text');
const conhecimentos = document.getElementById('conhecimentos');
const linguagem = document.getElementById('linguagem');
const biblioteca = document.getElementById('biblioteca');
const ferramenta = document.getElementById('ferramenta');

window.addEventListener('scroll', function(){
    if(this.window.scrollY < 1200){
        let value = window.scrollY;
        nome.style.opacity < .3? nome.style.zIndex = '-1': nome.style.zIndex = '0'
        nome.style.opacity = 1 - (value/200);
        nome.style.top = 30 + value * 0.05 + '%';
    }
});

linguagem.addEventListener('click', () =>{
  conhecimentos.style.justifyContent = 'left'
});

biblioteca.addEventListener('click', () =>{
  conhecimentos.style.justifyContent = 'center'
});

ferramenta.addEventListener('click', () =>{
  conhecimentos.style.justifyContent = 'right'
});

VanillaTilt.init(document.querySelectorAll(".folheto"),{
  max: 20,
  speed: 600,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  perspective: 500,
  transition: true
});

particlesJS(
  {
    "particles": {
      "number": {
        "value": 240,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1a1a1a"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 1,
          "color": "cyan"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
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
        "opacity": 0,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
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
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 175,
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
          "distance": 100,
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

