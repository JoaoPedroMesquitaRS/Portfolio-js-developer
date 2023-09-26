function updateProfileData(profileData){

    const photo = document.getElementById('profile.photo')
    const name = document.getElementById('profile.name')
    const job = document.getElementById('profile.job')
    const location = document.getElementById('profile.location')
    const phone = document.getElementById('profile.phone')
    const email = document.getElementById('profile.email')
    
    photo.src = profileData.photo;
    photo.alt = profileData.name
    name.innerHTML = profileData.name;
    job.innerHTML = profileData.job;
    location.innerHTML = profileData.location;
    phone.innerHTML = profileData.phone;
    phone.href = `${profileData.phone}`;
    email.innerHTML = profileData.phone;
    email.href = `${profileData.phone}`;
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(hardSkill => `<li>${hardSkill}</li>`).join('');
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(hardSkills => `
        <li class="imgTools">
            <img style="max-width: 50px;" src="${hardSkills.logo}" alt="${hardSkills.name}" title="${hardSkills.name}">
        </li>
    `
).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const projects = document.getElementById('profile.portfolio');
    projects.innerHTML = profileData.portfolio.map(portfolio => `
    <li>
        <h3 class="github title">${portfolio.name}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>
    `
    ).join('')
}

function updateProfessionalExperience(profileData){
    const ProfessionalExperience = document.getElementById('profile.professionalExperience');
    ProfessionalExperience.innerHTML = profileData.professionalExperience.map(proExp =>`
    <li>
        <h3 class="title">${proExp.name}</h3>
        <span class="period">${proExp.period}</span>
        <p>${proExp.description}</p>
    </li>
    `
    ).join('')
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileData(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
    console.log(profileData);
})()