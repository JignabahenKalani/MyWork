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
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
  }
}

// const renderRepos = (repos) => {
//   // this loops through the data and logs the name of each repository
//   repos.forEach((repo) => {
//     console.log(repo.full_name);
//     console.log(repo.visibily);


//     // this logs the name of each repository
//     //TODO: log out the full name of each repository and whether it is a private or public repository
    
//     //TODO: print out Avatar URL and login of the owner
    
//   });
// };

const renderRepos = (repos) => {
  repos.forEach((repo) => {
    // ✅ Log the full name of each repository
    console.log("Repository Full Name:", repo.full_name);

    // ✅ Log whether the repository is public or private
    console.log("Private Repository:", repo.private ? "Yes" : "No");

    // ✅ Print avatar URL and login of the repository owner
    console.log("Owner Login:", repo.owner.login);
    console.log("Owner Avatar URL:", repo.owner.avatar_url);

    console.log("-----------------------------");
  });
};