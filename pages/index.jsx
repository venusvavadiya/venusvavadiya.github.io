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

    <Experience />

    <Saperator />

    <Skills />

    <Saperator />

  </PageLayout>
);

export default IndexPage;
