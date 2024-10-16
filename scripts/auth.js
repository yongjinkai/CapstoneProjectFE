// Function to authenticate the user via site's JWT token
function isAuthenticated(){

    const token = window.localStorage.getItem(_USERTOKEN);          // Retrieve usertoken from local storage

    const expired = isTokenExpired(token);                          // Check the token's expiry 
    
    if(expired)                                                     // If expired, return (false)
        return;

    return token;                                                   // Else return token (usertoken)
}

// Function to check if the token has expired
function isTokenExpired(token) {                                    

    if (!token) return true;                                        // Return true if token passed in is undefined 

    const payload = JSON.parse(atob(token.split('.')[1]));          // Decode the JWT token (a base64-encoded JSON payload)

    const expirationTime = payload.exp;                             // Get the expiration time from the token payload

    const currentTime = Math.floor(Date.now() / 1000);              // Current time in seconds

    return expirationTime < currentTime;                            // Return true ONLY when currentTime is LESS THAN token's expirationTime
}

// Function to decode the user's email from the parameter
function decodeUser(token){                                         
    
    // !! Extract authenticated user's email from the token
    const arrToken = token.split(".");                              
    const decodedToken = JSON.parse(window.atob(arrToken[1]));
    const email = decodedToken.sub;
    return {email: email};

}

// ?? async / await
// ?? Async functions return results wrapped in a resolved Promise; for any errors, a 'rejected' Promise is returned 
// ?? In an async function, await pauses execution for the function until a Promise is resolved/rejected. 

// Funtion to login
async function login(formData = {}){

    if(Object.entries(formData).length === 0)                                               // Return if the object is empty
        return;

    
    try {                                                                                   // !! Try/catch block (exception handling) to send data to login enpoint
        const response = await fetch(_ENDPOINT_LOGIN, {                                     // !! DONE: API call for Authentication
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });

        if(response.ok){                                                                    // If response status == 200 (ok)
            const result = await response.json();
            const token = result.token;                                                   
            
            window.localStorage.setItem(_USERTOKEN, token);                                 // Store the string in localStorage with the key 'usertoken'
            
            spinner.displaySpinner(false);
            window.location = _PROFILE_URL;
        }

        if (response.status === 401)
            return response.status;

        return;                                                                             // Else return false

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
    
}

// Function to create new patient upon registration
async function postPatient(userId) {
    const url = `http://localhost:8080/api/patient/${userId}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            
        }),
    });
}

// Funtion to register
async function register(formData, api){
    console.log(formData);
    
    if(Object.entries(formData).length === 0)                                               // Return if the object is empty
        return;

    // !! Try/catch block (exception handling) to send data to login enpoint
    try {
        // FETCH requests - send data or retrive data by calling an API endpoint            // TODO: refactor when end-point is available

            const request =  {                                                              // Perform an async POST request to process the form data
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            };
        
            // send email and password to server
            const response = await fetch(api, request);
            const status = response.status;
            const data = await response.json();

            postPatient(data.user.userId);

            spinner.displaySpinner(false);
            window.location = _LOGIN_URL;

            // Return the result only if the status is 200 (OK), else return false
            return status === 200 ? data : false;

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        alert("Account already exist");
        window.location = _REGISTER_URL;
        return;
    }   
}

// Funtion to update
async function update(formData1, formData2 = {}){
    const token = window.localStorage.getItem(_USERTOKEN);

    try {
        await fetch(`http://localhost:8080/api/user/${formData1.userId}`, {
            method: 'PUT',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData1)
        });
        const role = formData1.role;

        if (role === "Patient") {
            await fetch(`http://localhost:8080/api/patient/${formData2.patientId}`, {
                method: 'PUT',
                headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData2)
            });
        }
   
    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
}

// Function to logout
function logout(){
                                                   
    window.localStorage.removeItem(_USERTOKEN);                                             // Remove the string in localStorage with the key 'usertoken'
    window.location = _HOME_URL;                                                            // Redirect the user to homepage
}
