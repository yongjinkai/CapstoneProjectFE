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

    ftnStaffLicenseNumber(role, username, email);
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
