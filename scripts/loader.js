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

    // Instantiate a spinner, currently used in login.html and register.html
    spinner = new Spinner();

    const profilePageExists = window.location.pathname.includes(_PROFILE_URL);     // If _PROFILE_URL exists
    
    if(profilePageExists){                                                         // If _PROFILE_URL exists, profilePageExists = true
        const token = isAuthenticated();    
       
        //const tokenRole = window.localStorage.getItem("tokenRole");                                    
                                                                            
        if(!token)                                                                 // Redirect the user to index.html if token does not exist 
            window.location = _HOME_URL;                                           // Otherwise, set up and display authenticated user in the profile page
        
         // Retrieve the token from localStorage
        //const token = localStorage.getItem('token'); // Make sure the token is stored as 'token' in localStorage

        //if (token) {    
     
        const user = decodeUser(token);


        // Perform the fetch request with the token for user profile
        fetch(`http://localhost:8080/api/user/${user.email}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
            })
            .then(userData => {
                console.log('User data:', userData); // Handle the data

            // fetch(`http://localhost:8080/api/patient/${userData.userId}`, {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     headers: {
            //     'Authorization': `Bearer ${token}`,
            //     'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         userId: user.userId
            // })
            // });
         
            if (userData.role === "Admin") {
                adminProfile(userData.role, userData);
            } else if (userData.role === "Nurse") {
                
                // Perform the fetch request with the token for nurse profile
                fetch(`http://localhost:8080/api/nurse/user/${userData.userId}`, {
                    method: 'GET',
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    }
                    })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON response
                    })
                    .then(nurseData => {
                    console.log('User data:', nurseData); // Handle the data

                    staffProfile(userData.role, userData, nurseData);
                })
                
                .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                });
            
            } else if (userData.role === "Patient") {  

                 // Perform the fetch request with the token patient profile
                fetch(`http://localhost:8080/api/patient/user/${userData.userId}`, {
                    method: 'GET',
                    headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                    }
                    })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the JSON response
                    })
                    .then(patientData => {
                    console.log('User data:', patientData); // Handle the data

                    customerProfile(userData.role, userData, patientData);
                })
                 
                .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                });
            }  
        })  
    } else {
        console.error('No token found in localStorage');
    }
       
  

         
    });
