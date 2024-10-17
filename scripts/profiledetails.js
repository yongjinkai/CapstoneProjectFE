let today = new Date();
let userList = [];
let staffList = [];
let patientList = [];

async function fetchLists() {
    userList = await fetchUserApi();
    staffList = await fetchStaffsApi();
    patientList = await fetchPatientsApi();
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
    // detailsLink.addEventListener("click", handleClick);
    detailsLink.onclick = handleClick;

    async function handleClick() {
        await fetchLists();
        const chooseProfile = document.querySelector(".chooseProfile");
        chooseProfile.textContent = profile.role;
        const profileID = document.querySelector(".profileID");
        profileID.textContent = profile.userId;
        if (profile.role == "Patient") {
            patientList.forEach((patient) => {
                if (profile.userId == patient.user.userId)
                    fillPatientModal(patient, restriction);
            });
        } else if (profile.role == "Nurse") {
            staffList.forEach((nurse) => {
                if (profile.userId == nurse.user.userId) {
                    fillStaffModal(nurse, profile);
                }
            });
        }
    }

    const status = document.createElement("td");
    status.textContent = "Inactive";
    if (profile.role == "Nurse") status.textContent = "Active"
    if (profile.role == "Patient") {
        await fetchLists();
        patientList.forEach((patient) => {
            if (patient.user.userId == profile.userId) {
                // console.log("today's date: " + today);
                // console.log("patient's end date: " + new Date(patient.endDate));
                if (patient.endDate && patient.startDate) {
                    if (
                        patient._package.packageName != "No Package" &&
                        new Date(patient.startDate) < today &&
                        new Date(patient.endDate) > today
                    )
                        status.textContent = "Active";
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
        header.className = `header-titles d-block mb-0 fw-bold `;
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
    //If staff mode, package is not a dropdown
    if (restriction) {
        packageDropdownDiv = !patient._package
            ? "No Package"
            : patient._package.packageName;
    }
    const data2 = [
        {
            header: "Medical Records",
            value: patient.medicalRecords,
            classname: "medical-records",
        },
        {
            header: "Next-Of-Kin",
            value: patient.nextOfKinName,
            classname: "next-of-kin",
        },
        { header: "Package", value: packageDropdownDiv, classname: "" },
    ];

    data2.forEach((item) => {
        //Loop for filling in modal second row data
        const col = document.createElement("div");
        col.className = "col-4";

        const header = document.createElement("p");
        header.className = `header-titles d-block mb-0 fw-bold `;
        header.textContent = item.header;

        let value = document.createElement("p");
        if (typeof item.value == "string") {
            value.textContent = item.value;            
            value.className = `d-block ${item.classname}`;
        } else value = item.value;

        modalSecondRow.append(col);
        col.append(header);
        col.append(value);
    });
    let selectedPackageName;
    // Setting up dropdown menu for package selection
    if (!restriction) {
        //If no restriction, create dropdown for package selection
        packageDropdownDiv.className = "dropdown";
        const packageDropdownBtn = document.createElement("button");
        packageDropdownBtn.className =
            "btn btn-secondary btn-sm dropdown-toggle w-100 package-name";
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
            a.setAttribute("data-value", item.text);
            li.append(a);
            packageDropdownUl.append(li);
        });

        packageDropdownDiv.append(packageDropdownBtn);
        packageDropdownDiv.append(packageDropdownUl);

        // Setting up click event handler to update button text
        document.querySelectorAll(".packageOptions").forEach((item) => {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                packageDropdownBtn.textContent = this.textContent;

                //store the selected item value in a variable if needed
                selectedPackageName = this.getAttribute("data-value");
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
        prescriptionTextArea.className = "form-control medical-prescriptions";
        prescriptionTextArea.rows = 3;
        prescriptionTextArea.innerText = patient.medicalPrescriptions;
    } else {
        prescriptionLabel = document.createElement("p");
        prescriptionLabel.className = "my-0 py-0 ";
        prescriptionTextArea = document.createElement("p");
        prescriptionTextArea.className = "d-block medical-prescriptions";
    }
    prescriptionLabel.textContent = "Medical Prescription: ";
    prescriptionTextArea.id = "additional-notes";
    prescriptionLabel.className += " header-titles d-block fw-bold ";
    modalThirdRow.append(prescriptionLabel);
    modalThirdRow.append(prescriptionTextArea);
    prescriptionTextArea.innerText = patient.medicalPrescriptions;

    // Setting up additional notes entry
    const additonalNotesLabel = document.createElement("label");
    additonalNotesLabel.setAttribute("for", "additional-notes");
    additonalNotesLabel.className = "header-titles d-block fw-bold";
    additonalNotesLabel.textContent = "Additional Notes: ";

    const notesTextArea = document.createElement("textarea");
    notesTextArea.className = "form-control additional-notes";
    notesTextArea.rows = 3;
    notesTextArea.textContent = patient.additionalNotes;
    modalFourthRow.append(additonalNotesLabel);
    modalFourthRow.append(notesTextArea);

    //Setting up classes for save button
    const saveBtn = document.querySelector(".save-button");
    if (!restriction) {
        //selected item value is defined previously
        saveBtn.onclick = (event) => {
            let start_date = document.querySelector(".start-date").value;
            let end_date = document.querySelector(".end-date").value;
            start_date = !start_date ? null : start_date;
            end_date = !end_date ? null : end_date;
            let requestBody = {
                medicalPrescriptions: document.querySelector(
                    ".medical-prescriptions"
                ).value,
                additionalNotes:
                    document.querySelector(".additional-notes").value,
                startDate: start_date,
                endDate: end_date,
            };
            if (selectedPackageName == "Half-Day")
                putPatientInfo(patient.patientId, null, requestBody, 201);
            else if (selectedPackageName == "Full-Day")
                putPatientInfo(patient.patientId, null, requestBody, 202);
            else putPatientInfo(patient.patientId, null, requestBody, 200);
            // location.reload();
        };
    }

    if (restriction) {
        saveBtn.onclick = () => {
            let requestBody = {
                additionalNotes:
                    document.querySelector(".additional-notes").value,
            };
            putPatientInfo(patient.patientId, null, requestBody, null);
            // location.reload();
        };
    }
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
            let patient;
            patientList.forEach((_patient) => {
                if (user.userId == _patient.user.userId) patient = _patient;
            });

            const patientLi = document.createElement("li");
            const patientListItem = document.createElement("a");
            patientListItem.href = "#";
            patientListItem.className = "dropdown-item";
            patientListItem.addEventListener("click", () =>
                assignPatient(user, patient)
            );

            let patientName = user.name;
            patientListItem.textContent = `${patientName} (ID: ${user.userId})`;

            dropDownUl.append(patientLi);
            patientLi.append(patientListItem);
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

    //call assign patients function to populate assigned patients column
    patientList.forEach((patient) => {
        if (patient.nurse && patient.nurse.nurseId == nurse.nurseId) {
            //check if patient's nurse matches current nurse's id
            userList.forEach((user) => {
                if (user.userId == patient.user.userId)
                    //check if patient's id matches user Id
                    assignPatient(user, patient);
            });
        }
    });

    //Add in class for save button
    const saveBtn = document.querySelector(".save-button");

    saveBtn.onclick = () => saveStaffInfo(nurse);
}

function saveStaffInfo(nurse) {
    let oldPatientsIdList = [];
    let newPatientsIdList = [];

    patientList.forEach((patient) => {
        if (patient.nurse && patient.nurse.nurseId == nurse.nurseId)
            oldPatientsIdList.push(patient.patientId);
    });

    let tempList = document.querySelectorAll(".assignedPatientsContainer span");
    tempList.forEach((span) => newPatientsIdList.push(Number(span.className)));

    const patientIdsToAssign = newPatientsIdList.filter(
        (num) => !oldPatientsIdList.includes(num)
    );
    const patientIdsToUnassign = oldPatientsIdList.filter(
        (num) => !newPatientsIdList.includes(num)
    );
    console.log("to assign: " + patientIdsToAssign);
    console.log("to unassign: " + patientIdsToUnassign);
    patientIdsToAssign.forEach((patientId) => {
        putPatientInfo(patientId, nurse.nurseId);
    });
    patientIdsToUnassign.forEach((patientId) => {
        putPatientInfo(patientId, "remove");
    });
}

function assignPatient(user, patient) {
    const assignedPatientsContainer = document.querySelector(
        ".assignedPatientsContainer"
    );

    const assignedPatientsDiv = document.createElement("div");
    assignedPatientsDiv.className =
        "d-flex justify-content-between pb-2 assignedPatientsDiv";

    const patientNameSpan = document.createElement("span");
    patientNameSpan.textContent = `${user.name} (ID: ${patient.patientId})`;
    patientNameSpan.className = patient.patientId;

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

async function adminProfile(role, userData) {
    document.querySelector("#patientdetail").remove();

    ftnAddProfileData(userData);
    ftnInitDisabledAll(role);
    ftnEditSaveProfile(role, userData);

    await fetchLists();

    userList.forEach((user) => {
        if (user.role == "Patient") addPatient(user, (restricted = false));
        if (user.role == "Nurse") addStaff(user, (restricted = false));
    });
}

async function staffProfile(role, userData, nurseData) {
    let restricted = true;
    document.querySelector("#patientdetail").remove();
    document.querySelector("#staff-tab").remove();

    ftnStaffLicenseNumber(role, nurseData);
    ftnAddProfileData(userData);
    ftnInitDisabledAll(role);
    ftnEditSaveProfile(role, userData, nurseData);

    await fetchLists();
    patientList.forEach((patient) => {
        if (patient.nurse && (patient.nurse.nurseId == nurseData.nurseId)) {
            userList.forEach((user) => {
                if (patient.user.userId == user.userId)
                    addPatient(user, (restriction = true));
            });
        }
    });
}

function customerProfile(role, userData, patientData, nurseData) {
    document.querySelector("#staff-admin-section").remove();

    ftnAddProfileData(userData);
    ftnAddPatientData(patientData, nurseData);
    ftnInitDisabledAll(role);
    ftnEditSaveProfile(role, userData, patientData);
}
