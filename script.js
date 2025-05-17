// Initialize particles.js with soft snowfall-like particles
particlesJS('particles-js', {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#cccccc'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#cccccc',
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: 'bottom',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: false
      }
    },
    modes: {
      repulse: {
        distance: 60,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
