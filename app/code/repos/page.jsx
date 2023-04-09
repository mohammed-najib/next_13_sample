import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchtRepos() {
  const response = await fetch(
    "https://api.github.com/users/mohammed-najib/repos",
    {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    }
  );
  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network for 1 second

  return data;
}

const ReposPage = async () => {
  const repos = await fetchtRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposPage;
