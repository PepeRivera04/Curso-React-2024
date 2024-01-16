// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import fetchGitHubUsers from "../../../helpers/fetchGitHubUsers";
import CardGitHub from "./CardGitHub";
import Spinner from "./Spinner";

const GitHubUsers = () => {
  // Hooks
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[75%] text-center relative">
        <h1 className="text-4xl font-bold mb-8 mt-2">
          Usando useEffect para realizar un FETCH de la API GitHub Users
        </h1>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto relative">
            {users.map((user) => (
              <CardGitHub
                key={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                html_url={user.html_url}
              ></CardGitHub>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GitHubUsers;
