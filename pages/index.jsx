import React from "react";
import PageLayout from "../layouts/Page";
import Intro from "../components/Intro";
import Saperator from "../base/Saperator";
import ContentBox from "../base/ContentBox";
import ContentList from "../base/ContentList";
import ContentHeader from "../base/ContentHeader";
import { experiences } from "../data";
import Section from "../base/Section";
import SectionTitle from "../base/SectionTitle";
import SectionContent from "../base/SectionContent";

const IndexPage = () => (
  <PageLayout>
    <Intro />

    <Saperator />

    <Section>
      <SectionTitle>
        Experience
      </SectionTitle>

      <SectionContent>
        {experiences.map(({ title, subtitle, subsubtitle, items }) => (
          <div key={title} className="border-b">
            <ContentBox header={(
              <ContentHeader {...{title, subtitle, subsubtitle}}/>
            )}>
              <ContentList items={items} />
            </ContentBox>
          </div>
        ))}
      </SectionContent>
    </Section>

  </PageLayout>
);

export default IndexPage;
