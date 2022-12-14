import React from "react";
import { RepoItem } from "./RepoItem";

interface iProps {
  repos: any[];
}

export const RepoList: React.FC<iProps> = (props) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
        {props.repos.map(repo => 
            <RepoItem key={repo.id} repo={repo} />   
        )}
      </div>
    </div>
  );
};
