let spinner = null;
let initPage = true;

// EventListener to instantiate the navController
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Instantiate an instance of the siteMenu
    const navController = new NavController("navbarNav");
    navController.displayNav();

    // apply class active for active page
    const currentPage = window.location.pathname;
    const activeLink = document.querySelectorAll('.nav-link');
    const navLink = navController.navItems;

    for (let index = 0; index < navLink.length; index++) {
            if (currentPage.includes(navLink[index].url)) {
            activeLink[index].classList.add('active');
        }   
    }

    spinner = new Spinner();
});
