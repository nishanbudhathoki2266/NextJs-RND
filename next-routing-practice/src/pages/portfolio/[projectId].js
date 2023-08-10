import React from "react";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The Portfolio Project page {router.query.projectId}</h1>
    </div>
  );
};

export default PortfolioProjectPage;
