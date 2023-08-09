import React from "react";
import { useRouter } from "next/router";
const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projecta" },
    });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
