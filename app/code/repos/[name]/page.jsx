import Link from "next/link";
import { Suspense } from "react";

import Repo from "@/app/components/Repo";
import ReposDirs from "@/app/components/ReposDirs";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <ReposDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
