import React from "react";
import PageLayout from "../layouts/Page";
import Saperator from "../base/Saperator";
import Intro from "../components/Intro";
import Experience from "../components/Experience";

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <Experience />

  </PageLayout>
);

export default IndexPage;
