// Disable all fields for the initial launch of the page
const ftnInitDisabledAll = (role, username, email) => {
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('mobileNumber').disabled = true;
    if (role === "") {
        document.getElementById('package1').disabled = true;
        document.getElementById('package2').disabled = true;
        document.getElementById('packageSelected').disabled = true;
        document.getElementById('next-of-kin-name').disabled = true;
        document.getElementById('next-of-kin-mobile').disabled = true;
        document.getElementById('medicalRecord').disabled = true;
        document.getElementById('doctor-prescription').disabled = true;
        document.getElementById('assignedNurse').disabled = true;
    }
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
    package1Element.checked = "";

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

    package1Element.addEventListener("click", () => {
        packageSelectedElement.value = "Half Day Package";
    })

    package2Element.addEventListener("click", () => {
        packageSelectedElement.value = "Full Day Package";
    })

    const nokNameLabelElement = document.createElement('label');
    nokNameLabelElement.for = "next-of-kin-name";
    nokNameLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    nokNameLabelElement.innerText = "Next-Of-Kin Name";

    const nokNameElement = document.createElement('input');
    nokNameElement.type = "text";
    nokNameElement.className = "form-control mb-3";
    nokNameElement.name = "next-of-kin-name";
    nokNameElement.id = "next-of-kin-name";
    nokNameElement.value = "";

    const nokmobileNumberLabelElement = document.createElement('label');
    nokmobileNumberLabelElement.for = "next-of-kin-mobile";
    nokmobileNumberLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    nokmobileNumberLabelElement.innerText = "Next-Of-Kin Mobile Number";

    const nokmobileNumberElement = document.createElement('input');
    nokmobileNumberElement.type = "number";
    nokmobileNumberElement.className = "form-control mb-3";
    nokmobileNumberElement.name = "next-of-kin-mobile";
    nokmobileNumberElement.id = "next-of-kin-mobile";
    nokmobileNumberElement.value = "";

    const medicalRecordLabelElement = document.createElement('label');
    medicalRecordLabelElement.for = "medicalRecord";
    medicalRecordLabelElement.className = "form-control-plaintext; py-2 fw-semibold";
    medicalRecordLabelElement.innerText = "Medical Record";

    const medicalRecordElement = document.createElement('input');
    medicalRecordElement.type = "text";
    medicalRecordElement.className = "form-control mb-3";
    medicalRecordElement.name = "medicalRecord";
    medicalRecordElement.id = "medicalRecord";
    medicalRecordElement.value = "";

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

    if (role === "") {
        packageTypeElement.appendChild(package1SectionElement);
        package1SectionElement.appendChild(package1LabelElement);
        package1SectionElement.appendChild(package1Element);
        package1SectionElement.appendChild(package2SectionElement);
        package2SectionElement.appendChild(package2LabelElement);
        package2SectionElement.appendChild(package2Element);

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
}

const ftnEditSave = (role, username, email) => {
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
 
        }  
    })
}

const patientIds = [16, 22, 29];
const staffIds = [6, 7, 8];
const adminIds = [1, 2, 3];

let patientInfo;

// Function to fetch data from dummyJSON, returns a list of object of patient/staff info
async function fetchPatients() {
    const response = await fetch("https://dummyjson.com/users");
    const resp = await response.json();
    patientInfo = [];
    patientIds.forEach(
        (id) => (patientInfo = [...patientInfo, resp.users[id - 1]])
    );
    return patientInfo;
}

async function fetchStaffs() {
    const response = await fetch("https://dummyjson.com/users");
    const resp = await response.json();
    let staffInfo = [];
    staffIds.forEach((id) => (staffInfo = [...staffInfo, resp.users[id - 1]]));
    return staffInfo;
}

function addPatient(patient) {
    const tableBody = document.querySelector("#patientRecordstbody");
    fillTable(tableBody, patient);
}

function addStaff(staff) {
    const tableBody = document.querySelector("#staffRecordstbody");
    fillTable(tableBody, staff);
}

function fillTable(tableBody, profile) {
    const tableRow = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = profile.id;
    id.className = "ps-3";

    const name = document.createElement("td");
    name.textContent = profile.firstName + " " + profile.lastName;

    const details = document.createElement("td");

    const detailsLink = document.createElement("a");
    detailsLink.textContent = "View details";
    detailsLink.href = "";
    detailsLink.style = "font-size: 0.7rem";
    detailsLink.className = "btn btn-danger";
    detailsLink.setAttribute("data-bs-toggle", "modal");
    detailsLink.setAttribute("data-bs-target", "#staticBackdrop");
    detailsLink.addEventListener("click", handleClick);

    function handleClick() {
        const role = profile.role;
        const chooseProfile = document.querySelector(".chooseProfile");
        chooseProfile.textContent = role;
        const profileID = document.querySelector(".profileID");
        profileID.textContent = profile.id;
        if (role == "Patient") fillPatientModal(profile);
        else if (role == "Staff") fillStaffModal(profile);
    }

    const status = document.createElement("td");
    status.textContent = "Active";

    tableBody.append(tableRow);
    tableRow.append(id);
    tableRow.append(name);
    tableRow.append(details);
    details.append(detailsLink);
    tableRow.append(status);
}

function fillPatientModal(patient) {
    //Note: data input values is inaccurate, just for visualisation.
    const data1 = [
        { header: "Name", value: patient.firstName + " " + patient.lastName },
        { header: "Registration Date", value: patient.birthDate },
        {
            header: "Package",
            value: patient.gender == "female" ? "Half-day" : "Full-Day", //Mock example to simulate random halfday or fullday package using gender
        },
    ];
    const data2 = [
        {
            header: "Medical Profile",
            value: `Blood Type:  ${patient.bloodGroup}`,
        },
        { header: "Next-Of-Kin", value: patient.maidenName },
        { header: "Documents", value: "NA" },
    ];

    const modalFirstRow = document.querySelector(".modal-first-row");
    const modalSecondRow = document.querySelector(".modal-second-row");
    const modalThirdRow = document.querySelector(".modal-third-row");
    modalFirstRow.innerHTML = "";
    modalSecondRow.innerHTML = "";
    modalThirdRow.innerHTML = "";
    data1.forEach((item) => {
        //Loop for filling in modal first row data
        const col = document.createElement("div");
        col.className = "col-4";
        const header = document.createElement("p");
        header.className = "header-titles d-block mb-0 fw-bold";
        header.textContent = item.header;

        const value = document.createElement("p");
        value.textContent = item.value;
        value.className = "d-block";

        modalFirstRow.append(col);
        col.append(header);
        col.append(value);
    });

    data2.forEach((item) => {
        //Loop for filling in modal second row data
        const col = document.createElement("div");
        col.className = "col-4";

        const header = document.createElement("p");
        header.className = "header-titles d-block mb-0 fw-bold";
        header.textContent = item.header;

        const value = document.createElement("p");
        value.textContent = item.value;
        value.className = "d-block";

        modalSecondRow.append(col);
        col.append(header);
        col.append(value);
    });

    const label = document.createElement("label");
    label.setAttribute("for", "additional-notes");
    label.className = "header-titles d-block fw-bold";
    label.textContent = "Additional Notes: ";

    const textArea = document.createElement("textarea");
    textArea.className = "form-control";
    textArea.id = "additional-notes";
    textArea.rows = 3;

    modalThirdRow.append(label);
    modalThirdRow.append(textArea);
}

function fillStaffModal(staff) {
    const data1 = [
        { header: "Name", value: staff.firstName + " " + staff.lastName },
        { header: "License Number", value: staff.ein },
        {
            header: "Nurse Rating",
            value: "9/10",
        },
    ];

    const modalFirstRow = document.querySelector(".modal-first-row");
    const modalSecondRow = document.querySelector(".modal-second-row");

    modalFirstRow.innerHTML = "";
    modalSecondRow.innerHTML = "";

    data1.forEach((item) => {
        const col = document.createElement("div");
        col.className = "col-4";

        const header = document.createElement("p");
        header.className = "header-titles d-block mb-0 fw-bold";
        header.textContent = item.header;

        const value = document.createElement("p");
        value.textContent = item.value;
        value.className = "d-block";

        modalFirstRow.append(col);
        col.append(header);
        col.append(value);
    });

    const col = document.createElement("div");
    col.className = "col-5 assignedPatientsContainer";

    const assignedPatientsP = document.createElement("p");
    assignedPatientsP.className = "header-titles d-block mb-0 fw-bold";
    assignedPatientsP.textContent = "Assigned Patients";

    const col2 = document.createElement("div");
    col2.className = "col-3";

    const col3 = document.createElement("div");
    col3.className = "col-4";

    const assignPatientP = document.createElement("p");
    assignPatientP.className = "header-titles d-block mb-0 fw-bold";
    assignPatientP.textContent = "Assign Patient";

    const dropDownDiv = document.createElement("div");
    dropDownDiv.className = "dropdown";

    const dropDownBtn = document.createElement("button");
    dropDownBtn.className = "btn btn-secondary dropdown-toggle";
    dropDownBtn.ariaExpanded = "false";
    dropDownBtn.type = "button";
    dropDownBtn.setAttribute("data-bs-toggle", "dropdown");
    dropDownBtn.textContent = "Select Patient";

    const dropDownUl = document.createElement("ul");
    dropDownUl.className = "dropdown-menu";

    patientInfo.forEach((patient) => {
        const patientList = document.createElement("li");
        const patientListItem = document.createElement("a");
        patientListItem.href = "#";
        patientListItem.className = "dropdown-item";
        patientListItem.addEventListener("click", () => assignPatient(patient));

        let patientName = patient.firstName + " " + patient.lastName;
        patientListItem.textContent = `${patientName} (ID: ${patient.id})`;

        dropDownUl.append(patientList);
        patientList.append(patientListItem);
    });

    modalSecondRow.append(col);
    col.append(assignedPatientsP);
    modalSecondRow.append(col2);
    modalSecondRow.append(col3);
    col3.append(assignPatientP);
    col3.append(dropDownDiv);
    dropDownDiv.append(dropDownBtn);
    dropDownDiv.append(dropDownUl);
}

function assignPatient(patient) {
    const assignedPatientsContainer = document.querySelector(
        ".assignedPatientsContainer"
    );

    const assignedPatientsDiv = document.createElement("div");
    assignedPatientsDiv.className =
        "d-flex justify-content-between pb-2 assignedPatientsDiv";

    const patientNameSpan = document.createElement("span");
    let patientName = patient.firstName + " " + patient.lastName;
    patientNameSpan.textContent = `${patientName} (ID: ${patient.id})`;

    const unassignButton = document.createElement("button");
    unassignButton.className = "btn btn-danger btn-sm";
    unassignButton.textContent = "Unassign";
    unassignButton.addEventListener("click", unassignPatient);

    function unassignPatient() {
        patientNameSpan.remove();
        unassignButton.remove();
    }
    assignedPatientsContainer.append(assignedPatientsDiv);
    assignedPatientsDiv.append(patientNameSpan);
    assignedPatientsDiv.append(unassignButton);
}

async function adminProfile(role, username, email) {
    document.querySelector("#patientdetail").remove();
    ftnAddData(role, username, email)
    ftnInitDisabledAll(role, username, email);
    ftnEditSave(role, username, email);

    patientInfo = await fetchPatients();
    patientInfo.forEach((patient) => {
        patient.role = "Patient"; //Adds a mock patient role to the dummy JSON data
        addPatient(patient);
    });

    const staffInfo = await fetchStaffs();
    staffInfo.forEach((staff) => {
        staff.role = "Staff"; //Adds a mock Staff role to the dummy JSON data
        addStaff(staff);
    });
}

async function staffProfile(role, username, email) {
    document.querySelector("#patientdetail").remove();
    document.querySelector("#staff-tab").remove();
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
    staffLicenseElement.placeholder = 'Nurse license number';
    staffLicenseElement.className = 'form-control';
    staffLicenseElement.disabled = true;

    document.getElementById('staff-license').appendChild(staffLicenseLabelElement);
    document.getElementById('staff-license').appendChild(staffLicenseElement);

    ftnAddData(role, username, email);
    ftnInitDisabledAll(role, username, email);
    ftnEditSave(role, username, email);

    patientInfo = await fetchPatients();
    patientInfo.forEach((patient) => {
        patient.role = "Patient"; //Adds a mock patient role to the dummy JSON data
        addPatient(patient);
    });
}

function customerProfile(role, username, email) {
    document.querySelector("#staff-admin-section").remove();
    ftnAddData(role, username, email);
    ftnInitDisabledAll(role, username, email); 
    ftnEditSave(role, username, email);
}
