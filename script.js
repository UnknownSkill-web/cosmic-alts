particlesJS('particles-js', {
    particles: {
      number: {
        value: 100
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 2
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        repulse: {
          distance: 60,  // 👈 kleinerer Radius
          duration: 0.4
        }
      }
    },
    retina_detect: true
  });
  