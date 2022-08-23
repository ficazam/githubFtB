import axios from "axios";

export const fetchUsers = async (user: string) => {
  const params = new URLSearchParams({
    q: user,
  });

  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}search/users?${params}`,
    {
      headers: { Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}` },
    }
  );

  const users = response.data.items;

  return users;
};

export const getUser = async (login: string) => {
  let user;

  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}users/${login}`, {
    headers: { Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}` },
  });

  if (res.status === 404) {
    window.location.href = "/notfound";
  } else {
    user = res.data;
  }

  return user;
};

export const getRepos = async(login: string) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });

  const res = await axios
    .get(`${process.env.REACT_APP_BASE_URL}users/${login}/repos?${params}`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}` },
    })

    const repos = res.data
    return repos;
};

export const clearUsers = () => {
  return "CLEAR_USERS";
};
