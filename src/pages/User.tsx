import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa";

import { RepoList } from "../components/repos/RepoList";

import { ApplicationContext } from "../store/ApplicationContext";

import { getUser, getRepos } from "../store/Actions";

export const User = () => {
  const ctx = useContext(ApplicationContext);
  const params = useParams();

  const getInfo = async () => {
    ctx.dispatch({ type: 'SET_LOADING' });

    if (params.login) {
      const user = await getUser(params.login);
      const repos = await getRepos(params.login);

      ctx.dispatch({ type: "SET_USER", payload: user });
      ctx.dispatch({ type: "GET_REPOS", payload: repos });
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (ctx.state.loading || !ctx.state.user) return <h1>L O A D I N G . . .</h1>;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img
                  src={ctx.state.user.avatar_url}
                  alt={ctx.state.user.login}
                />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{ctx.state.user.name}</h2>
                <p>{ctx.state.user.login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {ctx.state.user.name}
                <div className="ml-2 mr-1 badge badge-success">
                  {ctx.state.user.type}
                </div>
                {ctx.state.user.hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{ctx.state.user.bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={ctx.state.user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {ctx.state.user.location && (
                <div className="stat">
                  <div className="stat-title text-md">Location: </div>
                  <div className="text-lg stat-value">
                    {ctx.state.user.location}
                  </div>
                </div>
              )}

              {ctx.state.user.blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website: </div>
                  <div className="text-lg stat-value">
                    <a
                      href={ctx.state.user.blog}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              )}

              {ctx.state.user.twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter: </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${ctx.state.user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {ctx.state.user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers: </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {ctx.state.user.followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following: </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {ctx.state.user.following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Repos: </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {ctx.state.user.public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Gists: </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {ctx.state.user.public_gists}
            </div>
          </div>
        </div>

        <RepoList repos={ctx.state.repos} />
      </div>
    </>
  );
};
