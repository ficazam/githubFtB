import React, { useContext } from "react";

import { Card } from "../Layout/Card";
import { ApplicationContext } from "../../store/ApplicationContext";

export const UserList = () => {
  const ctx = useContext(ApplicationContext);

  if (ctx.state.loading) return <h1>L O A D I N G . . .</h1>;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2">
      {ctx.state.userList.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};
