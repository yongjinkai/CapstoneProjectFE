


const adminProfile = (role, user) => {
    
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';
}

const staffProfile = (role, user) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";   
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    const staffLicenseLabelElement = document.createElement('label');
    staffLicenseLabelElement.id = 'staffLicenseLabelNumber';
    staffLicenseLabelElement.innerHTML = 'License Number';

    const staffLicenseElement = document.createElement('input');
    staffLicenseElement.type = 'number';
    staffLicenseElement.name = 'licenseNumber';
    staffLicenseElement.id = 'staffLicenseNumber';
    staffLicenseElement.placeholder = 'enter your license number';
    staffLicenseElement.className = 'form-control';

    document.getElementById('staff-license').appendChild(staffLicenseLabelElement);
    document.getElementById('staff-license').appendChild(staffLicenseElement);

    const customerFirstNameElement = document.getElementById('customerFirstName');
    customerFirstNameElement.innerText = `Customer First Name: Customer First Name`;

    const customerLastNameElement = document.getElementById('customerLastName');
    customerLastNameElement.innerText = `Customer Last Name: Customer Last Name`;

    const customerEmailElement = document.getElementById('customerEmail');
    customerEmailElement.innerText = `Customer email: Customer email`;

    const customerMobileNumberElement = document.getElementById('customerMobileNumber');
    customerMobileNumberElement.innerText = `Customer mobile number: 90907878`;

    document.getElementById('Radios1').disabled = true;  
    document.getElementById('Radios2').disabled = true;  
    document.getElementById('medical-condition').disabled = true;  
    document.getElementById('next-of-kin-name').disabled = true;  
    document.getElementById('next-of-kin-mobile').disabled = true;  
    document.getElementById('doctor-prescription').disabled = true;  

    const dividerElement = document.querySelector('.divider');
    dividerElement.style = 'padding-top: 3rem; background-color: transparent';
    
}

const customerProfile = (role, user) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase();

    document.getElementById('doctor-prescription').disabled = true;   
        
    const nurseInChargeElement = document.getElementById('nurse-in-charge');
    nurseInChargeElement.innerText = `Nurse-in-charge: Nurse Name`;
                                 
}