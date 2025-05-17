// Background pattern (circles + connecting lines)
particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#cccccc' },
    shape: { type: 'circle' },
    opacity: { value: 0.3 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#cccccc',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: false }
    },
    modes: {
      repulse: { distance: 70, duration: 0.4 }
    }
  },
  retina_detect: true
});

// Snowflake effect with dots falling down
particlesJS('snowflakes-js', {
  particles: {
    number: { value: 30, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 4, random: true },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'bottom',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    },
    line_linked: { enable: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});
