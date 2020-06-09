import React from "react";
import PageLayout from "../layouts/Page";
import Intro from "../components/Intro";
import Saperator from "../components/Saperator";
import ContentBox from "../components/ContentBox";
import ContentList from "../components/ContentList";
import ContentHeader from "../components/ContentHeader";
import { experiences } from "../data";

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <div className="max-w-3xl mx-auto py-8 md:px-8">
      <p className="text-sm text-center text-gray-700 uppercase tracking-wide font-bold">
        Experience
      </p>

      <div className="bg-white md:rounded-lg md:shadow mt-4">
        {experiences.map(({ title, subtitle, subsubtitle, items }) => (
          <div key={title} className="border-b">
            <ContentBox header={(
              <ContentHeader {...{title, subtitle, subsubtitle}}/>
            )}>
              <ContentList items={items} />
            </ContentBox>
          </div>
        ))}
      </div>
    </div>

  </PageLayout>
);

export default IndexPage;
