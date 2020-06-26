import React from "react";
import PageLayout from "../layouts/Page";
import Saperator from "../base/Saperator";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Experience from "../components/Experiences";

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <Skills />
    <Experience />

  </PageLayout>
);

export default IndexPage;
