// const textArray = [
//     "Website Programmer",
//     "Creative Developer",
//     "UI/UX Enthusiast"
// ];

// let particlesArray;
// let mouse = {
//   x: null,
//   y: null,
//   radius: 100,
// };
// let typingText = document.getElementById("typingText");
// let textIndex = 0;
// let charIndex = 0;
// let currentText = "";
// let isDeleting = false;

// function showWelcomeModal() {
//   welcomeModal.classList.add('show');
// }

// function hideWelcomeModal() {
//   welcomeModal.classList.remove('show');
//   localStorage.setItem('welcomeShown', 'true');
// }

// window.addEventListener('load', () => {
//   if (!localStorage.getItem('welcomeShown')) {
//     showWelcomeModal();
//   }
// });

// modalCloseBtn.addEventListener('click', hideWelcomeModal);
// modalOkBtn.addEventListener('click', hideWelcomeModal);



// function typeEffect() {
//     currentText = textArray[textIndex];
//     let displayText = currentText.substring(0, charIndex);
//     typingText.textContent = displayText;

//     if (!isDeleting && charIndex < currentText.length) {
//         charIndex++;
//         setTimeout(typeEffect, 100);
//     } else if (isDeleting && charIndex > 0) {
//         charIndex--;
//         setTimeout(typeEffect, 50);
//     } else if (!isDeleting && charIndex === currentText.length) {
//         isDeleting = true;
//         setTimeout(typeEffect, 1500);
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         textIndex = (textIndex + 1) % textArray.length;
//         setTimeout(typeEffect, 500);
//     }
// }

// typeEffect();

// menuBtn.addEventListener("click", () => {
//   body.classList.toggle("nav-open");
// });



// window.addEventListener('resize', function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });
// window.dispatchEvent(new Event('resize'));

// window.addEventListener('mousemove', function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });

// // Particle class
// class Particle {
//   constructor(x, y, directionX, directionY, size, color) {
//     this.x = x;
//     this.y = y;
//     this.directionX = directionX;
//     this.directionY = directionY;
//     this.size = size;
//     this.color = color;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
//   update() {
//     // Bounce off edges
//     if (this.x + this.size > canvas.width || this.x - this.size < 0) {
//       this.directionX = -this.directionX;
//     }
//     if (this.y + this.size > canvas.height || this.y - this.size < 0) {
//       this.directionY = -this.directionY;
//     }
//     this.x += this.directionX;
//     this.y += this.directionY;

//     // Mouse interaction (repel particles)
//     let dx = mouse.x - this.x;
//     let dy = mouse.y - this.y;
//     let distance = Math.sqrt(dx * dx + dy * dy);
//     if (distance < mouse.radius + this.size) {
//       let angle = Math.atan2(dy, dx);
//       let force = (mouse.radius + this.size - distance) / mouse.radius;
//       let forceX = Math.cos(angle) * force * -2;
//       let forceY = Math.sin(angle) * force * -2;
//       this.directionX += forceX;
//       this.directionY += forceY;
//     }

//     // Slow down velocity for natural movement
//     this.directionX *= 0.95;
//     this.directionY *= 0.95;

//     this.draw();
//   }
// }

// function init() {
//   particlesArray = [];
//   let numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
//   for (let i = 0; i < numberOfParticles; i++) {
//     let size = Math.random() * 2 + 1;
//     let x = Math.random() * (canvas.width - size * 2) + size;
//     let y = Math.random() * (canvas.height - size * 2) + size;
//     let directionX = (Math.random() - 0.5) * 1;
//     let directionY = (Math.random() - 0.5) * 1;
//     let color = 'rgba(255, 255, 255, 0.15)';
//     particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
//   }
// }

// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   particlesArray.forEach((particle) => particle.update());
//   connectParticles();
// }

// function connectParticles() {
//   let maxDistance = 120;
//   for (let a = 0; a < particlesArray.length; a++) {
//     for (let b = a + 1; b < particlesArray.length; b++) {
//       let dx = particlesArray[a].x - particlesArray[b].x;
//       let dy = particlesArray[a].y - particlesArray[b].y;
//       let distance = Math.sqrt(dx * dx + dy * dy);
//       if (distance < maxDistance) {
//         ctx.beginPath();
//         ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
//         ctx.lineWidth = 1;
//         ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
//         ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
//         ctx.stroke();
//         ctx.closePath();
//       }
//     }
//   }
// }

// init();
// animate();

// function updateGreeting() {
//   const greetingEl = document.getElementById('greeting');
//   const hour = new Date().getHours();
//   let greetingText = "Hi";

//   if (hour >= 5 && hour < 12) {
//     greetingText = "Good Morning";
//   } else if (hour >= 12 && hour < 16) {
//     greetingText = "Good Afternoon";
//   } else if (hour >= 16 || hour < 5) {
//     greetingText = "Good Evening";
//   }

//   greetingEl.textContent = greetingText;
// }

// updateGreeting();

// window.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });

// const interactiveElements = document.querySelectorAll('a, button');

// interactiveElements.forEach(elem => {
//   elem.addEventListener('mouseenter', () => {
//     cursor.classList.add('hovered');
//   });
//   elem.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hovered');
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const langSelect = document.getElementById('language-select');

//   // Load saved language or default to English
//   const savedLang = localStorage.getItem('selectedLanguage') || 'en';
//   langSelect.value = savedLang;

//   // Listen for changes
//   langSelect.addEventListener('change', (e) => {
//     const selectedLang = e.target.value;
//     localStorage.setItem('selectedLanguage', selectedLang);

//     // For now, just alert or log (replace with actual translation logic)
//     console.log('Language changed to:', selectedLang);
//     alert(`Language changed to: ${selectedLang}`);

//     // TODO: Add language content swapping here if needed
//   });
// });


/* consolidated and reordered script — safe to paste into script.js or before </body> */
document.addEventListener('DOMContentLoaded', () => {
  /* -------------------------
     Elements (may be null if not present)
     ------------------------- */
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  const welcomeModal = document.getElementById('welcome-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalOkBtn = document.getElementById('modal-ok');

  const typingText = document.getElementById('typingText');
  const menuBtn = document.getElementById('menu-btn');
  const navOverlay = document.getElementById('nav-overlay');
  const greetingEl = document.getElementById('greeting');
  const cursor = document.getElementById('custom-cursor');
  const langSelect = document.getElementById('language-select');
  const body = document.body;

  /* -------------------------
     Shared variables
     ------------------------- */
  const textArray = [
    "Website Programmer",
    "Creative Developer",
    "UI/UX Enthusiast"
  ];

  let particlesArray = [];
  let mouse = { x: null, y: null, radius: 100 };

  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  /* -------------------------
     Modal helpers (only if modal exists)
     ------------------------- */
  function showWelcomeModal() {
    if (welcomeModal) welcomeModal.classList.add('show');
  }
  function hideWelcomeModal() {
    if (welcomeModal) welcomeModal.classList.remove('show');
    localStorage.setItem('welcomeShown', 'true');
  }

  /* If modal buttons exist, wire them */
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', hideWelcomeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', hideWelcomeModal);

  /* Show modal on full page load if not shown before */
  window.addEventListener('load', () => {
    if (welcomeModal && !localStorage.getItem('welcomeShown')) {
      showWelcomeModal();
    }
  });

  /* -------------------------
     Typing effect
     ------------------------- */
  function typeEffect() {
    if (!typingText) return; // skip if element missing

    currentText = textArray[textIndex];
    const displayText = currentText.substring(0, charIndex);
    typingText.textContent = displayText;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 500);
    }
  }

  /* Start typing only if the element exists */
  if (typingText) typeEffect();

  /* -------------------------
     Navigation toggle
     ------------------------- */
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      // If you have an overlay element, you can toggle its visibility:
      if (navOverlay) navOverlay.classList.toggle('visible'); // optional class
    });
  }

  /* -------------------------
     Particles (canvas) logic
     ------------------------- */
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x; this.y = y;
      this.directionX = directionX; this.directionY = directionY;
      this.size = size; this.color = color;
    }
    draw() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      if (!canvas) return;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) this.directionX = -this.directionX;
      if (this.y + this.size > canvas.height || this.y - this.size < 0) this.directionY = -this.directionY;

      this.x += this.directionX;
      this.y += this.directionY;

      // Mouse interaction (repel)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius + this.size - distance) / mouse.radius;
          const forceX = Math.cos(angle) * force * -2;
          const forceY = Math.sin(angle) * force * -2;
          this.directionX += forceX;
          this.directionY += forceY;
        }
      }

      this.directionX *= 0.95;
      this.directionY *= 0.95;

      this.draw();
    }
  }

  function initParticles() {
    if (!canvas || !ctx) return;
    particlesArray = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const directionX = (Math.random() - 0.5) * 1;
      const directionY = (Math.random() - 0.5) * 1;
      const color = 'rgba(255, 255, 255, 0.15)';
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  function connectParticles() {
    if (!ctx) return;
    const maxDistance = 120;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a + 1; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  let animationFrameId = null;
  function animateParticles() {
    if (!ctx || !canvas) return;
    animationFrameId = requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => p.update());
    connectParticles();
  }

  /* Setup canvas size + mouse for particles */
  if (canvas) {
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // re-init to adapt particle count on resize
      initParticles();
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Initialize and start animation
    initParticles();
    animateParticles();
  } // end canvas block

  /* -------------------------
     Greeting (time-of-day)
     ------------------------- */
  function updateGreeting() {
    if (!greetingEl) return;
    const hour = new Date().getHours();
    let greetingText = "Hi";
    if (hour >= 5 && hour < 12) greetingText = "Good Morning";
    else if (hour >= 12 && hour < 16) greetingText = "Good Afternoon";
    else greetingText = "Good Evening";
    greetingEl.textContent = greetingText;
  }
  if (greetingEl) updateGreeting();

  /* -------------------------
     Custom cursor follow & hover
     ------------------------- */
  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(elem => {
      elem.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      elem.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

  /* -------------------------
     Language selector persistence
     ------------------------- */
  if (langSelect) {
    const saved = localStorage.getItem('selectedLanguage') || 'en';
    langSelect.value = saved;

    langSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('selectedLanguage', selectedLang);
      console.log('Language changed to:', selectedLang);
      // optional: show a small UI feedback
      // alert(`Language changed to: ${selectedLang}`);
    });
  }

  /* -------------------------
     Clean up on unload (optional)
     ------------------------- */
  window.addEventListener('beforeunload', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });
});
