import { useRouter } from "next/router";
import React from "react";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query.clientProjectId);
  return (
    <div>
      <h1>The Project Page for a specific project for a selected client</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
