import React from "react";
import PageLayout from "../layouts/Page";
import Intro from "../components/Intro";

const IndexPage = () => (
  <PageLayout>
    <div className="max-w-5xl mx-auto p-2 md:p-4 text-center">
      <Intro />
    </div>
  </PageLayout>
);

export default IndexPage;
