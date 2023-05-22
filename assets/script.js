window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
      preloader.classList.add('fade-out');
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 1000); // Fade-out duration (in milliseconds)
    }, 1250); // Adjust the delay time as needed (in milliseconds)
  });