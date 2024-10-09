let spinner = null;
let initPage = true;

// EventListener to instantiate the navController
document.addEventListener("DOMContentLoaded", (event) => {
    // Instantiate an instance of the siteMenu
    const navController = new NavController("navbarNav");
    navController.displayNav();

    // apply class active for active page
    const currentPage = window.location.pathname;
    const activeLink = document.querySelectorAll(".nav-link");
    const navLink = navController.navItems;

    for (let index = 0; index < navLink.length; index++) {
        if (currentPage.includes(navLink[index].url)) {
            activeLink[index].classList.add("active");
        }
    }

    // Instantiate a spinner, currently used in login.html and register.html
    spinner = new Spinner();

    const profilePageExists = window.location.pathname.includes(_PROFILE_URL); // If _PROFILE_URL exists

    if (profilePageExists) {
        // If _PROFILE_URL exists, profilePageExists = true
        const token = isAuthenticated(); // Redirect the user to index.html if token does not exist

        if (!token)
            // Otherwise, set up and display authenticated user in the profile page
            window.location = _HOME_URL;

        const user = decodeUser(token);

        window.onload = () => {
            if (user.role === "ADMIN") {
                adminProfile(user.role, user.username, user.email);
            } else if (user.role === "STAFF") {
                console.log("role is staff");
                staffProfile(user.role, "ethanw@gmail.com"); //login as staff with user id 1 (nurse id 301)
            } else {
                customerProfile(user.role, user.username, user.email);
            }
        };
    }
});
