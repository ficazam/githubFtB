import React, { useState, useContext } from "react";

import { ApplicationContext } from "../../store/ApplicationContext";
import { AlertContext } from "../../store/AlertContext";

import { fetchUsers, clearUsers } from "../../store/Actions";

export const UserSearch = () => {
  const [text, setText] = useState<string>("");
  const ctx = useContext(ApplicationContext);
  const alrtCtx = useContext(AlertContext);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      alrtCtx.setMsg("Enter text dammit", "error");
    } else {
      const users = await (fetchUsers(text));

      ctx.dispatch({ type: "SET_LOADING" });
      ctx.dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  const eraseHandler = () => {
    setText("");
    ctx.dispatch({ type: clearUsers() });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={submitHandler}>
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
            />
            <button
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              type="submit"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {ctx.state.userList.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={eraseHandler}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
