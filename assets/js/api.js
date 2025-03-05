async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/caroldelira/js-portfolio-dio/refs/heads/master/data/profile.json'
    const fetching = await fetch(url);
    return await fetching.json();
}