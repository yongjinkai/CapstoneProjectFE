
// Disable all fields for the initial launch of the page
const ftnInitDisabledAll = (role) => {
    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('mobileNumber').disabled = true;
    if (role === "Patient") {
        document.getElementById('packageSelected').disabled = true;
        document.getElementById('next-of-kin-name').disabled = true;
        document.getElementById('next-of-kin-mobile').disabled = true;
        document.getElementById('medicalRecord').disabled = true;
        document.getElementById('doctor-prescription').disabled = true;
        document.getElementById('assignedNurse').disabled = true;
    }
}

// Add data for the initial launch of the page
const ftnAddProfileData = (userData) => {

    const profileSectionElement = document.getElementById('profileSection');

    const nameLabelElement = document.createElement('label');
    nameLabelElement.for = "name";
    nameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    nameLabelElement.innerText = "Name";

    const nameElement = document.createElement('input');
    nameElement.type = "text";
    nameElement.className = "form-control mb-3";
    nameElement.name = "name";
    nameElement.id = "name";
    nameElement.value = userData.name;

    const emailLabelElement = document.createElement('label');
    emailLabelElement.for = "email";
    emailLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    emailLabelElement.innerText = "Username / Email";

    const emailElement = document.createElement('input');
    emailElement.type = "text";
    emailElement.className = "form-control mb-3";
    emailElement.name = "email";
    emailElement.id = "email";
    emailElement.value = userData.email;

    const mobileNumberLabelElement = document.createElement('label');
    mobileNumberLabelElement.for = "mobileNumber";
    mobileNumberLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    mobileNumberLabelElement.innerText = "Mobile Number";

    const mobileNumberElement = document.createElement('input');
    mobileNumberElement.type = "number";
    mobileNumberElement.className = "form-control mb-3";
    mobileNumberElement.name = "mobileNumber";
    mobileNumberElement.id = "mobileNumber";
    mobileNumberElement.value = userData.phone;

    profileSectionElement.appendChild(nameLabelElement);
    profileSectionElement.appendChild(nameElement);
    profileSectionElement.appendChild(emailLabelElement);
    profileSectionElement.appendChild(emailElement);
    profileSectionElement.appendChild(mobileNumberLabelElement);
    profileSectionElement.appendChild(mobileNumberElement);
}

// Add data for the initial launch of the page
const ftnAddPatientData = (patientData, nurseData) => {
    const packageTypeElement = document.getElementById('packageType');
    const packageSelectedRow = document.getElementById('packageSelectedRow');

    const packageSelectedLabelElement = document.createElement('label');
    packageSelectedLabelElement.for = "packageSelected";
    packageSelectedLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    packageSelectedLabelElement.innerText = "Package Selected";

    const packageSelectedElement = document.createElement('input');
    packageSelectedElement.type = "text";
    packageSelectedElement.className = "form-control mb-3";
    packageSelectedElement.name = "packageSelected";
    packageSelectedElement.id = "packageSelected";
    if (!patientData._package)
        packageSelectedElement.value = "No Package";
    else
        packageSelectedElement.value = patientData._package.packageName;

    const nokNameLabelElement = document.createElement('label');
    nokNameLabelElement.for = "next-of-kin-name";
    nokNameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    nokNameLabelElement.innerText = "Next-Of-Kin Name";

    const nokNameElement = document.createElement('input');
    nokNameElement.type = "text";
    nokNameElement.className = "form-control mb-3";
    nokNameElement.name = "next-of-kin-name";
    nokNameElement.id = "next-of-kin-name";
    nokNameElement.value = patientData.nextOfKinName;

    const nokmobileNumberLabelElement = document.createElement('label');
    nokmobileNumberLabelElement.for = "next-of-kin-mobile";
    nokmobileNumberLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    nokmobileNumberLabelElement.innerText = "Next-Of-Kin Mobile Number";

    const nokmobileNumberElement = document.createElement('input');
    nokmobileNumberElement.type = "number";
    nokmobileNumberElement.className = "form-control mb-3";
    nokmobileNumberElement.name = "next-of-kin-mobile";
    nokmobileNumberElement.id = "next-of-kin-mobile";
    nokmobileNumberElement.value = patientData.nextOfKinPhone;

    const medicalRecordLabelElement = document.createElement('label');
    medicalRecordLabelElement.for = "medicalRecord";
    medicalRecordLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    medicalRecordLabelElement.innerText = "Medical Record";

    const medicalRecordElement = document.createElement('input');
    medicalRecordElement.type = "text";
    medicalRecordElement.className = "form-control mb-3";
    medicalRecordElement.name = "medicalRecord";
    medicalRecordElement.id = "medicalRecord";
    medicalRecordElement.value = patientData.medicalRecords;

    const doctorPrescriptionContainerElement = document.createElement('div');
    doctorPrescriptionContainerElement.className = "form-floating text-black";
    const doctorPrescriptionTextElement = document.createElement('textarea');
    doctorPrescriptionTextElement.className = "form-control doctor-prescription";
    doctorPrescriptionTextElement.style = "height: 10rem";
    doctorPrescriptionTextElement.placeholder = "Leave a comment here";
    doctorPrescriptionTextElement.id = "doctor-prescription";
    doctorPrescriptionTextElement.value = patientData.medicalPrescriptions;
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

    if (!patientData.nurse)
        assignedNurseElement.value = "Not Assigned";
    else
        assignedNurseElement.value = patientData.nurse.user.name;

    packageSelectedRow.appendChild(packageSelectedLabelElement);
    packageSelectedRow.appendChild(packageSelectedElement);
    packageSelectedRow.appendChild(nokNameLabelElement);
    packageSelectedRow.appendChild(nokNameElement);
    packageSelectedRow.appendChild(nokmobileNumberLabelElement);
    packageSelectedRow.appendChild(nokmobileNumberElement);
    packageSelectedRow.appendChild(medicalRecordLabelElement);
    packageSelectedRow.appendChild(medicalRecordElement);
    packageSelectedRow.appendChild(doctorPrescriptionContainerElement);
    packageSelectedRow.appendChild(assignedNurseLabelElement);
    packageSelectedRow.appendChild(assignedNurseElement);
}


// Edit and save profile
const ftnEditSaveProfile = (role, userData, patientData) => {
    // Toggle betwen edit and save mode for profile section
    const editBtnElement = document.getElementById('btnEdit');
    editBtnElement.addEventListener('click', (e) => {

        event.preventDefault(e);

        if (editBtnElement.id === 'btnEdit') {
            editBtnElement.id = 'btnSave';
            editBtnElement.classList.remove('btnEdit');
            editBtnElement.classList.add('btnSave');
            editBtnElement.innerHTML = 'Save';
            
            document.getElementById('name').disabled = false;
            document.getElementById('email').disabled = false;
            document.getElementById('mobileNumber').disabled = false;
            if (role === "Patient") {
                document.getElementById('next-of-kin-name').disabled = false;
                document.getElementById('next-of-kin-mobile').disabled = false;
            }

        } else {
            editBtnElement.id = 'btnEdit';
            editBtnElement.classList.remove('btnSave');
            editBtnElement.classList.add('btnEdit');
            editBtnElement.innerHTML = 'Edit';
            
            document.getElementById('name').disabled = true;
            document.getElementById('email').disabled = true;
            document.getElementById('mobileNumber').disabled = true;   
            if (role === "Patient") {
                document.getElementById('packageSelected').disabled = true;
                document.getElementById('next-of-kin-name').disabled = true;
                document.getElementById('next-of-kin-mobile').disabled = true;
            }

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const mobile = document.getElementById('mobileNumber');
            const package = document.getElementById('packageSelected');
            const nokName = document.getElementById('next-of-kin-name');
            const nokMobile = document.getElementById('next-of-kin-mobile');

            // FETCH request - send data or retrieve data by calling an api endpoint
            // create Javascript Object to store the form data 
            
            if (role === "Patient") {
                const formData1 = {
                    userId: userData.userId,
                    role: userData.role,
                    name: name.value,
                    email: email.value,
                    phone: mobile.value
                };
                
                const formData2 = {
                    patientId: patientData.patientId,
                    nextOfKinName: nokName.value,
                    nextOfKinPhone: nokMobile.value
                };
                return update(formData1, formData2);
            } else {
                const formData1 = {
                    userId: userData.userId,
                    role: userData.role,
                    name: name.value,
                    email: email.value,
                    phone: mobile.value,
                };
                return update(formData1);
            }
        }  
    })
}

const ftnStaffLicenseNumber = (role, nurseData) => {

    // create input field for nurse license number
    const staffLicenseLabelElement = document.createElement('label');
    staffLicenseLabelElement.id = 'staffLicenseLabelNumber';
    staffLicenseLabelElement.style = 'padding-top: 0.8rem; padding-bottom: 0.5rem';
    staffLicenseLabelElement.innerHTML = 'License Number';

    const staffLicenseElement = document.createElement('input');
    staffLicenseElement.type = 'text';
    staffLicenseElement.name = 'licenseNumber';
    staffLicenseElement.id = 'nurseLicenseNumber';
    staffLicenseElement.placeholder = 'Nurse license number';
    staffLicenseElement.className = 'form-control';
    staffLicenseElement.value = nurseData.licenceNo;
    staffLicenseElement.disabled = true;

    document.getElementById('staff-license').appendChild(staffLicenseLabelElement);
    document.getElementById('staff-license').appendChild(staffLicenseElement);
}