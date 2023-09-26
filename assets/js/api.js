async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/JoaoPedroMesquitaRS/Portfolio-js-developer/main/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}