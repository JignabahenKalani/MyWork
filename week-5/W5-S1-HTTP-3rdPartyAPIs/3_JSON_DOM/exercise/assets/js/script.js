document.getElementById("fetchRepos").addEventListener("click", onfetchRepos);

function onfetchRepos() {
  const username = document.getElementById("username").value;

  if (username) {
    // GitHub API endpoint for fetching user repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Make a GET request to the GitHub API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        renderRepos(data);
        renderRepos2(data);
        renderRepos3(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
  }
}

const renderRepos = (repos) => {
  const reposListEl = document.getElementById("repos");
  let html = "";

  //TODO what does this line do?
  repos.forEach((repo) => {
    const repoFullName = repo.full_name;

    html += `<li>${repoFullName}</li>`;
  });

  reposListEl.innerHTML = html;
};

const renderRepos2 = (repos) => {
  const reposListEl = document.getElementById("repos2");

  //TODO what does this line do?
  for (let i = 0; i < repos.length; i++) {
    const repoFullName = repos[i].full_name;

    const repoEl = document.createElement("li");
    repoEl.textContent = repoFullName;
    reposListEl.appendChild(repoEl);
  }
};

const renderRepos3 = (repos) => {
  const reposListEl = document.getElementById("repos3");

  // TODO: what does this line do?
  repos.map((repo) => (reposListEl.innerHTML += `<li>${repo.full_name}</li>`));
};
