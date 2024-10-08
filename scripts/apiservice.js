async function fetchStaffsApi() {
    let staffAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/nurse");
    const resp = await response.json();
    resp.forEach((nurse) => {
        staffAPIInfo.push(nurse);
    });
    // console.log(staffAPIInfo)
    return staffAPIInfo;
}
async function fetchUserApi() {
    let userAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/user");
    const resp = await response.json();
    resp.forEach((user) => userAPIInfo.push(user));
    return userAPIInfo;
}

async function fetchPatientsApi() {
    let patientAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/patient");
    const resp = await response.json();
    resp.forEach((patient) => patientAPIInfo.push(patient));
    // console.log(patientAPIInfo)
    return patientAPIInfo;
}

async function putPatientInfo(
    patientId,
    nurseId = null,
    requestBody = null,
    requestParam = null
) {
    // console.log(requestBody)
    // console.log(requestParam)
    let response;
    let url = "http://localhost:8080/api/patient/";
    if (nurseId == "remove") {
        url += patientId + "/remove-nurse";
        response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: { nurse: null },
        });
    } else if (nurseId) {
        url += patientId + "/nurse/" + nurseId;
        response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        });
    } else if (requestBody) {
        console.log("triggered");
        url += patientId;
        if (requestParam) url += `?packageId=${requestParam}`;
        console.log(url);
        response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });
    }
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(await response.json());
}
