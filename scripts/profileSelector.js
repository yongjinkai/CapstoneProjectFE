


const adminProfile = (role, user) => {
    
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // set display active for admin
    document.getElementById('admin-staff-section').style.display = 'block';
    document.getElementById('admin-staff-section').setAttribute('contenteditable', false);

    ftnEditSave();
    ftnEditSaveDetail();
}

const staffProfile = (role, user) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";   
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    // set display active for staff
    document.getElementById('admin-staff-section').style.display = 'block';
    document.getElementById('btnDetail').style.display = 'none';

    ftnInitDisabled();
    ftnEditSave();
}

const customerProfile = (role, user) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase();  
          
    // set display active for patient
    document.getElementById('patientdetail').style.display = 'block';
    
    ftnInitDisabled();
    ftnEditSave();
}

const ftnEditSave = () => {
    // toggle betwen edit and save mode for nurse particulars
    const editBtnElement = document.getElementById('btnEdit');
    editBtnElement.addEventListener('click', (e) => {
        if (editBtnElement.id === 'btnEdit') {
            editBtnElement.id = 'btnSave';
            editBtnElement.classList.remove('btnEdit');
            editBtnElement.classList.add('btnSave');
            editBtnElement.innerHTML = 'Save';
            document.getElementById('firstName').disabled = false;
            document.getElementById('lastName').disabled = false;
            document.getElementById('userName').disabled = false;
            document.getElementById('mobileNumber').disabled = false;
            document.getElementById('Radios1').disabled = false;
            document.getElementById('Radios2').disabled = false;
            document.getElementById('next-of-kin-name').disabled = false;
            document.getElementById('next-of-kin-mobile').disabled = false;
            document.getElementById('medical-condition').disabled = false;
            // document.getElementById('doctor-prescription').disabled = false;
            document.getElementById('staffLicenseNumber').disabled = false;
        } else {
            editBtnElement.id = 'btnEdit';
            editBtnElement.classList.remove('btnSave');
            editBtnElement.classList.add('btnEdit');
            editBtnElement.innerHTML = 'Edit';
            document.getElementById('firstName').disabled = true;
            document.getElementById('lastName').disabled = true;
            document.getElementById('userName').disabled = true;
            document.getElementById('mobileNumber').disabled = true;   
            document.getElementById('Radios1').disabled = true;
            document.getElementById('Radios2').disabled = true;
            document.getElementById('next-of-kin-name').disabled = true;
            document.getElementById('next-of-kin-mobile').disabled = true;
            document.getElementById('medical-condition').disabled = true;
            // document.getElementById('doctor-prescription').disabled = true;         
            document.getElementById('staffLicenseNumber').disabled = true;
        }  
    })
}

const ftnEditSaveDetail = () => {
    const editDetailBtnElement = document.getElementById('btnDetail');
    editDetailBtnElement.addEventListener('click', (e) => {
        if (editDetailBtnElement.id === 'btnEditDetail') {
            editDetailBtnElement.id = 'btnSaveDetail';
            editDetailBtnElement.classList.remove('btnEditDetail');
            editDetailBtnElement.classList.add('btnSaveDetail');
            editDetailBtnElement.innerHTML = 'Save';
            document.getElementById('admin-staff-section').setAttribute('contenteditable', true);
        } else {
            editDetailBtnElement.id = 'btnEditDetail';
            editDetailBtnElement.classList.remove('btnSaveDetail');
            editDetailBtnElement.classList.add('btnEditDetail');
            editDetailBtnElement.innerHTML = 'Edit';
            document.getElementById('admin-staff-section').setAttribute('contenteditable', false);
        }
    })
}

const ftnInitDisabled = () => {
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('userName').disabled = true;
    document.getElementById('mobileNumber').disabled = true;
    document.getElementById('Radios1').disabled = true;
    document.getElementById('Radios2').disabled = true;
    document.getElementById('next-of-kin-name').disabled = true;
    document.getElementById('next-of-kin-mobile').disabled = true;
    document.getElementById('medical-condition').disabled = true;
    document.getElementById('doctor-prescription').disabled = true;
}
    
    
