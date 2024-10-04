const patientIds = [16, 22, 29];
const staffIds = [6, 7, 8];
const adminIds = [1, 2, 3];

let patientInfo = [];
let staffInfo = [];
let patientAPIInfo = [];
let staffAPIInfo = [];

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

function addStaff(staff) {
    const tableBody = document.querySelector("#staffRecordstbody");
    fillTable(tableBody, staff);
}

function fillTable(tableBody, profile, restriction) {
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
        if (role == "Patient") fillPatientModal(profile, restriction);
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

function fillPatientModal(patient, restriction) {
    //restriction=true: viewed from staff profile, unable to edit package/prescription details
    console.log("fill patient modal activated");
    const data1 = [
        { header: "Name", value: patient.firstName + " " + patient.lastName },
        { header: "Start Date", value: patient.birthDate },
        { header: "End Date", value: patient.birthDate },
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
    let packageDropdownDiv = document.createElement("div");
    if (restriction) packageDropdownDiv = "Full-day";
    const data2 = [
        {
            header: "Medical Rescords",
            value: `Blood Type: ${patient.bloodGroup}`,
        },
        { header: "Next-Of-Kin", value: patient.maidenName },
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
        packageDropdownBtn.innerText = "Select package";
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

                // Optionally store the selected item value in a variable if needed
                const selectedItemValue = this.getAttribute("data-value");
            });
        });
    }

    // Setting up Medical Prescription entry
    let prescriptionLabel;
    let prescriptionTextArea;
    if (!restriction) {
        console.log("no restriction")
        prescriptionLabel = document.createElement("label");
        prescriptionLabel.setAttribute("for", "additional-notes");
        

        prescriptionTextArea = document.createElement("textarea");
        prescriptionTextArea.className = "form-control";
        prescriptionTextArea.rows = 3;
    } else {
        console.log("restricted")
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
    prescriptionTextArea.innerText = "Levodopa/Carbidopa 100/25mg three times daily; Sertraline 100mg daily"

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

function fillStaffModal(staff) {
    console.log("fill staff modal triggered");
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
    const modalThirdRow = document.querySelector(".modal-third-row");
    modalFirstRow.innerHTML = "";
    modalSecondRow.innerHTML = "";
    modalThirdRow.innerHTML = "";

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

async function adminProfile() {
    let restricted = false;
    console.log("admin profile activated");
    document.querySelector("#patientdetail").remove();

    patientInfo = await fetchPatients();
    patientInfo.forEach((patient) => {
        patient.role = "Patient"; //Adds a mock patient role to the dummy JSON data
        addPatient(patient, (restricted = false));
    });

    const staffInfo = await fetchStaffs();
    staffInfo.forEach((staff) => {
        staff.role = "Staff";
        addStaff(staff);
    });
}

async function staffProfile() {
    let restricted = true;
    console.log("staff profile activated");
    document.querySelector("#patientdetail").remove();
    document.querySelector("#staff-tab").remove();

    patientInfo = await fetchPatients();
    patientInfo.forEach((patient) => {
        patient.role = "Patient";
        addPatient(patient, (restriction = true));
    });
}

function customerProfile() {
    console.log("cust profile activated");
    document.querySelector("#staff-admin-section").remove();
}

async function fetchAPI() {
    console.log("running fetchAPI");
    const response = await fetch("http://localhost:8080/api/user");
    const resp = await response.json();
    resp.forEach((user) => {
        if (user.role == "Customer") patientAPIInfo.push(user);
        if (user.role == "Nurse") staffAPIInfo.push(user);
    });
    console.log(patientAPIInfo);
}
