function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`   
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    
    portfolio.innerHTML = profileData.portfolio.map(project => {
       return `
        <li>
            <h3 ${project.name} ? 'class="github" : '' >${project.name}</h3>
            <a href="${project.url}">${project.url}</a>
        </li>
        `
    }).join('');
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience');
    
    experience.innerHTML = profileData.professionalExperience.map(item => {
       return `
        <li>
            <h3>${item.name}</h3>
            <p>${item.period}</p>
            <p>${item.description}</p>
        </li>
        `
    }).join('');
}

function updateSkills(profileData) {
    const hardSkill = document.getElementById('profile.HardSkills');
    
    hardSkill.innerHTML = profileData.skills.hardSkills.map(item => {
       return `
        <li>
            <img src="${item.logo}" alt="${item.name}">
        </li>
        `
    }).join('');


    const  softSkill = document.getElementById('profile.softSkills');

    softSkill.innerHTML = profileData.skills.softSkills.map(item => {
        return `
            <li>${item}</li>
        `
    }).join('');
}

(async ()=> {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);
    updateSkills(profileData);
})()