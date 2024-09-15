
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
            // const profileFirstNameElement = document.getElementById('firstName');

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

// Simulating data retrieved from a database
let peoples = [
    {
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

// Display the information for all patient using Bootstrap Accordion
ftnPatientAccordion = (role, username) => {
    
    // Get the accordion container
    const patientAccordion = document.getElementById('patientAccordion');
    patientAccordion.className = 'accordion profile-section';

    const patientAccordionHeading = document.createElement('h2');
    patientAccordionHeading.innerHTML = 'Patient';
    patientAccordionHeading.style = 'font-size: 2rem; font-weight: 600;';

    patientAccordion.appendChild(patientAccordionHeading);

    // Create patient records
    const ftnCreatePatientAccordion = (id='', labelText='', value='') => {

        const patientAccordionElement = document.createElement('div');
        patientAccordionElement.className = 'col profile-subsection';

        const patientAccordionLabelElement = document.createElement('label');
        patientAccordionLabelElement.htmlFor = '';
        patientAccordionLabelElement.className = 'form-label';
        patientAccordionLabelElement.textContent = labelText;

        const patientAccordionInputElement = document.createElement('input');
        patientAccordionInputElement.type = 'text';
        patientAccordionInputElement.className = 'form-control accordionInput';
        patientAccordionInputElement.id = id;
        patientAccordionInputElement.value = value;

        
        patientAccordionElement.appendChild(patientAccordionLabelElement);
        patientAccordionElement.appendChild(patientAccordionInputElement);
        
        return patientAccordionElement;
    }

    // Loop through each patient and create the accordion items dynamically
    
    for (let i = 0; i < peoples.length; i++) {
       
        if (username === peoples[i].nurse || (role === 'ADMIN' && !peoples[i].license)) {
            let patient = peoples[i];

            // Create accordion item
            const patientAccordionItemElement = document.createElement('div');
            patientAccordionItemElement.className = 'accordion-item';

            // Accordion header
            const patientAccordionButtonElement = document.createElement('button');
            patientAccordionButtonElement.className = 'accordion-button collapsed';
            patientAccordionButtonElement.type = 'button';
            patientAccordionButtonElement.setAttribute('data-bs-toggle', 'collapse');
            patientAccordionButtonElement.setAttribute('data-bs-target', '#collapse' + i);
            patientAccordionButtonElement.setAttribute('aria-expanded', false);
            patientAccordionButtonElement.setAttribute('aria-controls', 'collapse' + i);
            patientAccordionButtonElement.textContent = patient.firstName + ' ' + patient.lastName;

            patientAccordionItemElement.appendChild(patientAccordionButtonElement);

            // Accordion collapse body
            const patientAccordionCollapseElement = document.createElement('div');
            patientAccordionCollapseElement.id = 'collapse' + i;
            patientAccordionCollapseElement.className = 'accordion-collapse collapse';
            patientAccordionCollapseElement.setAttribute('aria-ladelledby', 'heading' + i);
            patientAccordionCollapseElement.setAttribute('data-bs-parent', '#patientAccordion');

            const patientAccordionBodyElement = document.createElement('div');
            patientAccordionBodyElement.className = 'accordion-body';
            patientAccordionBodyElement.id = 'accordion-info';

            // Create form
            const patientAccordionFormElement = document.createElement('form');
            patientAccordionFormElement.id = 'formLogin';
            patientAccordionFormElement.className = 'needs-validation';
            patientAccordionFormElement.innerText = 'Patient';
            patientAccordionFormElement.noValidate;

            const patientAccordionFormContainerElement = document.createElement('div');
            patientAccordionFormContainerElement.className = 'container';

            // Add form input fields
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionFirstName' + i, 'First Name', patient.firstName)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionLastName' + i, 'Last Name', patient.lastName)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionEmail' + i, 'Email', patient.email)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionMobile' + i, 'Mobile', patient.mobile));    
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionNOKFullName' + i, 'Next-Of-Kin Full Name', patient.nokFullName)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionNOKMobile' + i, 'Next-Of-Kin Mobile', patient.nokMobile)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionPackageType' + i, 'Package Type', patient.packageType)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionMedicalCondition' + i, 'Medical Record', patient.medicalRecord)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionDoctorPrescription' + i, 'Doctor Prescription', patient.prescript)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionNurse' + i, 'Nurse Assigned', patient.nurse)); 
            patientAccordionFormElement.appendChild(ftnCreatePatientAccordion('accordionLicense' + i, 'Nurse License Number', patient.license)); 
            
            // Add update button for Admin role only
            if (role === "ADMIN") {
                const updateButton = document.createElement('button');
                updateButton.type = 'submit';
                updateButton.className = 'btn btn-danger updatebtn';
                updateButton.id = 'updatebtn' + i;
                updateButton.textContent = 'Update';
                patientAccordionFormElement.appendChild(updateButton);   
            }

            // Append the form to accordion body
            patientAccordionBodyElement.appendChild(patientAccordionFormElement);
            patientAccordionCollapseElement.appendChild(patientAccordionBodyElement);
            patientAccordionItemElement.appendChild(patientAccordionCollapseElement);

            // Append the accordion item to the accordion container
            patientAccordion.appendChild(patientAccordionItemElement);
        }
    } 
}

// Display the information for all staff using Bootstrap Accordion
ftnStaffAccordion = (role, username) => {
    
    // Get the accordion container
    const staffAccordion = document.getElementById('staffAccordion');
    staffAccordion.className = 'accordion profile-section';

    const staffAccordionHeading = document.createElement('h2');
    staffAccordionHeading.innerHTML = 'Staff';
    staffAccordionHeading.style = 'font-size: 2rem; font-weight: 600;';

    staffAccordion.appendChild(staffAccordionHeading);

    // Create patient records
    const ftnCreatestaffAccordion = (id='', labelText='', value='') => {

        const staffAccordionElement = document.createElement('div');
        staffAccordionElement.className = 'col profile-subsection';

        const staffAccordionLabelElement = document.createElement('label');
        staffAccordionLabelElement.htmlFor = '';
        staffAccordionLabelElement.className = 'form-label';
        staffAccordionLabelElement.textContent = labelText;

        const staffAccordionInputElement = document.createElement('input');
        staffAccordionInputElement.type = 'text';
        staffAccordionInputElement.className = 'form-control accordionInput';
        staffAccordionInputElement.id = id;
        staffAccordionInputElement.value = value;

        
        staffAccordionElement.appendChild(staffAccordionLabelElement);
        staffAccordionElement.appendChild(staffAccordionInputElement);
        
        return staffAccordionElement;
    }

    // Loop through each staff and create the accordion items dynamically
    
    for (let i = 0; i < peoples.length; i++) {
       
        // if (username === patients[i].nurse || role === 'ADMIN') {
        if (peoples[i].license) {
            let staff = peoples[i];

            // Create accordion item
            const staffAccordionItemElement = document.createElement('div');
            staffAccordionItemElement.className = 'accordion-item';

            // Accordion header
            const staffAccordionButtonElement = document.createElement('button');
            staffAccordionButtonElement.className = 'accordion-button collapsed';
            staffAccordionButtonElement.type = 'button';
            staffAccordionButtonElement.setAttribute('data-bs-toggle', 'collapse');
            staffAccordionButtonElement.setAttribute('data-bs-target', '#collapse' + i);
            staffAccordionButtonElement.setAttribute('aria-expanded', false);
            staffAccordionButtonElement.setAttribute('aria-controls', 'collapse' + i);
            staffAccordionButtonElement.textContent = staff.firstName + ' ' + staff.lastName;

            staffAccordionItemElement.appendChild(staffAccordionButtonElement);

            // Accordion collapse body
            const staffAccordionCollapseElement = document.createElement('div');
            staffAccordionCollapseElement.id = 'collapse' + i;
            staffAccordionCollapseElement.className = 'accordion-collapse collapse';
            staffAccordionCollapseElement.setAttribute('aria-ladelledby', 'heading' + i);
            staffAccordionCollapseElement.setAttribute('data-bs-parent', '#staffAccordion');

            const staffAccordionBodyElement = document.createElement('div');
            staffAccordionBodyElement.className = 'accordion-body';
            staffAccordionBodyElement.id = 'accordion-info';

            // Create form
            const staffAccordionFormElement = document.createElement('form');
            staffAccordionFormElement.id = 'formLogin';
            staffAccordionFormElement.className = 'needs-validation';
            staffAccordionFormElement.noValidate;

            const staffAccordionFormContainerElement = document.createElement('div');
            staffAccordionFormContainerElement.className = 'container';

            // Add form input fields
            staffAccordionFormElement.appendChild(ftnCreatestaffAccordion('accordionFirstName' + i, 'First Name', staff.firstName)); 
            staffAccordionFormElement.appendChild(ftnCreatestaffAccordion('accordionLastName' + i, 'Last Name', staff.lastName)); 
            staffAccordionFormElement.appendChild(ftnCreatestaffAccordion('accordionEmail' + i, 'Email', staff.email)); 
            staffAccordionFormElement.appendChild(ftnCreatestaffAccordion('accordionMobile' + i, 'Mobile', staff.mobile));    
            staffAccordionFormElement.appendChild(ftnCreatestaffAccordion('accordionLicense' + i, 'Nurse License Number', staff.license)); 
            
            // Add update button for Admin role only
            if (role === "ADMIN") {
                const updateButton1 = document.createElement('button');
                updateButton1.type = 'submit';
                updateButton1.className = 'btn btn-danger updatebtn';
                updateButton1.id = 'updatebtn1' + i;
                updateButton1.textContent = 'Update';
                staffAccordionFormElement.appendChild(updateButton1);   
            }

            // Append the form to accordion body
            staffAccordionBodyElement.appendChild(staffAccordionFormElement);
            staffAccordionCollapseElement.appendChild(staffAccordionBodyElement);
            staffAccordionItemElement.appendChild(staffAccordionCollapseElement);

            // Append the accordion item to the accordion container
            staffAccordion.appendChild(staffAccordionItemElement);
        }
    } 
}

const adminProfile = (role, username) => {
    
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // set display active for admin
    document.getElementById('admin-patient-section').style.display = 'block';
    document.getElementById('admin-staff-section').style.display = 'block';

    ftnPatientAccordion(role, username);
    ftnStaffAccordion(role, username);
    ftnInitDisabledAll();
    ftnEditSave(role, username);
    
    // Toggle betwen update and save mode for patient section
    for (let index = 0; index < peoples.length; index++) {
        
        if (!peoples[index].license) {
            const updateBtnElement = document.getElementById('updatebtn' + index);
                updateBtnElement.addEventListener('click', (e) => {

                event.preventDefault(e);
                
                if (updateBtnElement.id === 'updatebtn' + index) {
                    updateBtnElement.id = 'savebtn' + index;
                    updateBtnElement.innerHTML = 'Save';
                    
                    document.getElementById('accordionFirstName' + index).disabled = false;
                    document.getElementById('accordionLastName' + index).disabled = false;
                    document.getElementById('accordionEmail' + index).disabled = false;
                    document.getElementById('accordionMobile' + index).disabled = false;
                    document.getElementById('accordionNOKFullName' + index).disabled = false;
                    document.getElementById('accordionNOKMobile' + index).disabled = false;  
                    // document.getElementById('accordionPackageType' + index).disabled = false;
                    document.getElementById('accordionMedicalCondition' + index).disabled = false;
                    document.getElementById('accordionDoctorPrescription' + index).disabled = false;
                    document.getElementById('accordionNurse' + index).disabled = false;
                    document.getElementById('accordionLicense' + index).disabled = false;
                
                } else if (updateBtnElement.id === 'savebtn' + index) {  
                    updateBtnElement.id = 'updatebtn' + index;
                    updateBtnElement.innerHTML = 'Update';
                    
                    // Update patient data if any
                    const replacedFirstNameElement = document.getElementById('accordionFirstName' + index);
                    peoples[index].firstName = replacedFirstNameElement.value;
                    const replacedLastNameElement = document.getElementById('accordionLastName' + index);
                    peoples[index].lastName = replacedLastNameElement.value;
                    const replacedEmailElement = document.getElementById('accordionEmail' + index);
                    peoples[index].email = replacedEmailElement.value;
                    const replacedMobileElement = document.getElementById('accordionMobile' + index);
                    peoples[index].mobile = replacedMobileElement.value;
                    const replacedNOKFullNameElement = document.getElementById('accordionNOKFullName' + index);
                    peoples[index].nokFullName = replacedNOKFullNameElement.value;
                    const replacedNOKMobileElement = document.getElementById('accordionNOKMobile' + index);
                    peoples[index].nokMobile = replacedNOKMobileElement.value;
                    // const replacedMedicalConditionElement = document.getElementById('accordionMedicalCondition' + index);
                    // patients[index].medicalRecord = replacedMedicalConditionElement.value;
                    const replacedDoctorPrescriptionElement = document.getElementById('accordionDoctorPrescription' + index);
                    peoples[index].prescript = replacedDoctorPrescriptionElement.value;
                    const replacedNurseElement = document.getElementById('accordionNurse' + index);
                    peoples[index].nurse = replacedNurseElement.value;
                    const replacedLicenseElement = document.getElementById('accordionLicense' + index);
                    peoples[index].license = replacedLicenseElement.value;

                    document.getElementById('accordionFirstName' + index).disabled = true;
                    document.getElementById('accordionLastName' + index).disabled = true;
                    document.getElementById('accordionEmail' + index).disabled = true;
                    document.getElementById('accordionMobile' + index).disabled = true;
                    document.getElementById('accordionNOKFullName' + index).disabled = true;
                    document.getElementById('accordionNOKMobile' + index).disabled = true;
                    // document.getElementById('accordionPackageType' + index).disabled = true;
                    document.getElementById('accordionMedicalCondition' + index).disabled = true;
                    document.getElementById('accordionDoctorPrescription' + index).disabled = true;
                    document.getElementById('accordionNurse' + index).disabled = true;
                    document.getElementById('accordionLicense' + index).disabled = true;

                }
            })
        }
    }
            
    // Toggle betwen update and save mode for staff section
    for (let index = 0; index < peoples.length; index++) {

        if (peoples[index].license) {
            const updateBtn1Element = document.getElementById('updatebtn1' + index);
                updateBtn1Element.addEventListener('click', (e) => {
    
                event.preventDefault(e);
                
                if (updateBtn1Element.id === 'updatebtn1' + index) {
                    updateBtn1Element.id = 'savebtn1' + index;
                    updateBtn1Element.innerHTML = 'Save';
                    
                    document.getElementById('accordionFirstName' + index).disabled = false;
                    document.getElementById('accordionLastName' + index).disabled = false;
                    document.getElementById('accordionEmail' + index).disabled = false;
                    document.getElementById('accordionMobile' + index).disabled = false;
                    document.getElementById('accordionLicense' + index).disabled = false;
                
                } else if (updateBtn1Element.id === 'savebtn1' + index) {  
                    updateBtn1Element.id = 'updatebtn1' + index;
                    updateBtn1Element.innerHTML = 'Update';
                    
                    // Update patient data if any
                    const replacedFirstNameElement = document.getElementById('accordionFirstName' + index);
                    peoples[index].firstName = replacedFirstNameElement.value;
                    const replacedLastNameElement = document.getElementById('accordionLastName' + index);
                    peoples[index].lastName = replacedLastNameElement.value;
                    const replacedEmailElement = document.getElementById('accordionEmail' + index);
                    peoples[index].email = replacedEmailElement.value;
                    const replacedMobileElement = document.getElementById('accordionMobile' + index);
                    peoples[index].mobile = replacedMobileElement.value;
                    const replacedLicenseElement = document.getElementById('accordionLicense' + index);
                    peoples[index].license = replacedLicenseElement.value;

                    document.getElementById('accordionFirstName' + index).disabled = true;
                    document.getElementById('accordionLastName' + index).disabled = true;
                    document.getElementById('accordionEmail' + index).disabled = true;
                    document.getElementById('accordionMobile' + index).disabled = true;
                    document.getElementById('accordionLicense' + index).disabled = true;
                }
            })
        }
    }    
}

const staffProfile = (role, username) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";   
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // set display active for staff
    document.getElementById('admin-patient-section').style.display = 'block';

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

    document.getElementById('staffLicenseNumber').disabled = true;

    ftnPatientAccordion(role, username);
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


    
    
