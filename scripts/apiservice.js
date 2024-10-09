//returns the array of 10 nurses, can call methods like:
//staffApiInfo[0].nurseId
//staffApiInfo[0].expertise
async function fetchStaffsApi() {
    let staffAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/nurse");
    const resp = await response.json();
    resp.forEach((nurse) => {
        staffAPIInfo.push(nurse);
    });
    return staffAPIInfo;
}

//returns the array of 31 users, can call methods like:
//userApiInfo[0].userId
//userApiInfo[0].role

async function fetchUserApi() {
    let userAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/user");
    const resp = await response.json();
    resp.forEach((user) => userAPIInfo.push(user));
    return userAPIInfo;
}

//returns the array of 20 patients, can call methods like:
//patientAPIInfo[0].startDate
//patientAPIInfo[0].nurse.nurseId
//paatientApiInfo[0].user.userId
//paatientApiInfo[0].package.packageName
async function fetchPatientsApi() {
    let patientAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/patient");
    const resp = await response.json();
    resp.forEach((patient) => patientAPIInfo.push(patient));
    return patientAPIInfo;
}

async function putPatientInfo(
    patientId,
    nurseId = null,
    requestBody = null,
    requestParam = null
) {
    
    
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
        url += patientId;
        if (requestParam) url += `?packageId=${requestParam}`;

        response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });
    }
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

async function postUser(requestBody) {
    const url = "http://localhost:8080/api/user";
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
    });
    const resp = await response.json();
    console.log(resp.userId);
    await postPatient(resp.userId);
}

async function postPatient(userId) {
    const url = `http://localhost:8080/api/patient/${userId}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
    });
}
