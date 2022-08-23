import React from "react";

import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

interface iProps {
  repo: any;
}

export const RepoItem: React.FC<iProps> = (props) => {
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={props.repo.html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-2" />
            {props.repo.name}
          </a>
        </h3>
        <p className="mb-3">{props.repo.description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" />
            {props.repo.watchers_count}
          </div>

          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" />
            {props.repo.stargazers_count}
          </div>

          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" />
            {props.repo.open_issues}
          </div>

          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" />
            {props.repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
};
