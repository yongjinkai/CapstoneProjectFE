let spinner = null;
let initPage = true;

// EventListener to instantiate the navController
document.addEventListener("DOMContentLoaded", async (event) => {
    
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

    const profilePageExists = window.location.pathname.includes(_PROFILE_URL);      // If _PROFILE_URL exists
    
    if(profilePageExists){                                                          // If _PROFILE_URL exists, profilePageExists = true
        const token = isAuthenticated();                                     
                                                                            
        if(!token)                                                                  // Redirect the user to index.html if token does not exist 
            window.location = _HOME_URL;                                            // Otherwise, set up and display authenticated user in the profile page  
     
        const user = decodeUser(token);                                             // decode the token for the role

        // Perform the fetch request with the token for user profile
        async function fetchUserData(userEmail, token) {
            try {
                const response = await fetch(`http://localhost:8080/api/user/${userEmail}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const userData = await response.json(); // Parse the JSON response
                console.log('User data:', userData); // Handle the data
                return userData; // Return userData
        
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error); // Handle errors
                throw error; // Rethrow the error if you want to handle it later
            }
        }

        // Perform the fetch request with the token for nurse profile
        async function fetchNurseData(userData, token) {
            try {
                const response = await fetch(`http://localhost:8080/api/nurse/user/${userData}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const nurseData = await response.json(); // Parse the JSON response
                console.log('User data:', nurseData); // Handle the data
                return nurseData; // Return userData
        
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error); // Handle errors
                throw error; // Rethrow the error if you want to handle it later
            }
        } 

        // Perform the fetch request with the token for patient profile
        async function fetchPatientData(userData, token) {
            try {
                const response = await fetch(`http://localhost:8080/api/patient/user/${userData}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const patientData = await response.json(); // Parse the JSON response
                console.log('User data:', patientData); // Handle the data
                return patientData; // Return userData
        
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error); // Handle errors
                throw error; // Rethrow the error if you want to handle it later
            }
        } 
         
        const userData = await fetchUserData(user.email, token);   

        if (userData.role === "Admin") {
            adminProfile(userData.role, userData);
        } else if (userData.role === "Nurse") {           
            const nurseData = await fetchNurseData(userData.userId, token); 
            staffProfile(userData.role, userData, nurseData);
        } else if (userData.role === "Patient") {  
            const patientData = await fetchPatientData(userData.userId, token);
            customerProfile(userData.role, userData, patientData);
        }
    }
})    
