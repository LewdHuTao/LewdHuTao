const githubHooks = async (repoOwner, repoName) => {
    let response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
    let json = await response.json();
    console.log(json.stargazers_count, json.forks_count);

    const stargazers = json.stargazers_count;
    const forks = json.forks_count;
    console.log(forks, stargazers);
    return {
        stargazers: stargazers,
        forks: forks
    }
}

export default githubHooks