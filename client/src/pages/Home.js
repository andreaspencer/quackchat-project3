import React from "react";
import Chat from "../components/Chat";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && <div className="col-12 mb-3"></div>}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}></div>
        {loggedIn && userData ? (
          <>
            <div className="col-12 col-lg-3 mb-3">
              username={userData.me.username}
            </div>
          </>
        ) : null}
        <Chat />
      </div>
    </main>
  );
};

export default Home;
