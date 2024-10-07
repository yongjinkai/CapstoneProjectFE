const patientIds = [16, 22, 29];
const staffIds = [6, 7, 8];
const adminIds = [1, 2, 3];
let today = new Date();
let userList = [];
let staffList = [];
let patientList = [];

async function fetchLists() {
    userList = await fetchUserApi();
    staffList = await fetchStaffsApi();
    patientList = await fetchPatientsApi();
}

console.log("printing user List: " + userList + "end");
// Function to fetch data from dummyJSON, returns a list of object of patient/staff info
async function fetchPatients() {
    const response = await fetch("https://dummyjson.com/users");
    const resp = await response.json();
    patientInfo = [];
    patientIds.forEach(
        (id) => (patientInfo = [...patientInfo, resp.users[id - 1]])
    );
    // fetchAPI();
    return patientInfo;
}

async function fetchStaffs() {
    const response = await fetch("https://dummyjson.com/users");
    const resp = await response.json();

    staffIds.forEach((id) => (staffInfo = [...staffInfo, resp.users[id - 1]]));
    return staffInfo;
}

function addPatient(patient, restriction) {
    const tableBody = document.querySelector("#patientRecordstbody");
    fillTable(tableBody, patient, restriction);
}

function addStaff(staff, restriction) {
    const tableBody = document.querySelector("#staffRecordstbody");
    fillTable(tableBody, staff, restriction);
}

async function fillTable(tableBody, profile, restriction) {
    await fetchLists();
    const tableRow = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = profile.userId;
    id.className = "ps-3";

    const name = document.createElement("td");
    name.textContent = profile.name;

    const details = document.createElement("td");

    const detailsLink = document.createElement("a");
    detailsLink.textContent = "View details";
    detailsLink.href = "";
    detailsLink.style = "font-size: 0.7rem";
    detailsLink.className = "btn btn-danger";
    detailsLink.setAttribute("data-bs-toggle", "modal");
    detailsLink.setAttribute("data-bs-target", "#staticBackdrop");
    detailsLink.addEventListener("click", handleClick);

    async function handleClick() {
        const chooseProfile = document.querySelector(".chooseProfile");
        chooseProfile.textContent = profile.role;
        const profileID = document.querySelector(".profileID");
        profileID.textContent = profile.id;
        if (profile.role == "Patient") {
            patientList.forEach((patient) => {
                if (profile.userId == patient.user.userId)
                    fillPatientModal(patient, restriction);
            });
        } else if (profile.role == "Nurse") {
            staffList.forEach((nurse) => {
                if (profile.userId == nurse.user.userId)
                    fillStaffModal(nurse, profile);
            });
        }
    }

    const status = document.createElement("td");
    status.textContent = "Active";
    if (profile.role == "Patient") {
        let patientList = await fetchPatientsApi();
        patientList.forEach((patient) => {
            if (patient.user.userId == profile.userId) {
                if (!patient.endDate || Date(patient.endDate) < today) {
                    status.textContent = "Inactive";
                }
            }
        });
    }

    tableBody.append(tableRow);
    tableRow.append(id);
    tableRow.append(name);
    tableRow.append(details);
    details.append(detailsLink);
    tableRow.append(status);
}

async function fillPatientModal(patient, restriction) {
    //restriction=true: viewed from staff profile, unable to edit package/prescription details/start end date
    //restrction=false: viewed from admin profile, all edit options available

    //preparing start and end date data to be appended
    await fetchLists();
    let startDate;
    let endDate;
    if (restriction) {
        startDate = !patient.startDate ? "No start Date" : patient.startDate;
        endDate = !patient.endDate ? "No End Date" : patient.endDate;
    } else {
        startDate = document.createElement("input");
        startDate.className = "form-control start-date";
        startDate.type = "date";
        startDate.value = patient.startDate;
        endDate = document.createElement("input");
        endDate.className = "form-control end-date";
        endDate.type = "date";
        endDate.value = patient.endDate;
    }

    const data1 = [
        { header: "Name", value: patient.user.name },
        { header: "Start Date", value: startDate },
        { header: "End Date", value: endDate },
    ];

    const modalFirstRow = document.querySelector(".modal-first-row");
    const modalSecondRow = document.querySelector(".modal-second-row");
    const modalThirdRow = document.querySelector(".modal-third-row");
    const modalFourthRow = document.querySelector(".modal-fourth-row");
    modalFirstRow.innerHTML = "";
    modalSecondRow.innerHTML = "";
    modalThirdRow.innerHTML = "";
    modalFourthRow.innerHTML = "";

    //Populating modal first row data
    data1.forEach((item) => {
        //Loop for filling in modal first row data
        const col = document.createElement("div");
        col.className = "col-4";
        const header = document.createElement("p");
        header.className = "header-titles d-block mb-0 fw-bold";
        header.textContent = item.header;

        let value = document.createElement("p");
        if (typeof item.value == "string") {
            value.textContent = item.value;
            value.className = "d-block";
        } else value = item.value;

        modalFirstRow.append(col);
        col.append(header);
        col.append(value);
    });

    // preparing  modal 2nd row data
    let packageDropdownDiv = document.createElement("div");
    if (restriction)
        packageDropdownDiv = !patient._package
            ? "No Package"
            : patient._package.packageName;
    const data2 = [
        {
            header: "Medical Rescords",
            value: patient.medicalRecords,
        },
        { header: "Next-Of-Kin", value: patient.nextOfKinName },
        { header: "Package", value: packageDropdownDiv },
    ];

    data2.forEach((item) => {
        //Loop for filling in modal second row data
        const col = document.createElement("div");
        col.className = "col-4";

        const header = document.createElement("p");
        header.className = "header-titles d-block mb-0 fw-bold";
        header.textContent = item.header;

        let value = document.createElement("p");
        if (typeof item.value == "string") {
            value.textContent = item.value;
            value.className = "d-block";
        } else value = item.value;

        modalSecondRow.append(col);
        col.append(header);
        col.append(value);
    });

    // Setting up dropdown menu for package selection
    // const col = document.createElement("div");
    // col.className = "col-4";
    if (!restriction) {
        //If no restriction, create dropdown for package selection
        packageDropdownDiv.className = "dropdown";
        const packageDropdownBtn = document.createElement("button");
        packageDropdownBtn.className =
            "btn btn-secondary btn-sm dropdown-toggle w-100";
        packageDropdownBtn.type = "button";
        packageDropdownBtn.setAttribute("data-bs-toggle", "dropdown");
        packageDropdownBtn.innerText = !patient._package
            ? "Select Package"
            : patient._package.packageName;
        const packageDropdownUl = document.createElement("ul");
        packageDropdownUl.className = "dropdown-menu";
        const packageDropdownItems = [
            { text: "No Package", href: "#" },
            { text: "Half-Day", href: "#" },
            { text: "Full-Day", href: "#" },
        ];
        packageDropdownItems.forEach((item) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.className = "dropdown-item packageOptions";
            a.href = item.href;
            a.textContent = item.text;
            li.append(a);
            packageDropdownUl.append(li);
        });
        // modalSecondRow.append(col);
        // col.append(packageDropdownDiv);
        packageDropdownDiv.append(packageDropdownBtn);
        packageDropdownDiv.append(packageDropdownUl);

        // Setting up click event handler to update button text
        document.querySelectorAll(".packageOptions").forEach((item) => {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                packageDropdownBtn.textContent = this.textContent;

                //store the selected item value in a variable if needed
                const selectedItemValue = this.getAttribute("data-value");
            });
        });
    }

    // Setting up Medical Prescription entry
    let prescriptionLabel;
    let prescriptionTextArea;
    if (!restriction) {
        prescriptionLabel = document.createElement("label");
        prescriptionLabel.setAttribute("for", "additional-notes");

        prescriptionTextArea = document.createElement("textarea");
        prescriptionTextArea.className = "form-control";
        prescriptionTextArea.rows = 3;
        prescriptionTextArea.innerText = patient.medicalPrescriptions;
    } else {
        prescriptionLabel = document.createElement("p");
        prescriptionLabel.className = "my-0 py-0";
        prescriptionTextArea = document.createElement("p");
        prescriptionTextArea.className = "d-block";
    }
    prescriptionLabel.textContent = "Medical Prescription: ";
    prescriptionTextArea.id = "additional-notes";
    prescriptionLabel.className += "header-titles d-block fw-bold ";
    modalThirdRow.append(prescriptionLabel);
    modalThirdRow.append(prescriptionTextArea);
    prescriptionTextArea.innerText = patient.medicalPrescriptions;

    // Setting up additional notes entry
    const additonalNotesLabel = document.createElement("label");
    additonalNotesLabel.setAttribute("for", "additional-notes");
    additonalNotesLabel.className = "header-titles d-block fw-bold";
    additonalNotesLabel.textContent = "Additional Notes: ";

    const notesTextArea = document.createElement("textarea");
    notesTextArea.className = "form-control";
    notesTextArea.id = "additional-notes";
    notesTextArea.rows = 3;

    modalFourthRow.append(additonalNotesLabel);
    modalFourthRow.append(notesTextArea);
}

async function fillStaffModal(nurse, user) {
    await fetchLists();
    const data1 = [
        { header: "Name", value: user.name },
        { header: "License Number", value: nurse.licenceNo },
        {
            header: "Expertise",
            value: nurse.expertise,
        },
    ];

    const modalFirstRow = document.querySelector(".modal-first-row");
    const modalSecondRow = document.querySelector(".modal-second-row");
    const modalThirdRow = document.querySelector(".modal-third-row");
    const modalFourthRow = document.querySelector(".modal-fourth-row");
    modalFirstRow.innerHTML = "";
    modalSecondRow.innerHTML = "";
    modalThirdRow.innerHTML = "";
    modalFourthRow.innerHTML = "";

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
    dropDownUl.className = "dropdown-menu assign-patient-dropdown-menu";

    userList.forEach((user) => {
        if (user.role == "Patient") {
            const patientList = document.createElement("li");
            const patientListItem = document.createElement("a");
            patientListItem.href = "#";
            patientListItem.className = "dropdown-item";
            patientListItem.addEventListener("click", () =>
                assignPatient(user)
            );

            let patientName = user.name;
            patientListItem.textContent = `${patientName} (ID: ${user.userId})`;

            dropDownUl.append(patientList);
            patientList.append(patientListItem);
        }
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

async function adminProfile() {
    let restricted = false;
    console.log("running adminProfile");
    document.querySelector("#patientdetail").remove();

    await fetchLists();
    userList.forEach((user) => {
        if (user.role == "Patient") addPatient(user, (restricted = false));
        if (user.role == "Nurse") addStaff(user, (restricted = false));
    });
}

async function staffProfile(role, email) {
    let restricted = true;
    console.log("triggered");
    document.querySelector("#patientdetail").remove();
    document.querySelector("#staff-tab").remove();
    await fetchLists();
    patientList.forEach((patient) => {
        if (patient.nurse && patient.nurse.user.email == email) {
            userList.forEach((user) => {
                if (patient.user.userId == user.userId)
                    addPatient(user, (restriction = true));
            });
        }
    });
}

function customerProfile() {
    console.log("cust profile activated");
    document.querySelector("#staff-admin-section").remove();
}
