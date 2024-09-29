

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
    document.getElementById('package1').disabled = true;
    document.getElementById('package2').disabled = true;
    document.getElementById('packageSelected').disabled = true;
    document.getElementById('next-of-kin-name').disabled = true;
    document.getElementById('next-of-kin-mobile').disabled = true;
    document.getElementById('medical-condition').disabled = true;
    document.getElementById('doctor-prescription').disabled = true;
    document.getElementById('assignedNurse').disabled = true;
}

// All data for the initial launch of the page
const ftnAddData = (role, username, email) => {

    const profileSectionElement = document.getElementById('profileSection');
    const packageTypeElement = document.getElementById('packageType');
    const packageSelectedRow = document.getElementById('packageSelectedRow');

    const firstNameLabelElement = document.createElement('label');
    firstNameLabelElement.for = "firstName";
    firstNameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    firstNameLabelElement.innerText = "First Name";

    const firstNameElement = document.createElement('input');
    firstNameElement.type = "text";
    firstNameElement.className = "form-control mb-3";
    firstNameElement.name = "firstName";
    firstNameElement.id = "firstName";
    firstNameElement.value = username;

    const lastNameLabelElement = document.createElement('label');
    lastNameLabelElement.for = "lastName";
    lastNameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    lastNameLabelElement.innerText = "Last Name";

    const lastNameElement = document.createElement('input');
    lastNameElement.type = "text";
    lastNameElement.className = "form-control mb-3";
    lastNameElement.name = "lastName";
    lastNameElement.id = "lastName";
    lastNameElement.value = username;

    const emailLabelElement = document.createElement('label');
    emailLabelElement.for = "email";
    emailLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    emailLabelElement.innerText = "Username / Email";

    const emailElement = document.createElement('input');
    emailElement.type = "text";
    emailElement.className = "form-control mb-3";
    emailElement.name = "email";
    emailElement.id = "email";
    emailElement.value = email;

    const mobileNumberLabelElement = document.createElement('label');
    mobileNumberLabelElement.for = "mobileNumber";
    mobileNumberLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    mobileNumberLabelElement.innerText = "Mobile Number";

    const mobileNumberElement = document.createElement('input');
    mobileNumberElement.type = "number";
    mobileNumberElement.className = "form-control mb-3";
    mobileNumberElement.name = "mobileNumber";
    mobileNumberElement.id = "mobileNumber";
    mobileNumberElement.value = "";

    const package1SectionElement = document.createElement('div'); 
    package1SectionElement.className = "form-check package-radio-btn";
    package1SectionElement.id = "package1Section";

    const package1LabelElement = document.createElement('label');
    package1LabelElement.for = "package1";
    package1LabelElement.className = "form-check-label; fw-semibold";
    package1LabelElement.innerText = "Half Day Package";

    const package1Element = document.createElement('input');
    package1Element.type = "radio";
    package1Element.className = "form-check-input mb-3";
    package1Element.name = "package";
    package1Element.id = "package1";
    package1Element.value = "";
    package1Element.checked = "true";

    const package2SectionElement = document.createElement('div'); 
    package1SectionElement.className = "form-check package-radio-btn";
    package1SectionElement.id = "package2Section";

    const package2LabelElement = document.createElement('label');
    package2LabelElement.for = "package2";
    package2LabelElement.className = "form-check-label; fw-semibold";
    package2LabelElement.innerText = "Full Day Package";

    const package2Element = document.createElement('input');
    package2Element.type = "radio";
    package2Element.className = "form-check-input mb-3";
    package2Element.name = "package";
    package2Element.id = "package2";
    package2Element.value = "";

    const packageSelectedLabelElement = document.createElement('label');
    packageSelectedLabelElement.for = "packageSelected";
    packageSelectedLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    packageSelectedLabelElement.innerText = "Package Selected";

    const packageSelectedElement = document.createElement('input');
    packageSelectedElement.type = "text";
    packageSelectedElement.className = "form-control mb-3";
    packageSelectedElement.name = "packageSelected";
    packageSelectedElement.id = "packageSelected";
    packageSelectedElement.value = "";

    const NOKNameLabelElement = document.createElement('label');
    NOKNameLabelElement.for = "next-of-kin-name";
    NOKNameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    NOKNameLabelElement.innerText = "Next-Of-Kin Name";

    const NOKNameElement = document.createElement('input');
    NOKNameElement.type = "text";
    NOKNameElement.className = "form-control mb-3";
    NOKNameElement.name = "next-of-kin-name";
    NOKNameElement.id = "next-of-kin-name";
    NOKNameElement.value = "";

    const NOKmobileNumberLabelElement = document.createElement('label');
    NOKmobileNumberLabelElement.for = "next-of-kin-mobile";
    NOKmobileNumberLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    NOKmobileNumberLabelElement.innerText = "Next-Of-Kin Mobile Number";

    const NOKmobileNumberElement = document.createElement('input');
    NOKmobileNumberElement.type = "number";
    NOKmobileNumberElement.className = "form-control mb-3";
    NOKmobileNumberElement.name = "next-of-kin-mobile";
    NOKmobileNumberElement.id = "next-of-kin-mobile";
    NOKmobileNumberElement.value = "";

    const medicalConditionElement = document.createElement('select');
    medicalConditionElement.className = "form-select medical-condition";
    medicalConditionElement.id = "medical-condition";
    medicalConditionElement.setAttribute('aria-label', "Default select");
    
    const option1Element = document.createElement('option');
    option1Element.selected = 
    option1Element.innerText = "Medical Conditions";

    medicalConditionElement.appendChild(option1Element);
    const option2Element = document.createElement('option');
    option2Element.value = "1";
    option2Element.innerText = "High Blood Pressure";
    medicalConditionElement.appendChild(option2Element);
    const option3Element = document.createElement('option');
    option3Element.value = "2";
    option3Element.innerText = "High Cholesterol";
    medicalConditionElement.appendChild(option3Element);
    const option4Element = document.createElement('option');
    option4Element.value = "3";
    option4Element.innerText = "Diabetes";
    medicalConditionElement.appendChild(option4Element);

    const doctorPrescriptionContainerElement = document.createElement('div');
    doctorPrescriptionContainerElement.className = "form-floating text-black";
    const doctorPrescriptionTextElement = document.createElement('textarea');
    doctorPrescriptionTextElement.className = "form-control doctor-prescription";
    doctorPrescriptionTextElement.style = "height: 10rem";
    doctorPrescriptionTextElement.placeholder = "Leave a comment here";
    doctorPrescriptionTextElement.id = "doctor-prescription";
    const doctorPrescriptionLabelElement = document.createElement('label')
    doctorPrescriptionLabelElement.innerText = "Doctor's Prescriptions";

    doctorPrescriptionContainerElement.appendChild(doctorPrescriptionTextElement);
    doctorPrescriptionContainerElement.appendChild(doctorPrescriptionLabelElement);

    const assignedNurseLabelElement = document.createElement('label');
    assignedNurseLabelElement.for = "assignedNurse";
    assignedNurseLabelElement.className = "form-label; py-2 fw-semibold";
    assignedNurseLabelElement.innerText = "Assigned Nurse";
    
    const assignedNurseElement = document.createElement('input');
    assignedNurseElement.type = "text";
    assignedNurseElement.className = "form-control mb-3";
    assignedNurseElement.name = "assignedNurse";
    assignedNurseElement.id = "assignedNurse";
    assignedNurseElement.value = "";

    profileSectionElement.appendChild(firstNameLabelElement);
    profileSectionElement.appendChild(firstNameElement);
    profileSectionElement.appendChild(lastNameLabelElement);
    profileSectionElement.appendChild(lastNameElement);
    profileSectionElement.appendChild(emailLabelElement);
    profileSectionElement.appendChild(emailElement);
    profileSectionElement.appendChild(mobileNumberLabelElement);
    profileSectionElement.appendChild(mobileNumberElement);

    packageTypeElement.appendChild(package1SectionElement);
    package1SectionElement.appendChild(package1LabelElement);
    package1SectionElement.appendChild(package1Element);
    package1SectionElement.appendChild(package2SectionElement);
    package2SectionElement.appendChild(package2LabelElement);
    package2SectionElement.appendChild(package2Element);

    packageSelectedRow.appendChild(packageSelectedLabelElement);
    packageSelectedRow.appendChild(packageSelectedElement);
    packageSelectedRow.appendChild(NOKNameLabelElement);
    packageSelectedRow.appendChild(NOKNameElement);
    packageSelectedRow.appendChild(NOKmobileNumberLabelElement);
    packageSelectedRow.appendChild(NOKmobileNumberElement);
    packageSelectedRow.appendChild(medicalConditionElement);
    packageSelectedRow.appendChild(doctorPrescriptionContainerElement);
    packageSelectedRow.appendChild(assignedNurseLabelElement);
    packageSelectedRow.appendChild(assignedNurseElement);
}

const ftnEditSave = (role, username) => {
    // Toggle betwen edit and save mode for profile section
    const editBtnElement = document.getElementById('btnEdit');
    editBtnElement.addEventListener('click', (e) => {

        event.preventDefault(e);

        if (editBtnElement.id === 'btnEdit') {
            editBtnElement.id = 'btnSave';
            editBtnElement.classList.remove('btnEdit');
            editBtnElement.classList.add('btnSave');
            editBtnElement.innerHTML = 'Save';
            
            document.getElementById('firstName').disabled = false;
            document.getElementById('lastName').disabled = false;
            document.getElementById('email').disabled = false;
            document.getElementById('mobileNumber').disabled = false;
            document.getElementById('package1').disabled = false;
            document.getElementById('package2').disabled = false;
            document.getElementById('packageSelected').disabled = false;
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
            document.getElementById('package1').disabled = true;
            document.getElementById('package2').disabled = true;
            document.getElementById('packageSelected').disabled = true;
            document.getElementById('next-of-kin-name').disabled = true;
            document.getElementById('next-of-kin-mobile').disabled = true;
            document.getElementById('medical-condition').disabled = true;  

            if (role === "STAFF") {
                document.getElementById('staffLicenseNumber').disabled = true;
            }  
        }  
    })
}

const adminProfile = (role, username, email) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    ftnAddData(role, username, email)
    ftnInitDisabledAll();
    ftnEditSave(role, username);
    
}

const staffProfile = (role, username, email) => {

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

    ftnAddData(role, username, email);
    ftnInitDisabledAll();
    ftnEditSave(role, username);
}

const customerProfile = (role, username, email) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase();  
          
    // set display active for patient
    document.getElementById('patientdetail').style.display = 'block';
    document.getElementById('patient-section').style.display = 'none';
    
    ftnAddData(role, username, email);
    ftnInitDisabledAll(); 
    ftnEditSave(role, username);
}


    
    
