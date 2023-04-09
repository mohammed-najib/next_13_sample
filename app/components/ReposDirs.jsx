import Link from "next/link";

const fetchRepoContents = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate slow network for 3 second

  const res = await fetch(
    `https://api.github.com/repos/mohammed-najib/${name}/contents`,
    {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    }
  );
  const contents = await res.json();

  return contents;
};

const ReposDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposDirs;
