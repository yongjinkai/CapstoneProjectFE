document.addEventListener('DOMContentLoaded', function() {
  
    const offcanvasLinks = document.querySelectorAll('.offcanvas .nav-link');
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
  
    offcanvasLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // collapse the menu after selecting an item
        bsOffcanvas.hide();
        // Highlight the selected item
        document.querySelector('.active').classList.remove('active');
        link.classList.add('active'); 
      })
    })
  })