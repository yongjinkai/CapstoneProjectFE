


const adminProfile = (role, user) => {
    
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    document.getElementById('admin-staff-section').style.display = 'block';
    document.getElementById('admin-staff-section').setAttribute('contenteditable', false);

    ftnEditSave();
    ftnEditDetail();
}

const staffProfile = (role, user) => {

    // display role mode
    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase() + " mode";   
    profileRole.style = 'background-color: #000000; color: #ffffffc3; font-size: 0.8rem; font-weight: 800;align-content: center; text-align: center; width: 7rem; height: 2.5rem; border-radius: 3rem';

    document.getElementById('admin-staff-section').style.display = 'block';
    document.getElementById('btnDetail').style.display = 'none';

    /*
    // create input field for nurse license number
    const staffLicenseLabelElement = document.createElement('label');
    staffLicenseLabelElement.id = 'staffLicenseLabelNumber';
    staffLicenseLabelElement.style = 'padding-top: 0.8rem; padding-bottom: 0.5rem';
    staffLicenseLabelElement.innerHTML = 'License Number';

    const staffLicenseElement = document.createElement('input');
    staffLicenseElement.type = 'number';
    staffLicenseElement.name = 'licenseNumber';
    staffLicenseElement.id = 'staffLicenseNumber';
    staffLicenseElement.placeholder = 'enter your license number';
    staffLicenseElement.className = 'form-control';

    document.getElementById('staff-license').appendChild(staffLicenseLabelElement);
    document.getElementById('staff-license').appendChild(staffLicenseElement);

    // create accordion for patient details
    // Sample data array
    const accordionData = [
        { title: 'Patient A', content: [
            {type: 'span', text: "First Name: John"},
            {type: 'span', text: "Last Name: Smith"},
            {type: 'span', text: "Email: John@gmail.com"},
            {type: 'span', text: "Mobile: 90908877"},
            ]
        },
        { title: 'Patient B', content: [
            {type: 'span', text: "First Name: "},
            {type: 'span', text: "Last Name: "},
            {type: 'span', text: "Email: "},
            {type: 'span', text: "Mobile: "}
            ]
        },
        { title: 'Patient C', content: [
            {type: 'span', text: "First Name: "},
            {type: 'span', text: "Last Name: "},
            {type: 'span', text: "Email: "},
            {type: 'span', text: "Mobile: "}
            ]
        }
    ];
        
    // Function to create accordion items
    function createAccordionItems(data) {
        const accordionContainer = document.getElementById('dynamicAccordion');

        data.forEach((item, index) => {
        // Create the accordion item elements
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        
        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.id = `heading${index}`;
        
        const accordionButton = document.createElement('button');
        accordionButton.classList.add('accordion-button', 'collapsed');
        accordionButton.setAttribute('type', 'button');
        accordionButton.setAttribute('data-bs-toggle', 'collapse');
        accordionButton.setAttribute('data-bs-target', `#collapse${index}`);
        accordionButton.setAttribute('aria-expanded', 'false');
        accordionButton.setAttribute('aria-controls', `collapse${index}`);
        accordionButton.textContent = item.title;
        
        const accordionCollapse = document.createElement('div');
        accordionCollapse.id = `collapse${index}`;
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.setAttribute('aria-labelledby', `heading${index}`);
        accordionCollapse.setAttribute('data-bs-parent', '#dynamicAccordion');
        
        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        item.content.forEach(contentItem => {
            let element;
            if (contentItem.type === 'p') {
                element = document.createElement('p');
            } else if (contentItem.type === 'span') {
                element = document.createElement('span');
            }
            element.textContent = contentItem.text;
            // element.setAttribute('contenteditable', true);
            const brElement = document.createElement('br');
            accordionBody.appendChild(element);
            accordionBody.appendChild(brElement);
        })
        
        // Append elements to build the accordion structure
        accordionHeader.appendChild(accordionButton);
        accordionCollapse.appendChild(accordionBody);
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        
        // Append each item to the accordion container
        accordionContainer.appendChild(accordionItem);
        });
    }
            
    // Generate accordion items
    createAccordionItems(accordionData);

    // disable all fields related to nurse particulars at start of profile page
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('userName').disabled = true;
    document.getElementById('mobileNumber').disabled = true;
    document.getElementById('staffLicenseNumber').disabled = true; 

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
            document.getElementById('staffLicenseNumber').disabled = true;
        }  
    })
    */
}

const customerProfile = (role, user) => {

    const profileRole = document.getElementById("txtUserrole");
    profileRole.innerText = role.charAt(0).toUpperCase() 
                                    + role.slice(1).toLowerCase();  
          
    
    document.getElementById('patientdetail').style.display = 'block';
    /*
    // create input field for patient next of kin and health information 
    const packageTypeElement = document.getElementById('packageType');
    packageTypeElement.innerText = 'Type of packages';

    const formCheckLabel1Element = document.createElement('label');
    formCheckLabel1Element.id = 'RadiosLabel1';
    formCheckLabel1Element.className = 'form-check-label';
    formCheckLabel1Element.style = 'padding-left: 2rem; padding-right: 1rem';
    formCheckLabel1Element.innerText = 'Half Day Package';

    let statusRadio1btn = '';
    let statusRadio2btn = '';
    const formCheckInput1Element = document.createElement('input');
    formCheckInput1Element.className = 'form-check-input';
    formCheckInput1Element.type = 'radio';
    formCheckInput1Element.name = 'Radios';
    formCheckInput1Element.id = 'Radios1';
    formCheckInput1Element.value = 'option1';
    formCheckInput1Element.checked = statusRadio1btn;
    console.log(formCheckInput1Element);

    const formCheckLabel2Element = document.createElement('label');
    formCheckLabel2Element.id = 'RadiosLabel2';
    formCheckLabel2Element.className = 'form-check-label';
    formCheckLabel2Element.style = 'padding-left: 2rem; padding-right: 1rem';
    formCheckLabel2Element.innerText = 'Full Day Package';

    const formCheckInput2Element = document.createElement('input');
    formCheckInput2Element.className = 'form-check-input';
    formCheckInput2Element.type = 'radio';
    formCheckInput2Element.name = 'Radios';
    formCheckInput2Element.id = 'Radios2';
    formCheckInput2Element.value = 'option2';
    formCheckInput2Element.checked = statusRadio2btn;

    if (statusRadio1btn === true) {       
        formCheckInput2Element.checked = false;
    } else if (statusRadio2btn === true) {
        formCheckInput1Element.checked = false;
    }

    document.getElementById('packageType').appendChild(formCheckLabel1Element);
    document.getElementById('packageType').appendChild
    (formCheckInput1Element);
    document.getElementById('packageType').appendChild(formCheckLabel2Element);
    document.getElementById('packageType').appendChild(formCheckInput2Element);

    // create input field for next of kin name input
    const nokNameLabelElement = document.createElement('label');
    nokNameLabelElement.id = 'nokNameLabel';
    nokNameLabelElement.style = 'padding-top: 0.8rem; padding-bottom: 0.5rem';
    nokNameLabelElement.innerText = 'Next-of-kin Full Name';

    const nokNameInputElement = document.createElement('input');
    nokNameInputElement.type = 'text';
    nokNameInputElement.name = 'nokNameInput';
    nokNameInputElement.id = 'nokNameInput';
    nokNameInputElement.placeholder = 'enter next-of-kin full name';
    nokNameInputElement.className = 'form-control';

    document.getElementById('nokName').appendChild(nokNameLabelElement);
    document.getElementById('nokName').appendChild(nokNameInputElement);

    // create input field for next of kin mobile input
    const nokMobileLabelElement = document.createElement('label');
    nokMobileLabelElement.id = 'nokMobileLabel';
    nokMobileLabelElement.style = 'padding-top: 0.8rem; padding-bottom: 0.5rem';
    nokMobileLabelElement.innerText = 'Next-of-kin Mobile Number';

    const nokMobileInputElement = document.createElement('input');
    nokMobileInputElement.type = 'number';
    nokMobileInputElement.name = 'nokMobileInput';
    nokMobileInputElement.id = 'nokMobileInput';
    nokMobileInputElement.placeholder = 'enter next-of-kin mobile number';
    nokMobileInputElement.className = 'form-control';

    document.getElementById('nokName').appendChild(nokMobileLabelElement);
    document.getElementById('nokName').appendChild(nokMobileInputElement);

    // create select for medical condition
    const selectMedicalConditionElement = document.createElement('select');
    selectMedicalConditionElement.id = 'medical-condition';
    selectMedicalConditionElement.className = 'form-select medical-condition';
    selectMedicalConditionElement.style = 'margin-top: 2rem';

    const options = [
        {value: '1', text: 'High Blood Pressure'},
        {value: '2', text: 'High Cholesterol'},
        {value: '3', text: 'Diabetes'}
    ]
    
    options.forEach(OptionData => {
        const optionElement = document.createElement('option');
        optionElement.value = OptionData.value;
        optionElement.textContent = OptionData.text;

        selectMedicalConditionElement.appendChild(optionElement);
    })

    document.getElementById('nokName').appendChild(selectMedicalConditionElement);
    
    // create text area for doctor's prescription
    const textareaDoctorPrescriptionElement = document.createElement('textarea');
    textareaDoctorPrescriptionElement.id = 'doctor-prescription';
    textareaDoctorPrescriptionElement.className = 'form-control doctor-prescription';
    textareaDoctorPrescriptionElement.style = 'height: 10rem; margin-top: 2rem';
    textareaDoctorPrescriptionElement.placeholder = "Doctor's Prescriptions";
    
    document.getElementById('nokName').appendChild(textareaDoctorPrescriptionElement);

    // disable all fields related to patient particulars at start of profile page
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('userName').disabled = true;
    document.getElementById('mobileNumber').disabled = true;

    document.getElementById('Radios1').disabled = true;
    document.getElementById('Radios2').disabled = true;
    document.getElementById('nokNameInput').disabled = true;
    document.getElementById('nokMobileInput').disabled = true;
    document.getElementById('medical-condition').disabled = true;
    document.getElementById('doctor-prescription').disabled = true;


    // toggle betwen edit and save mode for patient particulars
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
            document.getElementById('nokNameInput').disabled = false;
            document.getElementById('nokMobileInput').disabled = false;
            document.getElementById('medical-condition').disabled = false;
            document.getElementById('doctor-prescription').disabled = false;
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
            document.getElementById('nokNameInput').disabled = true;
            document.getElementById('nokMobileInput').disabled = true;
            document.getElementById('medical-condition').disabled = true;
            document.getElementById('doctor-prescription').disabled = true;
        }
    })
    */    
}

const ftnEditSave = () => {
    // toggle betwen edit and save mode for nurse particulars
    const editBtnElement = document.getElementById('btnEdit');
    editBtnElement.addEventListener('click', (e) => {
        console.log('Çhange1')
        if (editBtnElement.id === 'btnEdit') {
            editBtnElement.id = 'btnSave';
            editBtnElement.classList.remove('btnEdit');
            editBtnElement.classList.add('btnSave');
            editBtnElement.innerHTML = 'Save';
            document.getElementById('firstName').disabled = false;
            document.getElementById('lastName').disabled = false;
            document.getElementById('userName').disabled = false;
            document.getElementById('mobileNumber').disabled = false;
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
            document.getElementById('staffLicenseNumber').disabled = true;
        }  
    })
}

const ftnEditDetail = () => {
    const editDetailBtnElement = document.getElementById('btnDetail');
    editDetailBtnElement.addEventListener('click', (e) => {
        console.log('Çhange2')
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