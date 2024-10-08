
async function fetchStaffsApi() {
    let staffAPIInfo = [];
    const response = await fetch("http://localhost:8080/api/nurse");
    const resp = await response.json();
    resp.forEach((nurse) => {
        staffAPIInfo.push(nurse);
    });
    console.log(staffAPIInfo)
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

