document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  const mobileMenuLinks = document.querySelectorAll(
    '.navbar__mobile-menu-link'
  );
  const mobileMenuSocialLinks = document.querySelectorAll(
    '.navbar__mobile-menu-link--primary'
  );

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  mobileMenuLinks.forEach((item) => {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });

  mobileMenuSocialLinks.forEach((item) => {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });

  // Video Modal
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');

  // Open modal when play videoButton is clicked
  videoButton.addEventListener('click', function () {
    // Show modal
    modal.style.display = 'block';

    // Replace the source attribte with the video URL
    videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

    // Close modal on close button click
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    // lose modal on outer/background click
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
