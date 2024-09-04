// Mock response 200 SUCCESS (akin to response.status === 200)
const mockSuccessResponse = {
    ok: true,                                       // Indicates the response was successful
    status: 200,                                    // HTTP status code for Not Found
    statusText: 'OK',                               // Corresponding status text
    json: async () => ({ message: 'Success!' }),    // Mocked JSON response
    text: async () => 'Success!',                   // Mocked plain text response
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

// Mock response 404 NOT_FOUND (akin to response.status === 400)
const mockNotFoundResponse = {
    ok: false,                                              // Indicates the response was NOT successful
    status: 404,                                            // HTTP status code for Not Found
    statusText: 'Not Found',                                // Corresponding status text
    json: async () => ({ error: 'Resource not found' }),    // Mocked JSON response
    text: async () => 'Resource not found',                 // Mocked plain text response
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};

// Toast functionality for validation or form submission
function showToast({toastElement, toastBodyElement, bgColor, msg}) {
    // Run BootStrap5's toast to show the activity is complete.
    const toastEl = toastElement;
    const toastBody = toastBodyElement;
    toastEl.classList.remove("bg-success"); //remove all known and used colors here first
    toastEl.classList.remove("bg-danger");  //remove all known and used colors here first
    toastEl.classList.add(`bg-${bgColor}`);
    toastEl.classList.add("text-white");
    toastBody.textContent = msg;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}