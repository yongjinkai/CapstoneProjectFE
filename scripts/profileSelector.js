

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

// populate patient information based on assigned nurse
const ftnAddPatient = (role, username) => {
    
    const patientRecordstbodyElement = document.getElementById("patientRecordstbody");

    for (let index = 0; index < persons.length; index++) {

        if (username === persons[index].nurse || (role === 'ADMIN' && !persons[index].license)) {
           
            const patientRecordstrElement = document.createElement("tr");

            const patientRecordstd1Element = document.createElement("td");
            patientRecordstd1Element.id = "patientRecordtd1" + index;
            patientRecordstd1Element.innerHTML = persons[index].id;

            const patientRecordstd2Element = document.createElement("td");
            patientRecordstd2Element.id = "patientRecordtd2" + index;
            patientRecordstd2Element.innerHTML = persons[index].firstName + " " + persons[index].lastName;

            const patientRecordstd3Element = document.createElement("td");
            patientRecordstd3Element.id = "patientRecordtd3" + index;
            const patientRecordsbtn1Element = document.createElement("button");
            patientRecordsbtn1Element.className = "btn btn-danger";
            patientRecordsbtn1Element.style = "font-size: 0.7rem";
            patientRecordsbtn1Element.setAttribute("data-bs-toggle", "modal");
            patientRecordsbtn1Element.setAttribute("data-bs-target", "#staticBackdrop");
            patientRecordsbtn1Element.textContent = "View Details";

            patientRecordstd3Element.appendChild(patientRecordsbtn1Element);
            
            const patientRecordstd4Element = document.createElement("td");
            patientRecordstd4Element.id = "patientRecordtd4" + index;
            const patientRecordsa2Element = document.createElement("a");
            patientRecordsa2Element.href = "#";
            patientRecordsa2Element.style = "text-decoration: none";
            patientRecordsa2Element.textContent = "Active";

            patientRecordstd4Element.appendChild(patientRecordsa2Element);
            // append to row
            patientRecordstrElement.appendChild(patientRecordstd1Element);
            patientRecordstrElement.appendChild(patientRecordstd2Element);
            patientRecordstrElement.appendChild(patientRecordstd3Element);
            patientRecordstrElement.appendChild(patientRecordstd4Element);
            
            // append to body
            patientRecordstbodyElement.appendChild(patientRecordstrElement);
        } 
     } 
}

// populate patient information based on assigned nurse
const ftnAddStaff = (role, username) => {
    
    const staffRecordstbodyElement = document.getElementById("staffRecordstbody");

    for (let index = 0; index < persons.length; index++) {

        if (persons[index].license) {

            const staffRecordstrElement = document.createElement("tr");

            const staffRecordstd1Element = document.createElement("td");
            staffRecordstd1Element.id = "staffRecordtd1" + index;
            staffRecordstd1Element.innerHTML = persons[index].id;

            const staffRecordstd2Element = document.createElement("td");
            staffRecordstd2Element.id = "staffRecordtd2" + index;
            staffRecordstd2Element.innerHTML = persons[index].firstName + " " + persons[index].lastName;

            const staffRecordstd3Element = document.createElement("td");
            staffRecordstd3Element.id = "staffRecordtd3" + index;
            const staffRecordsbtn1Element = document.createElement("button");
            staffRecordsbtn1Element.className = "btn btn-danger";
            staffRecordsbtn1Element.style = "font-size: 0.7rem";
            staffRecordsbtn1Element.setAttribute("data-bs-toggle", "modal");
            staffRecordsbtn1Element.setAttribute("data-bs-target", "#staticBackdrop");
            staffRecordsbtn1Element.textContent = "View Details";
            
            staffRecordstd3Element.appendChild(staffRecordsbtn1Element);

            const staffRecordstd4Element = document.createElement("td");
            staffRecordstd4Element.id = "staffRecordtd4" + index;
            const staffRecordsa2Element = document.createElement("a");
            staffRecordsa2Element.href = "#";
            staffRecordsa2Element.style = "text-decoration: none";
            staffRecordsa2Element.textContent = "Active";

            staffRecordstd4Element.appendChild(staffRecordsa2Element);
            // append to row
            staffRecordstrElement.appendChild(staffRecordstd1Element);
            staffRecordstrElement.appendChild(staffRecordstd2Element);
            staffRecordstrElement.appendChild(staffRecordstd3Element);
            staffRecordstrElement.appendChild(staffRecordstd4Element);
            // append to body
            staffRecordstbodyElement.appendChild(staffRecordstrElement);

        }
     } 
}

const adminProfile = (role, username) => {
    
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // set display active for admin
    // document.querySelector('patientRecords').style.display = 'block';
    // document.querySelector('staffRecords').style.display = 'block';

    ftnAddPatient(role, username);
    ftnAddStaff(role, username);
    
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
    document.getElementById('staffRecords').style.display = "none";
    document.getElementById('staff-tab').style.display = "none";
    document.getElementById("modal-edit-btn").style.display = "none";

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

    // document.getElementById('staffLicenseNumber').disabled = true;

    ftnInitDisabledAll();
    ftnEditSave();
    ftnAddPatient(role, username);
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


    
    
