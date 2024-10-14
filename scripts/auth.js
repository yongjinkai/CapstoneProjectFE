// Function to authenticate the user via site's JWT token
function isAuthenticated(){

    //const token = window.localStorage.getItem(_USERTOKEN);          // Retrieve usertoken from local storage
    const token = window.localStorage.getItem("token");  
    
    const expired = isTokenExpired(token);                          // Check the token's expiry 
    
    if(expired)                                                     // If expired, return (false)
        return;

    return token;                                                   // Else return token (usertoken)
}

// Function to check if the token has expired
function isTokenExpired(token) {                                    

    if (!token) return true;                                        // Return true if token passed in is undefined 

    // const payload = JSON.parse(atob(token.split('.')[1]));          // Decode the JWT token (a base64-encoded JSON payload)

    // const expirationTime = payload.exp;                             // Get the expiration time from the token payload

    // const currentTime = Math.floor(Date.now() / 1000);              // Current time in seconds

    // return expirationTime < currentTime;                            // Return true ONLY when currentTime is LESS THAN token's expirationTime
}

// Function to decode the user's email from the parameter
function decodeUser(token){                                         
    
    // !! Extract authenticated user's email from the token
    const arrToken = token.split(".");                              
    const decodedToken = JSON.parse(window.atob(arrToken[1]));
    const email = decodedToken.sub;
    // const username = decodedToken.username;
    // const role = decodedToken.role;
    // return {email: email, username: username, role: role};
    return {email: email};

}

// ?? async / await
// ?? Async functions return results wrapped in a resolved Promise; for any errors, a 'rejected' Promise is returned 
// ?? In an async function, await pauses execution for the function until a Promise is resolved/rejected. 

// Funtion to login
async function logIn(formData, api){
    console.log(formData);
    if(Object.entries(formData).length === 0)                                               // Return if the object is empty
        return;

    // !! Try/catch block (exception handling) to send data to login enpoint
    try {
        // FETCH requests - send data or retrive data by calling an API endpoint            // TODO: refactor when end-point is available

            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            };

            // send email and password to server
            const response = await fetch(api, request);
            const status = response.status;
            const data = await response.json();

            spinner.displaySpinner(false);
            window.location = _PROFILE_URL;

            // Return the result only if the status is 200 (OK), else return false
            return status === 200 ? data : false;

        //const response = Mock.getMockSuccess();                                             // TODO: remove when endpoint request is available (remove in production env.)  

        if(response.ok){                                                                    // If response is ok
            
            const token = Mock.getToken(true);                                              // TODO: refactor when token is retrieved from response, (remove in production env.) 
            window.localStorage.setItem(_USERTOKEN, token);                                 // Store the string in localStorage with the key 'usertoken'

            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));  // TODO: remove delay when endpoint is instated
            await sleep(2000);

            window.location = _PROFILE_URL;                                                 // Redirect the user to homepage

        }

         const loginSuccess = await logIn(formData);
            if (!loginSuccess) {
                spinner.displaySpinner(false);                                           // if login unsuccessful, hid spinner
                                                                                         //if login unsuccessful, provide feedback
                showToast({toastElement, toastBodyElement, bgColor: "danger", msg: "Unable to log in. Try again."});
                document.getElementById("formLogin").classList.remove("was-validated");
                username.value = "";
                password.value = "";
            }
        
        return;                                                                              // Else return false

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

            const request =  {                                 // Perform an async POST request to process the form data
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            };
        
            // send email and password to server
            const response = await fetch(api, request);
            const status = response.status;
            const data = await response.json();
            console.log(data.user.userId);

            postPatient(data.user.userId);

            spinner.displaySpinner(false);
            window.location = _LOGIN_URL;

            // Return the result only if the status is 200 (OK), else return false
            return status === 200 ? data : false;
    
            // TODO: remove when endpoint request is available (remove in production env.)  

        if(response.ok){                                                                    // If response is ok
            
            // const token = Mock.getToken(true);                                              // TODO: refactor when token is retrieved from response, (remove in production env.) 
            // window.localStorage.setItem(_USERTOKEN, token);                                 // Store the string in localStorage with the key 'usertoken'

            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));  // TODO: remove delay when endpoint is instated
            await sleep(2000);

            window.location = _LOGIN_URL;                                                 // Redirect the user to homepage

        }

         // const loginSuccess = await login(formData);
            // if (!loginSuccess) {
            //     spinner.displaySpinner(false);                                             // if login unsuccessful, hid spinner
            // if login unsuccessful, provide feedback
            //     showToast({toastElement, toastBodyElement, bgColor: "danger", msg: "Unable to log in. Try again."});
            //     document.getElementById("formLogin").classList.remove("was-validated");
            //     username.value = "";
            //     password.value = "";
            // }
        
        return;                                                                              // Else return false

    } catch (error) {
        console.log("Exception error gotten is: ", error.message);
        return;
    }
    
}

// Funtion to update
async function update(formData1, formData2 = {}){
    const token = window.localStorage.getItem("token");

    try {
        await fetch(`http://localhost:8080/api/user/${formData1.userId}`, {
            method: 'PUT',
            // mode: 'no-cors',
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
                //mode: 'no-cors',
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
    window.localStorage.removeItem("token");                                                // Store the string in localStorage with the key 'token'
    // window.localStorage.removeItem(_USERTOKEN);
    window.location = _HOME_URL;                                                            // Redirect the user to homepage
}
