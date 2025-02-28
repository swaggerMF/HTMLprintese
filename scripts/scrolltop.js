document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });