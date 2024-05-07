const githubHooks = async (repoOwner, repoName) => {
    let response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
    let json = await response.json();
    const stargazers = json.stargazers_count || "0";
    const forks = json.forks_count || "0";
    return {
        stargazers: stargazers,
        forks: forks
    }
}

export default githubHooks