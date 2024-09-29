

// Simulating data retrieved from a database
let persons = [
    {
        id: '001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobile: '123-456-7890',
        packageType: 'Half Day',
        nokFullName: 'Mary',
        nokMobile: '90908878',
        medicalRecord: 'High Blood Pressure',
        prescript: 'TBA',
        nurse: 'Joe',
        license: ''
    },
    {
        id: '002',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        mobile: '987-654-3210',
        packageType: 'Full Day',
        nokFullName: 'Mary',
        nokMobile: '90908878',
        medicalRecord: 'High Cholesterol',
        prescript: 'TBA',
        nurse: 'May',
        license: ''
    },
    {
        id: '003',
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        mobile: '555-123-4567',
        packageType: 'Half Day',
        nokFullName: 'Mary',
        nokMobile: '90908878',
        medicalRecord: 'Diabetes',
        prescript: 'TBA',
        nurse: 'momorunner',
        license: ''
    },
    {
        id: '004',
        firstName: 'momorunner',
        lastName: 'Lee',
        email: 'momorunner.lee@example.com',
        mobile: '444-987-1111',
        packageType: '',
        nokFullName: '',
        nokMobile: '',
        medicalRecord: '',
        prescript: '',
        nurse: '',
        license: '123-456-789'
    },
    {
        id: '005',
        firstName: 'Robert',
        lastName: 'Brown',
        email: 'robert.brown@example.com',
        mobile: '444-987-6543',
        packageType: 'Half Day',
        nokFullName: 'Mary',
        nokMobile: '90908878',
        medicalRecord: 'High Blood Pressure',
        prescript: 'TBA',
        nurse: 'Max',
        license: ''
    },
    {
        id: '006',
        firstName: 'Max',
        lastName: 'Stone',
        email: 'Max.stone@example.com',
        mobile: '444-987-1133',
        packageType: '',
        nokFullName: '',
        nokMobile: '',
        medicalRecord: '',
        prescript: '',
        nurse: '',
        license: '123-456-888'
    }
];

// Disable all fields for the initial launch of the page
const ftnInitDisabledAll = () => {
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('mobileNumber').disabled = true;
    document.getElementById('Radios1').disabled = true;
    document.getElementById('Radios2').disabled = true;
    document.getElementById('next-of-kin-name').disabled = true;
    document.getElementById('next-of-kin-mobile').disabled = true;
    document.getElementById('medical-condition').disabled = true;
    document.getElementById('doctor-prescription').disabled = true;

    const inputs = document.querySelectorAll('.accordionInput');
    inputs.forEach((input) => {
        input.disabled = true;
    })
}

const ftnEditSave = (role, username) => {
    // Toggle betwen edit and save mode for profile section
    const editBtnElement = document.getElementById('btnEdit');
    editBtnElement.addEventListener('click', (e) => {

        if (editBtnElement.id === 'btnEdit') {
            editBtnElement.id = 'btnSave';
            editBtnElement.classList.remove('btnEdit');
            editBtnElement.classList.add('btnSave');
            editBtnElement.innerHTML = 'Save';
            
            document.getElementById('firstName').disabled = false;
            document.getElementById('lastName').disabled = false;
            document.getElementById('email').disabled = false;
            document.getElementById('mobileNumber').disabled = false;
            document.getElementById('Radios1').disabled = false;
            document.getElementById('Radios2').disabled = false;
            document.getElementById('next-of-kin-name').disabled = false;
            document.getElementById('next-of-kin-mobile').disabled = false;
            document.getElementById('medical-condition').disabled = false;
            
            if (role === "STAFF") {
                document.getElementById('staffLicenseNumber').disabled = false;
            }
        } else {
            editBtnElement.id = 'btnEdit';
            editBtnElement.classList.remove('btnSave');
            editBtnElement.classList.add('btnEdit');
            editBtnElement.innerHTML = 'Edit';
            
            //TODO: Update patient, staff, admin data if any

            document.getElementById('firstName').disabled = true;
            document.getElementById('lastName').disabled = true;
            document.getElementById('email').disabled = true;
            document.getElementById('mobileNumber').disabled = true;   
            document.getElementById('Radios1').disabled = true;
            document.getElementById('Radios2').disabled = true;
            document.getElementById('next-of-kin-name').disabled = true;
            document.getElementById('next-of-kin-mobile').disabled = true;
            document.getElementById('medical-condition').disabled = true;    

            if (role === "STAFF") {
                document.getElementById('staffLicenseNumber').disabled = true;
            }  
        }  
    })
}

const adminProfile = (role, username) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    ftnInitDisabledAll();
    ftnEditSave(role, username);
    
}

const staffProfile = (role, username) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";   
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // create input field for nurse license number
    const staffLicenseLabelElement = document.createElement('label');
    staffLicenseLabelElement.id = 'staffLicenseLabelNumber';
    staffLicenseLabelElement.style = 'padding-top: 0.8rem; padding-bottom: 0.5rem';
    staffLicenseLabelElement.innerHTML = 'License Number';

    const staffLicenseElement = document.createElement('input');
    staffLicenseElement.type = 'number';
    staffLicenseElement.name = 'licenseNumber';
    staffLicenseElement.id = 'staffLicenseNumber';
    staffLicenseElement.placeholder = 'enter your license number';
    staffLicenseElement.className = 'form-control';

    document.getElementById('staff-license').appendChild(staffLicenseLabelElement);
    document.getElementById('staff-license').appendChild(staffLicenseElement);

    ftnInitDisabledAll();
    ftnEditSave(role, username);
}

const customerProfile = (role) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase();  
          
    // set display active for patient
    document.getElementById('patientdetail').style.display = 'block';
    
    ftnInitDisabledAll();
    ftnEditSave();
}


    
    
